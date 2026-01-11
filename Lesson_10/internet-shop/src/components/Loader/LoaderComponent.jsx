import { HashLoader } from "react-spinners";

const LoaderComponent = ({size = 150}) => {
    return (
        <HashLoader
            color = "black"
            loading = {true}
            size={size}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default LoaderComponent;