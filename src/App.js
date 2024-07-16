// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Title from '../src/components/Title';
import Module from '../src/components/Module';
import EventList from '../src/components/EventList';


function App() {
  // const [name , setName] = useState("mahdi")
  // const handleClick = () => {
  //   setName("sara")
  // }
  // const handleClick = () => {
  //   setName('ali')
  // };
// ___________________________________
// const handleClick = (id) => {
//   setArray(array.filter((element) => {
//     return id !== element.id ;
//   }))
// }
// const [showArray , setShowArray] = useState(true);

// const [array , setArray] = useState([
//   {title : "string1" , id : 1 , city: "tehran"},
//   {title : "string2" , id : 2 , city: "tabriz"},
//   {title : "string3" , id : 3 , city: "shiraz"},
//   {title : "string4" , id : 4 , city: "isfahan"},
//   {title : "string5" , id : 5 , city: "mashhad"},
//   {title : "string6" , id : 6 , city: "kerman"},
// ])
// __________________________________________________
// calculator
// const [display , setDisplay] = useState("");
// const [expression , setExpression] = useState([]);

// const handleClick = (value) => {
//   setDisplay(value);
//   setExpression([...expression , value])
// }
// const handleResult = () => {
//   const result = expression.join("")
//   .split(/(\D)/g)
//   .map((value) => (
//     value.match(/\d/g)? parseInt(value , 0) : value
//     ))
//   .reduce((acc , value , index , array) => {
//     switch(value){
//       case "+" :
//         return (acc = acc + array[index + 1])
//         case "-" :
//           return (acc = acc - array[index + 1])
//         case "*" :
//           return (acc = acc * array[index + 1])
//         case "/" :
//           return (acc = acc / array[index + 1])
//         default : 
//           return acc;
//         }
//   })
// setDisplay(result);
// setExpression("")
// }
// _____________________________________________________
// components
const [showModal , setShowModal] = useState(true);
const [showEvent , setShowEvent] = useState(true);
const subtitle = "Latest Movies";

const handleClose = () => {
  setShowModal(false)
}
const [events , setEvents] = useState([
  {title : "THOR : LOVE AND THUNDER (2022)" , id : 1},
  {title : "THE GRAY MAN (2022)" , id : 2},
  {title : "THE SEA BEAST (2022)" , id : 3},
  {title : "TOP GUN: MAVERICK (2022)" , id : 4},
  {title : "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS (2022)" , id : 5},
  {title : "HUSTLE (2022)" , id : 6},
])
const handleClick = (id) => {
  console.log(id);
  setEvents((preEvents) => {
    return preEvents.filter((event) => {
      return id !== event.id
    })
  })
}



  return (
    <div className="App">
      {/* <h2>{name}</h2> */}
      {/* <button onClick={() => {setName("ali")}}>click here</button> */}
      {/* <button onClick={handleClick}>click here</button> */}
      {/* _________________________________________________________ */}
      
      
      {/* {showArray && array.map((element , index) => ( */}
        {/* <div key={element.id}> */}
          {/* <h2>{index +1} : {element.title}</h2> */}
          {/* <h2>{element.id} : {element.title}</h2> */}
          {/* <h4>{index +1} : {element.city}</h4> */}
          {/* <button onClick={() => {handleClick(element.id)}}>{element.id}</button> */}
        {/* </div> */}
      {/* ))} */}
      {/* {showArray && <button onClick={() => {setShowArray(false) }}>Hide All</button>} */}
      {/* {!showArray && <button onClick={() => {setShowArray(true)}}>Show All</button>} */}
    {/* _____________________________________________________ */}
    {/* calculator */}
    {/* <h3 className="display">{display}</h3>
    <span className='expression'>{expression}</span>
    <section className='panel'>
      <section className='numbers'>
        <button onClick={() => {handleClick(7)}}>7</button>
        <button onClick={() => {handleClick(8)}}>8</button>
        <button onClick={() => {handleClick(9)}}>9</button>
        <button onClick={() => {handleClick(4)}}>4</button>
        <button onClick={() => {handleClick(5)}}>5</button>
        <button onClick={() => {handleClick(6)}}>6</button>
        <button onClick={() => {handleClick(1)}}>1</button>
        <button onClick={() => {handleClick(2)}}>2</button>
        <button onClick={() => {handleClick(3)}}>3</button>
        <button onClick={() => {handleClick(0)}}>0</button>
      </section>
      <section className='operators'>
        <button onClick={() => {handleClick("/")}}>/</button>
        <button onClick={() => {handleClick("*")}}>*</button>
        <button onClick={() => {handleClick("+")}}>+</button>
        <button onClick={() => {handleClick("-")}}>-</button>
        <button onClick={() => {handleResult("=")}}>=</button>
      </section>
    </section> */}

    {/* _______________________________________________________________ */}

    <Title title="My Favorite Movies" subtitle={subtitle}/>
    { showModal &&
    <Module handleClose={handleClose}>
      <h2>string</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, dolor?</p>
    </Module>
    }
    { showEvent &&
  <EventList events={events} handleClick={handleClick}/>
    }









    </div>
  );
}


export default App;
