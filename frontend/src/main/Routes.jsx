// Importa a biblioteca React, essencial para usar JSX e criar componentes
import React from "react";
// Importa os componentes Switch, Route e Redirect do pacote react-router para gerenciamento de rotas
// import { Switch, Route, Redirect } from "react-router";
import { Routes, Route } from "react-router-dom";

// Importa o componente Home, que representa a página inicial
import Home from "../components/home/Home";
// Importa o componente UserCrud, que representa a página de gestão de usuários
import UserCrud from "../components/user/UserCrud";

// Define e exporta o componente funcional que configura as rotas
export default (props) => (
  // Utiliza o componente Switch para agrupar as rotas e garantir que apenas uma rota seja renderizada por vez
  <Routes>
    {/* // Define uma rota exata para o caminho '/' que renderiza o componente Home */}
    <Route exact path="/" element={<Home />} />
    {/* // Define uma rota para '/users' que renderiza o componente UserCrud */}
    <Route path="/users" element={<UserCrud />} />
    {/* // Redireciona qualquer outro caminho não definido para a página inicial '/' */}
    {/* <Redirect from="*" to="/" /> */}
    <Route path="/*" element={<Home />} />
  </Routes>
);
