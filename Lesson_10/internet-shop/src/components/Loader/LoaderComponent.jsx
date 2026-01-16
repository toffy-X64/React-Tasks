import { HashLoader } from "react-spinners";

const LoaderComponent = ({size = 150, color = "black"}) => {
    return (
        <HashLoader
            color = {color}
            loading = {true}
            size={size}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default LoaderComponent;