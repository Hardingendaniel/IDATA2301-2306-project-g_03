import React, {useRef} from "react";

export function SignUpWindow() {
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
                Not a member? Sign up
            </button>

            {/* Modal code */}
            <dialog
                ref={dialogRef}
                className="fixed inset-0 bg-white p-5 rounded-lg shadow-lg max-w-sm mx-auto my-auto"
                style={{ backgroundColor: 'rgba(255,255,255)' }}
            >
                <div className="text-center">
                    <button
                        onClick={handleClose}
                        className="text-black text-2xl cursor-pointer float-right"
                    >
                        &times;
                    </button>
                    <h2 className="text-black font-bold my-3">Sign in</h2>
                </div>
                <form method="dialog">
                    <input
                        type="First name"
                        placeholder="First name"
                        name="FirstName"
                        required
                        className="w-full p-2 my-2 border border-gray-300 rounded rounded-lg"
                    />
                    <input
                        type="Last name"
                        placeholder="Last name"
                        name="lastName"
                        required
                        className="w-full p-2 my-2 border border-gray-300 rounded rounded-lg"
                    />
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
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded my-3"
                    >
                        Sign Up
                    </button>
                    <div className="flex items-center justify-between my-4">
                        <hr className="w-full border-t border-gray-300"/>
                        <hr className="w-full border-t border-gray-300"/>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-700 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded my-3"
                    >
                        Already a member? Log in
                    </button>
                </form>
            </dialog>
        </div>
    );
}

export default SignUpWindow;
