// if

let inputkatasandi = "Astri 123";
if (inputkatasandi === "Astri 123") {
  console.log("selamat anda berhasil masuk");
}

//contoh else

let katasandi = "Astri 123";
if (katasandi === "Astri 123") {
  console.log("Kata sandi anda benar");
} else {
  console.log("ups, kata sandi anda salah");
}

//contoh Nasted If

var x = 10;
var y = 20;

if (x > 5) {
  if (y > 10) {
    console.log("x lebih besar dari 5 dan y lebih besar dari 10");
  } else {
    console.log("x lebih besar dari 5 dan y kurang dari atau sama dengan 10");
  }
} else {
  console.log("x kurang dari atau sama dengan 5");
}

//contoh switch Case

let bulan = "januari";

switch (bulan) {
  case "januari":
    console.log("sekarang bulan januari");
    break;
  case "februari":
    console.log("sekarang bulan februari");
    break;
  case "maret":
    console.log("sekarang bulan maret");
    break;
  default:
    console.log("bulan tidak di kenal");
}

//for statement
let angka = 10;
for (let i = 2; i <= 5; i++) {
  console.log(i);
}

//while

var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while (ulangi) {
  counter++;
  ulangi = confirm("Apakah anda mau mengulang?");
}

// do while

var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

do {
  counter++;
  ulangi = confirm("Apakah anda mau mengulang?");
} while (ulangi);

//funtion

let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}
