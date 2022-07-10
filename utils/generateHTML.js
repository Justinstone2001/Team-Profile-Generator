const templateHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" href="../style.css">
    </head>
    <div id="title" class="m-4 page-header">
        My Team
    </div>
    <body>
    <div class="container">
    <div class="holder justify-content-center row">
       ${data}
    </div>
    </div>
    </body>
    
    </html>
    `;
};

const manager = (managerArray) => {
  return `
    <div class="col-lg-4 col-md-7 col-sm-9">
        <div class="card border-dark m-4 mx-6">
            <div class="intro text-light mx-4 my-1">
                <h2 class="mx-2">
                    ${managerArray.getName()}
                </h2>
                <h2 class="mx-2 text-dark">
                <i class="fa-solid fa-mug-hot text-dark"></i>
                    ${managerArray.getRole()}
                </h2>
            </div>
            <div class="border-dark second-section">
                <p class="m-2">
                    ID: ${managerArray.getId()}
                </p>
                <p class="m-2">
                    Email: <a href="mailto:${managerArray.getEmail()}">${managerArray.getEmail()}</a>
                </p>
                <p class="m-2">
                    Office Number: ${managerArray.getOffice()}
                </p>
            </div>
        </div>
    </div>
    `;
};
const engineer = (engineerArray) => {
  return `
        <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="card border-dark m-4 mx-6">
                <div class="intro text-light mx-4 my-1">
                    <h2 class="mx-2">
                        ${engineerArray.getName()}
                    </h2>
                    <h2 class="mx-2 text-dark">
                    <i class="fa-solid fa-glasses text-dark"></i>
                        ${engineerArray.getRole()}
                    </h2>
                </div>
                <div class="border-dark second-section">
                    <p class="m-2">
                        ID: ${engineerArray.getId()}
                    </p>
                    <p class="m-2">
                        Email: <a href="mailto:${engineerArray.getEmail()}">${engineerArray.getEmail()}</a>
                    </p>
                    <p class="m-2">
                        GitHub: <a href="https://github.com/${engineerArray.getGitHub()}">${engineerArray.getGitHub()}</a>
                    </p>
                </div>
            </div>
        </div>
            `;
};
const intern = (internArray) => {
  return `
        <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="card border-dark m-4 mx-6">
                <div class="intro text-light mx-4 my-1">
                    <h2 class="mx-2">
                        ${internArray.getName()}
                    </h2>
                    <h2 class="mx-2 text-dark">
                    <i class="fa-solid fa-user-graduate text-dark"></i>
                        ${internArray.getRole()}
                    </h2>
                </div>
                <div class="border-dark second-section">
                    <p class="m-2">
                        ID: ${internArray.getId()}
                    </p>
                    <p class="m-2">
                        Email: <a href="mailto:${internArray.getEmail()}">${internArray.getEmail()}</a>
                    </p>
                    <p class="m-2">
                        School: ${internArray.getUniversity()}
                    </p>
                </div>
            </div>
        </div>
    `;
};

const employeesVar = (employees) => {
  let employeeArr = [];
  for (i = 0; i < employees.length; i++) {
    const workers = employees[i];
    const position = workers.getRole();

    if (position === "Manager") {
      const managerDiv = manager(workers);
      employeeArr.push(managerDiv);
    }
    if (position === "Engineer") {
      const engineerDiv = engineer(workers);
      employeeArr.push(engineerDiv);
    }
    if (position === "Intern") {
      const internDiv = intern(workers);
      employeeArr.push(internDiv);
    }
  }
  const team = employeeArr;
  return templateHTML(team);
};

module.exports = employeesVar;
