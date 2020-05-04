const payFood = new Promise((resolve, reject) => {
  setTimeout(() => {
    Promise.race([debitCard,creditCard]).then(receipt => {
      resolve(resolve({done: true, receipt,clientId: 320646}))
    })
  }, 3000)
})

const debitCard = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tarjeta de debito")
  },1500)
})

const creditCard = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Tarjeta de credito")
  },6000)
})

const sendFood = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({dealerId: 98828, status: "en camino"})
  }, 10000)
})

const orderFood = () => {
  Promise.all([payFood, sendFood])
    .then(order => console.log(order))
    .catch(error => console.error(error))
    .finally(() => console.log("Proceso finalizado"))
}

orderFood()
