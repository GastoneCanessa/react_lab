import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/ListUser.module.css';
import EditUser from './AppEditUser';
import { useBanner } from '../contexts/BannerContext';

export default function ListUser({users, setUsers, setUserIndex}) {
    const [userEdit, setUserEdit] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const { setBannerMessage, setBannerType } = useBanner();

   

    useEffect(() => {       

        if (users[0] == null){
            async function fetchData() {
                try {
                    
                    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                    setUsers(response.data);
                    setUserIndex(response.data.length);
                    setBannerMessage("Caricamento dati avvenuto con successo!");
                    setBannerType("Success");
                } catch (error) {
                    console.error("Errore durante il fetch dei dati:", error);
                    setBannerMessage("Probblema durante il caricamento dei!");
                    setBannerType("Error");
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        }    
    }, [users, setUsers, setUserIndex, setBannerMessage, setBannerType]);

    if (loading) return <div>Loading...</div>;

    const updateUser = (updatedUser) => {
        setUsers(prevUsers => {
            return prevUsers.map(user => 
                user.id === updatedUser.id ? updatedUser : user
            );
        });
    }

    const deleteUser = (id) => {
        try{
            setUsers(users => users.filter(user => user.id !== id));
            setBannerMessage("Success delete!");
            setBannerType("Success");
        }
        catch(error){
            console.error("Error:", error);
            setBannerMessage("Problem occurs on deletion!");
            setBannerType("Error");
        }
        
    };

    const editUser = (user) => {
        // Set the initial data to display in the modal
        setUserEdit(user);
      
        // Display the modal
        if (userEdit === user) {
            setShowEditModal(!showEditModal);
        }else{
            setShowEditModal(true);
        }
        
    }

    const cancelEdit = () => {
        setShowEditModal(false);
    }


    return(
        <>
        <table className={styles.table}>
            {/* Table Header Row */}
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.th}>User ID</th>
                    <th className={styles.th}>Name</th>
                    <th className={styles.th}>Username</th>
                    <th className={styles.th}>Email</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {/* Table Elements (Rows) */}
                {users.map(user => (
                    <tr key={user.id} className={styles.tr}>
                        <td className={styles.td}>{user.id}</td>
                        <td className={styles.td}>{user.name}</td>
                        <td className={styles.td}>{user.username}</td>
                        <td className={styles.td}>{user.email}</td>
                        <td className={styles.td}>
                            <button className={styles.button} onClick={() => editUser(user)}>Edit</button>
                            <button className={styles.button} onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {showEditModal && (<EditUser user={userEdit} cancelEdit={cancelEdit} updateUser={updateUser}/>)}
        </>
    )
}