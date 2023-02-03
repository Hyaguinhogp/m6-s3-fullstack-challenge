import { ReactNode } from "react"
import { CardProvider } from "./CardsContext"
import { LoadingProvider } from "./LoadingContext"
import { OptionsProvider } from "./OptionsContext"
import { UserProvider } from "./UserContext"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <UserProvider>
            <CardProvider>
                <LoadingProvider>
                    <OptionsProvider>
                        {children}
                    </OptionsProvider>
                </LoadingProvider>
            </CardProvider>
        </UserProvider>
    )
}

export default Providers