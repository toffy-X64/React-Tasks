import './MainComponent.css';

function MainComponent({ children }) {
    return (
        <main className="app">
            {children}
        </main>
    );
}

export default MainComponent;