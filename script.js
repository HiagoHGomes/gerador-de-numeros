
function gerar(){
    let qtdN = parseInt(document.querySelector("#qtdN").value);
    if(qtdN <6 || qtdN >15){
        document.getElementById("randomN").innerHTML= " ";
        alert("Valores invalidos. Insira um numero entre 6 e 15!")
        document.querySelector("#qtdN").value = "";
    }else{
        document.getElementById("randomN").innerHTML= " ";
        for (let i = 0; i < qtdN; i++) {
            let randomNum = Math.floor(Math.random() * 60);
            document.getElementById("randomN").innerHTML += "<div>"+randomNum+"</div>" + " ";
            // document.querySelector("a").innerText = "Aposte agora!";
            // document.querySelector("a").style.display = "block";
            };
    } 
};



