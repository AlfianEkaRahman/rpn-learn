function mouthSize(animal) {

    const lowecaseAnimal = animal.toLowerCase();
  if(lowecaseAnimal === 'alligator'){
    return 'small'
  }else{
    return 'wide'
  }
}

console.log(mouthSize("ALLIGATOR"));
console.log(mouthSize("Alligator"));
console.log(mouthSize("Crocodille"));


function fuelPrice(litres, pricePerLitre) {
    if(litres >= 2 ){
        return litres * pricePerLitre - litres * 5
    }else if(litres >= 4){
        return litres * pricePerLitre - litres * 10
    }
}

console.log(fuelPrice(2, 50))
console.log(fuelPrice(5, 50))
