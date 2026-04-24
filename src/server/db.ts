
import { MongoClient, ServerApiVersion } from 'mongodb';
import { MONGODB_URI, DATABASE_NAME } from './config.ts';

const uri = MONGODB_URI;
let connectedClient: MongoClient;

export const connectClient = async () => {
    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME);
    }

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();
    await client.db(DATABASE_NAME).command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    connectedClient = client;
    return connectedClient.db(DATABASE_NAME);
}

export const stopClient = async () => {
    await connectedClient?.close();
}
