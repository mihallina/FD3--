import React, { useEffect, useRef, useState } from "react";
import "./MobileClient.css";

function MobileClient({client, onEdit, onDelete}) {
  const [isEditing, setIsEditing] = useState(client.isEditing || false);

  const famRef = useRef(null);
  const imRef = useRef(null);
  const otchRef = useRef(null);
  const balanceRef = useRef(null);

  useEffect(() => {
    if(isEditing && famRef.current){
      famRef.current.focus();
    }
  }, [isEditing]);

  const toggleEdit = () => {
    setIsEditing(prev => !prev);
  }

  function save() {
    const fam = famRef.current ? famRef.current.value : client.fam;
    const im = imRef.current ? imRef.current.value : client.im;
    const otch = otchRef.current ? otchRef.current.value : client.otch;
    const balance = balanceRef.current
      ? parseFloat(balanceRef.current.value)
      : 0;
    
    const updatedClient = {
      ...client, fam, im, otch, balance,
    }

    onEdit(updatedClient);
    setIsEditing(false);
  }

  function cancel() {
    if(client.fam === 'новый') {
      onDelete(client.id);
    } else {
      setIsEditing(false)
    }
  }

  function handleDelete() {
    if(window.confirm(`Удалить клиента "${client.fam}"?`)) {
      onDelete(client.id);
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
          <input type="text" defaultValue={client.im} ref={imRef} />
        ) : (
          client.im
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
      <td><input type="button" value="удалить" onClick={handleDelete} /></td>
    </tr>
  );
}

export default React.memo(MobileClient);
