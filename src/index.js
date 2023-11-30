import { create as createInstitution, modify as modifyInstitution, get as getInstitution, getAll as getInstitutions } from './controller/institution.js'
import { create as createTrainingOffer, modify as modifyTrainingOffer, get as getTrainingOffer } from './controller/trainingOffer.js'
import { addRoute, methods } from './router/router.js'
import { runServer } from "./server.js";

runServer();

addRoute( methods.POST,'/institutions', async ( res, params, body ) => {
    let institution = await createInstitution(body)
    return {
        code: 201,
        content: JSON.stringify({
            'id': institution.id
        })
    }
} )

addRoute( methods.GET, '/institutions', async (_, res ) => {
    let institutions = await getInstitutions()
    return {
        code: 200,
        content: JSON.stringify(institutions)
    }
})

addRoute( methods.GET, '/institutions/{institutionId}', async (res, {institutionId}) => {
    let institution = await getInstitution( institutionId )
    return {
        code: 200,
        content: JSON.stringify(institution)
    }
})

addRoute( methods.POST, '/institutions/{institutionId}', async (res, {institutionId}, body) => {
    try {
        let institution = await modifyInstitution(institutionId, body)
        return {
            code: 200,
            content: JSON.stringify(institution)
        }
    } catch ( exeption ) {
        return {
            code: 404,
            content: JSON.stringify({
                "message": "institution not found",
                "resource": "institution"
            })
        }
    }
})

addRoute( methods.POST,'/trainingOffer', async ( res, params, body ) => {
    let trainingOffer = await createTrainingOffer(body)
    return {
        code: 201,
        content: JSON.stringify({
            'id': trainingOffer.id
        })
    }
} )

addRoute( methods.GET, '/trainingOffer/{trainingOfferId}', async (res, {trainingOfferId}) => {
    let trainingOffer = await getTrainingOffer( trainingOfferId )
    return {
        code: 200,
        content: JSON.stringify(trainingOffer)
    }
})

addRoute( methods.POST, '/trainingOffer/{trainingOfferId}', async (res, {trainingOfferId}, body) => {
    try {
        let trainingOffer = await modifyTrainingOffer(trainingOfferId, body)
        return {
            code: 200,
            content: JSON.stringify(trainingOffer)
        }
    } catch ( exeption ) {
        return {
            code: 404,
            content: JSON.stringify({
                "message": "trainingOffer not found",
                "resource": "trainingOffer"
            })
        }
    }
})