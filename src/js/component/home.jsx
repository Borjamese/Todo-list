import React, { useState } from "react";

//create your first component
const Home = () => {

  //fetch introducido, render no funcional

  fetch('https://assets.breatheco.de/apis/fake/todos/user/borjamese', {
    method: "PUT",
    body: JSON.stringify({currentWord}),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => {
      console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
      console.log(resp.status); // el código de estado = 200 o código = 400 etc.
      console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
      return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
  })
  .then(data => {
      //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
      console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
  })
  .catch(error => {
      //manejo de errores
      console.log(error);
  });

 
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
      if (currentWord.trim() !== "") {
      setWordInList((prevList) => [...wordInList, currentWord]);
      setCurrentWord("");
    }
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
