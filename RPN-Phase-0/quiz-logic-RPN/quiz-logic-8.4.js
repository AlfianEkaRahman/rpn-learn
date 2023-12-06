console.log("=============");
console.log("Soal Nomor 1");
console.log("=============");

function palindrome(kata) {
  let splitKata = kata.split("");
  let reversedKata = splitKata.reverse();
  let joinKata = reversedKata.join("");
  if (joinKata == kata) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("katak")); //true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false

console.log("=============");
console.log("Soal Nomor 2");
console.log("=============");


function angkaPalindrome(num) {
    function isPalindrom(angka) {
        let angkaString = angka.toString();
        let angkaBalik = angkaString.split("").reverse().join("");
        return angkaString === angkaBalik;
    }
    while(true){
        num++;
        if(isPalindrom(num)) {
            return num;
        }
    }
}


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


console.log("=============");
console.log("Soal Nomor 3");
console.log("=============");

function hitungJumlahKata(kalimat) {
  let kalimatArray = kalimat.split(" ");
  let kalimatKata = kalimatArray.length;
  return kalimatKata
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

console.log("=============");
console.log("Soal Nomor 4");
console.log("=============");

function pasanganTerbesar(num) {
  let strNum = String(num);
  let maxPair = 0;

  for(let i = 0; i < strNum.length - 1; i++){
    const pair = Number(strNum[i] + strNum[i + 1]);

    if(pair > maxPair){
      maxPair = pair;
    }
  }
  return maxPair
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99