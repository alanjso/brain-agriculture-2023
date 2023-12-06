# Tutorial para inicializar projeto
  - Configure o ambiente para node v10
    - Execute os comandos a seguir:
      - npm install
      - npx sequelize-cli db:create
      - npx sequelize-cli db:migrate
      - npm test
      - npm start

# Tutorial para utilizar o sistema
  - Importe o arquivo "Insomnia - Rotas Teste - Brain Agriculture" no programa insomnia
  - Utilize a rota "Cria Produtor Rural" para criar algum produtor rural com o objeto de exemplo
  - Anote document e password do produtor criado e insira os valores na rota de "Login Produtor rural"
  - O result dessa request é um uma token que deverá ser enviada nas demais requests pelo Auth Bearer Token
  - A rota "Dashboard Completo Produtores Rurais" com a token criada no login deve retornar valores criados automaticamente no passo "npm test"

# Teste - Brain Agriculture

O teste tem como objetivo acurar as habilidades do candidato em resolver alguns problemas relacionados à lógica de programação, regra de negócio e orientação à objetos.

O mesmo consiste em um cadastro de produtor rural com os seguintes dados: 

 1. CPF ou CNPJ
 2. Nome do produtor
 3. Nome da Fazenda
 4. Cidade
 5. Estado
 6. Área total em hectares da fazenda
 7. Área agricultável em hectares
 8. Área de vegetação em hectares
 7. Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar) 


# Requisitos de negócio

 - O usuário deverá ter a possibilidade de cadastrar, editar, e excluir produtores rurais.
 - O sistema deverá validar CPF e CNPJ digitados incorretamente.
 - A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda
 - Cada produtor pode plantar mais de uma cultura em sua Fazenda.
 - A plataforma deverá ter um Dashboard que exiba:
   - Total de fazendas em quantidade
   - Total de fazendas em hectares (área total)
   - Gráfico de pizza por estado.
   - Gráfico de pizza por cultura. 
   - Gráfico de pizza por uso de solo (Área agricultável e vegetação)
     

# Requisitos técnicos

 - O desenvolvedor front-end deverá utilizar [ReactJS](http://reactjs.org) usando o [Redux](https://redux.js.org/) para controlar o estado da aplicação. A criação das estruturas de dados "mockados" faz parte da avaliação.
 - O desenvolvedor back-end deve salvar os dados em um banco de dados Postgres usando o NodeJS como layer de Backend, e entregar os endpoints para cadastrar, editar, e excluir produtores rurais, além do endpoint que retorne os totais para o dashboard.  A criação das estruturas de dados "mockados" faz parte da avaliação.
 - O desenvolvedor full-stack deve realizar ambos, e concluir a integração.
 - Não envie a solução como anexo, suba os fontes para seu Github (ou outro repositório) e envie o link para o avaliador. 
