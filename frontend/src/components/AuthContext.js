import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({user: null});
export const AuthProvider = ({ children }) => {
    const [user] = useState(null);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
