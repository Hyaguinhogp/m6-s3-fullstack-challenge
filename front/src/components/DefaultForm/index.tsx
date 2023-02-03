import { ReactNode } from "react"
import { DefaultFormContainer } from "./styles"

interface IDefaultFormProps {
    children: ReactNode
}

const DefaultForm = ({ children }: IDefaultFormProps) => {
    return (
        <DefaultFormContainer
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
        >
            {children}
        </DefaultFormContainer>
    )
}

export default DefaultForm