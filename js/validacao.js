function enviardados() {

    let nome = document.getElementById('fname').value;
    if(nome ==""){
        alert("O nome deve ser preenchido")
        return false;
    }
    let sobrenome = document.getElementById('fsobrenome').value;
    if(nome ==""){
        alert("O sobrenome deve ser preenchido")
        return false;
    }
    let email = document.getElementById('femail').value;
    if(email == ""){
        alert("O email deve ser preenchido");
        return false;
    }
    let rd_Segundasérie = document.getElementById('fradio_Segundasérie');
    let rd_Primeirasérie = document.getElementById('fradio_Primeirasérie');
    let rd_Terceirasérie = document.getElementById('fradio_Terceirasérie');
    
    if (rd_Segundasérie.checked || rd_Primeirasérie.checked || rd_Terceirasérie.checked){
    }
    else{ 
        alert("Escolha uma opção (Primeiro Ano, Segundo Ano ou Terceiro Ano)");
    }


   let escolaridade = document.getElementById('f_condicao').value;
    if(escolaridade == "Selecionar"){
        alert("indique sua condição"); 
       
    }
    let ConteSobre = document.getElementById('ConteSobre').value;
    if(ConteSobre == "");{
        alert("escreva sobre você");
        return false;
}
}