import { create as createInstitution, modify as modifyInstitution, get as getInstitution, getAll as getInstitutions } from "../institution/institution.js"

export const create = async ( { cue, type, number, name, contact } ) => {
    const institution = createInstitution( { 
        cue, 
        type,
        number, 
        name, 
        contact 
    } )
    return institution
}


export const get = async ( id  ) => {
    let institution = await get( id ) // fix
    return institution
}

export const getAll = async ( ) => {
    let institutions = await getAll()
    return institutions
}

export const modify = async ( id, { cue, type, number, name, contact } ) => {
    let institution = await modifyInstitution( { 
        id,
        cue, 
        type,
        number, 
        name, 
        contact 
    } )
    return institution
}