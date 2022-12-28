function inbill(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
function calculate(){
    soluong = document.getElementById("sl").value;
    dongia = parseFloat(document.getElementById("don-gia").textContent);
    var Total = soluong * dongia * 110 / 100;
    return Total;
}

function openForm() {

    var idMonAn = event.target.id;
    var monAn = document.getElementById(idMonAn).name;
    var donGia = document.getElementById(idMonAn).value;

    document.getElementById("mon-an").innerHTML = monAn;
    document.getElementById("don-gia").innerHTML = donGia;
}

var arr=[];
var tong = 0.0;
var VAT = 0.0;
var arrVAT = [];
document.getElementById("sl").addEventListener("change", sub);

function sub(){
    var sl = document.getElementById("sl").value; 
    var dg = parseFloat(document.getElementById("don-gia").textContent); 
    var sub = sl * dg * 110 / 100;
    document.getElementById("demo").innerHTML = sub + "đ (đã gồm VAT)"; 
}

function closeForm(){
    var monAn = document.getElementById("mon-an").textContent;
    var sl = document.getElementById("sl").value; 
    var dg = parseFloat(document.getElementById("don-gia").textContent); 
    var sub = sl * dg * 110 / 100;
    var vat = sub * 10 / 100;
    var table = '<tr><td>'+monAn+'</td> <td>'+sl+'</td> <td>'+dg+'</td> <td>'+sub+'</td> </tr>' 
    $('#tdata').append(table);
    arr.push(calculate());
    arrVAT.push(vat);
}
function total(){
    var i = 0;
    for (; i< arr.length; i++){
        tong = tong + arr[i];
    }
    var VAT = tong * 10 / 100;
    document.getElementById("demo2").innerHTML = tong + " đ"; 
    document.getElementById("demo3").innerHTML = VAT + " đ"; 
    document.getElementById("demo4").innerHTML = tong / 1000 + " điểm"; 
    document.getElementById("tinhtien").disabled = "disabled";
}   
