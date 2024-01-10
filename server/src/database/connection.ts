import {connect, disconnect} from "mongoose"

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
        throw new Error("Cannot Connect To MongoDB")
    }
}

async function disconnectFromDatabase() {
    try{
        await disconnect()
    } catch (error) {
        console.log(error)
        throw new Error("Could not Disconnect From MongoDb")
    }
}

export {connectToDatabase, disconnectFromDatabase}