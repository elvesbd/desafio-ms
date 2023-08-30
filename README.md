<h1 align="center">
  <br>
  <img src="https://i.ibb.co/MD8jH60/apptrade-logo.jpg" alt="" width="200">
  <br>
    Proposta de resolução para o desafio
  <br>
</h1>

<h4 align="center">Serviço de Gerenciamento de Usuários</h4>

<p align="center">
  <a href="#descrição">Descrição</a> •
  <a href="#serviços">Serviços</a> •
  <a href="#infraestrutura">Infraestrutura</a> •
  <a href="#guia">Guia</a>
</p>

## Descrição

Este é um exemplo de aplicação desenvolvida utilizando a arquitetura de microsserviços com os serviços api-gateway e ms-users, implementados em [NestJS](https://nestjs.com/) (Typescript). O objetivo dessa aplicação é demonstrar a comunicação entre os serviços, o uso de um barramento de mensagens Kafka e a integração com diferentes tipos de armazenamento de dados.

## Serviços

### api-gateway

O serviço api-gateway é responsável por receber as requisições externas e encaminhá-las para o serviço adequado. Neste exemplo, ele fornece um endpoint para receber um objeto JSON e publica esse objeto para um tópico no [Kafka](https://kafka.apache.org/).

### ms-users

O serviço ms-users é responsável pelo gerenciamento de usuários. Ele consome e processa objetos a partir do tópico do Kafka e os insere em um banco de dados NoSQL. Na solução proposta foi utilizado [mongoDB](https://www.mongodb.com/pt-br)

## Infraestrutura

A infraestrutura deste projeto foi cuidadosamente desenvolvida e orquestrada utilizando Docker Compose, com base nas especificações definidas no arquivo YAML fornecido. Essa abordagem permite uma implantação simplificada e consistente de todos os componentes necessários para o funcionamento da aplicação de gerenciamento de usuários.

A infraestrutura consiste em diversos serviços interconectados que trabalham em conjunto para garantir o fluxo de dados, processamento e armazenamento seguro. Abaixo estão os principais componentes que compõem a infraestrutura:

**_api-gateway:_**&nbsp; Este serviço atua como o ponto de entrada para as solicitações externas. Ele recebe requisições e encaminha para o serviço adequado. Isso é feito através do mapeamento das portas e volumes definidos no arquivo YAML.

**_ms-users:_**&nbsp; Este é um microsserviço responsável pelo gerenciamento de usuários. Ele se comunica com o serviço api-gateway e consome mensagens do tópico do Kafka para processar e inserir dados de usuários em um banco de dados NoSQL (MongoDB).

**_db_**:&nbsp; Um banco de dados NoSQL MongoDB é provisionado para armazenar os dados dos usuários. Ele é configurado com um nome de usuário e senha, permitindo acesso seguro.

**_zookeeper:_**&nbsp; O ZooKeeper é um serviço centralizado para gerenciar a configuração e coordenação do cluster Kafka. Ele é usado para garantir a confiabilidade e consistência na comunicação entre os nós do Kafka.

**_kafka:_**&nbsp; O Kafka é uma plataforma de streaming distribuída, usada aqui como um barramento de mensagens. Ele é configurado com um tópico para transmitir os objetos JSON entre os serviços api-gateway e ms-users. O serviço ms-users consome essas mensagens e as processa para posterior inserção no banco de dados.

## Guia

1. Faça o clone do repositório.

```
git clone https://github.com/elvesbd/desafio-ms.git
```

2. Acesse o projeto api-gateway.

```
cd desafio-ms/api-gateway
```

3. Execute o comando.

```
npm install
```

4. Acesse o projeto ms-users.

```
cd desafio-ms/ms-users
```

5. Execute o comando.

```
npm install
```

6. No projeto ms-users crie o arquivo .env com as informações contidas no arquivo .env.example

```
MONGO_URI=mongodb://root:ebd123@db:27017
```

7. Suba a infraestrutura com o comando.

```
docker compose up
```

8. Agora você só precisa realizar uma requisição para o serviço api-gateway com os dados da requisição.
