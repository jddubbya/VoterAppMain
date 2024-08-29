/*
*  UserManager.jsx
*
*  Purpose: To manage users - ADD, REMOVE, EDIT, CHANGE PASSWORD 
*  Exports: UserManager
*  HTML:    Builds the page with user management options
*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const UserManager = () => {

    /* Create state variables for each function */
    const [authUsers, setAuthUsers] = useState([]);
    let selectedUser = '';

    /* Initialize the formData object */
    const [formData, setFormData] = useState({
        USERNAME: '',
        PASSWORD: '',
        FIRST_NAME: '',
        LAST_NAME: '',
        ROLE_NAME: '',
        EMAIL: '',
        PHONE: '',
    });

    /* tests user data for completeness */
    const userDataIsValid = () => {
        let validated = true;
        if (formData.USERNAME === '' || formData.PASSWORD === '' ||
            formData.FIRST_NAME === '' || formData.LAST_NAME === '' ||
            formData.ROLE_NAME === '') {
            validated = false;
        }
        return validated;
    }

    /* Get the Users from the AUTH_USERS table */
    const getAuthUsers = async () => {
        const response = await fetch(`/db/getAuthUsers`);
        const result = await response.json();
        setAuthUsers(result);
    }

    /* Runs the db query to get all the users when the page loads */
    useEffect(() => {
        const AllQueries = async () => {
            await getAuthUsers();
        }
        AllQueries();
    }, []);


    /* Reloads the page */
    const reloadPage = () => {
        window.location.reload(true);
    }

    /* Create a new user with test to make sure all the required fields are populated */
    const createNewUser = async () => {
        const valid = userDataIsValid();
        if (!valid) {
            return;
        }
        let addedUser = JSON.stringify(formData);
        const response = await fetch(`/db/addAuthUser/?formData=${addedUser}`);
        const result = await response.json();
        if (result.includes("ER_DUP_ENTRY")) {
            Swal.fire({
                title: "Warning",
                text: "That username already exists",
                icon: "warning"
            })
        }
        return;
    }

    /* Runs createNewUser and reloads the page to update the user list*/
    const createNewUserHandler = async () => {
        await createNewUser();
        reloadPage();
    }

    /* Set and populate the formData based on the user chosen in the user list */
    const editUserHandler = (e) => {
        selectedUser = e.target.innerHTML; if (selectedUser) {
            authUsers.map((user) => {
                if (user.FIRST_NAME + " " + user.LAST_NAME === selectedUser) {
                    setFormData(
                        {
                            "USERNAME": `${user.USERNAME}`,
                            "PASSWORD": `${user.PASSWORD}`,
                            "FIRST_NAME": `${user.FIRST_NAME}`,
                            "LAST_NAME": `${user.LAST_NAME}`,
                            "ROLE_NAME": `${user.ROLE_NAME}`,
                            "EMAIL": `${user.EMAIL}`,
                            "PHONE": `${user.PHONE}`,
                        }
                    );
                }
            })
        }
    }

    /* Update the formData object when any field on the form is edited */
    const updateValues = (e) => {
        e.preventDefault();
        switch (e.target.name) {
            case "USERNAME":
                setFormData({ ...formData, USERNAME: e.target.value });
                break;
            case "PASSWORD":
                setFormData({ ...formData, PASSWORD: e.target.value });
                break;
            case "FIRST_NAME":
                setFormData({ ...formData, FIRST_NAME: e.target.value });
                break;
            case "LAST_NAME":
                setFormData({ ...formData, LAST_NAME: e.target.value });
                break;
            case "ROLE_NAME":
                setFormData({ ...formData, ROLE_NAME: e.target.value });
                break;
            case "EMAIL":
                setFormData({ ...formData, EMAIL: e.target.value });
                break;
            case "PHONE":
                setFormData({ ...formData, PHONE: e.target.value });
                break;
        }
    }

    /* Clears the form */
    const clearForm = (e) => {
        e.preventDefault();
        formData.USERNAME = '';
        formData.PASSWORD = '';
        formData.FIRST_NAME = '';
        formData.LAST_NAME = '';
        formData.ROLE_NAME = '';
        formData.EMAIL = '';
        formData.PHONE = '';
        reloadPage();
    }

    /* Delete a user */
    const deleteUser = async () => {
        const response = await fetch(`/db/deleteAuthUser/?USERNAME=${formData.USERNAME}`);
    }

    /* Calls the deleteUser function, then the reloadPage function (don't ask) */
    const deleteAndReload = async () => {
        await deleteUser();
        reloadPage();
    }

    /* Safety check if a user is being deleted */
    const deleteHandler = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Delete this user?",
            showCancelButton: true,
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAndReload();
            } else if (result.isDenied) {
                /* do nothing */
            }
        });
    }

    /* Update a user's information */
    const updateUser = async () => {
        const valid = userDataIsValid();
        if (!valid) {
            return;
        }
        let changedUser = JSON.stringify(formData);
        /*   console.log(changedUser) */
        const response = await fetch(`/db/updateAuthUser/?formData=${changedUser}`);
        const result = await response.json();
        if (result.includes("ER_DUP_ENTRY")) {
            Swal.fire({
                title: "Warning",
                text: "That username already exists",
                icon: "warning"
            })
        }
        return;
    }

    /* Updates the user and reloads the page */
    const updateAndReload = async () => {
        await updateUser();
        reloadPage();
    }

    /* Update handler */
    const updateHandler = async () => {
        await updateUser();
        updateAndReload();
    }


    /* Build the form and display it */
    return (
        (!authUsers.length) ?
            <><section className="resultsSection"><p>Loading...</p></section></> :
            <>
                <section className="resultsSection">
                    <section>
                        <h2>Manage Users</h2>
                        <ul>
                            {
                                authUsers.map((user) => {
                                    return (
                                        <li className="resultItem" onClick={editUserHandler} key={user.USERNAME}>{user.FIRST_NAME} {user.LAST_NAME}</li>
                                    );
                                })
                            }
                        </ul>
                    </section>
                </section>
                <div className="editFormContainer">
                    <form className="userEditForm">
                        <div>
                            <label>Username:  </label>
                            <input required name="USERNAME" onChange={updateValues} value={formData.USERNAME} ></input>
                            <small></small>
                        </div>
                        <div>
                            <label>Password:  </label>
                            <input required name="PASSWORD" onChange={updateValues} value={formData.PASSWORD} ></input>
                            <small></small>
                        </div>
                        <div>
                            <label>First Name:  </label>
                            <input required name="FIRST_NAME" onChange={updateValues} value={formData.FIRST_NAME} ></input>
                            <small></small>
                        </div>
                        <div>
                            <label>Last Name:  </label>
                            <input required name="LAST_NAME" onChange={updateValues} value={formData.LAST_NAME} ></input>
                            <small></small>
                        </div>
                        <div>
                            <label>Role:  </label>
                            <input required name="ROLE_NAME" onChange={updateValues} value={formData.ROLE_NAME} ></input>
                            <small></small>
                        </div>
                        <div>
                            <label>Email:  </label>
                            <input name="EMAIL" onChange={updateValues} value={formData.EMAIL} ></input>
                            <small></small>
                        </div>
                        <div>
                            <label>Phone:  </label>
                            <input name="PHONE" onChange={updateValues} value={formData.PHONE} ></input>
                            <small></small>
                        </div>
                        <div className="formButtonContainer">
                            <input className="userEditButtons" type="submit" value="Add New User" onClick={createNewUserHandler}></input>
                            <button className="userEditButtons" onClick={updateHandler}>Update User</button>
                        </div>
                        <div>
                        <div className="formButtonContainer">
                            <button className="userEditButtons" onClick={clearForm}>Clear Form</button>
                            <button className="userEditButtons" onClick={deleteHandler}>Delete User</button>
                        </div>
                        </div>
                    </form>
                </div>
                <div className="centeredButtonCont">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <input
                            className="backButton"
                            type="submit"
                            value="Back"
                        ></input>
                    </Link>
                </div>
            </>
    )
}

export default UserManager;
