import mongoose from "mongoose";

const mongoDBURI = process.env.MONGODB_URI || "MONGD_URI";

await mongoose.connect(mongoDBURI);

export default mongoose;
