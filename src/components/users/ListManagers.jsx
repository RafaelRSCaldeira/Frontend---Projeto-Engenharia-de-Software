import React, { useEffect, useState } from 'react'
import { listManagers, deleteManager } from '../../services/users/ManagerService'
import { useNavigate } from 'react-router-dom'

const ListManagers = () => {

    const [managers, setManagers] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllManagers();
    }, [])

    function getAllManagers() {
        listManagers().then((response) => {
            setManagers(response.data);
        }).catch(error => {
            // console.error(error);
        })
    }

    function addNewManager() {
        navigator('/users/manager/add-user');
    }

    function updateManager(id) {
        navigator(`/users/manager/edit-user/${id}`)
    }

    function dltManager(id) {
        deleteManager(id).then((response) => {
            getAllManagers();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center mt-5">List of Managers</h2>
            <button className='btn btn-primary mb-2' onClick={addNewManager}>Add Manager</button>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            managers.map(manager =>
                                <tr key={manager.id}>
                                    <td>{manager.id}</td>
                                    <td>{manager.name}</td>
                                    <td>{manager.email}</td>
                                    <td>{manager.role}</td>
                                    <td>{manager.createdAt}</td>
                                    <td>{manager.updatedAt}</td>
                                    <td style={{ width: "175px" }}>
                                        <button className='btn btn-info me-2' onClick={() => updateManager(manager.id)}>Update</button>
                                        <button className='btn btn-danger' onClick={() => dltManager(manager.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListManagers;