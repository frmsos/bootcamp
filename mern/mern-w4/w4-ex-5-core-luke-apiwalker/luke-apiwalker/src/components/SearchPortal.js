import '../App.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const SearchPortal = (props) => {
    const idValue = props.idValue;
    const setIDValue = props.setIDValue;
    const option = props.option;
    const setOption = props.setOption;


    console.log('potttt', idValue);

    const [validOptions, setValidOptions] = useState(null);
    const [clicked, setClicked] = useState(false);

const onClickBtn = event => {
    alert('bingpot');
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
const OnClickDropBox =  (event)  =>{
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}
const IDOptionChange = event =>{
    setIDValue(event.target.value);
    console.log(idValue);
}

return (
    <div className='appContainer'>
            <h1>SearchPortal</h1>
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
                        <input type="text" className='idInputBox' placeholder="Enter a valid ID..." onChange={IDOptionChange} ></input>
                    </div>
                </div>
                
                <div className='buttonContainer'>
                    <Link to="/clicked">
                        <button type="button" className="btn btn-warning" id='searchButton'> Search </button>
                    </Link>
                    
                </div>
        </div>
    </div>
    )
}

export default SearchPortal