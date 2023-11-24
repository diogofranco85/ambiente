# AMBIENTE DE DESENVOLVIMENTO - DOCKER / NODE

### Objetivo
* Criar um ambiente de desenvolvimento que seja mais próximo ao que teriamos em um ambiente de produção

### Clonar o projeto
* git clone git@github.com:diogofranco85/ambiente.git

### Subir ambiente
* Necessário ter o docker e docker composer instalado na maquina

* Basta na raiz do projeto da o comando docker-compose up ou docker-compose up -d para rodar em background

### Características 

- Ngrok -  Permite acesso de um endpoint externo a rede local
- Nginx - Servidor web http, leve e seguro
- App1 - Api em node para testes
- App2 - Api em node para testes
- App3 - Api em PHP para testes

### Acessos
- Local: http://localhost
- App1 -  http://localhost/app1
- App2 -  http://localhost/app2
- App3 -  http://localhost/app3

### Imagens
chamada na api app1

![App1](https://github.com/diogofranco85/ambiente/blob/main/imagens/app1.png "App1")

Chamada na api app2

![App2](https://github.com/diogofranco85/ambiente/blob/main/imagens/app2.png "App2")

Chamada na api app3 - php

![App2](https://github.com/diogofranco85/ambiente/blob/main/imagens/php.png "App2 - PHP")

Proxy Reverso no nginx

![Nginx Config](https://github.com/diogofranco85/ambiente/blob/main/imagens/nginx_config.png "Nginx Config") 


