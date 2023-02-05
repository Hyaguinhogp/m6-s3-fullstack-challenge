# Kenzie Contatos

Projeto do módulo Full Stack da Kenzie Academy Brasil, cadastre-se e faça login para adicionar, editar ou deletar seus contatos.

## Começando

Clone esse repositório para sua máquina: `git clone https://github.com/Hyaguinhogp/m6-s3-fullstack-challenge.git`

### Pré-requisitos

A única coisa que precisa para rodar a aplicação é ter o docker instalado na sua máquina, segue a documentação: https://docs.docker.com/desktop

### Configurando variáveis de ambiente

Na raiz do repositório terá o arquivo `.env.example`:

```
NODE_ENV="dev"

POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_DB=""

DATABASE_URL="postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}"
SECRET_KEY=""
```

Estas serão as configurações do banco de dados, você irá preencher com os dados de acesso que desejar, por exemplo:

```
NODE_ENV="dev"

POSTGRES_USER="usuario"
POSTGRES_PASSWORD="1234"
POSTGRES_DB="usuariodb"

DATABASE_URL="postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}"
SECRET_KEY="cH@V3-A!3aT0r1@"
```

Feito isso basta renomear o arquivo para `.env`

## Executando

Abra um terminal no diretório do repositório e execute:

```
docker compose up
```

## Utilizando

Espere o docker fazer a build e executar a aplicação, após isso no seu navegador acesse `http://localhost:3000/home`, 
cadastre-se, faça login com o e-mail cadastrado e você já tem seu perfil que pode ser editado a qualquer hora, agora 
adicione, edite ou remova contatos.

### Acessando o banco

Basta utilizar as informações passadas no `.env` no seu gerenciador de banco de dados na porta 5434.

## Tecnologias utilizadas

* [ReactJs](https://reactjs.org/)
* [Styled Components](https://www.styled-components.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [Axios](https://axios-http.com/ptbr/docs/intro)
* [ExpressJs](https://expressjs.com/pt-br/)
* [TypeORM](https://typeorm.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)