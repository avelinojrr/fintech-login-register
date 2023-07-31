import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

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
            // console.log(error.response.data);
            setErrors(error.response.data);
        }
    }


    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}