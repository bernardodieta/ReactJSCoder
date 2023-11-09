import ItemsListContainer from './components/ItemListContainer';
import NavBar from "./components/navBar";
import Header from "./components/Header";


function App(){
    return(
    <div className="maincont">
        <NavBar/>
        <Header/>
        <ItemsListContainer greeting='Bienvenido'/>
    </div>

    )
}
export default App;