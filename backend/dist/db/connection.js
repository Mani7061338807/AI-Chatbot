import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL || 'mongodb+srv://manishankarkumar789:Mani6205@cluster0.sbo8l5i.mongodb.net/');
    }
    catch (error) {
        throw new Error("");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        throw new Error("Could not Disconnect From MongoDB");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map