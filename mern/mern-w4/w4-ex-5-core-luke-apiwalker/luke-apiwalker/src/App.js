import './App.css';
import {useState} from 'react';
import RenderResults from './components/RenderResults';


const OnClickDropBox =  (event)  =>{
  var dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('active');
}

function App() {
  const [idValue, setIDValue] = useState(0);
  const [option, setOption] = useState('');
  const [validOptions, setValidOptions] = useState(null);
  const [clicked, setClicked] = useState(false);

  const onClickBtn = event => {
    const validBoolean = ( option !== '' ) && ( !(isNaN(idValue))  ) 
    setValidOptions(validBoolean);
    if(!validBoolean){ //si es valid options no actualiza!!!! ver por que
      alert('Please enter valid values!');
    }
    else{
      setClicked(true);
    }
        
  }

  const OnClickIcon = (event, attribute) => {
    document.querySelector('.textBox').value = attribute;
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
    setOption(attribute);
  }
  return (
    <div className='appContainer'>
      <div className='topContainer'>
        {/* dropdown menu con referencia a https://www.youtube.com/watch?v=uFIl4BvYne0 */}
        <div className="optionContainer">
          <h2>
            Select an option
          </h2>  
          <div className="dropdown">
            <input type="text" className="textBox" placeholder="Select one option..." onClick={OnClickDropBox} ></input>
            <div className="option">
              <div onClick={(e) => OnClickIcon(e, "People")}><ion-icon name="person-outline"></ion-icon> People</div>
              <div onClick={(e) => OnClickIcon(e, "Films")}><ion-icon name="film-outline"></ion-icon> Films</div>
              <div onClick={(e) => OnClickIcon(e, "Starships")}><ion-icon name="rocket-outline"></ion-icon> Starships</div>
              <div onClick={(e) => OnClickIcon(e, "Vehicules")}><ion-icon name="car-outline"></ion-icon> Vehicules</div>
              <div onClick={(e) => OnClickIcon(e, "Species")}><ion-icon name="prism-outline"></ion-icon> Species</div>
              <div onClick={(e) => OnClickIcon(e, "Planets")}><ion-icon name="planet-outline"></ion-icon> Planets</div>
            </div>
          </div>
        </div>
        
        <div  className='idContainer'>
          <h2>Select an id </h2>
          <div className='idInputBoxContainer'>
            <input type="text" className='idInputBox' placeholder="Enter a valid ID..." onChange={e => setIDValue(e.target.value)} ></input>
          </div>
        </div>
        
        <div className='buttonContainer'>
            <button type="button" className="btn btn-warning" id='searchButton' onClick={onClickBtn}>Search</button>
        </div>
      </div>
      <div className='bottomContainer'>

        {validOptions ? <RenderResults option={option} idValue={idValue} clicked={clicked} setClicked={setClicked}/> : null} 


      </div>  


    </div>  
  );
}

export default App;
