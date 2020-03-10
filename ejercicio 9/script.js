function flipText(){
  let message = (phrase) => phrase.split('').reverse().join('');
  document.getElementById("message").innerHTML = message(
    document.getElementById("phrase").value);
}
