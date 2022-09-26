const hesapla = () => {
   const sayi = document.querySelector("#txtSayi").value;

    if(!sayi || isNaN(sayi) || sayi<0){
        alert("Pozitif bir tam sayi giriniz");
        return;
    }
    let carpim = 1;
    for(let i = 1 ; i<=sayi;i++){//let i=sayi; i>0;i--; seklinde de yazabilirdik
      carpim =  carpim*i;


    }
    document.querySelector("#sonuc").innerHTML = carpim;
    


}