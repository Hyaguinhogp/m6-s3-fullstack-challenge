import { createContext, ReactNode, useState } from "react"

interface IUser {
    name: string
    email: string
    tel: string
    createdAt: string
    contacts: IContact[]
}

interface IContact {
    name: string
    email: string
    tal: string
}

interface IUserProviderData {
    user: IUser
    updateUser: (user: IUser) => void
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

    return (
        <userContext.Provider value={{ user, updateUser }}>
            {children}
        </userContext.Provider>
    )
}