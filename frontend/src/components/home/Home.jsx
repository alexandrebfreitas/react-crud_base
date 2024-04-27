// Importa a biblioteca React, essencial para usar JSX e criar componentes React
import React from "react";
// Importa o componente Main de um diretório acima dentro da pasta 'template'
import Main from "../template/Main";

// Define e exporta o componente funcional, que recebe props como argumento
export default (props) => (
  // Utiliza o componente Main, passando props para ícone, título e subtítulo
  <Main
    icon="home"
    title="Início"
    subtitle="Segundo Projeto do capítulo de React."
  >
    {/* // Inclui uma div com a classe 'display-4' que contém o texto de boas-vindas */}
    <div className="display-4">Bem Vindo!</div>
    {/* // Inclui uma linha horizontal para separar visualmente o conteúdo */}
    <hr />
    {/* // Adiciona um parágrafo com classe 'mb-0' que fornece uma breve descrição do sistema */}
    <p className="mb-0">
      Sistema para exemplificar a construção de um cadastro desenvolvido em
      React!
    </p>
  </Main>
);
