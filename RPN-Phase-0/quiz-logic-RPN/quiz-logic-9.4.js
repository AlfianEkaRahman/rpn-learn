console.log("====================================");
console.log("Soal nomor 1");
console.log("====================================");

function digitPerkalianMinimum(angka) {
  let minDigit = Infinity; // Set initial value to Infinity

  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      const factor = angka / i;
      const currentDigit = String(i).length + String(factor).length;

      // Update minDigit if currentDigit is smaller
      minDigit = Math.min(minDigit, currentDigit);
    }
  }

  return minDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

console.log("====================================");
console.log("Soal nomor 2");
console.log("====================================");

function tukarBesarKecil(kalimat) {
  let result = "";

  for (let i = 0; i < kalimat.length; i++) {
    let currentChar = kalimat[i];

    // Gunakan method toUpperCase() dan toLowerCase() untuk tukar besar-kecil
    if (currentChar === currentChar.toUpperCase()) {
      result += currentChar.toLowerCase();
    } else {
      result += currentChar.toUpperCase();
    }
  }

  return result;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"


console.log("====================================");
console.log("Soal nomor 3");
console.log("====================================");