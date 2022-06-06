const fs = require("fs");
//Seperate card function for each employee type (3 total)
function managerGen(managerData) {
  return `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${managerData.name}
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${managerData.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerData.email}">${managerData.email}</a></li>
        <li class="list-group-item">Office: ${managerData.office}</li>
      </ul>
    </div>`;
}

//Generate Engineer card
function engineerGen(engineerData) {
  return `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${engineerData.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineerData.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineerData.github}" target="_blank">@${engineerData.github}</a></li>
    </ul>
    </div>`;
}

//Generate Intern card
function internGen(internData) {
  return `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${internData.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${internData.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${internData.email}">${internData.email}</a></li>
      <li class="list-group-item">Current School: ${internData.school}</li>
    </ul>
</div>`;
}

function genHtml(answerArray) {
  const htmlTop = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Code Team Assemble</title>
        </head>
        
        <body>
            <header>
                <div style="background-color: rgb(64, 122, 238);" class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-3">Dev Team ASSEMBLE!</h1>
                        <p class="lead">With our powers combined, all projects can be conqured!</p>
                    </div>
                </div>
            </header><br>
            <main>
            <h1 class="display-5 d-flex justify-content-center">Team Roster</h1><br>
            <section style="margin: 10px; display: flex; justify-content: center; justify-content: space-around;">`;
  const htmlBottom = ` </section>
                  </main>
  
        </body>
        
        </html>`;
  const cards = answerArray.map((empObj) => {
    if (empObj.getRole() === "Manager") {
      return managerGen(empObj);
    } else if (empObj.getRole() === "Engineer") {
      return engineerGen(empObj);
    } else if (empObj.getRole() === "Intern") {
      return internGen(empObj);
    } else {
      console.log("Error occured, rerun index.js");
    }
  });

  fs.writeFile(
    "dist/index.html",
    htmlTop + cards.join(" ") + htmlBottom,
    (err) => {
      err ? console.log(err) : console.log("html has been generated!");
    }
  );
}
module.exports = genHtml;
