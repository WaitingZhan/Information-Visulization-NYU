
const KG_PER_KILO = 0.45;
const INCH_TO_METER = 0.0254;

let clients = [{
  name: "John",
  weight: 12,
  heigh: 1212
},
{
  name: "baby",
  weight: 12,
  heigh: 1212
},


{
  name: "happy",
  weight: 133,
  heigh: 1212
}]


function getBMI(client){
  let weightInkg = client.weight * KG_PER_KILO;
  return weightInkg

}



for(let i = 0; i < clients.length; i += 1){
  document.write(clients[i].name + ":  " + getBMI(clients[i]));

}
