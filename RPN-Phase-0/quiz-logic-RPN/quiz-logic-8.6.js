function cariMean(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let devide = sum / arr.length
  let hasil = Math.round(devide);
  return hasil
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7


console.log('================')
console.log("nomor 2");
console.log("================");

function perkalianUnik(arr) {
  let numArr = []
  let newArr = arr;
  let shiftArr;
  for(let i = 0; i < newArr.length; i++){
    shiftArr = arr.splice(i, 1);
    numArr.push(arr.reduce( (x, y) => x*y));
    arr.unshift(shiftArr);
  }
  return numArr
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]



console.log("================");
console.log("nomor 3");
console.log("================");


function tentukanDeretAritmatika(arr) {
  let panjang = arr.length - 1;
  let angkaPertama;
  let angkakedua;
  let salah = []
  for(let i = 0; i <= panjang - 2; i++){
    angkaPertama = arr[i+1] - arr[i]
    angkakedua = arr[i+2] - arr[i+1]
    if(angkaPertama !== angkakedua){
        salah.push(false)
    }
  }
  if(salah.length >= 1){
    return false
  }else{
    return true
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false



console.log("================");
console.log("nomor 4");
console.log("================");

function tentukanDeretAritmatika(arr) {
  let result;
  let arrDevide = arr[1] / arr[0]
  for(let i = 1; i < arr.length - 1; i++){
    result = arr[i]*arrDevide === arr[i+1] ? true : false;
    if(!result) {
        break;
    }
  }
  return result
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretAritmatika([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // false
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // true
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false