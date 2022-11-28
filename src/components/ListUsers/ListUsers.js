import axios from 'axios';
import { useEffect, useState } from 'react';
import TableUsers from '../TableUsers/TableUsers';

const ListUsers = () => {
    
    let [contacts, setContacts] = useState([]);

    async function handleDelete(id){
        let response = await axios.delete(`http://localhost:5000/contacts/${id}`);
        console.log(response.status);
        handleFetch();
        // if(response.status == 200){
        //     alert("Deletado com Sucesso");
        // }
    }

    async function handleFetch() {
        // let response = await fetch("http://localhost:5000/contacts");
        // let data = await response.json();
        let response = await axios.get("http://localhost:5000/contacts");
        setContacts(response.data);
        //console.log(response.data);
    }

    useEffect(()=>{
        handleFetch();
    },[]);

    return (
        <main>
            <TableUsers data={contacts} handleDelete={handleDelete}/>
        </main>
    );
}

export default ListUsers;