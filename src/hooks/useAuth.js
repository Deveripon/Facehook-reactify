import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, (auth) => auth.user?.user);
    return useContext(AuthContext);
};

export default useAuth;

