import React from "react";
import PropTypes from "prop-types";

import MobileClient from "./MobileClient";

import "./MobileCompany.css";
import events from "./Events";

class MobileCompany extends React.PureComponent {
  state = {
    clients: this.props.clients.map((client) => ({ ...client })),
    filter: "all",
  };

  componentDidMount() {
    events.on("client:delete", this.handleDelete);
    events.on("client:edit", this.handleEdit);
    events.on("client:add", this.handleAdd);
  }

  componentWillUnmount() {
    events.removeListener("client:delete", this.handleDelete);
    events.removeListener("client:edit", this.handleEdit);
    events.removeListener("client:add", this.handleAdd);
  }

  handleDelete = (id) => {
    this.setState((prev) => ({
      clients: prev.clients.filter((c) => c.id !== id),
    }));
  };

  handleEdit = (client) => {
    this.setState((prev) => ({
      clients: prev.clients.map((c) =>
        c.id === client.id ? { ...client } : c
      ),
    }));
  };

  handleAdd = () => {
    const newId =
      this.state.clients.reduce((max, c) => Math.max(max, c.id), 0) + 1;
    const newClient = {
      id: newId,
      fam: "[новый]",
      name: "",
      otch: "",
      balance: 0,
      isEditing: true,
    };

    this.setState((prev) => ({ clients: [...prev.clients, newClient] }));
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  getFilteredClients = () => {
    const { clients, filter } = this.state;
    if (filter == "active") {
      return clients.filter((c) => c.balance > 0);
    }
    if (filter == "blocked") {
      return clients.filter((c) => c.balance <= 0);
    } else {
      return clients;
    }
  };

  render() {
    console.log("MobileCompany render");

    const clientsToShow = this.getFilteredClients();
    const clientsCode = clientsToShow.map((client) => (
      <MobileClient key={client.id} client={client} />
    ));

    return (
      <div className="MobileCompany">
        <input
          type="button"
          value="Все"
          onClick={() => this.setFilter("all")}
        />
        <input
          type="button"
          value="Активные"
          onClick={() => this.setFilter("active")}
        />
        <input
          type="button"
          value="Заблокированные"
          onClick={() => this.setFilter("blocked")}
        />
        <table>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отечество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>{clientsCode}</tbody>
        </table>
        <input
          type="button"
          value="Добавить клиента"
          onClick={this.handleAdd}
        />
      </div>
    );
  }
}

export default MobileCompany;
