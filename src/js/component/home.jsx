import React, { useState } from "react";

//create your first component
const Home = () => {

  //fetch introducido, render no funcional

  const data = [{
    "label" : "probando",
    "done" : false
  },
{
"label" : "hola",
"done": false
}
];

  fetch('https://assets.breatheco.de/apis/fake/todos/user/borjamese', {
		method: 'PUT', // or 'POST'
		body: JSON.stringify(data), // data can be a `string` or  an {object} which comes from somewhere further above in our application
		headers:{
		  'Content-Type': 'application/json'
    }
  })

  .then(res => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  })
  .then(response => console.log('Success:', response))
  .catch(error => console.error(error));

 
//fetch introducido hasta aquí

	const [currentWord, setCurrentWord] = useState("");
 
	// el estado de los elementos en la lista que he añadido hasta el momento
	const [wordInList, setWordInList] = useState([]);

  const handleDelete = (itemToDelete) => {
    setWordInList((prevList) => prevList.filter((w) => w !== itemToDelete));
  };

  return (
    <div className="home-header">
      <h1>Todos</h1>
	  
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
        {wordInList.map((w) => (
          <li class="list-group-item">
            {w}{" "}
            <button
              aria-label='delete item'
              type='button'
              onClick={() => handleDelete(w)}
            >
              X
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
