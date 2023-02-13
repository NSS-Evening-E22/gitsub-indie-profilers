const pinnedList = [
  {
    id: 7,
    name: "ASSIGNMENT-product-cards",
    description:
      "Created product cards for a mock-up website that sells things.",
    programmingLanguage: "Python",
  },
  {
    id: 8,
    name: "ASSIGNMENT-intro-js-array-methods",
    description: "Practiced different array methods in JavaScript.",
    programmingLanguage: "Java",
  },
  {
    id: 10,
    name: "LAB-HTML-Resume",
    description:
      "Created a Resume only using HTML. It doesn't look that great, but it was good practice.",
    programmingLanguage: "PHP",
  },
  {
    id: 12,
    name: "LAB-pet-adoption",
    description:
      "This repo contains a webpage of adoptable pets. And dinosaurs for some reason.",
    programmingLanguage: "R",
  },
  {
    id: 13,
    name: "INDIVIDUAL-PROJECT-sorting-hat",
    description:
      "Ever wanted to have a wrinkly talking hat decide your fate at 12 years old? Check out this repo.",
    programmingLanguage: "Ruby",
  },
  {
    id: 20,
    name: "CAPSTONE-functioning-time-machine",
    description:
      "Sssh. The government can't find out about this repo. Keep this one between us. No, Susan, you can't tell your neighbors.",
    programmingLanguage: "Shell",
  },
];

//Render to DOM utility function//
const renderReposToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);

  selectedDiv.innerHTML = htmlToRender;
};

//Putting Repo Cards on the DOM//
const reposOnDom = (rt_array) => {
  let rt_domString = "";
  for (const repo of rt_array) {
    rt_domString += `<div class="card" style="width:29rem;">
          <div class="card-body">
            <img src="Images/repos.png" width="15" height="15">
            <h7 class="card-title">${repo.name}</h7>
            <p class="card-text">${repo.description}</p>
            <div id="circle" style="float:left">&#9711;</div>
            <div class="card-type">${repo.programmingLanguage}
            <img id="star" src="Images/star.png" width="15" height="15">            
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  // Render Repos to the DOM//
  renderReposToDom(".layout-top", rt_domString);
};

reposOnDom(pinnedList);

const startApp = () => {
  reposOnDom(pinnedList);
};

startApp();
