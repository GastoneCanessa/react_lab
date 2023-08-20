import React, { useState } from "react";
import styles from '../style/EditUser.module.css';

export default function UserEditModal({ user, cancelEdit, updateUser }) {
  const [inputId, setInputId] = useState(user.id);
  const [inputName, setInputName] = useState(user.name);
  const [inputUsername, setInputUsername] = useState(user.username);
  const [inputEmail, setInputEmail] = useState(user.email);

  const cancel = () => {
    cancelEdit();
  };

  const submit = () => {
    updateUser({
      id: inputId,
      name: inputName,
      username: inputUsername,
      email: inputEmail,
    });
    cancel();
  };

  return (
    <div className={styles.modalBackdrop} onClick={cancel}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1>Edit User:</h1>
        <div className={styles.field}>
          <label htmlFor="newName">Name:</label>
          <input
            type="text"
            id="newName"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="newUsername">Username:</label>
          <input
            type="text"
            id="newUsername"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="newEmail">Email:</label>
          <input
            type="email"
            id="newEmail"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <button className={styles.submitButton} onClick={submit}>
            Update
          </button>
          <button className={styles.cancelButton} onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}


