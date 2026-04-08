# 🔐 JWT Auth & Scheduling API

Uma API RESTful desenvolvida em Node.js com foco em segurança e estruturação de dados. O projeto implementa autenticação via **JWT (JSON Web Tokens)** e fornece a base de back-end necessária para gerenciamento de usuários e fluxos de agendamento. 

A aplicação utiliza o **Prisma ORM** para uma comunicação eficiente e tipada com o banco de dados **PostgreSQL**, garantindo integridade e alta performance nas consultas.

---

### 🛠️ Tecnologias e Ferramentas

O projeto foi construído utilizando as seguintes tecnologias no ecossistema Back-end:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

---

### 📂 Estrutura da Aplicação

A arquitetura do projeto foi pensada para ser escalável e de fácil manutenção, separando as responsabilidades de forma clara:

* `app.js`: Arquivo principal e ponto de entrada da aplicação.
* `config/`: Configurações gerais do sistema e de ambiente.
* `routes/`: Definição dos endpoints da API, conectando as requisições HTTP aos controladores adequados.
* `controllers/`: Lógica de processamento das requisições, interligando rotas e regras de negócio.
* `models/`: Representação da estrutura de dados e regras de negócio relacionadas ao banco (Agendamentos, Usuários).
* `middlewares/`: Interceptadores de requisições, utilizados principalmente para verificar e validar os tokens JWT antes de conceder acesso a rotas protegidas.
* `prisma/`: Arquivos de configuração do Prisma ORM (schema) e migrações do banco de dados.

---

### ⚙️ Funcionalidades Principais

* **Autenticação Segura:** Geração e validação de tokens JWT para controle de acesso.
* **Proteção de Rotas:** Utilização de middlewares para garantir que apenas usuários autenticados acessem recursos sensíveis.
* **Gestão de Agendamentos:** Endpoints estruturados para a criação e controle de agendamentos.
* **CORS Configurado:** Preparado para receber requisições do Front-end de forma segura.

---

### 🚀 Como executar o projeto localmente

Para rodar este projeto, você precisará do [Node.js](https://nodejs.org/) e de uma instância do [PostgreSQL](https://www.postgresql.org/) rodando em sua máquina.

1. Faça o clone do repositório:
   ```bash
   git clone [https://github.com/johnysantos22/jwt-auth-project.git](https://github.com/johnysantos22/jwt-auth-project.git)
