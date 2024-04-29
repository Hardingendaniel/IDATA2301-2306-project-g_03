import React, { useState } from "react";
import './Modal.css';

function ModalOpener1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* Button to trigger modal */}
            <button onClick={handleShow}>Log in</button>

            {/* Modal code */}
            <div id="loginModal" className={`modal`} style={!show ? {visibility: "hidden"} : {}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={handleClose}>&times;</span>
                        <h2>Sign in</h2>
                    </div>
                    <div className="modal-body">
                        <input type="email" placeholder="Email" name="email" required />
                        <div className="password-container">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="forgot-password">
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="login-button-modal">
                            Sign in
                        </button>
                        <div className="divider">
                            <hr className="left" />
                            or
                            <hr className="right" />
                        </div>
                        <button type="submit" className="signup-button-modal">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalOpener1;
