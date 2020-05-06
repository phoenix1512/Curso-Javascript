const checkAge = (age) => {
  return new Promise((resolve,reject) => {
    if(age >= 18){
      resolve("Es mayor de edad")
    }
    else{
      reject("Es menor de edad")
    }
  })
}

const isGrownUp = guess => {
  checkAge(guess)
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg))
}
