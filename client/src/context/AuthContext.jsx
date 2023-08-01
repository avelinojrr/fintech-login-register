import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState([]);

    const signUp = async (user) => {
        try {
            const response = await registerRequest(user);
        console.log(response.data);
        setUser(response.data);
        setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response.data);
            setErrors(error.response.data);
        }
    }

    const login = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
            return setErrors(error.res.data);
        }
        setErrors([error.response.data.message]);
    }
}

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000)
            return () => clearTimeout(timer);
        }
    }, [errors])



    return (
        <AuthContext.Provider value={{
            signUp,
            login,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}