import React, { useRef } from "react";
import SignUpWindow from "./ModalSignUp";

export function ModalOpener1() {
    const dialogRef = useRef(null);

    const handleShow = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const handleClose = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <div>
            {/* Button to trigger modal */}
            <button
                onClick={handleShow}
                className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
            >
                Log in
            </button>

            {/* Modal code */}
            <dialog
                ref={dialogRef}
                className="fixed inset-0 bg-white p-5 rounded-lg shadow-lg max-w-sm mx-auto my-auto"
                style={{ backgroundColor: 'rgba(255,255,255)' }}
            >
                <div className="text-center">
                    <btn
                        onClick={handleClose}
                        className="text-black text-2xl cursor-pointer float-right"
                    >
                        &times;
                    </btn>
                    <h2 className="text-black font-bold my-3">Sign in</h2>
                </div>
                <form method="dialog">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="w-full p-2 my-2 border border-gray-300 rounded rounded-lg"
                    />
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className="w-full p-2 my-2 border border-gray-300 rounded rounded-lg"
                        />
                    </div>
                    <div className="text-right my-2">
                        <a href="#" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
                    </div>
                    <btn
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded my-3"
                    >
                        Log In
                    </btn>
                    <div className="flex items-center justify-between my-4">
                        <hr className="w-full border-t border-gray-300" />
                        <p className="text-center px-3">or</p>
                        <hr className="w-full border-t border-gray-300" />
                    </div>
                    <btn
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded my-3"
                    >
                        <SignUpWindow/>
                    </btn>
                </form>
            </dialog>
        </div>
    );
}

export default ModalOpener1;
