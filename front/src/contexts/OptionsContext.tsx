import { createContext, ReactNode, useState } from "react"

interface IOptionsProviderData {
    actualOptions: string
    openEdit: () => void
    actualContactId: string
    setActualContactId: (contactId: string) => void
    openAddContact: () => void
    openEditContact: () => void
    openDeleteContact: () => void
    close: () => void
}

interface IOptionsProviderProps {
    children: ReactNode
}

export const optionsContext = createContext<IOptionsProviderData>({} as IOptionsProviderData)

export const OptionsProvider = ({ children }: IOptionsProviderProps) => {

    const [actualOptions, setActualOptions] = useState("None")
    const [actualContactId, setActualContactId] = useState("")

    const openEdit = () => {
        setActualOptions("Edit")
    }

    const openAddContact = () => {
        setActualOptions("AddContact")
    }

    const openEditContact = () => {
        setActualOptions("EditContact")
    }

    const openDeleteContact = () => {
        setActualOptions("DeleteContact")
    }

    const close = () => {
        setActualOptions("None")
    }

    return (
        <optionsContext.Provider value={{
            actualOptions,
            actualContactId,
            setActualContactId,
            openEdit,
            openAddContact,
            openEditContact,
            openDeleteContact,
            close
        }}>
            {children}
        </optionsContext.Provider>
    )
}