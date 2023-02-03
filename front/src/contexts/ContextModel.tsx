import { createContext, ReactNode } from "react"

interface IModelProviderData {
    children: ReactNode
}

export const modelContext = createContext<IModelProviderData>({} as IModelProviderData)

export const ModelProvider = ({ children }: IModelProviderData) => {
    return (
        <modelContext.Provider value={{ children }}>
            {children}
        </modelContext.Provider>
    )
}