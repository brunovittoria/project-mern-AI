import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatus, loginUser } from "../helpers/api-communicator";

// Definindo os tipos para o usuário e a autenticação do usuário
type User = {
    name: string;
    email: string;
}

type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

// Criando o contexto de autenticação com valor inicial como null
export const AuthContext = createContext<UserAuth | null>(null);

// Componente provedor de autenticação que envolve os componentes filhos
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // Estado para armazenar informações do usuário
    const [user, setUser] = useState<User | null>(null);

    // Estado para rastrear o status de login
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Se os cookies do user forem validos mandamos para tela ADMIN
        async function checkStatus() {
            const data = await checkAuthStatus()
            if(data) {
                setUser({email: data.email, name: data.name})
                setIsLoggedIn(true)
            }
        }
        checkStatus()

    }, []);

    // Função para lidar com o processo de login
    const login = async (email: string, password: string) => {
        const data = await loginUser(email, password)
        if(data) {
            setUser({ email: data.email, name: data.name })
            setIsLoggedIn(true)
        }
    };

    // Função para lidar com o processo de cadastro
    const signup = async (name: string, email: string, password: string) => {
        // Implemente a lógica de cadastro aqui, por exemplo, fazendo uma chamada à API.
        // Atualize os estados 'user' e 'isLoggedIn' com as informações do novo usuário.
    };

    // Função para lidar com o processo de logout
    const logout = async () => {
        // Implemente a lógica de logout aqui, por exemplo, invalidando o token de autenticação.
        // Atualize os estados 'user' e 'isLoggedIn' para refletir o logout.
    };

    // Valor do contexto a ser fornecido aos componentes filhos
    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        signup
    };

    // Fornecendo o contexto aos componentes filhos
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

//Variavel com o contexto que sera usado pelos filhos
export const useAuth = () => useContext(AuthContext)

