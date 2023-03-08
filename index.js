// Code your solutions in this file
const countDown =(num) =>
{
while(num>=0){
console.log(num);
num--;
}
}
countDown();

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful surprise gift!`)
}

console.log(writeCards(names, "birthday"))

//"Thank you, Guadalupe, for the wonderful surprise gift!"