import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createManager, updateManager } from '../../services/users/ManagerService';

const AddManager = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {id} = useParams();

    const navigator = useNavigate();

    const [errors, setErrors] = useState({
        name:'',
        email:''
    });

    useEffect(() => {
        if(id) {
            getManager(id).then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id]);

    function saveOrUpdateUser(e) {
        e.preventDefault();

        if(validateForm()) {
            const manager = {name, email, password};
            console.log(manager);

            if(id) {
                updateManager(id, manager).then((response) => {
                    console.log(response.data);
                    navigator('/users/manager')
                }).catch(error => console.log(error));
            } else {
                createManager(manager).then((response) => {
                    console.log(response.data);
                    navigator('/users/manager')
                }).catch(error => console.log(error));
            }

            
        }        
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors};

        if(name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }

        if(email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        if(password.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Password is required';
            valid = false;
        }

        setErrors(errorsCopy);
        console.log(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if(id) {
            return (<h2 className='text-center pt-4'>Update User</h2>);
        } else {
            return (<h2 className='text-center pt-4'>Add User</h2>);
        }
    }

  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                { pageTitle() }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Name:</label>
                            <input
                                type='text'
                                placeholder='Enter User Name'
                                name='name'
                                value={name}
                                className={`form-control ${errors.name ? 'is-invalid': ''}`}
                                onChange={(e) => setName(e.target.value)}>
                            </input>
                            { errors.name && <div className='invalid-feedback'>{errors.name}</div> }
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Enter User Email'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid': ''}`}
                                onChange={(e) => setEmail(e.target.value)}>
                            </input>
                            { errors.email && <div className='invalid-feedback'>{errors.email}</div> }
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Password:</label>
                            <input
                                type='password'
                                placeholder='Enter User Password'
                                name='password'
                                value={password}
                                className={`form-control ${errors.password ? 'is-invalid': ''}`}
                                onChange={(e) => setPassword(e.target.value)}>
                            </input>
                            { errors.password && <div className='invalid-feedback'>{errors.password}</div> }
                        </div>
                        <button className='btn btn-success mt-2' onClick={saveOrUpdateUser}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddManager;