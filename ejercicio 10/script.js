let personsList = [];

let addToList = () => {
  let name = document.getElementById("name").value;

  if(name.length == 0){
    alert('Esta vacio, agrega un nombre');
    return;
  }
  document.getElementById("name").value = '';

  let ul = document.getElementById("personsList");
  ul.appendChild(listItemFromText(name));
  personsList.push(name);
};

let listItemFromText = text =>{
  let li = document.createElement("li");
  li.innerHTML = text;
  return li;
};
