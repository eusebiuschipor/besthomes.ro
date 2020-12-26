import React from "react";
import { useHistory } from "react-router-dom";
import './Register.css';
import { If, Then } from 'react-if';

function Register() {
    const [password, setPassword] = React.useState("");
    const [verifyPassword, setVerifyPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const history = useHistory();
    const [invalidFirstName, setInvalidFirstName] = React.useState(false);
    const [invalidLastName, setInvalidLastName] = React.useState(false);
    const [invalidPassword, setInvalidPassword] = React.useState(false);
    const [invalidEmail, setInvalidEmail] = React.useState(false);
    const [passwordDontMatch, setPasswordDontMatch] = React.useState(false);
  
    const _handleSubmit = (e) => {
        e.preventDefault();
        setInvalidFirstName(false);
        setInvalidLastName(false);
        setInvalidEmail(false);
        setInvalidPassword(false);
        setPasswordDontMatch(false);
        let validForm = true;

        if (firstName === '') {
            setInvalidFirstName(true);
            validForm = false;
        }

        if (lastName === '') {
            setInvalidLastName(true);
            validForm = false;
        }

        if (!validateEmail(email)) {
            setInvalidEmail(true);
            validForm = false;
        }

        if (password.length < 3) {
            setInvalidPassword(true);
            validForm = false;
        }

        if (password !== verifyPassword) {
            setPasswordDontMatch(true);
            validForm = false;
        }

        if (validForm) {
            register();
        }
    }

    const register = () => {
        let emailAlreadyRegistered = false;

        fetch(process.env.REACT_APP_SERVER_URL + 'post/register.php', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: JSON.stringify({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 400) {
                emailAlreadyRegistered = true;
            }
        })
        .then(data => {
            if (data) {
                alert('Contul a fost creat cu succes!');
                localStorage.setItem('email', data.email);
                localStorage.setItem('userId', data.id);
                history.push("/");
                window.location.reload(false);
            } else if (emailAlreadyRegistered) {
                alert('Exista un cont creat cu acest email. Te rugam sa introduci un alt email.');
            }
        });
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()); 
    }

    const handleVerifyPasswordChange = (event) => {
        let verifyPassword = event.target.value;
        setVerifyPassword(verifyPassword);
    }

    const handleFirstNameChange = (event) => {
        let firstName = event.target.value;
        setFirstName(firstName);
    }

    const handleLastNameChange = (event) => {
        let lastName = event.target.value;
        setLastName(lastName);
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
        <div className="container">
            <div className="row">
                <div className="col-sm-12 section-t8">
                    <div className="row">
                        <h1 className="title-single text-center title-form">
                            Înregistrare
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={(e)=>_handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="text" 
                                                name="first_name"
                                                className={`form-control form-control-lg form-control-a ${invalidFirstName ? "invalid-field" : ""}`}
                                                placeholder="Nume" 
                                                onChange={handleFirstNameChange} />
                                            <If condition={invalidFirstName}>
                                                <Then>
                                                    <span class="error-message">
                                                        Introduceţi numele
                                                    </span>
                                                </Then>
                                            </If>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input type="text" 
                                                name="last_name" 
                                                className={`form-control form-control-lg form-control-a ${invalidLastName ? "invalid-field" : ""}`}
                                                placeholder="Prenume"
                                                onChange={handleLastNameChange} />
                                            <If condition={invalidLastName}>
                                                <Then>
                                                    <span class="error-message">
                                                        Introduceţi prenumele
                                                    </span>
                                                </Then>
                                            </If>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" 
                                                name="email" 
                                                className={`form-control form-control-lg form-control-a ${invalidEmail ? "invalid-field" : ""}`}
                                                placeholder="Email" 
                                                data-rule="minlen:4" 
                                                data-msg="Te rugăm să introduci minim 4 caractere!"
                                                onChange={handleEmailChange} />
                                            <If condition={invalidEmail}>
                                                <Then>
                                                    <span class="error-message">
                                                        Introduceţi un email valid
                                                    </span>
                                                </Then>
                                            </If>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input name="password" 
                                                type="password"
                                                className={`form-control form-control-lg form-control-a ${invalidPassword ? "invalid-field" : ""}`}
                                                placeholder="Parola" 
                                                data-rule="minlen:3" 
                                                data-msg="Te rugăm să introduci minim 3 caractere!"
                                                onChange={handlePasswordChange} />
                                            <If condition={invalidPassword}>
                                                <Then>
                                                    <span class="error-message">
                                                        Introduceţi o parolă de minim 3 caractere
                                                    </span>
                                                </Then>
                                            </If>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <input name="verifyPassword" 
                                                type="password"
                                                className={`form-control form-control-lg form-control-a ${passwordDontMatch ? "invalid-field" : ""}`} 
                                                placeholder="Reintrodu parola" 
                                                data-rule="minlen:3" 
                                                data-msg="Te rugăm să introduci minim 3 caractere!"
                                                onChange={handleVerifyPasswordChange} />
                                            <If condition={passwordDontMatch}>
                                                <Then>
                                                    <span class="error-message">
                                                        Parolele nu corespund
                                                    </span>
                                                </Then>
                                            </If>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" 
                                            className="btn btn-a"
                                            onClick={(e)=>_handleSubmit(e)}>Înregistrare</button>
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
    
export default Register;