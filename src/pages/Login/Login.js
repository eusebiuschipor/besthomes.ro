import React from "react";
import { useHistory } from "react-router-dom";

function Login() {
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const history = useHistory();
  
    const _handleSubmit = (e) => {
        e.preventDefault();

        fetch(process.env.REACT_APP_SERVER_URL + 'post/login.php', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            if (data) {
                localStorage.setItem('email', data.email);
                history.push("/");
                window.location.reload(false);
            } else {
                alert('Invalid username or password');
            }
        });
    }

    const handleEmailChange = (event) => {
        let email = event.target.value;
        setEmail(email);
    }

    const handlePasswordChange = (event) => {
        let password = event.target.value;
        setPassword(password);
    }
  
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12 section-t8">
                    <div class="row">
                        <h1 class="title-single text-center title-form">
                            Login
                        </h1>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <form onSubmit={(e)=>_handleSubmit(e)}>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <input type="text" 
                                                name="email" 
                                                class="form-control form-control-lg form-control-a" 
                                                placeholder="Email" 
                                                data-rule="minlen:4" 
                                                data-msg="Te rugăm să introduci minim 4 caractere!"
                                                onChange={handleEmailChange} />
                                            <div class="validate"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <input name="password" 
                                            type="password"
                                            class="form-control form-control-lg form-control-a" 
                                            placeholder="Parola" 
                                            data-rule="minlen:3" 
                                            data-msg="Te rugăm să introduci minim 3 caractere!"
                                            onChange={handlePasswordChange} />
                                        <div class="validate"></div>
                                    </div>
                                </div>
                                <div class="col-md-12 text-center">
                                    <button type="submit" 
                                        class="btn btn-a"
                                        onClick={(e)=>_handleSubmit(e)}>Login</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}
    
export default Login;