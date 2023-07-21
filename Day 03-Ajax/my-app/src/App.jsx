// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // const name = "Thành"
  const fruits = ["Apple", "Banan", "Orang", "Aprict", "Blackrowan", "Cranbrry"]
  function handleClick(e) {  
    e.preventDefault();  
    console.log('You had clicked a Link.');  
}  
  return (
    <div>
         <a href="https://learn.codegym.vn/courses/reactjs" onClick={handleClick}>
              Click_Me  
        </a>  
      <h1>List of fruit</h1>
      <ul>
        {fruits.map(fruit =>
          <li key={fruit}>{fruit}</li>
        )}
      </ul>
    </div>
   
  

    //     <div>
    //       {
    //         React.createElement("p", {
    // className: 'name',
    // title: 'Page Name'
    //         }, name )
    //       }

    //       <p className='name' title='Page Name'>Cường</p>
    //     </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
