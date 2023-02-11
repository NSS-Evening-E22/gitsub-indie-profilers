const repoList = [
  {
    id: 1,
    name: "test-repo1",
    description: "This is test repo number 1. Its purpose is to practice creating repos.",
    programmingLanguage: "HTML",
  },
  {
    id: 2,
    name: "test-repo2",
    description: "This is test repo number 2. Its purpose is to practice creating repos.",
    programmingLanguage: "JavaScript",
  },
  {
    id: 3,
    name: "test-repo3",
    description: "This is test repo number 3. Its purpose is to practice creating repos.",
    programmingLanguage: "CSS",
  },
  {
    id: 4,
    name: "test-repo4",
    description: "This is test repo number 4. Its purpose is to practice creating repos.",
    programmingLanguage: "Python",
  },
  {
    id: 5,
    name: "test-repo5",
    description: "This is test repo number 5. Its purpose is to practice creating repos.",
    programmingLanguage: "C#",
  },
  {
    id: 6,
    name: "ASSIGNMENT-create-calculator",
    description: "Created a functioning calculator with all the fancy stuff.",
    programmingLanguage: "Go",
  },
  {
    id: 7,
    name: "ASSIGNMENT-product-cards",
    description: "Created product cards for a mock-up website that sells things.",
    programmingLanguage: "Python",
  },
  {
    id: 8,
    name: "ASSIGNMENT-intro-js-array-methods",
    description: "Practiced different array methods in JavaScript.",
    programmingLanguage: "Java",
  },
  {
    id: 9,
    name: "ASSIGNMENT-finish-lesson",
    description: "Finsihed the lesson we were working on. Which lesson, you ask? THE lesson.",
    programmingLanguage: "Kotlin",
  },
  {
    id: 10,
    name: "LAB-HTML-Resume",
    description: "Created a Resume only using HTML. It doesn't look that great, but it was good practice.",
    programmingLanguage: "PHP",
  },
  {
    id: 11,
    name: "LAB-link-in-bio",
    description: "In this lab I created a profile page that would go on my own personal website. That's right. I'm important.",
    programmingLanguage: "Swift",
  },
  {
    id: 12,
    name: "LAB-pet-adoption",
    description: "This repo contains a webpage of adoptable pets. And dinosaurs for some reason.",
    programmingLanguage: "R",
  },
  {
    id: 13,
    name: "INDIVIDUAL-PROJECT-sorting-hat",
    description: "Ever wanted to have a wrinkly talking hat decide your fate at 12 years old? Check out this repo.",
    programmingLanguage: "Ruby",
  },
  {
    id: 14,
    name: "INDIVIDUAL-PROJECT-big-boi",
    description: "It's a big boi. The biggest of the bois.",
    programmingLanguage: "C"
  },
  {
    id: 15,
    name: "INDIVIDUAL-PROJECT-save-the-penguins",
    description: "Save the penguins. They're all being sent off to war. This senseless violence must end.",
    programmingLanguage: "C++"
  },
  {
    id: 16,
    name: "CODE-ALONG-watch-me-code",
    description: "Watch me code. Or don't. It's your funeral.",
    programmingLanguage: "TypeScript",
  },
  {
    id: 17,
    name: "CODE-ALONG-figure-it-out",
    description: "Why can't you just figure it out, Gerald?",
    programmingLanguage: "SQL",
  },
  {
    id: 18,
    name: "CODE-ALONG-joaquin-phoenix",
    description: "Wait, where did this one come from? Joaquin, are you messing with my repos again? You silly goose.",
    programmingLanguage: "Nix",
  },
  {
    id: 19,
    name: "LAB-the-sauce",
    description: "I've been lost in this repo too many times to count.",
    programmingLanguage: "Scala",
  },
  {
    id: 20,
    name: "CAPSTONE-functioning-time-machine",
    description: "Sssh. The government can't find out about this repo. Keep this one between us. No, Susan, you can't tell your neighbors.",
    programmingLanguage: "Shell",
  },
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
            <h5 class="repo-name">${repo.name}</h5>
            <p class="repo-description">${repo.description}</p>
            <p class="repo-programmingLanguage">${repo.programmingLanguage}</p>
            <button class="btn btn-primary" type="submit">Star</button>
          </div>
        </div>
      </div>`;    
    }
  
  //Render Repos to the DOM//  
    renderReposToDom (".listOfReposContainer", rt_domString)
  
  };
  
  reposOnDom(repoList);
  
  
  
  
  const startApp = () => {
    renderReposToDom(repoList);
  };
  
  startApp();
  