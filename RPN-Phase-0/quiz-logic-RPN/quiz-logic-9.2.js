console.log("================");
console.log("Soal 1");
console.log("================");

function angkaPrima(angka) {
  if (angka <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(angkaPrima(3));
console.log(angkaPrima(7));
console.log(angkaPrima(6));
console.log(angkaPrima(23));
console.log(angkaPrima(33));

console.log("================");
console.log("Soal 2");
console.log("================");

function fpb(angka1, angka2) {
  while (angka2) {
    let temp = angka2;
    angka2 = angka1 % angka2;
    angka1 = temp;
  }
  return angka1;
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

console.log("================");
console.log("Soal 3");
console.log("================");

function cariMedian(arr) {
    arr.sort((a, b) => a - b);
    let len = arr.length;
    if(len % 2 === 0) {
        return (arr[len / 2 - 1] + arr[len / 2]) /2;
    }else{
        return arr[Math.floor(len / 2)];
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

console.log("================");
console.log("Soal 4");
console.log("================");

function cariModus(arr){
  let modus = -1;
  let count = 0;
  
  for(let i = 0; i < arr.length; i++){
    let tempCount = 0;
    
    for(let j = 0; j < arr.length; j++){
      if(arr[i] === arr[j]) {
        tempCount++;
      }
    }
    if(tempCount > count && tempCount > 1) {
      count = tempCount;
      modus = arr[i];
    }
  }

  return modus;
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // 7
console.log(cariModus([8, 8, 8, 7, 7, 7]));
console.log(cariModus([7, 7, 7, 8, 8, 8]));

console.log("================");
console.log("Soal 5");
console.log("================");

function ubahHuruf(kata) {
  let result = '';
  for (let i = 0; i < kata.length; i++) {
    let currentCharCode = kata.charCodeAt(i);
    let newCharCode;

    if (currentCharCode === 122) {
      newCharCode = 97; 
    } else {
      newCharCode = currentCharCode + 1;
    }

    result += String.fromCharCode(newCharCode);
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('susuzee'));