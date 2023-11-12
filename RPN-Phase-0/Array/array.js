function dataHandling(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Nomor ID = " + arr[i][0]);
        console.log("Nama = " + arr[i][1]);
        console.log("TTL = " + arr[i][2] + " " + arr[i][3]);
        console.log("TTL = " + arr[i][4]);
        console.log('\n');
    }
}

    let input = [
      ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
      ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
      ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
      ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
    ];


dataHandling(input);


console.log('=======================================>>>')


//thanks chatgpt hehehe tanpamu apa jadinya aku :)

let input1 = ['001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'membaca'];
function dataHandling2(input1){
    input1.splice(1, 4, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro');
    console.log(input1);
    let splitInput = input1[3].split('/');

    if(splitInput[1] == 5) {
        console.log('mei');
    }

    let date = [splitInput[2], splitInput[0], splitInput[1]];
    console.log(date);

    console.log(splitInput.join(`-`));
    
    let slicedInput1 = input1[1].slice(0, 15);
    console.log(slicedInput1);
}

dataHandling2(input1);