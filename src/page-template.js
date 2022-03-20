// Produces an HTML template for a card containing the manager's info
let generateManager = managerData => {
    if (!managerData) {
        return '';
    }
    return `
        <div class="card mb-4 mx-3 shadow" style="width: 20rem">
            <div class="card-header bg-primary text-white">
                <h3>${managerData.getName()}</h3>
                <h4><i class="fas fa-mug-hot"></i> ${managerData.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group py-4">
                    <li class="list-group-item">ID: ${managerData.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.email}</a></li>
                    <li class="list-group-item">Office number: ${managerData.officeNumber}</li>
                </ul>
            </div>
        </div>
`;
}

// Produces an HTML template for a card containing an engineer's info
let generateEngineer = engineerData => {
    if (!engineerData) {
        return '';
    };

    let htmlCode = '';

    engineerData.forEach(engineer => {
        htmlCode += `
        <div class="card mb-4 mx-3 shadow" style="width: 20rem">
            <div class="card-header bg-primary text-white">
                <h3>${engineer.getName()}</h3>
                <h4><i class="fas fa-glasses"></i> ${engineer.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group py-4">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
`;
    });
    return htmlCode;
}

// Produces an HTML template for a card containing an intern's info
let generateIntern = internData => {
    if (!internData) {
        return '';
    }
    let htmlCode = '';
    internData.forEach(intern => {
        htmlCode += `
        <div class="card mb-4 mx-3 shadow" style="width: 20rem">
            <div class="card-header bg-primary text-white">
                <h3>${intern.getName()}</h3>
                <h4><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group py-4">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
`;
    });
    return htmlCode;
}

// Skeleton HTML before any employee cards are added:
module.exports = templateData => {
    let [manager] = templateData;
    let engineers = templateData.filter(employee => employee.role === 'Engineer');
    let interns = templateData.filter(employee => employee.role === 'Intern');

    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>My Team</title>
</head>

<body>

    <header class="jumbotron jumbotron-fluid bg-danger text-white text-center">
        <h1>My Team</h1>
    </header>

    <div class="d-flex flex-wrap justify-content-center">
        ${generateManager(manager)}
        ${generateEngineer(engineers)}
        ${generateIntern(interns)}
    </div>

    <script src="https://kit.fontawesome.com/d3f55370ae.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
</body>

</html>
`;
}