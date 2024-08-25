const UserForm = ({authUsers, selectedUser}) => {

    return(
        <>
        {!selectedUser ? null : 
        
        authUsers.map((user)=>{
            if(user.FIRST_NAME + " " + user.LAST_NAME == selectedUser){
                return(
                    <>
                    <form key={user.USERNAME}>
                        <input defaultValue={user.USERNAME}></input><br></br>
                        <input defaultValue={user.FIRST_NAME}></input><br></br>
                        <input defaultValue={user.LAST_NAME}></input><br></br>
                        <input type="submit" value="Update"></input>
                    </form>
                    </>
                )
            }
        })}
        </>

    )

}

export default UserForm