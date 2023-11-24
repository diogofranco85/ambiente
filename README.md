# AMBIENTE DE DESENVOLVIMENTO - DOCKER / NODE

### Objetivo
Criar um ambiente de desenvolvimento que seja mais proximo que teriamos em um ambiente de produção

### Clonar o projeto
git clone git@github.com:diogofranco85/ambiente.git

### Subir ambiente
* Necessário ter o docker e docker composer instalado na maquina
Basta na raiz do projeto da o comando docker-compose up ou docker-compose up -d para rodar em background

### Características 

- Ngrok -  Permite acesso de um endpoint externo a rede local
- Nginx - Servidor web http, leve e seguro
- App1 - Api em node para testes
- App2 - Api em node para testes

### Acessos
- Local: http://localhost
- App1 -  http://localhost/app1
- App2 -  http://localhost/app2

### Imagens
![App1](https://github.com/diogofranco85/ambiente/blob/main/imagens/app1.png "App1")

![App2](https://github.com/diogofranco85/ambiente/blob/main/imagens/app2.png "App2")

![Nginx Config](https://github.com/diogofranco85/ambiente/blob/main/imagens/nginx_config.png "Nginx Config") 

