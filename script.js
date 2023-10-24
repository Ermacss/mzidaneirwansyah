// alert("halo ini zidan")

// let konfir = confirm("apa")


// if(konfir == true){
//     document.write("selamat datang")
// }else{
//     document.write("Yahh..")
// }

// PROMPT
// let input = prompt("masukan nama anda", "nama dicky");

// document.write(input);

// let username = prompt("Masukan username anda")
// let password = prompt("Masukan password anda")

// if(username == "zidan1"){
//     if(password == "123"){
//         alert("Login Berhasil");
//     }else{
//         alert("password tidak cocok");
//     }
// }

// let a = 10;
// let b = 2;

// var hasil = a+b;
// console.log(`hasil penjumlahan adalah ${hasil}`);

// var hasil = a-b;
// console.log(`hasil Pengurangan adalah ${hasil}`);

// var hasil = a*b;
// console.log(`hasil Perkalian adalah ${hasil}`);

// var hasil = a/b;
// console.log(`hasil pembagian  adalah ${hasil}`);

// var hasil = a**b;
// console.log(`hasil Pemangkatan adalah ${hasil}`);

// var hasil = a%b;
// console.log(`hasil Modulus adalah ${hasil}`);
 
// PERCABANGAN IF/ELSE => DUA BLOCK DALAM KONDISI ATAU PILIHAN



var angka1 = parseFloat(prompt("Masukkan angka pertama:")) ;


var operasi = prompt("Pilih operasi matematika: (+, -, *, /, ,%)");


var angka2 = parseFloat(prompt("Masukkan angka kedua:"));


var hasil;


if (operasi === "+") {
    hasil = angka1 + angka2;
} else if (operasi === "-") {
    hasil = angka1 - angka2;
} else if (operasi === "*") {
    hasil = angka1 * angka2;
} else if (operasi === "/") {
    if (angka2 === 0) {
        hasil = "Tidak dapat dibagi dengan nol";
    } else {
        hasil = angka1 / angka2;
    }
} else if (operasi === "%"){
    hasil = angka1 % angka2;
} 

alert("Hasil: " + hasil);

