import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"
import { toast } from "react-hot-toast"
import { ImCancelCircle } from "react-icons/im"
import * as yup from "yup"
import { loadingContext } from "../../contexts/LoadingContext"
import { optionsContext } from '../../contexts/OptionsContext'
import { userContext } from '../../contexts/UserContext'
import api from "../../services/api"
import DefaultForm from "../DefaultForm"
import { Buttons, EditProfileContainer } from './styles'

export interface IRequest {
    name: number
    email: number
    tel: number
}

const DeleteContact = () => {

    const { activeLoading, desactiveLoading } = useContext(loadingContext)
    const { refreshUser } = useContext(userContext)
    const { close, actualContactId } = useContext(optionsContext)

    const formSchema = yup.object().shape({
        name: yup.string(),
        email: yup.string().email("Insira um e-mail válido"),
        tel: yup.string(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRequest>({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data: FieldValues) => {
        close()
        activeLoading()
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("@client:token")}`
            }
        }
        api.delete(`/contacts/${actualContactId}`, config)
            .then(async (res) => {
                await refreshUser()
                desactiveLoading()
                toast.success("Contato deletado com sucesso!")
            })
            .catch((error) => {
                desactiveLoading()
                console.log(error)
                const message = error.response ? error.response.data.message : "Oops! Algo deu errado"
                toast.error(message)
            })
    }
    return (
        <EditProfileContainer>
            <DefaultForm>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h1>Apagar contato?</h1>
                    <Buttons>
                        <button type="button" className="cancel_button" onClick={() => close()}>Cancelar</button>
                        <button type="submit" className="delete_button">Deletar</button>
                    </Buttons>
                </form>
            </DefaultForm>
        </EditProfileContainer>
    )
}

export default DeleteContact