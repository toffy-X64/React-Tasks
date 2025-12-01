const FavoriteMovies = () => {
    const movies = [
        {
            name: 'Інтерстеллар',
            image: 'interstellar.jpg'
        },
        {
            name: 'Матриця',
            image: 'matrix.png'
        }
    ];

    return (
        <div className="card" >
            <h3>Мої улюблені фільми</h3>

            <ol style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
            }}>
                {movies.map( (e) => (
                    <li>
                        <h3>{e.name}</h3>
                        <img 
                            src={`/assets/${e.image}`} 
                            alt={e.name} 
                            style={{
                                width: '200px',
                                display: 'block'
                            }}
                        />
                        <button style={{
                            color: 'white',
                            backgroundColor: 'skyblue',
                            borderRadius: '10px',
                            border: 'none',
                            padding: '5px 10px'
                        }}>Детальніше</button>
                    </li>
                ) )}
            </ol>
        </div>
    )
}

export default FavoriteMovies;
