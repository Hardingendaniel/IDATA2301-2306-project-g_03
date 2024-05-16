import React, {useState} from "react";
import {SignUp} from "./SignUp";
import {sendAuthenticationRequest} from "../../tools/authentication";
import {useNavigate} from "react-router-dom"


/**
 * Represents a login modal.
 */
export function Login(props) {
    const openSignUpModal = () => {
        document.getElementById("sign_up").showModal();
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function submitForm(event) {
        event.preventDefault();
        console.log("Submitting login form");
        sendAuthenticationRequest(
            email,
            password,
            onLoginSuccess,
            (errorMessage) => setError(errorMessage)
        );
    }

    /**
     * This function is called when login is successful
     */
    function onLoginSuccess(userData) {
        props.setUser(userData);
        navigate("/");
    }

    let errorMessage = null;
    if (error){
        errorMessage = <p className="error">{error}</p>
    }


    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-ghost rounded-2xl text-xl font-bold text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>Log in</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Log in or sign up</h3>
                    <div className="divider"></div>

                    <form className="flex flex-col">
                        <label htmlFor="email"
                            className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="w-4 h-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                            </svg>
                            <input type="email"
                                   name="email"
                                   value={email}
                                   onChange={(event) => setEmail(event.target.value)}
                                   className="grow" placeholder="Email"/>
                        </label>
                        <label htmlFor="password"
                            className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd"
                                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <input type="password"
                                   name="password"
                                   value={password}
                                   onChange={(event) => setPassword(event.target.value)}
                                   className="grow" placeholder="Password"/>
                        </label>
                        {errorMessage}

                        <button type="submit" onClick={submitForm}
                            className="btn bg-main font-bold text-white rounded-2xl hover:bg-header w-full my-4">Log in
                        </button>
                        <div className="flex items-center">
                            <span className="text-lg">Not a member?</span>
                            <button className="px-2 text-lg text-main"
                                    onClick={openSignUpModal}>Sign up
                            </button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <dialog id="sign_up" className="modal">
                <SignUp/>
            </dialog>
        </div>
    )
}