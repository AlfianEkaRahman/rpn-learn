console.log("===========");
console.log("Soal 1");
console.log("===========");

function bandingkanAngka(angka1, angka2) {
  if (angka1 < angka2) {
    return true;
  } else if (angka1 > angka2) {
    return false;
  } else angka1 = angka2;
  {
    return -1;
  }
}
console.log(bandingkanAngka(5, 7));
console.log(bandingkanAngka(5, 5));
console.log(bandingkanAngka(5, 4));

console.log("===========");
console.log("Soal 2");
console.log("=============");

function reverseName(name) {
  let result = "";
  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }
  return result;
}

console.log(reverseName("alfian"));
console.log(reverseName("zahra"));
console.log(reverseName("youseff"));

console.log("===========");
console.log("Soal 3");
console.log("=============");

function timer(time) {
  let jam = Math.floor(time / 60);
  let menit = Math.floor(time % 60);

  if (menit < 10) {
    return `${jam} : 0${menit}`;
  } else;
  {
    return `${jam} : ${menit}`;
  }
}

console.log(timer(100));
console.log(timer(252));
console.log(timer(411));

console.log("===========");
console.log("Soal 4");
console.log("=============");

function xo(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }
  return x === o;
}

console.log(xo("xoxoxo"));
console.log(xo("oxooxo"));
console.log(xo("oxo"));
console.log(xo("xxxooo"));
console.log(xo("xoxooxxo"));
