import { createContext, ReactNode, useState } from "react"

interface IOptionsProviderData {
    actualOptions: string
    openEdit: () => void
    openAddContact: () => void
    close: () => void
}

interface IOptionsProviderProps {
    children: ReactNode
}

export const optionsContext = createContext<IOptionsProviderData>({} as IOptionsProviderData)

export const OptionsProvider = ({ children }: IOptionsProviderProps) => {

    const [actualOptions, setActualOptions] = useState("None")

    const openEdit = () => {
        setActualOptions("Edit")
    }

    const openAddContact = () => {
        setActualOptions("AddContact")
    }

    const close = () => {
        setActualOptions("None")
    }

    return (
        <optionsContext.Provider value={{ actualOptions, openEdit, openAddContact, close }}>
            {children}
        </optionsContext.Provider>
    )
}