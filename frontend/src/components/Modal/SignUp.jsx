import React, {useEffect, useState} from "react";

export function SignUp() {

    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [userCreated, setUserCreated] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        // Reset form data when modal is displayed
        setFormData(initialFormData);
    }, [showModal]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        //TODO: Send api to backend

    }

    const isFormValid = () => {
        const {firstName, lastName, email, phoneNumber, password} = formData;
        return firstName && lastName && email && phoneNumber && password;
    }

    // Creates a new user
    const handleCreateUser = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setUserCreated(true);
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('There was an error creating the user!', error);
        }
    }

    return (
        <div className={`modal-box ${showModal ? "" : "hidden"}`}>
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Sign up</h3>
            <div className="divider"></div>

            <div className="flex flex-col">
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    <input type="text"
                           name="firstName"
                           value={formData.firstName}
                           onChange={handleInputChange} className="grow" placeholder="First Name"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    <input type="text"
                           name="lastName"
                           value={formData.lastName}
                           onChange={handleInputChange} className="grow" placeholder="Last Name"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                    </svg>
                    <input type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange} className="grow" placeholder="Email"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"/>
                        <path fillRule="evenodd"
                              d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                              clipRule="evenodd"/>
                    </svg>

                    <input type="number"
                           name="phoneNumber"
                           value={formData.phoneNumber}
                           onChange={handleInputChange} className="grow" placeholder="Phone Number"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd"
                              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                              clipRule="evenodd"/>
                    </svg>
                    <input type="password"
                           name="password"
                           value={formData.password}
                           onChange={handleInputChange} className="grow" placeholder="Password"/>
                </label>

                <button className="btn bg-main font-bold text-lg text-white rounded-2xl hover:bg-header w-full my-4"
                        disabled={!isFormValid()}
                        onClick={handleCreateUser}
                >
                    Create User
                </button>
                {userCreated && (
                    <div className="text-main font-semibold my-2">
                        User successfully created!
                    </div>
                )}
            </div>
        </div>
    )
}