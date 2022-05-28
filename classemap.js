//Fazer outra versão do projeto usando a classe map da ES2015

const map = new Map();

map.set("Hospital 1", "45 pacientes");
map.set("Hospital 2", "121 pacientes");
map.set("Hospital 3", "92 pacientes");
map.set("Hospital 4", "51 pacientes")

console.log(map.has("Hospital 2")); 
console.log(map.has("Hospital 6"));
console.log(map.size); 

console.log(map.keys()); 
console.log(map.values()); 
console.log(map.get("Hospital 2")); 

map.delete("Hospital 1");

console.log(map.keys());
console.log(map.values()); 