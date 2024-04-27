// Importa o arquivo CSS para estilização específica do componente de navegação
import "./Nav.css";

// Importa a biblioteca React, necessária para usar JSX e construir componentes
import React from "react";

// Importa o componente Link do pacote react-router-dom para navegação entre rotas
import { Link } from "react-router-dom";

// Define e exporta o componente funcional, que recebe props como argumento
export default (props) => (
  // Utiliza a tag 'aside' para a área do menu, comumente usada para barras laterais em layouts
  <aside className="menu-area">
    {/* // Cria uma tag 'nav' para agrupar os elementos de navegação */}
    <nav className="menu">
      {/* // Comentário existente sugere que uma refatoração é necessária */}
      {/* posteriormente */}
      {/* Refatorar em casa! */}
      {/* // Define um link para a página inicial usando o componente Link, que */}
      {/* evita recarregamentos da página */}
      <Link to="/">
        {/* // Utiliza um ícone de casa da font-awesome e o texto "Início" para o */}
        {/* link */}
        <i className="fa fa-home"></i> Início
      </Link>
      {/* // Define um link para a página de usuários */}
      <Link to="/users">
        {/* // Utiliza um ícone de usuários da font-awesome e o texto "Usuários" */}
        {/* para o link */}
        <i className="fa fa-users"></i> Usuários
      </Link>
    </nav>
  </aside>
);
