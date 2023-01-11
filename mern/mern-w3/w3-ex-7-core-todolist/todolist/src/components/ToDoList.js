import React, {useState } from 'react';
import '../App.css'
// const InitialToDoItem = {
//   value: "",
//   completed: true
// };
const inicial = [];

//FUNCION TO DO LIST
function ToDoList() {
  const [vector, setVector] = useState(inicial);
  const [inputboxValue, setinputboxValue] = useState("");


 //vamos actualizando el valor del inputbox
  const onChangeInputbox = e =>{
    const newInputValue = e.target.value;
    setinputboxValue(newInputValue);
  }
  //al hacer click en el boton, actualizamos los valores del vector que contiene el toDoList
  const onClickAdd = e =>{
    e.preventDefault();
    const newItem = {value: inputboxValue, completed: false, id: vector.length};
    setVector([...vector,newItem]);
  }
  //al hacer check, se debe tachar el texto
  const onClickCheckbox = (event, itemID) =>{
    
    setVector( prevState => {
      const newVector = prevState.map( item => {
              if(item.id === itemID){
                return {...item, completed: !(prevState[itemID].completed)}
              }
              return item;
        });
        return newVector;
    }) 



  }
  const onClickDelete = (event, itemID)=>{
    event.preventDefault();
    const newVector = vector.filter ( item => {
        if( item.id === itemID ){
          return false;
        }
        else{
          return true;
        }
        
      }
    );

    setVector(newVector);

  }


  return (
<form>
    <h1>  Ninja To Do List  </h1>
    <div className='inputContainer'>
        <input className='ToDoInput' type="text" placeholder='To Do...' value={inputboxValue} onChange={onChangeInputbox}/>     
    </div>
    <div className='buttonContainer'>
        <button type="submit" className="btn btn-primary mb-3" onClick={onClickAdd} > Add</button>
    </div>
    <div>
        <ul>
            <div>
              { 
                    vector.map(  (item, index) => 
                      <div className="ItemContainer "key={index}>             
                          {
                            item.completed ?  <label className="form-check-label" htmlFor="flexCheckIndeterminate"> <s>{item.value} </s> </label> :  <label className="form-check-label" htmlFor="flexCheckIndeterminate"> {item.value} </label>
                          }
                          <input className="form-check-input" type="checkbox" onClick={event => onClickCheckbox(event, item.id)} />
                          <button type="submit" id="buttonDelete" className="btn btn-danger" onClick={event => onClickDelete(event, item.id)} > Delete</button>
                    </div> 
                
                )
            }
            </div>

        </ul>
    </div>
</form>
  )
}

export default ToDoList