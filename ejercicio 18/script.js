const getWeather = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Clima nublado: 22°C")
    }, 5000)
  })
}

const getTraffic = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Sin trafico")
    }, 5000)
  })
}

const TripPlan = async() => {
  try{
    const weather = getWeather()
    const traffic = getTraffic()
    const plan = await Promise.all([weather, traffic])
    return plan
  } catch(error){
    throw error
  }
}

TripPlan()
  .then(planInfo => {
    console.log(planInfo)
  })
  .catch(error => {
    console.error(error)
  })
