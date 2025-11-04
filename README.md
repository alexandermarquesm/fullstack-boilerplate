# 🚀 Fullstack Boilerplate

Um **boilerplate simples** com **pnpm workspaces**, **TypeScript**, **Express** (backend), **React + Vite** (frontend) e um pacote **shared** para código comum.  
Ideal para iniciar rapidamente projetos fullstack com dev/prod prontos, aliases `@shared` e proxy CORS configurado.

---

## 📁 Estrutura do Projeto

```bash
fullstack-boilerplate/
├── packages/
│   ├── backend/     # API Express
│   ├── frontend/    # React + Vite
│   └── shared/      # Código compartilhado (ex: utils)
├── .env             # Variáveis de ambiente (ex: VITE_API_URL=http://localhost:3000)
├── pnpm-workspace.yaml
└── package.json     # Scripts principais
```

---

## ⚡ Início Rápido

### 1. Clonar o repositório

```bash
git clone https://github.com/alexandermarquesm/fullstack-boilerplate.git
cd fullstack-boilerplate
```

### 2. Instalar dependências

```bash
pnpm install
```

### 3. Configurar variáveis de ambiente 🚨

```bash
cp .env.example .env
```

> ⚙️ Edite o arquivo `.env` se precisar ajustar as URLs ou portas.

---

## 🧩 Modos de Execução

### 🔹 Desenvolvimento (TypeScript + Hot Reload)

```bash
pnpm dev
```

- **Backend:** [http://localhost:3000](http://localhost:3000)
- **Frontend:** [http://localhost:5173](http://localhost:5173)
  _(proxy automático para a API)_

---

### 🔸 Preparando para Produção (Build otimizado)

Antes de rodar o projeto em ambiente de produção (local ou na nuvem), é necessário gerar os builds de todos os pacotes:

```bash
pnpm build:all
```

Isso irá compilar e otimizar todo o código para ser executado posteriormente em modo de produção.

Depois, você pode iniciar o projeto usando:

```bash
pnpm preview
```

- **Backend:** [http://localhost:3000](http://localhost:3000)
- **Frontend:** [http://localhost:4173](http://localhost:4173) _(arquivos estáticos otimizados)_

---

## 🛠️ Tecnologias

- [pnpm Workspaces](https://pnpm.io/workspaces)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

---

## 💬 Suporte

Encontrou um problema ou tem uma sugestão?
Abra uma **issue** — ficarei feliz em ajudar!

---

Feito com 💙 e café ☕
