import mongoose from 'mongoose'
const measureSchema = new mongoose.Schema({
    device: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Device',
        required: true,
    },
    time: {
        type:Date,
        default: new Date(),
        required: true
    },
    measures: [],
    nearbyDevicesCount: {
        type:Number,
        required: true,
    }
});
const Measure = mongoose.model('Measure',measureSchema);
export default Measure;
