const reposList = [
  {
    id: 1,
    repoName: "test-repo1",
    description: "This is the description of the repo.",
    programmingLanguage: "HTML"
  },
  {
    id: 2,
    repoName: "test-repo2",
    description: "This is the description of the repo.",
    programmingLanguage: "HTML"
  },
  {
    id: 3,
    repoName: "test-repo3",
    description: "This is the description of the repo.",
    programmingLanguage: "HTML"
  },
  {
    id: 4,
    repoName: "test-repo4",
    description: "This is the description of the repo.",
    programmingLanguage: "HTML"
  },
  {
    id: 5,
    repoName: "test-repo5",
    description: "This is the description of the repo.",
    programmingLanguage: "HTML"
  },
  {
    id: 6,
    repoName: "ASSIGNMENT-repo1",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 7,
    repoName: "ASSIGNMENT-repo2",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 8,
    repoName: "ASSIGNMENT-repo3",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 9,
    repoName: "ASSIGNMENT-repo4",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 10,
    repoName: "LAB-repo1",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 11,
    repoName: "LAB-repo2",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 12,
    repoName: "LAB-repo3",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 13,
    repoName: "IND-PROJECT-repo1",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 14,
    repoName: "IND-PROJECT-repo2",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 15,
    repoName: "IND-PROJECT-repo3",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 16,
    repoName: "CODE-ALONG-repo1",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 17,
    repoName: "CODE-ALONG-repo2",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 18,
    repoName: "CODE-ALONG-repo3",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 16,
    repoName: "LAB-repo4",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  },
  {
    id: 16,
    repoName: "CAPSTONE",
    description: "This is the description of the repo.",
    programmingLanguage: "JavaScript"
  }
];


// Render to DOM utility function
const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

// Repo template card

const renderRepos = (arr) => {
  let domString = "";
  for (const repo of arr) {
    domString += `<div class="row">
    <div class="col-sm-30 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${repo.repoName} Public</h5>
          <p class="card-text">${repo.description}</p>
          <p class="card-type">${repo.programmingLanguage}</p>
        </div>
      </div>
    </div>
  </div>`;
  }

  renderToDom(".pinnedRepos", domString);
};

renderRepos(reposList);










const startApp = () => {
  renderRepos(reposList);
};
// events(); // ALWAYS LAST

startApp();
