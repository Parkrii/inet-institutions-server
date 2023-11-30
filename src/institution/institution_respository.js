import { Table } from '../lib/database.js'
import { KeysMapper } from '../keys_mapper.js'
import { Institution } from './institution.js'

const TABLE_NAME = 'institutions'

const mapper = new KeysMapper({
    //  attribute   db column
    id: 'id',
    cue: 'cue',
    type: 'type',
    number: 'number',
    name: 'name',
    contact: 'contact',
})

let dbTable = new Table(TABLE_NAME)

export const fetchAll = async () => {
    const rowsRawData = await dbTable.getRows({
        columns: mapper.getMappedKeys(),
    })

    let institutions = rowsRawData.map( ( rawData ) => {
        let data = mapper.reverse( rawData )
        return new Institution( data )
    })
    return institutions
}

export const fetch = async ( id ) => {
    const rawData = await dbTable.getRows({
        columns: mapper.getMappedKeys(),
        where: {
            field: mapper.mapKey('id'),
            value: id,
        },
    })

    if (rawData.length == 0) {
        throw 'No institutions available'
    }

    const institutionData = mapper.reverse(rawData[0])
    return new Institution(institutionData)
}


/**
 * @param { Institution } institution
 */
export const create = async (institution) => {
    await dbTable.createRow( { fields: mapper.map(institution) } )
}

/**
 * @param { Institution } institution
 */
export const modify = async (institution) => {
    const id = mapper.mapKey('id')
    const mappedFields = mapper.map(institution)
    dbTable.saveRows({
        fields: mappedFields,
        where: {
            field: id,
            value: mappedFields[id],
        },
    })
}