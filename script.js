var nama = ["Reyhan Alkadri"];
console.log(nama);
var umur =[22];
console.log(umur);

//Gabungan nama dan umur
var gab1 = nama.concat(umur);
console.log(gab1);

//Selipkan tahun lahir antara nama dan umur
gab1.splice(1,0, "1997");
console.log(gab1)

for (var i=0;i<gab1.length;i++){
    console.log(gab1[i]);
}

function tambahSatu(){
    var nilai = document.getElementById("input").value;
    var hasil = nilai - (-1)
    document.getElementById("input").value = hasil;
}
document.getElementById("tambah_1").onclick = tambahSatu;

function tambahSepuluh(){
    var nilai = document.getElementById("input").value;
    var hasil = nilai - (-10)
    document.getElementById("input").value = hasil;
}
document.getElementById("tambah_10").onclick = tambahSepuluh;


function kurangSatu(){
    var nilai = document.getElementById("input").value;
    var hasil = nilai - 1
    document.getElementById("input").value = hasil;
}
document.getElementById("kurang_1").onclick = kurangSatu;


function kurangSepuluh(){
    var nilai = document.getElementById("input").value;
    var hasil = nilai - 10
    document.getElementById("input").value = hasil;
}
document.getElementById("kurang_10").onclick = kurangSepuluh;
