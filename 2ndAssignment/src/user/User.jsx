import './userStyles.css'

function User({user}){
    return(
        <p className="user">{user.userName} {user.age}</p>
    )
}

export default User;