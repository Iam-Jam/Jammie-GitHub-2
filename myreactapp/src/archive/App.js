// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Hello World! hi also!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import Navbar from "./components/Navbar.js";
// import Footer from "./components/Footer.js";
// function App () {
//     const name = "Jammie Torayno"
//     const person = { fname: "jammie", lname:"torayno"}

  // I can place javascript commands before the retun command
  // App.js is the root component - each section of the webpage will have different components or different JS filenames
    
  // return (
  //   <div className="App">
  //       <Navbar></Navbar>

          // {/* Can also be written as <Navbar /> */}

        // <h1>Welcome to WD99P React Training</h1>
        // <p>This is my first homepage using react js.</p>
        // <p>{name}</p>
        // <p>{5 + 5}</p>
        // <p>{person.fname}</p>

//         <Footer></Footer>
//     </div>
//   );
// }

// export default App;



// 4.23.24

// import { useState } from "react";
// import "./styles.css";
// const Items = () => {
// const [itemname, setItemName] = useState("");
// const [itemprice, setItemPrice] = useState("");

// const [item, setItem] = useState([]);

// function addItem(e) {
//   e.preventDefault();

//   setItem([...item, { item: itemname, price: itemprice }]);
//   setItemName("");
//   setItemPrice("");
// }

// function addItemName(e) {
//   setItemName(e.target.value);
// }

// function addItemPrice(e) {
//   setItemPrice(e.target.value);
// }
// return (
//   <div>
//     <form>
//       <label>Item Name : </label>
//       <input
//         type="text"
//         value={itemname}
//         onChange={(e) => addItemName(e)}
//       />{" "}
//       <br />
//       <label>Item Price : </label>
//       <input
//         type="text"
//         value={itemprice}
//         onChange={(e) => addItemPrice(e)}
//       />
//       <br />
//       <button onClick={(e) => addItem(e)}>Add Item</button>
//     </form>

//     <div>
//       <ul>
//         {item.map((itm) => (
//           <li key={itm.item}>
//             {itm.item} {itm.price}
//             <button>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );
// };

// export default Items;




import Doctors from "./4.24/Doctors";

function App () {
  return (
    <div className="App">
      <Doctors />
    </div>
  );

}

export default App;