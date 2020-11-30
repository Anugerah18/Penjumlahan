  
alert("Selamat Datang")

function calc() {
    var satu = document.getElementById("satu").value;
    var dua = document.getElementById("dua").value;
    if (satu == "" || dua == "") {
        document.getElementById("back").style.backgroundColor = "rgb(248, 4, 4)";
        return false;
    } else {
        var hasil = parseInt(satu) + parseInt(dua);
        document.getElementById("sum").innerHTML = hasil;
        document.getElementById("back").style.backgroundColor = "green";
    }
}