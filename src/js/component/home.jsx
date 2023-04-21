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
    setWordInList((prevList) => prevList.filter((w) => w !== itemToDelete));

    // Actualizar los items en la API
    fetch("https://assets.breatheco.de/apis/fake/todos/user/borjamese", {
      method: "PUT",
      body: JSON.stringify(
        wordInList.map((w) => ({ label: w, done: false }))
      ),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to update todo list");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

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
        // onKeyDown={(event) => {
        //   if (event.key === "Enter") {
        //     handleSubmit();
        //   }
        // }}
      />
      <button onClick={createElement}> Agregar tarea</button>
      <br/><br/>
      <ul className="list-group">
       
       {wordInList.map((w, index)=>
       (
        <li key={index}>
          {w.label}
        </li>
       )
       )}
      </ul>
    </div>
  );
};

export default Home;
