import { useContext } from "react"
import AddContact from "../../components/AddContact"
import Background from "../../components/Background"
import { HomeContent } from "../../components/DefaultForm/styles"
import EditProfile from "../../components/EditProfile"
import LoadingScreen from "../../components/LoadingScreen"
import Login from "../../components/Login"
import Profile from "../../components/Profile"
import Register from "../../components/Register"
import { cardContext } from "../../contexts/CardsContext"
import { loadingContext } from "../../contexts/LoadingContext"
import { optionsContext } from "../../contexts/OptionsContext"

const Home = () => {

    const { isLoading } = useContext(loadingContext)
    const { actualCard } = useContext(cardContext)
    const { actualOptions } = useContext(optionsContext)

    return (
        <Background>
            {isLoading && <LoadingScreen />}
            {
                (actualOptions === "Edit" && <EditProfile />) ||
                (actualOptions === "AddContact" && <AddContact />)
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