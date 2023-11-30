import { randomUUID } from 'crypto'
import { create as createTrainingOffer, modify as modifyTrainingOffer, fetch as fetchTrainingOffer } from './trainingOffer_respository.js'

/**
 * @returns { TrainingOffer }
 */
export const create = ( { name, capabilities } ) => {
    let trainingOffer = new TrainingOffer( {
        id: randomUUID(),
        name: name,
        capabilities: capabilities
    } )
    createTrainingOffer( trainingOffer ).then( () => {
    } )
    return trainingOffer
}

/**
 * @returns { TrainingOffer }
 */
export const modify = ( { id, name, capabilities } ) => {
    let trainingOffer = new TrainingOffer( {
        id: id,
        name: name,
        capabilities: capabilities
    } )
    modifyTrainingOffer( trainingOffer ).then( () => {
    } )
    return trainingOffer
}

export const get = async ( id ) => {
    let trainingOffer = await fetchTrainingOffer( id ) // fix
    return trainingOffer
}


/**
 * @param { {
 *   id: string,
 *   name: string,
 *   capabilities: string
 * } }
 */
export function TrainingOffer( { id, name, capabilities } ) {
    this.id           = id
    this.name         = name
    this.capabilities = capabilities
}

TrainingOffer.prototype.toJson = async function() {
    return JSON.stringify( this ) ;
}