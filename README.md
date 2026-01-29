# DevStack Portfolio

Portfólio profissional desenvolvido com Next.js, totalmente internacionalizado e responsivo, seguindo as melhores práticas de desenvolvimento moderno.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Internacionalização (i18n)](#internacionalização-i18n)
- [Rotas e Páginas](#rotas-e-páginas)
- [Componentes](#componentes)
- [Design System](#design-system)
- [Desenvolvimento](#desenvolvimento)
- [Build e Deploy](#build-e-deploy)

## 🎯 Sobre o Projeto

DevStack é um portfólio profissional moderno que demonstra projetos, habilidades técnicas e experiência profissional. A aplicação foi desenvolvida seguindo princípios de **Spec-Driven Development (SDD)**, garantindo código limpo, manutenível e escalável.

### Características Principais

- ✅ **Totalmente Internacionalizado** - Suporte para 4 idiomas (Inglês, Português BR, Espanhol, Francês)
- ✅ **Rotas Localizadas** - URLs traduzidas para cada idioma
- ✅ **Design Responsivo** - Otimizado para mobile, tablet e desktop
- ✅ **Performance Otimizada** - Utilizando Next.js App Router e otimizações de imagem
- ✅ **TypeScript** - Tipagem estática para maior segurança e produtividade
- ✅ **Tailwind CSS v4** - Estilização moderna e consistente

## 🛠 Tecnologias

### Core
- **[Next.js 16.1.1](https://nextjs.org/)** - Framework React com App Router
- **[React 19.2.3](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem

### Internacionalização
- **[next-intl 4.7.0](https://next-intl-docs.vercel.app/)** - Internacionalização completa para Next.js

### Estilização
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Processamento de CSS

### Utilitários
- **[clsx](https://github.com/lukeed/clsx)** - Construção condicional de classes CSS
- **[lucide-react](https://lucide.dev/)** - Biblioteca de ícones

### Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linter para qualidade de código
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript

## ✨ Funcionalidades

### Páginas Disponíveis

1. **Home/Login** (`/login` ou `/conectar`)
   - Página de autenticação com formulário de login
   - Suporte a login com GitHub
   - Validação de formulário

2. **Sobre** (`/about` ou `/sobre` / `/a-propos`)
   - Apresentação profissional
   - Stack tecnológico
   - Estatísticas e experiência
   - Download de currículo

3. **Projetos** (`/projects` ou `/projetos` / `/proyectos` / `/projets`)
   - Carrossel de projetos com navegação manual
   - Cards de projeto com imagem, tecnologias e descrição
   - Layout responsivo (1 projeto mobile, até 3 desktop)
   - Totalmente internacionalizado

4. **Contato** (`/contact` ou `/contato` / `/contacto`)
   - Formulário de contato
   - Informações de localização
   - Mensagens traduzidas

### Componentes Reutilizáveis

- **Header** - Navegação principal com seletor de idioma
- **Footer** - Rodapé com links e informações legais
- **ProjectsCarousel** - Carrossel responsivo de projetos
- **ProjectCard** - Card individual de projeto
- **Button** - Botão reutilizável com variantes
- **Input** - Campo de entrada de texto
- **TextArea** - Área de texto multilinha

## 📁 Estrutura do Projeto

```
devstack/
├── app/                          # App Router do Next.js
│   ├── [locale]/                 # Rotas internacionalizadas
│   │   ├── about/               # Página Sobre
│   │   ├── contact/             # Página Contato
│   │   ├── login/               # Página Login
│   │   ├── projects/            # Página Projetos
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx             # Página inicial
│   ├── globals.css              # Estilos globais e tema
│   └── icon.svg                 # Ícone da aplicação
│
├── components/                   # Componentes React
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Input.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectsCarousel.tsx
│   └── TextArea.tsx
│
├── i18n/                         # Configuração de internacionalização
│   ├── navigation.ts            # Hooks de navegação
│   ├── request.ts               # Configuração de requisição
│   └── routing.ts               # Configuração de rotas e pathnames
│
├── messages/                     # Arquivos de tradução
│   ├── en.json                  # Inglês
│   ├── pt-BR.json               # Português (Brasil)
│   ├── es.json                  # Espanhol
│   └── fr.json                  # Francês
│
├── public/                       # Arquivos estáticos
│   ├── logo.svg
│   ├── profilePic.png
│   └── ...
│
├── next.config.ts                # Configuração do Next.js
├── tailwind.config.ts            # Configuração do Tailwind CSS
├── tsconfig.json                 # Configuração do TypeScript
├── package.json                  # Dependências e scripts
└── README.md                     # Este arquivo
```

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18.x ou superior
- **npm** 9.x ou superior (ou yarn/pnpm)

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd devstack
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse a aplicação**
   
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

   A aplicação suporta os seguintes idiomas:
   - Inglês: `http://localhost:3000/en`
   - Português BR: `http://localhost:3000/pt-BR`
   - Espanhol: `http://localhost:3000/es`
   - Francês: `http://localhost:3000/fr`

## 📜 Scripts Disponíveis

### `npm run dev`
Inicia o servidor de desenvolvimento em modo watch.
- URL: `http://localhost:3000`
- Hot reload habilitado
- Erros exibidos no console

### `npm run build`
Cria uma build de produção otimizada.
- Gera arquivos estáticos otimizados
- Minifica código e assets
- Pronto para deploy

### `npm run start`
Inicia o servidor de produção (após build).
- Requer `npm run build` antes
- Servidor otimizado para produção

### `npm run lint`
Executa o ESLint para verificar qualidade do código.
- Verifica erros e warnings
- Sugere melhorias de código

## 🌍 Internacionalização (i18n)

A aplicação utiliza **next-intl** para gerenciamento completo de internacionalização.

### Idiomas Suportados

| Idioma | Código | Status |
|--------|--------|--------|
| Inglês | `en` | ✅ Completo |
| Português (Brasil) | `pt-BR` | ✅ Completo |
| Espanhol | `es` | ✅ Completo |
| Francês | `fr` | ✅ Completo |

### Rotas Localizadas

As rotas são traduzidas automaticamente conforme o idioma:

| Rota Base | Inglês | Português BR | Espanhol | Francês |
|-----------|--------|--------------|----------|--------|
| `/login` | `/login` | `/conectar` | `/conectar` | `/connecter` |
| `/about` | `/about` | `/sobre` | `/sobre` | `/a-propos` |
| `/contact` | `/contact` | `/contato` | `/contacto` | `/contact` |
| `/projects` | `/projects` | `/projetos` | `/proyectos` | `/projets` |

### Adicionando Novas Traduções

1. **Adicione a chave nos arquivos JSON**
   
   Edite os arquivos em `messages/`:
   ```json
   {
     "novaChave": {
       "titulo": "Título",
       "descricao": "Descrição"
     }
   }
   ```

2. **Use no componente**
   ```tsx
   import { useTranslations } from 'next-intl';
   
   const t = useTranslations('novaChave');
   
   return <h1>{t('titulo')}</h1>;
   ```

3. **Adicione rotas localizadas (se necessário)**
   
   Edite `i18n/routing.ts`:
   ```typescript
   pathnames: {
     "/nova-rota": {
       "en": "/new-route",
       "pt-BR": "/nova-rota",
       "es": "/nueva-ruta",
       "fr": "/nouvelle-route"
     }
   }
   ```

## 🗺 Rotas e Páginas

### Estrutura de Rotas

Todas as rotas estão dentro de `app/[locale]/`, onde `[locale]` é o código do idioma.

### Páginas Disponíveis

#### `/login` (ou `/conectar` / `/connecter`)
- **Componente**: `app/[locale]/login/page.tsx`
- **Descrição**: Página de autenticação
- **Funcionalidades**: Formulário de login, login com GitHub

#### `/about` (ou `/sobre` / `/a-propos`)
- **Componente**: `app/[locale]/about/page.tsx`
- **Descrição**: Página sobre o desenvolvedor
- **Funcionalidades**: Perfil, stack tecnológico, estatísticas

#### `/projects` (ou `/projetos` / `/proyectos` / `/projets`)
- **Componente**: `app/[locale]/projects/page.tsx`
- **Descrição**: Portfólio de projetos
- **Funcionalidades**: Carrossel de projetos, cards interativos

#### `/contact` (ou `/contato` / `/contacto`)
- **Componente**: `app/[locale]/contact/page.tsx`
- **Descrição**: Formulário de contato
- **Funcionalidades**: Envio de mensagens, informações de contato

## 🧩 Componentes

### Header (`components/Header.tsx`)
Navegação principal com:
- Logo e nome da aplicação
- Links de navegação (About, Projects, Contact)
- Seletor de idioma
- Botão "Hire Me"

**Props**: Nenhuma (usa hooks internos)

### Footer (`components/Footer.tsx`)
Rodapé com:
- Links legais (Privacy Policy, Terms of Service, Help Center)
- Copyright

**Props**: Nenhuma (usa traduções internas)

### ProjectsCarousel (`components/ProjectsCarousel.tsx`)
Carrossel responsivo de projetos:
- Navegação por botões (anterior/próximo)
- Responsivo: 1 item mobile, até 3 desktop
- Contador de projetos

**Props**:
```typescript
{
  projects: Project[];
}

type Project = {
  id: string;
  image: string;
  technologies: string[];
  description: string;
}
```

### ProjectCard (`components/ProjectCard.tsx`)
Card individual de projeto:
- Imagem do projeto
- Badges de tecnologias
- Descrição do projeto

**Props**:
```typescript
{
  image: string;
  technologies: string[];
  description: string;
}
```

### Button (`components/Button.tsx`)
Botão reutilizável com variantes.

### Input (`components/Input.tsx`)
Campo de entrada de texto.

### TextArea (`components/TextArea.tsx`)
Área de texto multilinha.

## 🎨 Design System

### Cores

O projeto utiliza variáveis CSS para cores, definidas em `app/globals.css`:

```css
--background: #0a0c10      /* Fundo principal */
--foreground: #ffffff      /* Texto principal */
--surface: #11141b         /* Superfícies (cards, etc) */
--primary: #2563eb         /* Cor primária (azul) */
--primary-hover: #1d4ed8   /* Hover do primário */
--border: #1e293b          /* Bordas */
--muted: #94a3b8           /* Texto secundário */
```

### Tipografia

- **Fonte Sans**: Geist Sans (via Next.js)
- **Fonte Mono**: Geist Mono (via Next.js)

### Espaçamento

Utiliza o sistema de espaçamento do Tailwind CSS:
- `px-6`, `py-12` - Container padrão
- `gap-6`, `gap-8` - Espaçamento entre elementos
- `max-w-6xl` - Largura máxima do container

### Breakpoints Responsivos

- **Mobile**: `< 768px` - 1 projeto visível no carrossel
- **Tablet**: `768px - 1023px` - 2 projetos visíveis
- **Desktop**: `≥ 1024px` - 3 projetos visíveis

## 💻 Desenvolvimento

### Convenções de Código

- **TypeScript**: Tipagem estrita habilitada
- **Componentes**: Funções com PascalCase
- **Arquivos**: kebab-case para arquivos, PascalCase para componentes
- **Hooks**: Prefixo `use` (ex: `useTranslations`, `useRouter`)

### Estrutura de Componentes

```tsx
'use client'; // Se necessário

import { useTranslations } from 'next-intl';

export function ComponentName() {
  const t = useTranslations('namespace');
  
  return (
    // JSX
  );
}
```

### Adicionando Novos Componentes

1. Crie o arquivo em `components/ComponentName.tsx`
2. Exporte como função nomeada
3. Use TypeScript para tipagem
4. Adicione traduções se necessário
5. Documente props e uso

## 🏗 Build e Deploy

### Build de Produção

```bash
npm run build
```

Isso irá:
- Otimizar todos os assets
- Gerar páginas estáticas quando possível
- Minificar código JavaScript e CSS
- Criar bundle otimizado

## 📝 Licença

Este projeto é privado e proprietário.
