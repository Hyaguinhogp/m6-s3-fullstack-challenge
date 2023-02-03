import { ReactNode } from "react"
import { BackgroundContainer } from "./styles"

interface IBackgroundProps {
    children: ReactNode
}

const Background = ({ children }: IBackgroundProps) => {
    return (
        <BackgroundContainer>
            {children}
        </BackgroundContainer>
    )
}

export default Background