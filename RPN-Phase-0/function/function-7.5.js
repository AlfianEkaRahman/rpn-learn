console.log("Soal No-1")

function shoutOut(){
    return "Halo Function!";
}

console.log(shoutOut());

console.log("Soal No-2");

function calculateMultiply(num1,num2){
    return num1 * num2
}

console.log(calculateMultiply(3, 3));


console.log("Soal No-3");


function processSentence(){
    return `nama saya ${name} umur saya ${age} tahun. Saya tinggal di ${address} dan hobby saya ${hobby}`;
}
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";
let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);