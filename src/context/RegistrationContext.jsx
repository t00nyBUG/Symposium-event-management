import React, { createContext, useState, useContext } from 'react';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
    const [registeredUser, setRegisteredUser] = useState(null);

    const registerUser = (userData) => {
        setRegisteredUser(userData);
    };

    return (
        <RegistrationContext.Provider value={{ registeredUser, registerUser }}>
            {children}
        </RegistrationContext.Provider>
    );
};

export const useRegistration = () => useContext(RegistrationContext);
