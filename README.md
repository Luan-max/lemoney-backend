# Desafio Lemoney

- O desenvolvimento da api foi baseado no conceito da arquitetura limpa (Clean Architecture), separando à
  regra de negócio de funções e conexões com o banco de dados, temos as services que faz toda orquestração e
  conexão com os respositórios que se comunicam com o banco, as controllers para cuidar da parte de comunição
  com o usuário, recebendo requisições e enviando respostas.

# Iniciar a aplicação

    A aplicação foi desenvolvida através de container para uma administração de processamento melhor. Então para você executar, bastar ter na sua máquina o Docker instalado.

- Comando para rodar a aplicação: docker-compose up ou docker-compose up -d para rodar em background.

# Rotas

## Authentication

    Method: POST
    url: http://127.0.0.1:3000/login \
    header: 'Content-Type: application/json' \
    data: {
        "email": "teste@teste.com.br,
        "password": 111111
    }'

## Advertisers

    Method: POST
    url: http://127.0.0.1:3000/register \
    header: 'Content-Type: application/json' \
    data: {
        "name": "teste"
        "email": "teste@teste.com.br,
        "password": 4669
    }'

    Method: GET
    url: http://127.0.0.1:9000/advertisers \
    header: 'Content-Type: application/json' \
    data: {}'

## Offers

    Method: POST
    url: http://127.0.0.1:9000/offers \
    header: 'Content-Type: application/json' \
    data: {
        "advertiser_name": "Walmart",
        "url": "url do produto",
        "description": "Descrição",
        "start_at": "2021-11-02 12:12:22",
        "end_at": "2021-11-02 12:12:22",
        "enabled": "false",
        "premium": "false",
    }'

    Method: GET
    url: http://127.0.0.1:9000/offers \
    header: 'Content-Type: application/json' \
    data: {}'

    Method: PUT
    url: http://127.0.0.1:9000/offers/:offer_id \
    header: 'Content-Type: application/json' \
    data: {
        "advertiser_name": "Walmart",
        "url": "url do produto",
        "description": "Descrição",
        "start_at": "2021-11-02 12:12:22",
        "end_at": "2021-11-02 12:12:22",
        "enabled": "false",
        "premium": "false",
    }'

    Method: DELETE
    url: http://127.0.0.1:9000/offers/:offer_id \
    header: 'Content-Type: application/json' \
    data: {}'
