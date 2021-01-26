/* Penentuan hari esok dengan If Else */

let hariesok = prompt("Program ini menentukan hari esok. Masukkan hari yang anda mau !");

if(hariesok =="Minggu" || hariesok =="minggu" || hariesok =="MINGGU"){
    alert("Besok adalah hari Senin. Have a nice day!");
} else if(hariesok =="Senin" || hariesok =="senin" || hariesok =="SENIN"){
    alert("Besok adalah hari Selasa. Have a nice day!");
} else if(hariesok =="Selasa" || hariesok =="selasa" || hariesok =="SELASA"){
    alert("Besok adalah hari Rabu. Have a nice day!");
} else if (hariesok =="Rabu" || hariesok =="rabu" || hariesok =="RABU"){
    alert("Besok adalah hari Kamis. Have a nice day!");
} else if (hariesok =="Kamis" || hariesok =="kamis" || hariesok =="KAMIS"){
    alert("Besok adalah hari Jumat. Have a nice day!");
} else if (hariesok =="Jumat" || hariesok =="jumat" || hariesok =="JUMAT"){
    alert("Besok adalah hari Sabtu. Have a nice day!");
} if (hariesok =="Sabtu" || hariesok =="sabtu" || hariesok =="SABTU")
    alert("Besok adalah hari Minggu. Have a nice day!");

/* Penentuan hari esok dengan SWITCH Case*/

var hari = prompt("Masukkan hari")

switch(hari){
    case "minggu" ||:
        alert("Besok adalah hari Senin. Have a nice day!");
        break;
    case "selasa" :
        alert("Besok adalah hari Rabu. Have a nice day!");
        break;
    case "rabu" :
        alert("Besok adalah hari Kamis. Have a nice day!");
        break;
    case "kamis" :
        alert("Besok adalah hari Jumat. Have a nice day!");
        break;
    case "jumat" :
        alert("Besok adalah hari Sabtu. Have a nice day!");
        break;
    case "sabtu" :
        alert("Besok adalah hari Jumat. Have a nice day!");
        break;
    default :
        alert("apakah benar itu nama hari?")
        break;
}

/* Menampilkan bilangan genap dari 15 */
var genap = [];

for (var i = 0; i<15; i+=2){
    genap.push(i);
}

console.log(genap);

/* Menampilkan bilangan ganjil */
var ganjil = [];

for(var x = 1; x<12; x+=2){
    ganjil.push(x);
}

console.log(ganjil);

/*Bilangan prima adalah bilangan lebih dari 1 
dan hanya bisa dibagi dengan angka 1 
atau bilangan itu sendiri*/

for (prima = 0; prima <= 18; prima = prima + 1)  
{
    testPrime = 0;
    for (testNum = 1; testNum <=18; testNum = testNum + 1)
    {
        var testRes = prima % testNum;
        if (testRes === 0)
        {
        testPrime = testPrime + 1;
        }
    }
    if (testPrime === 2)
    {
        console.log(prima);
    }
}