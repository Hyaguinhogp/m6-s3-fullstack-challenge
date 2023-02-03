import { useContext, useEffect } from "react"
import AddContact from "../../components/AddContact"
import Background from "../../components/Background"
import { HomeContent } from "../../components/DefaultForm/styles"
import DeleteContact from "../../components/DeleteContact"
import EditContact from "../../components/EditContact"
import EditProfile from "../../components/EditProfile"
import LoadingScreen from "../../components/LoadingScreen"
import Login from "../../components/Login"
import Profile from "../../components/Profile"
import Register from "../../components/Register"
import { cardContext } from "../../contexts/CardsContext"
import { loadingContext } from "../../contexts/LoadingContext"
import { optionsContext } from "../../contexts/OptionsContext"
import { userContext } from "../../contexts/UserContext"
import api from "../../services/api"

const Home = () => {

    const { isLoading, activeLoading, desactiveLoading } = useContext(loadingContext)
    const { updateUser } = useContext(userContext)
    const { actualCard, goToProfile, goToLogin } = useContext(cardContext)
    const { actualOptions } = useContext(optionsContext)

    useEffect(() => {
        const assertIfHaveToken = async () => {
            activeLoading()
            const token = localStorage.getItem("@client:token")
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            if (token) {
                api.get("/clients/self", config)
                    .then((res) => {
                        desactiveLoading()
                        updateUser(res.data.data)
                        goToProfile()
                    })
                    .catch((error) => {
                        desactiveLoading()
                        goToLogin()
                    })
            }
            else {
                desactiveLoading()
                goToLogin()
            }
        }
        assertIfHaveToken()
    }, [])

    return (
        <Background>
            {isLoading && <LoadingScreen />}
            {
                (actualOptions === "Edit" && <EditProfile />) ||
                (actualOptions === "AddContact" && <AddContact />) ||
                (actualOptions === "EditContact" && <EditContact />) ||
                (actualOptions === "DeleteContact" && <DeleteContact />)
            }
            <HomeContent>
                {
                    (actualCard === "Register" && <Register />) ||
                    (actualCard === "Login" && <Login />) ||
                    (actualCard === "Profile" && <Profile />)
                }
            </HomeContent>
        </Background>
    )
}

export default Home