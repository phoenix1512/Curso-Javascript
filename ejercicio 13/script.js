const hacerTarea = (tarea, callback) => {
  console.log(`haciendo la tarea ${tarea}`);
  setTimeout(()=>{
    console.log('Tarea \"terminada\"');
    callback();
  }, 3000);
}

hacerTarea("de la cuarentena", ()=>{
  console.log("salir de antro, cuando la cuarentena acabe");
});
