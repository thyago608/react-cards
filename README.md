<p align="center">
 <img src="/public/logo.png" alt="react-cards" />
</p>

## Sobre

O projeto **React Cards**, é uma aplicação desenvolvida para fins de testes. A mesma foi desenvolvida dentro de um período de 2 dias, afim de cumprir o prazo estipulado.

---

## Tecnologias utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- [NextJS](https://fluxmusic.vercel.app)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com)
- [API REST](https://github.com/public-apis/public-apis)
- [Axios](https://axios-http.com/docs/intro)
- [Pexels-Javascript](https://github.com/pexels/pexels-javascript)
- [React Toastify](https://www.npmjs.com/package/react-toastify)

# Sobre a aplicação:

O desafio proposto solicitava a criação de uma aplicação com duas páginas. 
Na primeira página, temos um input solicitando que o usuário forneça um "nome". Na segunda página, temos a exibição de 5 cartas de baralho, em que cada carta deve exibir: "nome", "descrição" e uma "imagem". As informações exibidas dentro de cada carta deverá ser obtida através de uma API Rest escolhida pelo desenvolvedor.
Na segunda página existem dois botões: "Puxar mais cartas" e "Embaralhar Cartas". 

O botão de "Puxar mais cartas" permite puxar uma nova carta aleatoriamente, ele poderá ser utilizado apenas 3 vezes.
O botão de "Embaralhar Cartas" permite embaralhar a ordem das cartas que está sendo visualizando.

# Sobre a API:

Para o teste, foi escolhida a API do Pexels.

# Sobre as Tecnologias Utilizadas:

**NextJS**: Foi escolhido para utilizar o recurso de geração de páginas ao lado do servidor assim garantindo dados para SEO.

**Typescript**: Para realizar a tipagem das informações.

**Styled-components**: Escolha pessoal apenas, mas a aplicação poderia ser desenvolvida com css ou sass.

**Axios**: Cliente HTTP para realizar a requisição na camada do Servidor Next. A motivação de utilizar o recurso de API Route do Next, foi escolhida através da leitura da documentação do Pexels. O Cliente do Pexels utiliza uma API KEY. Logo informações secretas do usuário, não poderiam ficar disponíveis ao lado do Client e sim do Servidor.

**Pexels-Javascript**: O Pexels possui uma client para obter as informações dos servidor do Pexels.

**[React Toastify**: Biblioteca de notificações rápidas. A mesma é utilizada notificar o usuário quando o mesmo não fornecer um "nome", na primeira página.

---

# Como baixar o projeto

```bash
    # Clonar repositório
    $ git clone https://github.com/thyago608/react-cards

    # Entrar no diretório da aplicação
    $ cd react-cards

    # Baixar as depedências
    $ npm install

    # Executando a aplicação
    $ yarn dev

```

## Visite
[ReactCards](https://react-cards-ashy.vercel.app/)

Desenvolvido por Thyago Ribeiro 👋
