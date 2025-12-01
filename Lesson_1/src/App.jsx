import MiniBlog from "./components/MiniBlog";
import FavoriteMovies from "./components/FavoriteMovies";

const App = () => {
    return (
        <div className="container" style={{
            padding: '20px',
            display: 'flex',
            gap: '15px'
        }}>
            <MiniBlog />
            <FavoriteMovies/>
        </div>
    )
}

export default App;