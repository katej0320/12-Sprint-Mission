import { useState } from "react";
import { loginUser } from "@/api/api";

export const useAuth = () => {
    const [loading, setLoading ] = useState(false);
    const [ error, setError] = useState<string|null>(null);

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try{
            const userData = await loginUser(email, password);
            console.log("로그인 성공", userData);
            return userData;
        } catch (err){
            console.log("로그인실패");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading, error};


}