// Importa o arquivo CSS para aplicar estilos específicos ao componente de rodapé
import "./Footer.css";
// Importa a biblioteca React, necessária para usar JSX e criar componentes
import React from "react";

// Define e exporta o componente funcional, que recebe props como argumento
export default (props) => (
  // Utiliza a tag 'footer' para marcar o conteúdo como rodapé do site ou seção
  <footer className="footer">
    {/* // Utiliza a tag 'span' para agrupar o texto dentro do rodapé */}
    <span>
      {/* // Texto indicando que foi desenvolvido com amor, incluindo um ícone de coração com a classe para cor vermelha */}
      Desenvolvido com <i className="fa fa-heart text-danger"></i> por
      {/* // Utiliza 'strong' para dar ênfase ao nome do desenvolvedor, com uma parte do texto em cor vermelha */}
      <strong>
        {" "}
        Cod<span className="text-danger">3</span>r
      </strong>
    </span>
  </footer>
);
