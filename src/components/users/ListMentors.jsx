import React, { useEffect, useState } from 'react'
import { listMentors, deleteMentor } from '../../services/users/MentorService'
import { useNavigate } from 'react-router-dom'

const ListMentors = () => {

    const [mentors, setMentors] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllMentors();
    }, [])

    function getAllMentors() {
        listMentors().then((response) => {
            setMentors(response.data);
        }).catch(error => {
            // console.error(error);
        })
    }

    function addNewMentor() {
        navigator('/users/mentor/add-user');
    }

    function updateMentor(id) {
        navigator(`/users/mentor/edit-user/${id}`)
    }

    function dltMentor(id) {
        deleteMentor(id).then((response) => {
            getAllMentors();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center mt-5">List of Mentors</h2>
            <button className='btn btn-primary mb-2' onClick={addNewMentor}>Add Mentor</button>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Areas of Activity</th>
                            <th>Current Company</th>
                            <th>Occupation</th>
                            <th>Certificates</th>
                            <th>Role</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mentors.map(mentor =>
                                <tr key={mentor.id}>
                                    <td>{mentor.id}</td>
                                    <td>{mentor.name}</td>
                                    <td>{mentor.email}</td>
                                    <td>{mentor.areasOfActivity}</td>
                                    <td>{mentor.currentCompany}</td>
                                    <td>{mentor.occupation}</td>
                                    <td>{mentor.certificates}</td>
                                    <td>{mentor.role}</td>
                                    <td>{mentor.createdAt}</td>
                                    <td>{mentor.updatedAt}</td>
                                    <td>{mentor.rating}</td>
                                    <td style={{ width: "175px" }}>
                                        <button className='btn btn-info me-2' onClick={() => updateMentor(mentor.id)}>Update</button>
                                        <button className='btn btn-danger' onClick={() => dltMentor(mentor.id)}>Delete</button>
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

export default ListMentors;