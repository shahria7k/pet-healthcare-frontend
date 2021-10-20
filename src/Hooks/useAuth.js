import { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthProvider";


const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;