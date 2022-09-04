document.getElementById("random").addEventListener("click", randomJoke);
document.getElementById("queryButton").addEventListener("click", queryJoke);

function randomJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
  xhr.onload = function () {
    if (this.status === 200) {
      //console.log(this.responseText);
      const randomJoke = document.querySelector(".randomJoke");
      randomJoke.textContent = JSON.parse(this.responseText).value;
      randomJoke.classList.add("border");
    }
  };
  xhr.send();
}

function queryJoke() {
  const xhr = new XMLHttpRequest();
  const inputVal = document.querySelector("#inputText").value;
  if (inputVal !== '') {
    console.log(inputVal);
    let url = `https://api.chucknorris.io/jokes/search?query=${inputVal}`;
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (this.status === 200) {
        //console.log(this.responseText);
        let output = '';
        const randomJoke = document.querySelector(".queryJoke");
        parsedJoke = JSON.parse(this.responseText);
        parsedJoke.result.forEach(function(jk){
           output += `<li>${jk.value}</li>`
        });
        //console.log(output);
        randomJoke.innerHTML = output;
        randomJoke.classList.add("border");
      }
    };
    xhr.send();
  }
}
