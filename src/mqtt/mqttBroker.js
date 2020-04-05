const mosca = require('mosca')
import Measure from "../models/measure";

const settings = {
    port: 1883,
};
const server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', async function(packet, client) {

   if(typeof(packet.payload) === 'object' && !packet.payload.toString().match(/^mqtt*/)){
       try{
          // await connectDb.db('test').collection('mqttJS').insertOne({message:packet.payload.toString(),topic:packet.topic})
           const data = JSON.parse(packet.payload);
           console.log(data+packet.topic)
           let measure = new Measure({
                measures:data.measures,
                device: packet.topic,
                time: new Date(),
                nearbyDevicesCount: data.measures.length
           });
           measure.save(function (err) {
               if(err)
                   console.error(`error occured during saving ${measure}`)
               else
                   console.log('saved new data successfully')
           })
           console.log(
               packet.payload.toString()
           )
       }catch(error){
           console.error(error)
       }
}

});

server.on('ready', ()=>console.log('MQTT Server is running'));

export default server;