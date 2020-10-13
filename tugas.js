function perulanganOutput(){
    var angka = document.getElementById("numb").value;
    if (angka <= 10) {
        document.getElementById("demo").innerHTML = "Input yang anda masukkan benar <br >".repeat(5);
    }else{
        document.getElementById("demo").innerHTML = "Input yang anda masukkan salah <br >".repeat(5);
    }    
}
document.getElementById("submit").onclick = perulanganOutput;




function submitInput(){
    var angka = document.getElementById("numb").value;
    if (angka <= 10) {
        document.getElementById("demo").innerHTML = "Input yang anda masukkan benar";
    }else{
        document.getElementById("demo").innerHTML = "Input yang anda masukkan salah";
    }
}
document.getElementById("submit").onclick = submitInput;






// var a = 1; 
// var b = 2; 
// const c = 3; 
// if(a = 1) { 
//     a = 11
//     let b = 22 
//     let c = 12
     
    
//     console.log(a); 
//     console.log(b); 
//     console.log(c); 
// } 

// console.log(a, b, c);