const repoList = [
{
  id: 1,
  name: "test-repo1",
}
{
  id: 2,
  name: "test-repo2",
}
{
  id: 3,
  name: "test-repo3",
}
{
  id: 4,
  name: "test-repo4",
}
{
  id: 5,
  name: "test-repo5",
}
{
  id: 6,
  name: "ASSIGNMENT-create-calculator",
}
{
  id: 7,
  name: "ASSIGNMENT-product-cards",
}
{
  id: 8,
  name: "ASSIGNMENT-intro-js-array-methods",
}
{
  id: 9,
  name: "ASSIGNMENT-finish-lesson",
}
{
  id: 10,
  name: "LAB-HTML-Resume",
}
{
  id: 11,
  name: "LAB-link-in-bio",
}
{
  id: 12,
  name: "LAB-pet-adoption",
}
{
  id: 13,
  name: "INDIVIDUAL-PROJECT-sorting-hat",
}
{
  id: 14,
  name: "INDIVIDUAL-PROJECT-big-boi",
}
{
  id: 15,
  name: "INDIVIDUAL-PROJECT-save-the-penguins",
}
{
  id: 16,
  name: "CODE-ALONG-watch-me-code",
}
{
  id: 17,
  name: "CODE-ALONG-figure-it-out",
}
{
  id: 18,
  name: "CODE-ALONG-joaquin-pheonix",
}
{
  id: 19,
  name: "LAB-the-sauce",
}
{
  id: 20,
  name: "CAPSTONE-functioning-time-machine",
}
];


//Render to DOM utility function//
const renderReposToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);

  selectedDiv.innerHTML = htmlToRender
}

//Putting Repo Cards on the DOM//
const reposOnDom = (rt_array) => {
  let rt_domString = "";
  for (const repo of rt_array) {
    rt_domString += `<div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="repo-card">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <button class="btn btn-primary" type="submit">Star</button>
        </div>
      </div>
    </div>`;    
  }

//Render Repos to the DOM//  
  renderReposToDom (".listOfReposContainer", rt_domString)

};
