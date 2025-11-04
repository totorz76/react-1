import MaCheckbox from "./components/MaCheckbox/MaCheckbox.jsx";
import List from "./components/List/List.jsx";
import Popup from "./components/Popup/Popup.jsx";
import Compteur from "./components/Compteur/Compteur.jsx";
import "./App.css";

const Bouton = (props) => {
  console.log(props.children)
  return (
    <button className={props.colorBtn}>{props.children}</button>
  )
};
function App() {
  return (
    <div>
      {/* Les attributs déclarés dans un component deviennent des propriétés de props */}
      <Bouton colorBtn='green'>Mon premier bouton</Bouton>
      <Bouton colorBtn='red'>Mon deuxième bouton</Bouton>
      <p>oui</p>
      <MaCheckbox stateChek={true} colorCheck="green" >label1</MaCheckbox>
      <MaCheckbox stateChek={false} colorCheck="red" >label2</MaCheckbox>
      <List></List>
      <Popup></Popup>
      <Compteur></Compteur>
    </div>
  );
}
export default App;
