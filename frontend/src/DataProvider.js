import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/data')
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
