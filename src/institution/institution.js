import { randomUUID } from 'crypto'
import { create as createInstitution, modify as modifyInstitution, fetch as fetchInstitution, fetchAll as fetchInstitutions } from './institution_respository.js'

/**
 * @returns { Institution }
 */
export const create = ( { cue, type, number, name, contact } ) => {
    let institution = new Institution( {
        id: randomUUID(),
        cue: cue,
        type: type,
        number: number,
        name: name,
        contact: contact
    } )
    createInstitution( institution ).then( () => {
    } )
    return institution
}

/**
 * @returns { Institution }
 */
export const modify = ( { id, cue, type, number, name, contact } ) => {
    let institution = new Institution( {
        id: id,
        cue: cue,
        type: type,
        number: number,
        name: name,
        contact: contact
    } )
    modifyInstitution( institution ).then( () => {
    } )
    return institution
}

export const get = async ( id ) => {
    let institution = await fetchInstitution( id ) // fix
    return institution
}

export const getAll = async ( ) => {
    let institutions = await fetchInstitutions( ) // fix
    return institutions
}

/**
 * @param { {
 *   id: string,
 *   cue: string,
 *   type: Enumerator,
 *   number: number,
 *   name: string,
 *   contact: string
 * } }
 */
export function Institution( { id, cue, type, number, name, contact } ) {
    this.id      = id
    this.cue     = cue
    this.type    = type
    this.number  = number
    this.name    = name
    this.contact = contact
}

Institution.prototype.toJson = async function() {
    return JSON.stringify( this ) ;
}