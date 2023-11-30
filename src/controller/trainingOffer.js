import { create as createTrainingOffer, modify as modifyTrainingOffer, get as getTrainingOffer } from "../trainingOffer/trainingOffer.js"

export const create = async ( { name, capabilities } ) => {
    const trainingOffer = createTrainingOffer( {  
        name, 
        capabilities
    } )
    return trainingOffer
}


export const get = async ( id  ) => {
    let trainingOffer = await getTrainingOffer( id ) // fix
    return trainingOffer
}

export const modify = async ( id, { name, capabilities } ) => {
    let trainingOffer = await modifyTrainingOffer( { 
        id, 
        name, 
        capabilities
    } )
    return trainingOffer
}