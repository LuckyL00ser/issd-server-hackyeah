import mongoose from 'mongoose'
const deviceSchema = new mongoose.Schema({
    device: {
        type: String,
        unique: true,
        required: true,
    },
    location:{
        required: true,
        lat: {
          type: Number,
          required: true,
        },
        long: {
            type:Number,
            required: true,
        },
    }
});
const Device = mongoose.model('Device',deviceSchema);

export default Device;
