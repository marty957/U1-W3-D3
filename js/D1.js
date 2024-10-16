const form = document.querySelector("form");
console.log(form);

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("funziona");

  const inputTask = document.getElementById("taskToDo");
  const InputAdded = {
    task: taskToDo.value,
  };
  console.log(InputAdded);
  //creazione del div per le tasks//
  /*variabili*/
  const divContainer = document.createElement("div");
  const writtenTask = document.createElement("p");
  const mainForContainar = document.querySelector("main");

  /*attributi*/
  mainForContainar.appendChild(divContainer);
  divContainer.className = "task-contaneir";
  writtenTask.style.display = "inline-block";

  /*creazione bottone per eliminare la task aggiunta*/
  const bottunToCancel = document.createElement("button");
  bottunToCancel.type = "button";
  bottunToCancel.className = "fakeButton";

  /*aggiunta del bottone e della stringa*/
  writtenTask.innerHTML += `${InputAdded.task}`;
  divContainer.appendChild(writtenTask);
  divContainer.appendChild(bottunToCancel);

  /*funzione per la eliminazione della stringa creata*/

  bottunToCancel.onclick = function () {
    divContainer.remove();
  };

  /*funzione per le task completate*/

  writtenTask.onclick = function () {
    if ((writtenTask.style.textDecoration = "none")) writtenTask.style.textDecoration = "line-through";
    else {
      writtenTask.style.textDecoration = "none";
    }
  };
  form.reset();
};
