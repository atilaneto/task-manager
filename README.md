# Task Manager — Projeto Individual (COMP Parte 3)

Este é um sistema completo de gerenciamento de tarefas, inspirado no Notion, com múltiplas views visuais, backend Node.js, banco de dados PostgreSQL, e estrutura baseada no padrão MVC.

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Crie um banco PostgreSQL com o nome `tasks_manager` e configure as variáveis no arquivo `.env`:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=tasks_manager
```

Crie a tabela `tasks` com o seguinte comando:

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  descricao TEXT,
  status VARCHAR(20) DEFAULT 'pendente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Inicie o servidor

```bash
npm run dev
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura do Projeto

```
.
├── config/            # Conexão com o banco de dados
├── controllers/       # Lógica de negócio (ex: criação/edição de tarefas)
├── models/            # Interações com o banco (queries SQL)
├── routes/            # Rotas da aplicação (API e frontend)
├── views/             # Arquivos .ejs com as interfaces visuais
├── public/            # Arquivos estáticos (se necessário)
├── server.js          # Arquivo principal do servidor Express
├── .env               # Variáveis de ambiente (não subir no GitHub)
├── README.md
└── WAD.md
```

---

## Principais Rotas e Views

* `/` → Menu principal com links
* `/tarefas` → Gerenciador de tarefas (adicionar e listar)
* `/dashboard` → Visão geral do sistema
* `/projeto/:id` → Visualização de projeto com tarefas organizadas
* `/editor/:id` → Editor de blocos (visual estilo Notion)
* `/tags` → Visualizador de categorias/tags
* `/foco/:id` → Tela de modo foco (visualização individual de tarefa)

---

## Desenvolvido por

**Átila Neto**
Ciência da Computação — Inteli
2025 — Projeto Individual da disciplina de Computação (COMP Parte 3)
Licença

Este projeto é acadêmico, faz parte da disciplina de Computação do Módulo 2 do Instituto de Tecnologia e Liderança (Inteli).
