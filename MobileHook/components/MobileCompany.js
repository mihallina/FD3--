import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./MobileCompany.css";
import MobileClient from "./MobileClient";
import events from "./Events";

const MobileCompany = (props) => {
  const [clients, setClients] = useState(() =>
    props.clients.map((client) => ({ ...client }))
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    function handleDelete(id) {
      setClients((prevClients) => prevClients.filter((c) => c.id !== id));
    }

    function handleEdit(client) {
      setClients((prevClients) => {
        return prevClients.map((c) => (c.id === client.id ? { ...client } : c));
      });
    }

    events.on("client:delete", handleDelete);
    events.on("client:edit", handleEdit);
    events.on("client:add", handleAdd);

    return () => {
      events.off("client:delete", handleDelete);
      events.off("client:edit", handleEdit);
      events.off("client:add", handleAdd);
    };
  });

  function handleAdd() {
    const newId = clients.reduce((max, c) => Math.max(max, c.id), 0) + 1;
    const newClient = {
      id: newId,
      fam: "новый",
      name: "",
      otch: "",
      balance: 0,
      isEditing: true,
    };

    setClients((prev) => [...prev, newClient]);
  }

  const filterClients = useCallback((filter) => setFilter(filter), [filter])

  function getFilteredClients() {
    if (filter == "active") {
      return clients.filter((c) => c.balance > 0);
    }
    if (filter == "blocked") {
      return clients.filter((c) => c.balance <= 0);
    } else {
      return clients;
    }
  }

  const clientsToShow = getFilteredClients();
  const clientsCode = clientsToShow.map((client) => (
    <MobileClient key={client.id} client={client} />
  ));

  console.log("MobileCompany render");

  return (
    <div className="MobileCompany">
      <input type="button" value="Все" onClick={() => filterClients("all")} />
      <input
        type="button"
        value="Активные"
        onClick={() => filterClients("active")}
      />
      <input
        type="button"
        value="Заблокированные"
        onClick={() => filterClients("blocked")}
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
      <input type="button" value="Добавить клиента" onClick={handleAdd} />
    </div>
  );
};

export default React.memo(MobileCompany);
