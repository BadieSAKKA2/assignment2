import { useState } from "react"
import './formStyles.css'

function Form({addUser}){
    const [userInput, setUserInput] = useState({userName:'', age:''})
    
    const handleChange = (e) => {
        setUserInput((currData) =>{
            return{
                ...currData,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addUser(userInput);
        
    }
    
    return(
        <form onSubmit={handleSubmit} className="form-container">
           
                <label htmlFor="userName" className="form-label">Username</label>
                <input 
                    className="form-input"
                    type="text" 
                    id="userName"
                    name="userName"
                    onChange={handleChange}
                    value={userInput.userName} 
                />

                <label htmlFor="age" className="form-label">Age</label>
                <input 
                    className="form-input"
                    type="number" 
                    id="age"
                    name="age"
                    onChange={handleChange}
                    value={userInput.age}
                />
                <button className="submit-button">Add User</button>

        </form>
    )
}

export default Form;