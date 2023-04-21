import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {

  const [currentWord, setCurrentWord] = useState("");
  const [wordInList, setWordInList] = useState([]);

const getAllelements = () => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/borjamese")
  .then(resp => resp.json())
  .then(data => {
    setWordInList(data);
    console.log(data)
  })
  .catch(error => {
    console.log(error);
  });
}


  useEffect(() => {
    // fetch de los todos 
   getAllelements()
  }, []);

 // eliminar un todo
  const handleDelete = (itemToDelete) => { 

  	var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");


		 

         var requestOptions = {
           method: 'PUT',
           headers: myHeaders,
           body: JSON.stringify(wordInList.filter((w) => w !== itemToDelete)),
           redirect: 'follow'
         };

        fetch("https://assets.breatheco.de/apis/fake/todos/user/borjamese", requestOptions)
          .then(response => response.json())
          .then(result => {
            setWordInList(wordInList.filter((w) => w !== itemToDelete));
          })
          .catch(error => console.log('error', error));
	        }

  const createElement = () => {
		var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");


		 let agregar = wordInList.concat( {
			"label": currentWord, 
			"done": false
		  })

         var requestOptions = {
           method: 'PUT',
           headers: myHeaders,
           body: JSON.stringify(agregar),
           redirect: 'follow'
         };

        fetch("https://assets.breatheco.de/apis/fake/todos/user/borjamese", requestOptions)
          .then(response => response.json())
          .then(result => getAllelements())
          .catch(error => console.log('error', error));
	        }

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
             createElement();
           }
         }}
      />
      <button onClick={createElement}> Agregar tarea</button>
      <br/><br/>
      <ul className="list-group">
  {wordInList.map((w, index) => (
    <li key={index}>
      {w.label}
      <button onClick={() => handleDelete(w)}>Eliminar</button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Home;
