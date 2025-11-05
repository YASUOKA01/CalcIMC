    import { createContext, useContext, useState, useEffect } from "react";

    const AuthContext = createContext();

    export function AuthProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);

        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (loggedUser) setCurrentUser(loggedUser);
    }, []);

    function login(email, password) {
        const user = users.find(
        (u) => u.email === email && u.password === password
        );
        if (user) {
        setCurrentUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return true;
        }
        return false;
    }

    function register(email, password) {
        const exists = users.some((u) => u.email === email);
        if (exists) return false;
        const newUsers = [...users, { email, password }];
        setUsers(newUsers);
        localStorage.setItem("users", JSON.stringify(newUsers));
        return true;
    }

    function logout() {
        setCurrentUser(null);
        localStorage.removeItem("user");
    }

    const value = {
        users,
        setUsers,
        currentUser,
        login,
        register,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    }

    export function useAuth() {
    return useContext(AuthContext);
    }
