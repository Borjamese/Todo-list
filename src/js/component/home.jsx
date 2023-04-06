import React, { useState } from "react";

//create your first component
const Home = () => {
			//el valor del input
	const [currentWord, setCurrentWord] = useState("");
 
	// el estado de los elementos en la lista que he añadido hasta el momento
	const [wordInList, setWordInList] = useState([]);

  return (
    <div className="home-header">
      <h1>To-dos</h1>
	  
      <input
  type="text"
  id="myInput"
  onChange={(evento) => setCurrentWord(evento.target.value)}
  value={currentWord}
  placeholder="Type here"
  onKeyDown={(event) => {
    if (event.key === "Enter") {
      setWordInList((prevList) => [...wordInList, currentWord]);
      setCurrentWord("");
    }
  }}
/>

	  <br></br><br></br>
	  

	  <ul class="list-group">
      {wordInList.map ((w) => ( 
  <li class ="list-group-item">{w} </li>
      ))}
	</ul>
    </div>
  );
};

export default Home;
