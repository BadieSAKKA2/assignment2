import User from "../user/User";

function Users({users}) {
    console.log(users);
    return(
        <div>

            {users.map((u,i) => (
                <User key={i} user={u} />
            ))}  

        </div>
    )
}

export default Users;