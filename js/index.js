// API har ingen key
const url = "http://universities.hipolabs.com/search?country=norway";

const uniContainer = document.querySelector(".container");

async function uniAPI() {
  try {
    const response = await fetch(url);
    const uniResult = await response.json();
    console.log(uniResult);
    uniContainer.innerHTML = "";
    for (let i = 0; i < uniResult.length; i++) {
      if (i === 12) {
        break;
      }
      uniContainer.innerHTML += `<a href="/details.html?${}country=norway"><h2>${uniResult[i].name}</h2></a>`;
      // uniContainer.innerHTML += `<a href="/details.html"><h2>${uniResult[i].name}</h2></a>`;
      // ?land=usa&skole=skole navn
      console.log(uniResult[i].name);
    }
  } catch (err) {
    console.log(err);
    uniContainer.innerHTML = `<div><h3>error 404</h3></div>`;
  }
}
uniAPI();
