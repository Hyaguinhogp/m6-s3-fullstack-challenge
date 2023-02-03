import { createContext, ReactNode, useState } from "react"

interface ICardProviderData {
    actualCard: string
    goToRegister: () => void
    goToLogin: () => void
    goToProfile: () => void
}

interface ICardProviderProps {
    children: ReactNode
}

export const cardContext = createContext<ICardProviderData>({} as ICardProviderData)

export const CardProvider = ({ children }: ICardProviderProps) => {

    const [actualCard, setActualCard] = useState("Register")

    const goToRegister = () => {
        setActualCard("Register")
    }

    const goToLogin = () => {
        setActualCard("Login")
    }

    const goToProfile = () => {
        setActualCard("Profile")
    }

    return (
        <cardContext.Provider value={{ actualCard, goToRegister, goToLogin, goToProfile }}>
            {children}
        </cardContext.Provider>
    )
}