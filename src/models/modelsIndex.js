import mongoose from 'mongoose';

const connectDb = (url) => {
    return mongoose.connect('mongodb+srv://dbAdmin:rvoDHQWu4WP8oDjw@cluster0-lp366.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology:true});
};
//TODO: automatic import all models from folder
const models = {};
export { connectDb };
export default models;
