var Cadastro = [{
    "id": 1,
    "titulo": "Privatizada, Eletrobras (ELET3 ELET6) ganha eficiência e capacidade de investimento, dizem especialistas.",
    "resumo": "Aguardada há tempos, a privatização da Eletrobras (ELET3;ELET6), por meio da capitalização da companhia, via oferta de ações na bolsa de valores – que levará a União a deixar de ser acionista majoritária, após ser diluída – deve sair do papel e proporcionar, ao longo do tempo, ganhos de eficiência operacional, redução de custos, melhoria das margens e capacidade de investimento, dizem especialistas.",
    "autor": "Augusto Diniz e Rodrigo Petry",
    "data": "3 de junho de 2022 ",
    "fonte": "InfoMoney",
    "conteudo": "Todos esses benefícios, porém, se darão de forma indireta, já que a destinação dos recursos, desta oferta em específico, difere das ofertas iniciais de ações (IPOs) ou secundárias (follow-on) mais tradicionais. Isso porque, conforme o seu prospecto, os cerca de 30 bilhões que podem ser captados serão destinados prioritariamente ao pagamento de bonificações de outorgas de novos contratos de concessão de geração de energia, em substituição aos vigentes, de 22 usinas hidrelétricas.\n Em relatório, a Eleven Financial Research destaca que, privatizada, a companhia poderá melhorar, pela parte estratégica, sua alocação de capital e gestão de portfólio, enquanto isso, pelo lado operacional, avançar na eficiência do controle de custos e otimização de investimentos, além de gerar melhorias na governança corporativa e no tratamento de contingências fiscais e de créditos tributários. Todos esses benefícios, porém, se darão de forma indireta, já que a destinação dos recursos, desta oferta em específico, difere das ofertas iniciais de ações (IPOs) ou secundárias (follow-on) mais tradicionais. Isso porque, conforme o seu prospecto, os cerca de 30 bilhões que podem ser captados serão destinados prioritariamente ao pagamento de bonificações de outorgas de novos contratos de concessão de geração de energia, em substituição aos vigentes, de 22 usinas hidrelétricas. \n Em relatório, a Eleven Financial Research destaca que, privatizada, a companhia poderá melhorar, pela parte estratégica, sua alocação de capital e gestão de portfólio, enquanto isso, pelo lado operacional, avançar na eficiência do controle de custos e otimização de investimentos, além de gerar melhorias na governança corporativa e no tratamento de contingências fiscais e de créditos tributários. \n Nesta sexta-feira (3), tem o início do período de reserva das ações da Eletrobras. Investidores pessoas físicas interessados em participar do processo de privatização da companhia poderão realizar o pedido de reserva até a próxima quarta-feira (8).O prazo vale tanto para os investidores que desejam adquirir ações da Eletrobras diretamente quanto também indiretamente, usando parte do Fundo de Garantia de Tempo de Serviço (FGTS) para entrar via fundos mútuos de privatização (FMPs)."

}
];

function ExibirCadastro(){
    var infot = "";
    var infor = "";
    var infoa = "";
    var infod = "";
    var infof = "";
    var infoc = "";
    for(let x =0; x < Cadastro.length; x++){
        var infot = Cadastro[x].titulo;
        var infor = Cadastro[x].resumo;
        var infoa = Cadastro[x].autor;
        var infod = Cadastro[x].data;
        var infof = Cadastro[x].fonte;
        var infoc = Cadastro[x].conteudo;}
        
     var telat = document.getElementById('titulo1');
     telat.innerHTML = infot;
     var telar = document.getElementById('resumo1');
     telar.innerHTML = infor;
     var telaa = document.getElementById('autor1');
     telaa.innerHTML = infoa;
     var telad = document.getElementById('quando');
     telad.innerHTML = infod;
     var telaf = document.getElementById('local');
     telaf.innerHTML = infof;
     var telac = document.getElementById('conteudo');
     telac.innerHTML = infoc;
   
}


