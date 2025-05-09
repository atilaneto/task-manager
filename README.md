# Task Manager — Projeto Individual (Módulo 2, parte I de Computação)

Este é um sistema web desenvolvido com Node.js e Express.js para o gerenciamento de tarefas. O projeto segue o padrão arquitetural MVC (Model-View-Controller), conforme orientado pelo professor Bryan Ferreira, com suporte à renderização via EJS, integração com PostgreSQL e estrutura modular que permite a expansão e o desenvolvimento completo da aplicação.

O objetivo deste projeto é criar uma aplicação que eu realmente possa utilizar no meu dia a dia para organizar compromissos da minha empresa, reuniões com clientes, estudos, metas e grandes objetivos. Apesar de atualmente utilizar o Notion, percebo que a enorme quantidade de funcionalidades da plataforma acaba tornando a organização das minhas tarefas mais complexa do que o necessário. Com isso, busco desenvolver uma solução mais enxuta, eficiente e personalizada para as minhas necessidades.

## Estrutura de Pastas

```markdown
webapp/
├── assets/           # Arquivos estáticos como imagens e fontes
├── configs/          # Arquivos de configuração (ex: conexão com o banco)
├── controllers/      # Lógica de controle das requisições
├── docs/             # Documentação e modelos do banco de dados
│   ├── modelo-banco.sql
│   └── modelo-banco.png
├── models/           # Definição dos modelos de dados
├── node\_modules/     # Módulos do Node.js
├── routes/           # Definição de rotas
├── scripts/          # JS públicos, se aplicável
├── services/         # Serviços auxiliares
├── styles/           # Arquivos CSS públicos
├── tests/            # Testes automatizados
├── .env.example      # Exemplo de variáveis de ambiente
├── .gitignore
├── package.json
├── package-lock.json
├── readme.md
├── server.js
````

## Como executar o projeto localmente

1. **Clone o repositório dessa forma:**

   ```bash
   git clone https://github.com/atilaneto/task-manager.git
   cd task-manager
   ```

2. **Em seguida, instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o ambiente:**

   * Crie um arquivo `.env` baseado no `.env.example` que fui instruído a adicionar
   * Preencha com os dados do seu banco PostgreSQL:

     ```env
     DB_USER=postgres
     DB_PASSWORD=suaSenha
     DB_HOST=localhost
     DB_PORT=5432
     DB_DATABASE=gerenciador_tarefas
     DB_SSL=false
     PORT=3000
     ```

4. **Inicie o servidor:**

   ```bash
   npm start
   ```

5. **Acesse no navegador:**

   ```
   http://localhost:3000
   ```

## Tecnologias utilizadas

* Node.js
* Express.js
* EJS
* PostgreSQL
* Dotenv
* MVC Pattern

## Modelo de Banco de Dados

* Entidades principais:

  * `users`
  * `tasks`
  * `categories`

* O modelo físico (código SQL) está em [`docs/modelo-banco.sql`](docs/modelo-banco.sql)

* O modelo relacional (diagrama visual) está em [`docs/modelo-banco.png`](docs/modelo-banco.png)

## Licença

Este projeto é acadêmico, faz parte da disciplina de Computação do Módulo 2 do Instituto de Tecnologia e Liderança (Inteli).
