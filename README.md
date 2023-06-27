## First API using NestJS

Minha primeira API criada com NestJS.

## Projeto

Gostei muito de desenvolver minha primeira API em NestJS e implementar testes com Jest, foi uma experiência marcante. A estrutura e a organização do NestJS facilitam o desenvolvimento da API de forma eficiente. Foi minha primeira vez utilizando essas tecnologias e gostei muito do resultado, por mais que ficou bem simples.

## Tecnologias utilizadas

- NestJS: Framework em Node.js para construção de aplicativos escaláveis e eficientes.
- Prisma: Ferramenta ORM (Object-Relational Mapping) para trabalhar com bancos de dados SQL e NoSQL.
- Banco de dados: SQLite, utilizado pelo Prisma para armazenar os dados da aplicação.
- Jest: Para testes e2e (end-to-end).
- Class-Validator: Com esta biblioteca consigo definir regras de validação de forma declarativa utilizando decorators, o que tornou o código mais limpo e intuitivo.

## Endpoints da API

A API possui os seguintes endpoints:

- `GET /users`: Retorna uma lista dos usuários.
- `GET /users/:id`: Retorna o usuário com o ID especificado.
- `POST /users/create`: Cria um novo usuário.
- `PATCH /users/edit/:id`: Edita o usuário com o ID especificado.
- `DELETE /users/delete/:id`: Deleta o usuário com o ID especificado.

## Executando o projeto localmente

Para executar o projeto localmente em sua máquina, siga as etapas abaixo:

1. Certifique-se de que o Node.js e o npm (gerenciador de pacotes do Node.js) estejam instalados em sua máquina.

2. Clone este repositório em um diretório de sua escolha:

```shell
git clone https://github.com/leonardorochedo/first-api-nestjs.git
```

3. Acesse o diretório do projeto:

```shell
cd first-api-nestjs
```

4. Instale as dependências do projeto:

```shell
npm install
```

5. Execute os testes (e2e):

```shell
npm run test:e2e
```

6. Execute o projeto:

```shell
npm run start
```

7. Abra o Prisma Studio:

```shell
npx prisma studio
```

Após executar essas etapas, o servidor estará em execução localmente na URL *ttp://localhost:3000* e você poderá acessar os endpoints da API mencionados anteriormente.

## Testes

Foram implementados testes e2e (end-to-end) para os endpoints da API, meus primeiros teste na realidade. 

Os testes garantem o correto funcionamento das rotas e a integração com o banco de dados.

**Observação:** Certifique-se de ter o banco de dados SQLite configurado corretamente. Verifique a documentação do Prisma para mais informações sobre como configurar o banco de dados.
