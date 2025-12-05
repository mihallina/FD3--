import React, { useEffect, useRef, useState } from "react";
import "./MobileClient.css";
import events from "./Events";

function MobileClient({client}) {
  const [isEditing, setIsEditing] = useState(client.isEditing || false);

  const famRef = useRef(null);
  const nameRef = useRef(null);
  const otchRef = useRef(null);
  const balanceRef = useRef(null);

  function toggleEdit() {
    setIsEditing((prev) => !prev);
  }

  useEffect(() => {
    if(isEditing && famRef.current){
      famRef.current.focus();
    }
  })

  function save() {
    const fam = famRef.current ? famRef.current.value : client.fam;
    const name = nameRef.current ? nameRef.current.value : client.name;
    const otch = otchRef.current ? otchRef.current.value : client.otch;
    const balance = balanceRef.current
      ? parseFloat(balanceRef.current.value)
      : 0;
    
    const updatedClient = {
      ...client, fam, name, otch, balance, isEditing: false,
    }

    events.emit("client:edit", updatedClient);
    setIsEditing(false);
  }

  function cancel() {
    if(client.fam === 'новый') {
      events.emit("client:delete", client.id);
    } else {
      setIsEditing(false)
    }
  }

  function deleteCl() {
    if(window.confirm(`Удалить клиента "${client.fam}"?`)) {
      events.emit("client:delete", client.id)
    }
  }

  console.log(`MobileClient id= ${client.id} render`)

  return (
    <tr className="row">
      <td>
        {isEditing ? (
          <input type="text" defaultValue={client.fam} ref={famRef} />
        ) : (
          client.fam
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" defaultValue={client.name} ref={nameRef} />
        ) : (
          client.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" defaultValue={client.otch} ref={otchRef} />
        ) : (
          client.otch
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" defaultValue={client.balance} ref={balanceRef} />
        ) : (
          client.balance
        )}
      </td>
      <td className={client.balance <= 0 ? "blocked" : "active"}>
        {client.balance <= 0 ? "blocked" : "active"}
      </td>
      <td>
        {isEditing ? (
          <div className="save-cancel">
            <input type="button" value="✓" className="save" onClick={save} />
            <input
              type="button"
              value="×"
              className="cancel"
              onClick={cancel}
            />
          </div>
        ) : (
          <input type="button" value="редактировать" onClick={toggleEdit} />
        )}
      </td>
      <td><input type="button" value="удалить" onClick={deleteCl} /></td>
    </tr>
  );
}

export default React.memo(MobileClient);
