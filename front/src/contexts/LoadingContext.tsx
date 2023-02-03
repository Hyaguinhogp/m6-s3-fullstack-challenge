import { createContext, ReactNode, useState } from "react"

interface ILoadingProviderData {
    isLoading: boolean
    activeLoading: () => void
    desactiveLoading: () => void
}

interface ILoadingProviderProps {
    children: ReactNode
}

export const loadingContext = createContext<ILoadingProviderData>({} as ILoadingProviderData)

export const LoadingProvider = ({ children }: ILoadingProviderProps) => {

    const [isLoading, setIsLoading] = useState(false)

    const activeLoading = () => {
        setIsLoading(true)
    }

    const desactiveLoading = () => {
        setIsLoading(false)
    }

    return (
        <loadingContext.Provider value={{ isLoading, activeLoading, desactiveLoading }}>
            {children}
        </loadingContext.Provider>
    )
}