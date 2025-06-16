# Task Manager — Projeto Individual (Módulo 2, Parte II de Computação)

Este é um sistema web desenvolvido com Node.js e Express.js para o gerenciamento de tarefas. O projeto segue o padrão arquitetural MVC (Model-View-Controller), com integração ao banco de dados PostgreSQL e estrutura modular que permite o desenvolvimento completo da aplicação, tanto backend quanto frontend, além de testes via API REST.

O objetivo do projeto foi criar uma aplicação que realmente pudesse ser usada no dia a dia para organizar tarefas profissionais e pessoais. A proposta nasceu da necessidade de uma alternativa mais enxuta ao Notion, que embora completo, às vezes é excessivo para organização simples.

---

## Fundamentação Técnica

Este projeto visa aplicar os principais conceitos da integração backend com banco de dados utilizando:

- PostgreSQL como banco de dados relacional
- `pg` como cliente SQL para Node.js
- Arquitetura MVC (Model, View, Controller)
- Endpoints RESTful utilizando Express.js
- Layouts reutilizáveis com Express-EJS-Layouts
- Frontend dinâmico com EJS e JavaScript (fetch)

---

## Integração com Banco de Dados

A conexão com o banco é configurada via `.env` para garantir segurança e portabilidade. O sistema permite:

- Leitura de dados salvos no banco (GET)
- Inserção de novos registros (POST)
- Atualização de registros existentes (PUT)
- Remoção de dados (DELETE)

---

## Views

O projeto possui um frontend funcional utilizando EJS com layout base. As views estão organizadas em páginas como:

- `/` – Menu principal
- `/tarefas` – Gerenciador de tarefas
- `/dashboard` – Visualização por status
- `/editor/:id?` – Editor de blocos
- `/foco/:id?` – Modo Foco
- `/tags` – Filtros por categoria
- `/projeto/:id?` – Visualização de projeto

A estilização foi feita com Tailwind CSS, e a estrutura de páginas usa um layout base com `partials/head`, `header` e `footer`.

---

## Migrações

As migrações são feitas com SQL puro, através do arquivo `migrations/init.sql`. Para executar:

```bash
npm run init-db
````

Isso aplica os comandos SQL definidos para criar a tabela `tarefas`.

---

## Controllers e Rotas

As funções que manipulam os dados estão organizadas nos arquivos da pasta `controllers/`. As rotas da API estão declaradas em `routes/index.js` e conectam os endpoints aos controllers. As rotas de interface (frontend) estão em `routes/frontRoutes.js`.

Exemplo de rota:

```js
router.get('/tasks', TarefaController.listarTarefas);
```

---

## Estrutura de Pastas

```markdown
task-manager/
├── config/           # Configuração da conexão com o banco
├── controllers/      # Lógica de controle das requisições
├── models/           # Definição dos modelos de dados
├── routes/           # Definição de rotas
│   ├── index.js      # Rotas da API
│   └── frontRoutes.js# Rotas das views
├── views/            # Páginas EJS
│   ├── partials/     # head, header, footer
│   └── 404.ejs, 500.ejs, etc.
├── public/           # Arquivos públicos (se usados)
├── .env.example      # Exemplo de variáveis de ambiente
├── README.md
├── WAD.md
├── package.json
├── server.js
```

---

## Como executar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/atilaneto/task-manager.git
cd task-manager
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o ambiente:

```env
DB_USER=postgres
DB_PASSWORD=mac55-STAR
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tasks_manager
PORT=3000
```

4. Rode a migração:

```bash
npm run init-db
```

5. Inicie o servidor:

```bash
npm run dev
```

6. Acesse no navegador:

```
http://localhost:3000
```

---

## Endpoints REST implementados

| Método | Rota            | Descrição                  |
| ------ | --------------- | -------------------------- |
| GET    | /api/tasks      | Listar todas as tarefas    |
| POST   | /api/tasks      | Criar nova tarefa          |
| PUT    | /api/tasks/\:id | Atualizar tarefa existente |
| DELETE | /api/tasks/\:id | Excluir tarefa             |

---

## Modelo de Banco de Dados

* Entidade principal: `tarefas`
* Atributos: id, nome, descrição, status, created\_at, updated\_at
* Script SQL: `migrations/init.sql`
* Diagrama de arquitetura disponível em `docs/mvc-architecture.png`

---

## Aprendizados e Desafios

Durante o desenvolvimento, enfrentei desafios importantes com o uso incorreto de layouts em EJS, o que gerava erros nas views. Resolvi isso padronizando o uso de `express-ejs-layouts` e removendo dependências desnecessárias como `layout('layout')`.

Também lidei com erros HTTP 500 causados por views ausentes ou variáveis indefinidas no render, e conflitos de versionamento no Git, que foram resolvidos com `pull --rebase` e `rebase --continue`.

A separação em MVC, o uso de layout base e o consumo da API com fetch foram pontos técnicos importantes que solidifiquei neste projeto.

---

## Licença

Projeto acadêmico desenvolvido como parte da disciplina de Computação — Módulo 2
Instituto de Tecnologia e Liderança (Inteli)
