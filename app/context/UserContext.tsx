"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
    name: string | null;
    email: string;
};

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userRes = await fetch("/api/user", { method: "GET" });
                const userData = await userRes.json();
    
                if (userRes.ok) {
                    setUser(userData);
                } else {
                    console.error("Failed to fetch user data:", userData.error);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setIsLoading(false); // Loading complete
            }
        };
    
        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
};