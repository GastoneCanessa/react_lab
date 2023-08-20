import React, { useState } from 'react';
import styles from '../style/AddUser.module.css';

export default function AddUser({ users, setUsers, usersIndex, setUserIndex }) {

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const field = id.replace('new', '').toLowerCase(); // convert newName to name, newUsername to username, etc.
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  const addUser = () => {
    setUsers(prevUsers => [...prevUsers, { ...user, id: usersIndex + 1 }]);
    setUserIndex(usersIndex + 1);
    // Reset form after adding
    setUser({ name: '', username: '', email: '' });
  };

  return (
    <form className={styles.userForm}>
    <h1>Add a New User:</h1>
    <div className={styles.field}>
      <label htmlFor="newName">Name:</label>
      <input 
        type="text" 
        id="newName" 
        className={styles.userInput}
        value={user.name} 
        onChange={handleChange} 
        placeholder="Enter your name..." 
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="newUsername">Username:</label>
      <input 
        type="text" 
        id="newUsername" 
        className={styles.userInput}
        value={user.username} 
        onChange={handleChange} 
        placeholder="Enter your username..." 
      />
    </div>
    <div className={styles.field}>
      <label htmlFor="newEmail">Email:</label>
      <input 
        type="email" 
        id="newEmail" 
        className={styles.userInput}
        value={user.email} 
        onChange={handleChange} 
        placeholder="Enter your email..." 
      />
    </div>
    <div className={styles.field}>
      <button className={styles.submitButton} type="button" onClick={addUser}>Add User</button>
    </div>
  </form>
  );
}