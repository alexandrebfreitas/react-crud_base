// Importa o arquivo CSS para aplicar estilos específicos ao componente de logo
import "./Logo.css";

// Importa a imagem do logo a partir de uma pasta de assets, para ser usada no componente
import logo from "../../assets/imgs/logo.png";

// Importa a biblioteca React, essencial para usar JSX e criar componentes
import React from "react";

// Importa o componente Link do pacote react-router-dom para navegação entre rotas
import { Link } from "react-router-dom";

// Define e exporta o componente funcional, que aceita props como argumento
export default (props) => (
  // Utiliza a tag 'aside' para o componente de logo, que pode ser usada para conteúdo relacionado mas separado
  <aside className="logo">
    {/* // Cria um link para a página inicial, usando o componente Link para evitar */}
    {/* recarregamento da página */}
    <Link to="/" className="logo">
      {/* // Insere a imagem do logo com a propriedade 'src' apontando para a imagem */}
      {/* importada e um texto alternativo 'alt' */}
      <img src={logo} alt="logo" />
    </Link>
  </aside>
);
