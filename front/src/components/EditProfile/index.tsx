import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"
import { toast } from "react-hot-toast"
import * as yup from "yup"
import { cardContext } from '../../contexts/CardsContext'
import { loadingContext } from "../../contexts/LoadingContext"
import api from "../../services/api"
import DefaultForm from "../DefaultForm"
import { FaUser } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs"
import { ImCancelCircle } from "react-icons/im"
import { optionsContext } from '../../contexts/OptionsContext'
import { EditProfileContainer } from './styles'
import { userContext } from '../../contexts/UserContext'

export interface IRequest {
    name: number
    email: number
    tel: number
}

const EditProfile = () => {

    const { activeLoading, desactiveLoading } = useContext(loadingContext)
    const { refreshUser } = useContext(userContext)
    const { close } = useContext(optionsContext)

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
        api.patch("/clients", data, config)
            .then(async (res) => {
                await refreshUser()
                desactiveLoading()
                toast.success("Informações atualizadas com sucesso!")
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
                    <div className="upbutton_container" onClick={() => close()}>
                        <ImCancelCircle className="close_button" />
                    </div>
                    <h1>Atualizar</h1>
                    <div className="inputs">
                        <div className="input_container">
                            <label htmlFor="" hidden>Nome</label>
                            <FaUser className="form_icon" />
                            <input type="text" placeholder="Nome" {...register("name")} />
                        </div>
                        <span>{errors.name?.message}</span>
                        <div className="input_container">
                            <label htmlFor="" hidden>Email</label>
                            <IoMdMail className="form_icon" />
                            <input type="text" placeholder="E-mail" {...register("email")} />
                        </div>
                        <span>{errors.email?.message}</span>
                        <div className="input_container">
                            <label htmlFor="" hidden>Telefone</label>
                            <BsFillTelephoneFill className="form_icon" />
                            <input type="text" placeholder="Telefone" {...register("tel")} />
                        </div>
                        <span>{errors.tel?.message}</span>
                    </div>
                    <button type="submit">Continuar</button>
                </form>
            </DefaultForm>
        </EditProfileContainer>
    )
}

export default EditProfile