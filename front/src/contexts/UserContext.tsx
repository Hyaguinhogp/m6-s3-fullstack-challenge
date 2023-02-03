import { createContext, ReactNode, useState } from "react"
import api from "../services/api"

export interface IUser {
    name: string
    email: string
    tel: string
    createdAt: string
    contacts: IContact[]
}

export interface IContactAdd {
    name: string
    email: string
    tel: string
}

export interface IContact {
    id: string
    name: string
    email: string
    tel: string
}

interface IUserProviderData {
    user: IUser
    updateUser: (user: IUser) => void
    refreshUser: () => Promise<void>
}

interface IUserProviderProps {
    children: ReactNode
}

export const userContext = createContext<IUserProviderData>({} as IUserProviderData)

export const UserProvider = ({ children }: IUserProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser)

    const updateUser = (userData: IUser) => {
        setUser(userData)
    }

    const refreshUser = () => {
        const promise = api.get("/clients/self", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@client:token")}`
            }
        })
            .then((res) => {
                updateUser(res.data.data)
            })

        return promise
    }

    return (
        <userContext.Provider value={{ user, updateUser, refreshUser }}>
            {children}
        </userContext.Provider>
    )
}