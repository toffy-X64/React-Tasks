import { ClipLoader } from "react-spinners";

const Loader = ({ visible }) => {
    return (
        <main className="page">
            <div className="container">
                <ClipLoader
                    color = "black"
                    loading = {visible}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </main>
    );
}

export default Loader;