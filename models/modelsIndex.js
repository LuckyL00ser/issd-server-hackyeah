import mongoose from 'mongoose';

const connectDb = (url) => {
    return mongoose.connect('',{useNewUrlParser: true, useUnifiedTopology:true});
};
//TODO: automatic import all models from folder
const models = {};
export { connectDb };
export default models;
