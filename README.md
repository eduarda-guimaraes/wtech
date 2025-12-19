# 🚀 WTech - GitHub Viewer

O **WTech** é uma aplicação moderna desenvolvida em **React** e **TypeScript** para consulta de perfis do GitHub.  
A ferramenta permite pesquisar utilizadores, visualizar informações detalhadas de perfil e listar repositórios de forma organizada e responsiva.

---

## 💻 Sobre o Projeto

Este projeto foi construído como parte do **Desafio do Módulo 3**, com o objetivo de criar uma interface fluída que consome a API do GitHub.  
O design foi implementado com base em protótipos do **Figma**, priorizando a experiência do utilizador com feedbacks visuais de carregamento e tratamento de erros.

---

## ✨ Funcionalidades

- **Busca por Utilizador**: Campo de pesquisa com validação para encontrar qualquer perfil no GitHub.  
- **Feedback de Carregamento**: Ecrã de loading centralizado e animado durante as chamadas à API.  
- **Perfil Detalhado**: Exibição de avatar, nome e biografia do utilizador consultado.  
- **Listagem de Repositórios**: Cards estilizados apresentando o nome e a descrição de cada projeto.  
- **Página de Especificações**: Visualização detalhada de cada repositório, incluindo privacidade, linguagem e link direto, utilizando um sistema de sombras (*box shadow*) para elevação visual.  
- **Responsividade**: Layout adaptado para Desktop, Tablet e Mobile (com a remoção estratégica da logo lateral em ecrãs pequenos).  

---

## 🛠️ Tecnologias

- **React (Vite)**  
- **TypeScript**  
- **Tailwind CSS** (Estilização e Responsividade)  
- **React Router Dom** (Gestão de Rotas)  
- **Axios** (Integração com API GitHub)  

---

## 🚀 Como Executar a Aplicação

Clonar o repositório:

```bash
git clone https://github.com/eduarda-guimaraes/wtech.git
```

Instalar dependências:

```bash
npm install
```

Iniciar o servidor de desenvolvimento:

```bash
npm start
```

## 📝 Requisitos Técnicos Atendidos

- [x] Integração com as APIs **/users/{username}** e **/repos**  
- [x] Persistência de dados entre rotas via **state** do `useLocation`  
- [x] Validação de inputs e tratamento de erro (**Toast**)  
- [x] Componente de **Loading** personalizado com animação
- [x] Design **responsivo** para dispositivos móveis

## 🙋‍♀️ Desenvolvido por

| [<img src="https://avatars.githubusercontent.com/eduarda-guimaraes" width="100px;" alt="Foto de perfil do GitHub de Eduarda Guimarães"/>](https://github.com/eduarda-guimaraes) |
| :---: |
| **Eduarda Guimarães** |
