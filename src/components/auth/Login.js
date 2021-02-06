import React from "react"
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core';
import "./Auth.css"



export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("https://ml-gamer-rater.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "lu_token", res.token )
                    localStorage.setItem("user_id", res.user_id)
                    props.history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="games">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="reg-form mt-5" onSubmit={handleLogin}>
                    <h1 className="list-h1">GamerRater</h1>
                    <h2 className="list-h1">Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control"  placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword" className="mt-3"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control"  placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <Button className="mt-3" variant="contained" color="primary" type="submit">Sign In</Button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link  className="link--register" to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
