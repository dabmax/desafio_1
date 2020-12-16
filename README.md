# Projeto 1 - Desenvolvendo uma Aplicação CRUD Node.js com PostgreSQL

Desenvolvimento de uma aplicação aplicação CRUD com Node.js persistindo os dados localmente no PostgreSQL. E ao final, iremos realizar o deploy dessa API em docker

## Recursos utilizados:

* **Visual Studio Code**
* **Node.js**
* **PostgreSQL**

## Informações sobre o projeto

Trata de uma API em Node.Js armazenando dados em uma Banco Postgres. Essa API vai escultar na 3000 e sua execução será em Docker. Realizaremos o deploy dentro da estrutura local.

## Ações da API

| Método | Verbo HTTP | Endpoint |
|---|---|---|
| Cadastrar uma nova pessoa | POST | `http://localhost:3000/api/users` |
| Listas todas pessoas cadastradas | GET | `http://localhost:3000/api/users` |
| Procurar pessoas pelo ID | GET | `http://localhost:3000/api/users/{id}`|
| Atualizar os dados da pessoa cadastrada | UPDATE | `http://localhost:3000/api/users/{id}`|
| Excluir uma pessoa pelo ID | DELETE | `http://localhost:3000/api/users/{id}`| 

## Descrições do Pipeline

* **Build - Construção da imagem e armazenamento em um repositório NEXUS**
* **Depoly Homolog - Inicializando a aplicação em um ambiente Homologação**
* **Depoly Produção - Inicializando a aplicação em um ambiente Produção**