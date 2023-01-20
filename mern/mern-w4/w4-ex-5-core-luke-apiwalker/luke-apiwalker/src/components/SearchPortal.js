import '../App.css';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import RenderResults from './RenderResults';

const SearchPortal = (props) => {


    const {idValue, setIDValue} = props;
    const {option, setOption} = props;
    const {clicked, setClicked} = props;
    const {validOptions, setValidOptions} = props;
    const {enteredID} = useParams();
    const isEnterByRoute = isNaN(enteredID) ? false : true;

    useEffect( () => {
        setClicked(!clicked);
        setIDValue(enteredID);
        setOption('people');
        setValidOptions(isEnterByRoute);
        console.log('estoy en useeffect');

    },[enteredID]);



    console.log('potttt', idValue);


const OnClickBtn = event => {
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
                            <div onClick={(e) => OnClickIcon(e, "Vehicles")}><ion-icon name="car-outline"></ion-icon> Vehicules</div>
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
                        <button type="button" className="btn btn-warning" id='searchButton' onClick={OnClickBtn}> Search </button>
                    
                </div>
        </div>
        <div className='bottomContainer'>
                    {
                        validOptions ? <RenderResults option={option} setOption={setOption}
                        idValue={idValue} setIDValue={setIDValue} clicked={clicked} setClicked={setClicked}
                        validOptions={validOptions} setValidOptions={setValidOptions}
                        /> : null 
                    }
                </div>
    </div>
    )
}

export default SearchPortal