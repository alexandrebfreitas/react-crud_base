// Importa a biblioteca React e a classe Component para criação de componentes baseados em classe
import React, { Component } from "react";
// Importa o módulo axios para realizar requisições HTTP
import axios from "axios";
// Importa o componente Main de um diretório acima na pasta 'template'
import Main from "../template/Main";

// Define propriedades padrão para serem usadas no componente Main, como ícone, título e subtítulo
const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!",
};

// URL base para as requisições ao backend
const baseUrl = "http://localhost:3001/users";
// Estado inicial do componente, definindo o usuário como objeto vazio e uma lista vazia
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

// Define a classe UserCrud estendendo de Component
export default class UserCrud extends Component {
  // Estado inicial do componente
  state = { ...initialState };

  // Carrega os usuários do servidor quando o componente é montado
  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
  }

  // Limpa o formulário redefinindo o estado do usuário para o estado inicial
  clear() {
    this.setState({ user: initialState.user });
  }

  // Salva ou atualiza um usuário no servidor
  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post"; // Escolhe o método HTTP baseado na existência de um ID
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl; // Escolhe a URL baseado na existência de um ID
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data); // Atualiza a lista de usuários
      this.setState({ user: initialState.user, list });
    });
  }

  // Retorna uma lista atualizada de usuários, adicionando ou removendo um usuário
  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id); // Remove o usuário pelo ID
    if (add) list.unshift(user); // Adiciona o usuário no início da lista se necessário
    return list;
  }

  // Atualiza os campos do formulário baseado no nome do input e valor
  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  // Renderiza o formulário de usuário
  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o e-mail..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={(e) => this.save(e)}>
              Salvar
            </button>

            <button
              className="btn btn-secondary ml-2"
              onClick={(e) => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Carrega um usuário para edição ao recuperar seus dados no formulário
  load(user) {
    this.setState({ user });
  }

  // Remove um usuário da lista e do servidor
  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      const list = this.getUpdatedList(user, false); // Atualiza a lista removendo o usuário
      this.setState({ list });
    });
  }

  // Renderiza a tabela de usuários
  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  // Renderiza as linhas da tabela para cada usuário na lista
  renderRows() {
    return this.state.list.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => this.remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  // Renderiza o componente Main com o formulário e a tabela de usuários
  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}
