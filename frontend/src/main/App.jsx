// Importa os estilos CSS do Bootstrap para estilização geral
import "bootstrap/dist/css/bootstrap.min.css";
// Importa os estilos CSS da biblioteca Font Awesome para uso de ícones
import "font-awesome/css/font-awesome.min.css";
// Importa o arquivo CSS específico do aplicativo para estilos personalizados
import "./App.css";
// Importa a biblioteca React, essencial para usar JSX e criar componentes
import React from "react";
// Importa o componente BrowserRouter do pacote react-router-dom para habilitar roteamento
import { BrowserRouter } from "react-router-dom";

// Importa o componente Logo, que é parte da UI
import Logo from "../components/template/Logo";
// Importa o componente Nav, que serve como navegação
import Nav from "../components/template/Nav";
// Importa o componente Routes, que define as rotas do aplicativo
import Routes from "./Routes";
// Importa o componente Footer, que é o rodapé da página
import Footer from "../components/template/Footer";

// Define e exporta o componente funcional, que aceita props como argumento
export default (props) => (
  // Utiliza o BrowserRouter para envolver toda a aplicação e habilitar o roteamento
  <BrowserRouter>
    {/* // Cria uma div com a classe 'app' para encapsular todos os componentes principais */}
    <div className="app">
      {/* // Injeta o componente Logo */}
      <Logo />
      {/* // Injeta o componente Nav para navegação */}
      <Nav />
      {/* // Injeta o componente Routes que controla o roteamento das páginas */}
      <Routes />
      {/* // Injeta o componente Footer que aparece no fim da página */}
      <Footer />
    </div>
  </BrowserRouter>
);
