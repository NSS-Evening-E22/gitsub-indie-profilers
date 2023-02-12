const packages = [
  {
    id: 1,
    name: "Docker",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWl_ae8joNv2wUkbffVoVTdLoQitUQsKHzA&usqp=CAU",
    packageDescription:
      "Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.",
  },
  {
    id: 2,
    name: "Apache Maven",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohRfNTDeeXMN8G5QrMKnzn1a3xTiQe22pvg&usqp=CAU",
    packageDescription:
      "Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.",
  },
  {
    id: 3,
    name: "NuGet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58xL3RiBbY2OVlw4GwBw0Zuyt3ksZaXOy8Q&usqp=CAU",
    packageDescription:
      "An essential tool for any modern development platform is a mechanism through which developers can create, share, and consume useful code. Often such code is bundled into packages that contain compiled code (as DLLs) along with other content needed in the projects that consume these packages.",
  },
  {
    id: 4,
    name: "RubyGems",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIs5SzX97k2IHPujQ8aNwvJiYdb0vZe1c_g&usqp=CAU",
    packageDescription:
      "RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a gem), a tool designed to easily manage the installation of gems, and a server for distributing them. It was created by Chad Fowler, Jim Weirich, David Alan Black, Paul Brannan and Richard Kilmer during RubyConf 2004",
  },
  {
    id: 5,
    name: "Npm",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9t6X7vvizp4QMXlsKAvXtiaFtDyq33h3uCw&usqp=CAU",
    packageDescription:
      "npm (originally short for Node Package Manager) is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.",
  },
  {
    id: 6,
    name: "Containers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_6i8Np8LLXfp7cPkgFA7owPp2IpR5IbpuQ&usqp=CAU",
    packageDescription:
      "A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.",
  },
];

const renderToDom = (divId, htmlRender) => {
  const packageLoad = document.querySelector(divId);
  packageLoad.innerHTML = htmlRender;
};

const cardsToDom = (array) => {
  let html = "";
  for (const package of array) {
    html += `<div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${package.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">What type of package is this?</h5>
            <h6 class="card-subtitle mb-2 text-muted">${package.name}</h6>
            <p class="card-text">${package.packageDescription}.</p>
            <button class="btn btn-danger" id="delete--${package.packageId}">Delete</button>
            <p class="card-text"><small class="text-muted">indie-profilers are the BEST!!</small></p>
          </div>
        </div>
      </div>
    </div>`;
  }

  renderToDom("#myDiv", html);
};

cardsToDom(packages);
//   const packageLoad = document.querySelector("#packageLoad");
//   packageLoad.addEventListener("onclick", () => {
//     cardsToDom(packages)
//     });

// const packFilter = (packageArray, packageType) => {
//   const arrayOfPacks = [];
//   for (const packs of packageArray) {
//     if (packs.type === packageType) arrayOfPacks.push(packs);
//   }
//   return arrayOfPacks;
// };
// const viewAll = document.querySelector("#viewAll");
// const docker = document.querySelector("#docker");
// const apacheMaven = document.querySelector("#apacheMaven");
// const nuGet = document.querySelector("#nuGet");
// const rubyGems = document.querySelector("#rubyGems");
// const npm = document.querySelector("#npm");
// const containers = document.querySelector("#containers");

// docker.addEventListener("click", () => {
//   const dockerFilter = packFilter(packages, "docker");
//   cardsToDom(dockerFilter);
// });

// apacheMaven.addEventListener("click", () => {
//   const apacheMavenFilter = packFilter(packages, "apacheMaven");
//   containers;
//   cardsToDom(apacheMavenFilter);
// });

// nuGet.addEventListener("click", () => {
//   const nuGetFilter = packFilter(packages, "nuGet");
//   cardsToDom(nuGetFilter);
// });

// rubyGems.addEventListener("click", () => {
//   const rubyGemsFilter = packFilter(packages, "rubyGems");
//   cardsToDom(rubyGemsFilter);
// });

// npm.addEventListener("click", () => {
//   const npmFilter = packFilter(packages, "npm");
//   cardsToDom(npmFilter);
// });

// containers.addEventListener("click", () => {
//   const containersFilter = packFilter(packages, "containers");
//   cardsToDom(containersFilter);
// });

// viewAll.addEventListener("click", () => {
//   cardsToDom(packages);
// });



const createPack = (event) => {
  event.preventDefault();
  // grab the values from form
  const name = document.querySelector("#name");
  const packageDescription = document.querySelector("#packageDescription");
  const img = document.querySelector("#img");
  const id = packages.length + 1;
  // Create an object from values

  const newPack = {
    name: name.value,
    packageDescription: packageDescription.value,
    img: img.value,
    id: id.Number,
  };

  
  // push to team array
  packages.push(newPack);

  // rerender with new team
  cardsToDom(packages);
};




const submitButton = document.querySelector("#addPack");
submitButton.addEventListener("click", createPack);

const startDom = () => {
  cardsToDom(packages);
  document.querySelector("form").reset()
};

startDom();

const packDiv = document.querySelector("#packDiv");

packDiv.addEventListener("click", (event) => {
  if (event.target.packId.includes("delete")) {
    const [, packId] = event.target.packId.split("--");
    const indexOfPack = packages.findIndex(
      (object) => object.packId === Number(packId)
    );
    packages.splice(indexOfPack, 1);
  }
  cardsToDom(packages);
});

const startApp = () => {
  cardsToDom(packages);
};

 startApp();


 function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}









// const btn = document.querySelector("#btn");
// const sb = document.querySelector("#framework");

// btn.onclick = (e) => {
//   e.preventDefault();
//   const selectedValues = [].filter
//     .call(sb.options, (option) => option.selected)
//     .map((option) => option.text);
//   alert(selectedValues);
// };
