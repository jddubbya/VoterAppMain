/*
*  UserManager.jsx
*
*  Purpose: To manage users - ADD, REMOVE, EDIT, CHANGE PASSWORD 
*  Exports: UserManager
*  HTML:    Builds the page with user management options
*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserForm from "../Components/UserForm";

const UserManager = () => {

    let username = '';

    /* Create state variables for each function*/
    const [authUsers, setAuthUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    /* Get the Users */
    const getAuthUsers = async () => {
        const response = await fetch(`/db/getAuthUsers`);
        const result = await response.json();
        setAuthUsers(result);
    }

    /* Update a user's information */
    /*     const updateAuthUser = async () => {
             const response = await fetch(`/db/updateAuthUser`);
         } */

    /* Runs the queries when the page loads */
        useEffect(() => {
            const AllQueries = async () => {
                await getAuthUsers();
            }
            AllQueries();
        }, []);

        const clickHandler = (e) => {
            e.preventDefault();
            setSelectedUser(e.target.innerHTML);
        }

    return (
       (!authUsers.length) ? 
                <><section className="mapsSection"><p>Loading...</p></section></>  : 
        <>
            <section className="mapsSection">
                <section>
                    <ul>
                        {
                            authUsers.map((user) => {
                                return (
                                    <li onClick={clickHandler} key={user.USERNAME}>{user.FIRST_NAME} {user.LAST_NAME}</li>
                                );
                            })
                        }
                    </ul>
                </section>
                <div className="editUserInfo">
                    {/* <form action="/editUser" method="post" id="editUser">
                            <h4> Edit User Profile</h4>
                            <div>
                                <label>username:  </label>
                                <input type="text" id="userName" value={[authUsers[0].USERNAME]} name="userName" placeholder="username" />
                                <small></small>
                            </div>
                            <div>
                                <label>password:  </label>
                                <input type="text" id="passWord" value={[authUsers[0].PASSWORD]} name="passWord" placeholder="password" />
                                <small></small>
                            </div>
                            <div>
                                <label>First Name:  </label>
                                <input type="text" id="firstName" value={[authUsers[0].FIRST_NAME]} name="firstName" placeholder="First Name" />
                                <small></small>
                            </div>
                            <div>
                                <label>Last Name:  </label>
                                <input type="text" id="lastName" value={[authUsers[0].LAST_NAME]} name="lastName" placeholder="Last Name" />
                                <small></small>
                            </div>
                            <div>
                                <label>Role:  </label>
                                <input type="text" id="roleName" value={[authUsers[0].ROLE_NAME]} name="roleName" placeholder="Role Name:" />
                                <small></small>
                            </div>
                            <div>
                                <label>Email:  </label>
                                <input type="email" id="eMail" value={[authUsers[0].EMAIL]} name="eMail" placeholder="Email:" />
                                <small></small>
                            </div>
                            <div>
                                <label>Phone:  </label>
                                <input type="tel" id="phone" value={[authUsers[0].PHONE]} name="phone" placeholder="Phone:" />
                                <small></small>
                            </div>

                            <Link to="/">
                                <input
                                    type="submit"
                                    value="Save"
                                ></input>
                            </Link>
                        </form> */}
                </div>
            </section>
            <section>
                <UserForm authUsers={authUsers} selectedUser={selectedUser}/>
            </section>
            <Link to="/">
                <input
                    className="backButton"
                    type="submit"
                    value="Back"
                ></input>
            </Link>

        </>
    )
}

export default UserManager;