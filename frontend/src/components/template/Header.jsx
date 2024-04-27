// Importa o arquivo CSS para aplicar estilos específicos ao componente de cabeçalho
import "./Header.css";
// Importa a biblioteca React, essencial para usar JSX e criar componentes
import React from "react";

// Define e exporta o componente funcional, que recebe props como argumento
export default (props) => (
  // Utiliza a tag 'header' com classes CSS para estilização e responsividade, visível apenas em telas pequenas para cima
  <header className="header d-none d-sm-flex flex-column">
    {/* // Cria um título 'h1' com margem superior, incluindo um ícone dinâmico baseado nas props e o título */}
    <h1 className="mt-3">
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    {/* // Adiciona um parágrafo com uma classe para texto em estilo lead e cor text-muted, mostrando o subtítulo */}
    <p className="lead text-muted">{props.subtitle}</p>
  </header>
);
