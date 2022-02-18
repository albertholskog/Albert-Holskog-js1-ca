// API har ingen key
const url = "http://universities.hipolabs.com/search?country=norway";

const uniContainer = document.querySelector(".indexContainer");

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
      uniContainer.innerHTML += `<a href="/details.html?name=${uniResult[i].name}&country=norway/">
                                            <div><h2>${uniResult[i].country}</h2>
                                            <h2>${uniResult[i].name}</h2>
                                            <h2>${uniResult[i].alpha_two_code}</h2>
                                            </div></a>`;
      console.log(uniResult[i].name);
    }
  } catch (err) {
    console.log(err);
    uniContainer.innerHTML = "<div><h3>Could not connect to API</h3></div>;"
  }
}
uniAPI();
