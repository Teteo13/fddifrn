


function myFunction(){
    
    if(document.getElementById("q1y").checked){
        //alert("Anexar o CONTRACHEQUE do mês de fevereiro/2024");
        document.getElementById("q1case").style.display = "flex";
        document.getElementById("cpfrg").style.display = "flex";
        document.getElementById("aviso").style.display = "flex";
        
    }

    else{
        document.getElementById("q1case").style.display = "none";
    }

    if(document.getElementById("q1n").checked){
        //alert("Anexar a DECLARAÇÃO DE ATIVIDADE INFORMAL.");
        document.getElementById("q1case2").style.display = "flex";
        document.getElementById("cpfrg").style.display = "flex";
        document.getElementById("aviso").style.display = "flex";
    }

    else{
        document.getElementById("q1case2").style.display = "none";
    }

    if(document.getElementById("q2y").checked){
        //alert("Anexar o Extrato de recebimento do benefício do INSS.");
        document.getElementById("q2case").style.display = "flex";
        document.getElementById("cpfrg").style.display = "flex";
        document.getElementById("aviso").style.display = "flex";
    }

    else{
        document.getElementById("q2case").style.display = "none";
    }

    if(document.getElementById("q3y").checked){
        //alert("Anexar a DECLARAÇÃO DE QUE NÃO APRESENTA RENDA.");
        document.getElementById("q3case").style.display = "flex";
        document.getElementById("cpfrg").style.display = "flex";
        document.getElementById("aviso").style.display = "flex";
    }

    else{
        document.getElementById("q3case").style.display = "none";
    }

    if(document.getElementById("q4y").checked){
        //alert("Anexar o COMPROVANTE DE RECEBIMENTO COM NOME E VALOR.");
        document.getElementById("q4case").style.display = "flex";
        document.getElementById("cpfrg").style.display = "flex";
        document.getElementById("aviso").style.display = "flex";
    }

    else{
        document.getElementById("q4case").style.display = "none";
    }

    if(document.getElementById("q5y").checked){
        document.getElementById("q5case").style.display = "flex";
        document.getElementById("cpfrg").style.display = "flex";
        document.getElementById("aviso").style.display = "flex";
    }

    else{
        document.getElementById("q5case").style.display = "none";
    }

    if(document.getElementById("q6y").checked){
        document.getElementById("q6case").style.display = "flex";
        document.getElementById("cpfrg").style.display = "flex";
        document.getElementById("aviso").style.display = "flex";
    }

    else{
        document.getElementById("q6case").style.display = "none";
    }

}

