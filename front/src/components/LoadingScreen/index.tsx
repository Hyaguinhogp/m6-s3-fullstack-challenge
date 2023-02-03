import { LoadingScreenContainer, LoadingScreenContent } from "./styles"
import { AiOutlineLoading } from "react-icons/ai"

const LoadingScreen = () => {
    return (
        <LoadingScreenContainer>
            <LoadingScreenContent>
                <AiOutlineLoading className="loading_icon" />
            </LoadingScreenContent>
        </LoadingScreenContainer>
    )
}

export default LoadingScreen