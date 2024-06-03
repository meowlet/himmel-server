import mongoose from "mongoose";

const mongoDBURI = process.env.MONGODB_URI || "MONGDB_URI";

await mongoose.connect("mongodb+srv://fleeforezz:u6pkrbV4JM9SOHh@cluster0.ohxanmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

export default mongoose;
