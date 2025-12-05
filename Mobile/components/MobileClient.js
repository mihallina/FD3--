import React from "react";
import "./MobileClient.css";
import events from "./Events";

class MobileClient extends React.PureComponent {
  famRef = React.createRef();
  nameRef = React.createRef();
  otchRef = React.createRef();
  balanceRef = React.createRef();

  state = {
    isEditing: this.props.client.isEditing || false,
  };

  toggleEdit = () => {
    const willEditing = !this.state.isEditing;

    this.setState({ isEditing: willEditing }, () => {
      if (willEditing && this.famRef.current) {
        this.famRef.current.focus();
      }
    });
  };

  save = () => {
    const { client } = this.props;

    const fam = this.famRef.current ? this.famRef.current.value : client.fam;
    const name = this.nameRef.current
      ? this.nameRef.current.value
      : client.name;
    const otch = this.otchRef.current
      ? this.otchRef.current.value
      : client.otch;
    const balance = this.balanceRef.current
      ? parseFloat(this.balanceRef.current.value)
      : 0;

    const updatedClient = {
      ...client,
      fam,
      name,
      otch,
      balance,
      isEditing: false,
    };

    events.emit("client:edit", updatedClient);
    this.setState({ isEditing: false });
  };

  cancel = () => {
    const { client } = this.props;
    if (client.fam === "новый") {
      events.emit("client:delete", client.id);
    } else {
      this.setState({ isEditing: false });
    }
  };

  delete = () => {
    if (window.confirm(`Удалить клиента "${this.props.client.fam}"?`)) {
      events.emit("client:delete", this.props.client.id);
    }
  };

  render() {
    let { client } = this.props;
    console.log("MobileClient id=" + client.id + " render");

    return (
      <tr className="row">
        <td>
          {this.state.isEditing ? (
            <input type="text" defaultValue={client.fam} ref={this.famRef} />
          ) : (
            client.fam
          )}
        </td>
        <td>
          {this.state.isEditing ? (
            <input type="text" defaultValue={client.name} ref={this.nameRef} />
          ) : (
            client.name
          )}
        </td>
        <td>
          {this.state.isEditing ? (
            <input type="text" defaultValue={client.otch} ref={this.otchRef} />
          ) : (
            client.otch
          )}
        </td>
        <td>
          {this.state.isEditing ? (
            <input
              type="text"
              defaultValue={client.balance}
              ref={this.balanceRef}
            />
          ) : (
            client.balance
          )}
        </td>
        <td className={client.balance <= 0 ? "blocked" : "active"}>
          {client.balance <= 0 ? "blocked" : "active"}
        </td>
        <td>
          {this.state.isEditing ? (
            <div className="save-cancel">
              <input
                type="button"
                value="✓"
                className="save"
                onClick={this.save}
              />
              <input
                type="button"
                value="×"
                className="cancel"
                onClick={this.cancel}
              />
            </div>
          ) : (
            <input
              type="button"
              value="редактировать"
              onClick={this.toggleEdit}
            />
          )}
        </td>
        <td>
          <input type="button" value="удалить" onClick={this.delete} />
        </td>
      </tr>
    );
  }
}

export default MobileClient;
