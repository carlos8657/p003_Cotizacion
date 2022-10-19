function calcular(){   
    if(document.getElementById("valor").value > 0 && document.getElementById("txtValor").value != ""){ 

        let valorAuto = document.getElementById("valor").value;
        let enganche = valorAuto *.30;
        document.getElementById("txtEnganche").value = enganche    
        let mes = document.getElementById("txtValor").value;
        let interes;
        let num;
        switch(mes){
            case "12":
                interes = 12.5;
                num = 12;
                break;

            case "18":
                interes = 17.2;
                num = 18;
                break;

            case "24":
                interes = 21;
                num = 24;
                break;

            case "36":
                interes = 26;
                num = 36;
                break;

            case "48":
                interes = 45;
                num = 48
                break;
        } 
        let valorConEnganche = valorAuto - enganche;
        let totalFinanciar = valorAuto * (interes/100);
        totalFinanciar = valorConEnganche + totalFinanciar;
        document.getElementById("txtFinanciar").value = totalFinanciar
        pagoMensual = totalFinanciar/num;
        document.getElementById("txtPago").value = pagoMensual
    }else{
        alert("Opcion no valida")
    }
    
}

function limpiar(){
    document.getElementById("valor").value = ""
    document.getElementById("txtEnganche").value = ""
    document.getElementById("txtValor").value = ""
    document.getElementById("txtFinanciar").value = ""
    document.getElementById("txtPago").value = ""
}

