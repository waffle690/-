import { useState } from 'react';

// function App() {
//     let [name, setName] = useState("anton");
//     let [LastName, setLastName] = useState("sergeyevich");
//     let [age, setAge] = useState(17);
//     let [ban, setBan] = useState(false);

//       return <div>
//         <span>{name}</span>
//         <br/>
//         <span>{LastName}</span>
//         <br/>
//         <span>{age}</span>
//         <br/>
//         <span>{ban ? 'ban' : 'neban'}</span>
//         {ban ? <button onClick={() => setBan(false)}>ne ban?</button> : <button onClick={() => setBan(true)}>ban?</button>} 
//         <button onClick={() => setName("sergey")}>name</button>
//         <button onClick={() => setLastName("antonovich")}>LAstName</button>
//         <button onClick={() => setAge(age+1)}>+</button>
//         <button onClick={() => setAge(age-1)}>-</button>
//       </div>;
//   }

function App() {
  const [value, setValue] = useState('');
  return <div>
  <input value={value} onChange={event => setValue(event.target.value)} /> <p>text: {value.length}</p>
  </div>;
}  
  
export default App