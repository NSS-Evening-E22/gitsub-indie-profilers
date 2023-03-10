const projects = [
  {
    id: 1,
    projectName: "My-BioPage",
    projectDescription: "Social media bio page",
  },

  {
    id: 2,
    projectName: "Pet-Adoption",
    projectDescription: "Sorting and filtering",
  },

  {
    id: 3,
    projectName: "Hoggy Hats",
    projectDescription: "Harry Potter themed app",
  },

  {
    id: 4,
    projectName: "Create Repos",
    projectDescription: "Create 30 Repos",
  },

  {
    id: 5,
    projectName: "My Resume Page",
    projectDescription: "My resume in html",
  },
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// get cards on dom
const cardsOnDom = (projects) => {
  let domString = "";
  for (const project of projects) {
    domString += `<div class="card w-50">
    <div class="card-body" style="padding-bottom: 5%">
      <h5 class="card-title">${project.projectName}</h5>
      <p>Project ID- ${project.id}</p>
      <p class="card-text">Project Description-
      ${project.projectDescription}
      </p>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
`;
  }
  renderToDom("#projects", domString);
};
cardsOnDom(projects);

const createProject = (event) => {
  event.preventDefault();

  //get values from form

  //const id = document.querySelector("#id");
  //const name = document.querySelector("#projectName");
  //const description = document.querySelector("#projectDescription");
  //console.log(name);
  //console.log(name.value);

  //create project object

  const addProject = {
    id: projects.length + 1,
    projectName: document.querySelector("#projectName").value,
    projectDescription: document.querySelector("#projectDescription").value,
  };
  console.log("new project", addProject);

  //push new project to the array

  projects.push(addProject);

  //rerender cards to the dom

  cardsOnDom(projects);
  document.querySelector("form").reset();
};

//event listener for create button
const newProject = document.querySelector("#submit-form");
newProject.addEventListener("click", createProject);

//delete project card

const deleteCard = document.querySelector("#projects");

//add event listener

deleteCard.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    console.log(e.target.id);
    console.log("Hello World");

    const [, id] = e.target.split("--");

    const index = projects.findIndex((e) => e.id === Number(id));
    projects.splice(index, 1);
  }
  cardsOnDom(projects);
});

//const startApp = () => {
//  cardsOnDom(projects);
//};

//startApp();
