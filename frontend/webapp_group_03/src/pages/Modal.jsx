import React from "react";

function Modal() {
    return (
        <div id="loginModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">×</span>
                    <h2>Sign in</h2>
                </div>
                <div className="modal-body">
                    <input type="email" placeholder="Email" name="email" required=""/>
                    <div className="password-container">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required=""
                        />
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-button-modal">
                        Sign in
                    </button>
                    <div className="divider">
                        <hr className="left"/>
                        or
                        <hr className="right"/>
                    </div>
                    <button type="submit" className="signup-button-modal">
                        Sign up
                    </button>
                </div>
            </div>
        </div>

    );
}
export default Modal;