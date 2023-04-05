import React, { useState } from "react";

//create your first component
const Home = () => {
			//el valor del input
	const [currentList, setCurrentList] = useState("");
 
	// el estado de los elementos en la lista que he añadido hasta el momento
	const [elementsInList, setElementsInList] = useState([]);

  return (
    <div className="home-header">
      <h1>To-dos</h1>
	  
      <input type="text" id="myInput" placeholder="Type here" />

	  <br></br><br></br>
	  
	  <ul>
		
  <li>Hit the gym</li>
  <li>Pay bills</li>
  <li>Meet George</li>
  <li>Buy eggs</li>
  <li>Read a book</li>
  <li>Organize office</li>
	</ul>
    </div>
  );
};

export default Home;
