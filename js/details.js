const queryString = document.location.search;
const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("name");
const idName = id.slice(0, -1);
console.log(idName);

const url = `http://universities.hipolabs.com/search?name=${idName}&country=norway`;

console.log(url);
const detailsContainer = document.querySelector(".detailsContainer");

async function detailsAPI() {
  try {
    const response = await fetch(url);
    const detailsData = await response.json();
    console.log(detailsData[0]);

    detailsContainer.innerHTML = `<div><h2>Country: ${detailsData[0].country}</h2>
                                        <h2>Name of school: ${detailsData[0].name}</h2>
                                        <h2>School website: ${detailsData[0].web_pages}</h2></div>`;
  } catch (err) {
    detailsContainer.innerHTML =
      "<div><p>No school fund, Api not woriking</p></div>";
    console.log("error");
  }
}

detailsAPI();
