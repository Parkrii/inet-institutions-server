import { Table } from '../lib/database.js'
import { KeysMapper } from '../keys_mapper.js'
import { TrainingOffer } from './trainingOffer.js'

const TABLE_NAME = 'trainingOffers'

const mapper = new KeysMapper({
    //  attribute   db column
    id: 'id',
    name: 'name',
    capabilities: "capabilities"
})

let dbTable = new Table(TABLE_NAME)

export const fetch = async ( id ) => {
    const rawData = await dbTable.getRows({
        columns: mapper.getMappedKeys(),
        where: {
            field: mapper.mapKey('id'),
            value: id,
        },
    })

    if (rawData.length == 0) {
        throw 'No trainingOffers available'
    }

    const trainingOfferData = mapper.reverse(rawData[0])
    return new TrainingOffer(trainingOfferData)
}


/**
 * @param { TrainingOffer } trainingOffer
 */
export const create = async (trainingOffer) => {
    await dbTable.createRow( { fields: mapper.map(trainingOffer) } )
}

/**
 * @param { TrainingOffer } trainingOffer
 */
export const modify = async (trainingOffer) => {
    const id = mapper.mapKey('id')
    const mappedFields = mapper.map(trainingOffer)
    dbTable.saveRows({
        fields: mappedFields,
        where: {
            field: id,
            value: mappedFields[id],
        },
    })
}