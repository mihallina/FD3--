import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MobileCompany.css";
import MobileClient from "./MobileClient";
import { loadCompanyData } from '../redux/clientsLoad';
import {
  setFilter,
  addClient,
  editClient,
  deleteClient,
} from "../redux/clientsSlice";

const MobileCompany = () => {
  const dispatch = useDispatch();

  const { companyName, clients, filter, loading, error } = useSelector(
    (state) => state.clients
  );

  useEffect(() => {
    dispatch(loadCompanyData());
  }, [dispatch]);

  const filteredClients = useMemo(() => {
    switch (filter) {
      case "active":
        return clients.filter((c) => c.balance > 0);
      case "blocked":
        return clients.filter((c) => c.balance <= 0);
      default:
        return clients;
    }
  }, [clients, filter]);

  if (loading === 1) return <div>Загрузка...</div>;
  if (error === 3) return <div>Ошибка: {error}</div>;

  console.log("MobileCompany render");

  return (
    <div className="MobileCompany">
      <h1>{companyName}</h1>

      <div>
        <button onClick={() => dispatch(setFilter("all"))}>Все</button>
        <button onClick={() => dispatch(setFilter("active"))}>Активные</button>
        <button onClick={() => dispatch(setFilter("blocked"))}>
          Заблокированные
        </button>
      </div>

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
        <tbody>
          {filteredClients.map((client) => (
            <MobileClient
              key={client.id}
              client={client}
              onEdit={(updatedClient) => dispatch(editClient(updatedClient))}
              onDelete={(id) => dispatch(deleteClient(id))}
            />
          ))}
        </tbody>
      </table>
      <button onClick={() => dispatch(addClient())}>добавить клиента</button>
    </div>
  );
};

export default React.memo(MobileCompany);
