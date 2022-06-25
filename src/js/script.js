const simulaInvestimento = document.querySelector('.simula-investimento');
const tudo = document.querySelector('.tudo');

function calculaInvestimento(){
    const valor = document.getElementById('valor');
    const periodo = document.getElementById('periodo');
    
    let montante = valor.value * (Math.pow((1.01) , periodo.value));
    const result = document.getElementById('resultado');
    console.log(montante.toFixed(2));
    document.getElementById('resultado').innerHTML = "No vencimento do ativo você receberá R$ " + montante.toFixed(2) + " reais";    
}

simulaInvestimento.onclick = function() {
    tudo.classList.toggle('active');
}

simulaInvestimento.addEventListener('click', calculaInvestimento); 
