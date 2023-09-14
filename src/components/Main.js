import logo from '../image/logo.svg';
import '../style/Main.css'

function Main(){
    return (
        <main class="App-main">
            <img src={logo} className="Main-logo" alt="logo" />
            <h1>Primo progetto con React</h1>
        </main>
    );
}

export default Main;