🐾 Projeto Onças do Iguaçu — Plataforma Digital & Hub de Conservação

Plataforma web institucional desenvolvida para o **Projeto Onças do Iguaçu**, iniciativa de conservação das onças-pintadas no Parque Nacional do Iguaçu (PNI), associada ao **Instituto Pró-Carnívoros**.

O projeto realizou a migração completa da presença digital da ONG — saindo do antigo ambiente WordPress/cPanel — para uma infraestrutura moderna, performática, **100% responsiva** e focada na comunicação afetiva e humana da instituição.

---


## 🎯 Requisitos do Projeto & Soluções Entregues

| Requisito do Briefing | Solução Implementada |
| :--- | :--- |
| **Responsividade & Mobile First** | **Interface 100% responsiva**, adaptada com precisão para smartphones, tablets, notebooks e monitores de alta resolução. |
| **Identidade Visual & Tom Afetivo** | Aplicação da nova identidade visual com paleta e elementos institucionais, mantendo uma navegação acolhedora e acessível. |
| **Hub Institucional Digital** | Apresentação estruturada do histórico, missão, equipe e frentes de atuação (pesquisa, coexistência humano-fauna, engajamento e comunicação). |
| **Monitoramento das Onças** | Seção dinâmica integrada ao Sanity CMS para catalogar, contar a história e exibir o status das onças monitoradas no PNI. |
| **Acervo & Materiais Educativos** | Central de downloads para disponibilização de guias, manuais técnicos, boletins e artigos científicos. |
| **Estruturação da Loja Virtual** | Vitrine e catálogo de produtos integrados para permitir a migração das vendas presenciais para o meio digital. |
| **Captação de Recursos & Doações** | Páginas dedicadas para engajamento de parceiros, informações sobre segurança e formas diretas de doação. |
| **Migração de Plataforma & DNS** | Transição do WordPress para Vercel + Sanity, garantindo tempo de carregamento reduzido, certificado SSL automático e SEO aprimorado. |

---

## 📱 Experiência do Usuário (UI/UX) & Responsividade

- **Design Adaptável:** Layouts fluidos construídos com Tailwind CSS v4, garantindo uma leitura perfeita em telas de qualquer tamanho (desde 320px até telas 4K).
- **Componentes Mobile-Friendly:** Carrosséis de toque (touch-swiping) via Swiper v14, menus expansíveis acessíveis e imagens otimizadas dinamicamente de acordo com a resolução da tela do usuário.

---

## 🛠️ Tech Stack & Arquitetura

### **Core & Renderização**
- **[Next.js 16 (App Router)](https://nextjs.org/):** Arquitetura moderna de rotas, geração estática e SSR para alta performance, SEO e carregamento veloz.
- **[React 19](https://react.dev/):** Biblioteca principal de componentes de interface.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática end-to-end garantindo confiabilidade e facilidade de manutenção.

### **Gestão de Conteúdo (Headless CMS)**
- **[Sanity.io v5](https://www.sanity.io/):** Headless CMS flexível para gerenciamento autônomo da equipe de comunicação (onças, boletins, materiais, produtos).
- **`next-sanity` & `@portabletext/react`:** Integração nativa para exibição de conteúdos e rich-text sem impactar a velocidade do site.

### **Interface, Mídia & Estilização**
- **[Tailwind CSS v4](https://tailwindcss.com/):** Estilização utilitária e suporte completo a breakpoints responsivos.
- **[Swiper v14](https://swiperjs.com/):** Sliders e carrosséis otimizados para gestos em dispositivos móveis.
- **[Lucide React](https://lucide.dev/) & [@sanity/icons](https://icons.sanity.build/):** Conjunto de ícones vetoriais leves e adaptáveis.
- **[Styled Components](https://styled-components.com/):** Estilizações específicas e componentes encapsulados.

---

## 📂 Estrutura do Repositório

```text
projeto-oncas-do-iguacu/
├── app/                  # Rotas e páginas da aplicação (Next.js App Router)
├── src/                  # Componentes de UI responsivos e utilitários
├── sanity/               # Schemas de dados e configurações do Sanity Studio
├── public/               # Mídias e ativos estáticos da instituição
├── .env.local            # Chaves de ambiente do Sanity (desenvolvimento)
├── sanity.config.ts      # Configuração global do CMS
├── next.config.ts        # Otimização de imagens e rotas do Next.js
└── package.json          # Dependências e scripts de execução

---

## 📸 Preview

<div align="center">
  <br />
  <h3>📱 Responsividade Mobile & 💻 Experiência Desktop</h3>
  <br />
  <img src="https://github.com/user-attachments/assets/66fd25a5-ff1d-4374-ad9b-0b857ce97484" alt="Preview Desktop" width="80%" />
  <br /><br />
  <img src="https://github.com/user-attachments/assets/6178471d-e26f-4517-b503-ac4f617cc7ca" alt="Preview Mobile" width="30%" />
  <br /><br />
  <h3>🎥 Navegação pela Plataforma</h3>
  <img src="https://github.com/user-attachments/assets/05838941-4a0d-4ba4-9653-5b963ef1b100" alt="GIF da Navegação" width="85%" />
  <br />
</div>

---

## 🌐 Produção & Hospedagem
- **Hospedagem Frontend:** Vercel
- **Gestão de Conteúdo:** Sanity Studio
- **Domínio Oficial:** https://www.projetooncasdoiguacu.org

---

👩🏽‍💻💻 Desenvolvido com 💚 por [Daniele K Santos](https://danieleksantos.vercel.app/)
