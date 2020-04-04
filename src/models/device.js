import mongoose from 'mongoose'
const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    location:{
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number], //[long,lat]
            required: true
        }
    }
});
deviceSchema.index({'location':'2dsphere'});
const Device = mongoose.model('Device',deviceSchema);

export default Device;
