# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

Antônia Maria Silva tem 55 anos, é arquiteto professora aposentada. Pensa em conseguir mudar a realidade financeira da sua família. Deixar o patrimônio seguro para os filhos.	Poder viajar o mundo sem preocupar com dinheiro. Possuiu algumas frustações: viu a mãe tomar uma decisão errada com base na opinião de sua gerente;	Acredita que tudo de economia é um bicho de 4 cabeças.

Gabriel Almeida tem 23 anos, é operador de mídia audiovisual, funcionário de uma emissora de TV aberta. Pensa em conseguir melhorar qualidade de vida; maior poder aquisitivo e viver de renda passiva no futuro. Possuiu algumas frustações: teve parentes que caíram em golpes de sorteio por telefone; vitima da UnickForex - pirâmide.


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Antônia Maria Silva | visualizar as notícias mais relevantes do momento         | tomar ciência dos acontecimentos na área da economia               |
|Antônia Maria Silva |
	Buscar informações para leigos em economia 	Gastar tempo com algo que realmente vá me trazer conhecimento.
               | Gastar tempo com algo que realmente vá me trazer conhecimento. |
|Antônia Maria Silva | Antônia Maria Silva
	Não ser leiga, ter o mínimo de conhecimento 	Para não cair em golpes ou investir errado
           | Para não cair em golpes ou investir errado              |
|Antônia Maria Silva | Conhecer maneiras de investir com segurança                | Preservação do patrimonio |
|Gabriel Almeida  | Ter um passo a passo de por onde começar a investir           | Para começar a montar sua carteira de investimento de modo seguro             |
|Gabriel Almeida  | Ficar bem informado quanto aos melhores títulos públicos federais do momento           | Para economizar tempo e tomar decisões assertivas            |
|Gabriel Almeida  |Ficar atualizado sobre os acontecimentos atuais e suas consequências econômicas      | Para evitar perdas de capital e realocar seus investimentos   |
|Gabriel Almeida  |Como formar uma carteira diversificada      | Evitar o risco não sistemático.     |


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|O site deve apresentar na página principal notícias dinâmicas do setor da economia obtidas por meio de canais de notícias da Internet (API) | ALTA | 
|RF-002| O site deve apresentar na página principal uma aba com simulador de investimentos.   | ALTA |
|RF-003| O site deve apresentar na página principal uma aba “Conheça mais sobre – CDB – Letra de Crédito - Previdência Privada – Tesouro Público Federal “  | ALTA | 
|RF-004| O site deve apresentar na página principal uma aba “Conheça sobre os indicadores financeiros de referência mais utilizados”  | ALTA |
|RF-005| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um texto específico que será informado na caixa de pesquisa.7,5 | BAIXA | 
|RF-006| O site deve permitir visualizar as informações de contatos do mantenedor do site	Baixa  | BAIXA |
|RF-007| O site deve permitir o compartilhamento de notícias visualizadas em plataformas de redes sociais| BAIXA | 
|RF-008| O site deve permitir salvar notícias preferidas | BAIXA |
|RF-009| O site deve permitir verificar as notícias salvas como preferidas | BAIXA | 
|RF-010| O site deve permitir que usuários possam comentar notícias | BAIXA |
|RF-011| O site deve exibir os comentários registrados juntamente com a notícia exibida | BAIXA | 
|RF-012| O site deve fornecer a opção de “Dicionário de Termos” onde o usuário pode pesquisar por uma palavra que queira conhecer seu significado  | MÉDIA |


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku)| ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada|  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade  | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)	|  ALTA | 
|RNF-005| O site deve funcionar 24 horas por dia em todos os dias da semana| ALTA | 
|RNF-006|O site deve se manter funcionando mesmo que haja 100.000 usuários ativos  |  MÉDIA | 


## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 27/06/2022. |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end       |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho       |
