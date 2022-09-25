<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/xBuCtmD.png" alt="Project logo"></a>
</p>

<h3 align="center">API - REST API Basic</h3>

<div align="center">

[![Status](https://img.shields.io/badge/Status-In%20Progress-red)]()

</div>

---

<p align="center"> Objetivo do projeto: 
  API Rest simples, contendo uma validação de request, conexão a banco de dados e tratamento de erros, servindo como portfolio.
    <br> 
</p>

## 📝 Indice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Como usar](#usage)
- [Built Using](#built_using)
- [Autor](#autor)

## 🧐 Sobre <a name = "about"></a>

<p>
  API que contenha todos os métodos CRUD, Criar, Ler, Atualizar e Deletar Dados em um Banco de Dados.
  Contém validador de requests, que verificará se os dados que o cliente está enviando a sua API estão corretos.
  Tratamento de Erros, ao invés de retornar throws e stack traces, retorna http codes correto para acidentes.
  Plus Conteirização com Docker.
  Plus Swagger para documentação.
</p>


## 🏁 Primeiros passos <a name = "getting_started"></a>

### Pre-requisitos
Docker

Yarn instalado na maquina que irá rodar o projeto.


<i>.env</i>

| Variável          | Descrição                                              |
| ----------------- | ------------------------------------------------------ |
| DATABASE_HOSTNAME | Hostname para conexão com o banco de dados             |
| DATABASE_USERNAME | Usuario de acesso ao banco de dados                    |
| DATABASE_PASSWORD | Senha de acesso ao banco de dados                      |
| DATABASE_DATABASE | Nome do banco de dados                                 |
| DATABASE_PORT     | Porta que está rodando o banco de dados                |

### Instalando

Iniciar instalação de pacotes necessários com yarn:
```
yarn
```
Executar serviço API:
```
yarn dev
```
Se tudo ocorreu bem, após ter criado o .env e configurado corretamente o banco de dados, após executar o comando acima, deverá obter a seguinte mensagem no terminal:
```
Listening on port 3000
```
Indicando que o servidor está rodando em localhost na porta 3000
## 🎈 Como usar <a name="usage"></a>
_Endpoint_

`<url>/speakers`

Método: *GET*

Query(opcional):
```json
$url/speakers?$campo=$pesquisa
```
Retorno esperado:
```json
[
	{
		"_id": "632ff2be43b29bb903c29545",
		"$campo": "$pesquisa"
	},
	...
]
```
| Propriedade          | Descrição                                                    |
| -------------------- | ------------------------------------------------------------ |
| nome                 | Nome do palestrante                                          |
| idade                | Idade do palestrante                                         |
| nacionalidade        | Nacionalidade do palestrante                                 |



## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Celebrate](https://www.npmjs.com/package/celebrate) - Middleware validator

## ✍️ Autor <a name = "autor"></a>

- [@JuninhoFreitas](https://github.com/JuninhoFreitas) - Desenvolvimento e documentação
