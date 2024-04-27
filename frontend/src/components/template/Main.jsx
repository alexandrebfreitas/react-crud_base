// Importa o arquivo de estilos CSS para ser usado neste componente
import "./Main.css";

// Importa a biblioteca React, essencial para usar JSX e construir componentes React
import React from "react";

// Importa o componente Header de um arquivo local, para ser utilizado neste componente
import Header from "./Header";

// Define e exporta o componente funcional usando arrow function, que aceita props como argumento
export default (props) => (
  // Utiliza React.Fragment para agrupar múltiplos elementos sem adicionar elementos extras ao DOM
  <React.Fragment>
    {/* // Renderiza o componente Header, passando todas as props recebidas pelo */}
    {/* componente atual */}
    <Header {...props} />
    {/* // Define um elemento 'main' com classes CSS para estilização e */}
    {/* responsividade */}
    <main className="content container-fluid">
      {/* // Cria um div com classes de margem e padding, usando Bootstrap */}
      <div className="p-3 mt-3">
        {/* // Renderiza os filhos passados para este componente, permitindo */}
        {/* reutilização e composição */}
        {props.children}
      </div>
    </main>
  </React.Fragment>
);
