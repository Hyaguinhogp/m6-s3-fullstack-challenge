import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"
import { toast } from "react-hot-toast"
import { IoMdMail } from "react-icons/io"
import * as yup from "yup"
import { cardContext } from '../../contexts/CardsContext'
import { loadingContext } from "../../contexts/LoadingContext"
import { userContext } from '../../contexts/UserContext'
import api from "../../services/api"
import DefaultForm from "../DefaultForm"

export interface IRequest {
    email: number
}

const Login = () => {

    const { activeLoading, desactiveLoading } = useContext(loadingContext)
    const { user, updateUser } = useContext(userContext)
    const { goToRegister, goToProfile } = useContext(cardContext)

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("Insira um e-mail válido"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRequest>({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data: FieldValues) => {
        activeLoading()
        api.post("/login", data)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                let config = {
                    headers: {
                        Authorization: `Bearer ${res.data.token}`
                    }
                }
                api.get("/self", config)
                    .then((res) => {
                        desactiveLoading()
                        console.log(res.data)
                        updateUser(res.data)
                        toast.success("Login realizado com sucesso!")
                        goToProfile()
                    })
                    .catch((error) => {
                        desactiveLoading()
                        console.log(error)
                        const message = error.response ? error.response.data.message : "Oops! Algo deu errado"
                        toast.error(message)
                    })

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
                <h1>Login</h1>
                <div className="inputs">
                    <div className="input_container">
                        <label htmlFor="" hidden>Email</label>
                        <IoMdMail className="form_icon" />
                        <input type="text" placeholder="E-mail" {...register("email")} />
                    </div>
                    <span>{errors.email?.message}</span>
                </div>
                <button type="submit">Continuar</button>
                <p>ainda não tem uma conta? <a onClick={() => goToRegister()}>Cadastre-se!</a></p>
            </form>
        </DefaultForm>
    )
}

export default Login