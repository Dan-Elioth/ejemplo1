function par_impar(){
    num1=document.getElementById("n1").value;
    /*alert(num1)*/
    console.log(num1);

    if(num1.length>0 && !isNaN(num1)){

        if (num1%2==0) {
            document.getElementById("rs").innerHTML="Es par"
        }else{
            document.getElementById("rs").innerHTML="Es impar"
        }
    
    }else{
        alert("Ingrese un número");

        document.getElementById("n1").focus();

    
    }

}