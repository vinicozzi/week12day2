import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom"
import * as sessionActions from "../../store/session";

function SignUpForm()

{

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to="/"/>;

    const handleSubmit = (e) => {

        e.preventDefault()

    if (password === confirmPassword) {

        setErrors([])

        return dispatch(sessionActions.signup({email, username, password}))

        .catch (async (res) => {
            let data;
            try {

                data = await res.clone().json()
            } catch {

                data = await res.text()
            }

            if (data?.errors) setErrors(data.errors)
            else if (data) setErrors([data])
            else setErrors([res.statusText])
        }) 
    }

    }

    return (
        
        <form>
            <ul>

            {errors.map(error => <li key={error}>{error}</li>)}

            </ul>

        <label>

        Email
        <input
        
        type='text'
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        required
        />
        </label>

        <label>

        Username
        <input

        type="text"
        value="username"
        onchange ={(e) => setUsername(e.target.value)}
        />
        </label>

        <label>

        <input 

        type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}

        />

        </label>


        <label>

        Confirm Password 

        <input

        type="text"
        value = {confirmPassword}
        onChange ={(e) => setConfirmPassword(e.target.value)}
        />

        </label>

        <button type="submit"> Sign Up </button>

        </form>
            
        
        )

}

export default SignUpForm;
