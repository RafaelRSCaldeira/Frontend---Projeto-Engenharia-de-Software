import React, {useEffect, useState} from 'react'
import { listUsers, deleteUser } from '../services/UserService'
import { useNavigate } from 'react-router-dom'

const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, [])

    function getAllUsers() {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewUser() {
        navigator('/users/add-user');
    }

    function updateUser(id) {
        navigator(`/users/edit-user/${id}`)
    }

    function dltUser(id) {
        deleteUser(id).then((response) => {
            getAllUsers();
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div className="container">
        <h2 className="text-center">List of Users</h2>
        <button className='btn btn-primary mb-2' onClick={addNewUser}>Add User</button>
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td style={{width: "175px"}}>
                                <button className='btn btn-info me-2' onClick={() => updateUser(user.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => dltUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListUserComponent