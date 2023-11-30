import { createServer } from "http"
import { runRouter } from "./router/router.js"

const {
    HOST = 'localhost',
    PORT = '8080',
    SCHEME = 'http'
} = process.env

export const runServer = () => {
    const server = createServer( ( req, res ) => {
        runRouter( req, res )
    })

    server.listen( parseInt( PORT ), HOST, () =>{ 
        console.log( `running at: ${SCHEME}://${HOST}:${PORT}` )
    })
}