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

export interface IRequest {
    name: number
    email: number
    tel: number
}

const Register = () => {

    const { activeLoading, desactiveLoading } = useContext(loadingContext)
    const { goToLogin } = useContext(cardContext)

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("Insira um e-mail válido"),
        tel: yup.string().required("Telefone obrigatório"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRequest>({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data: FieldValues) => {
        activeLoading()
        console.log(data)
        api.post("", data)
            .then((res) => {
                desactiveLoading()
                toast.success("Cadastro realizado com sucesso!")
                goToLogin()
            })
            .catch((error) => {
                desactiveLoading()
                console.log(error)
                const message = error.response ? error.response.data.message : "Oops! Algo deu errado"
                toast.error(message)
            })
    }
    return (
        <DefaultForm>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>Cadastro</h1>
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
                <p>Já tem uma conta? <a onClick={() => goToLogin()}>Faça login aqui</a></p>
            </form>
        </DefaultForm>
    )
}

export default Register