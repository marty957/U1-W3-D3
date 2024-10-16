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
  divContainer.style.borderRadius = "2px 2px 2px";

  /*creazione bottone per eliminare la task aggiunta*/
  const bottunToCancel = document.createElement("button");
  bottunToCancel.type = "button";
  bottunToCancel.className = "fakeButton";
  bottunToCancel.innerText = "X";

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
    writtenTask.classList.toggle("pointerOnOff");
    /*if ((writtenTask.style.textDecoration = "none")) writtenTask.style.textDecoration = "line-through";
    else {
      writtenTask.style.textDecoration = "none";
    }*/
  };
  writtenTask.onmousemove = function () {
    writtenTask.style.cursor = "pointer";
  };
  form.reset();
};
