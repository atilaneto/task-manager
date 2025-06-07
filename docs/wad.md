# Task Manager — Projeto Individual (Módulo 2, Parte II de Computação)

Este é um sistema web desenvolvido com Node.js e Express.js para o gerenciamento de tarefas. O projeto segue o padrão arquitetural MVC (Model-View-Controller), conforme orientado pelo professor Bryan Ferreira, com integração ao banco de dados PostgreSQL e estrutura modular que permite o desenvolvimento completo da aplicação e testes com API REST.

O objetivo deste projeto é criar uma aplicação que eu realmente possa utilizar no meu dia a dia para organizar compromissos da minha empresa, reuniões com clientes, estudos, metas e grandes objetivos. Apesar de atualmente utilizar o Notion, percebo que a enorme quantidade de funcionalidades da plataforma acaba tornando a organização das minhas tarefas mais complexa do que o necessário. Com isso, busco desenvolver uma solução mais enxuta, eficiente e personalizada para as minhas necessidades.

---

## Fundamentação Técnica

Este projeto visa aplicar os principais conceitos da integração backend com banco de dados utilizando:

- **PostgreSQL** como banco de dados relacional
- **pg** como cliente SQL para Node.js
- **Arquitetura MVC** (Model, View, Controller)
- **Endpoints RESTful** utilizando Express.js

---

## Integração com Banco de Dados

A conexão com o banco é configurada no arquivo `.env` para garantir segurança e portabilidade. O sistema permite:

- Leitura de dados salvos no banco (GET)
- Inserção de novos registros (POST)
- Atualização de registros existentes (PUT)
- Remoção de dados (DELETE)

---

## Migrações

As migrações são feitas com SQL puro, através do arquivo `migrations/init.sql`. Para executar:

```bash
npm run init-db
````

Isso executa um script JS que aplica os comandos SQL contidos no arquivo.

---

## Controllers e Rotas

As funções que manipulam os dados estão organizadas nos arquivos da pasta `controllers/`. As rotas estão declaradas em `routes/index.js` e conectam os endpoints aos controllers.

Exemplo de rota:

```js
router.get('/tarefas', TarefaController.listarTarefas);
```

---

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
├── node_modules/     # Módulos do Node.js
├── routes/           # Definição de rotas
├── scripts/          # Scripts públicos e de migração
├── services/         # Serviços auxiliares
├── styles/           # Arquivos CSS públicos
├── tests/            # Testes automatizados
├── .env.example      # Exemplo de variáveis de ambiente
├── .gitignore
├── package.json
├── package-lock.json
├── readme.md
├── WAD.md
├── server.js
```

---

## Como executar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/atilaneto/task-manager.git
cd task-manager
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o ambiente:**

Crie um `.env` com base em `.env.example` e preencha com os dados do seu banco:

```env
DB_USER=postgres
DB_PASSWORD=suaSenha
DB_HOST=localhost
DB_PORT=5432
DB_NAME=task_manager
PORT=3000
```

4. **Rode a migração:**

```bash
npm run init-db
```

5. **Inicie o servidor:**

```bash
npm run dev
```

6. **Acesse no navegador ou use Postman/cURL:**

```
http://localhost:3000/api/tarefas
```

---

## Endpoints REST implementados

| Método | Rota              | Descrição                   |
| ------ | ----------------- | --------------------------- |
| GET    | /api/tarefas      | Listar todas as tarefas     |
| POST   | /api/tarefas      | Criar uma nova tarefa       |
| PUT    | /api/tarefas/\:id | Editar uma tarefa existente |
| DELETE | /api/tarefas/\:id | Excluir uma tarefa          |

---

## Modelo de Banco de Dados

* Entidade principal: `tasks`
* Script SQL disponível em `docs/modelo-banco.sql`
* Diagrama relacional disponível em `docs/modelo-banco.png`
* Diagrama de Arquitetura MVC disponível em `docs/mvc-architecture.png`
---


## 🧾 Licença

Este projeto é acadêmico, faz parte da disciplina de Computação do Módulo 2 do Instituto de Tecnologia e Liderança (Inteli).