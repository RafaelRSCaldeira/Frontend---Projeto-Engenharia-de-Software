import React, { useEffect, useState } from 'react'
import { deleteMentored, listMentoreds } from '../../services/users/MentoredService'
import { useNavigate } from 'react-router-dom'

const ListMentoreds = () => {

    const [mentoreds, setMentoreds] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllMentoreds();
    }, [])

    function getAllMentoreds() {
        listMentoreds().then((response) => {
            setMentoreds(response.data);
        }).catch(error => {
            // console.error(error);
        })
    }

    function addNewMentored() {
        navigator('/users/mentored/add-user');
    }

    function updateMentored(id) {
        navigator(`/users/mentored/edit-user/${id}`)
    }

    function dltMentored(id) {
        deleteMentored(id).then((response) => {
            getAllMentoreds();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center mt-5">List of Mentoreds</h2>
            <button className='btn btn-primary mb-2' onClick={addNewMentored}>Add Mentored</button>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Interests</th>
                            <th>Role</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mentoreds.map(mentored =>
                                <tr key={mentored.id}>
                                    <td>{mentored.id}</td>
                                    <td>{mentored.name}</td>
                                    <td>{mentored.email}</td>
                                    <td>{mentored.interests}</td>
                                    <td>{mentored.role}</td>
                                    <td>{mentored.createdAt}</td>
                                    <td>{mentored.updatedAt}</td>
                                    <td>{mentored.rating}</td>
                                    <td style={{ width: "175px" }}>
                                        <button className='btn btn-info me-2' onClick={() => updateMentored(mentored.id)}>Update</button>
                                        <button className='btn btn-danger' onClick={() => dltMentored(mentored.id)}>Delete</button>
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

export default ListMentoreds;