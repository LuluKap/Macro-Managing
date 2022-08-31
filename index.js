const inquirer = require('inquirer');
const db = require("./db");
require("console.table");

// init();

inquirer
    .prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                {   name: "View all departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View all roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add employee",
                    value: "ADD_EMPLOYEE"
                },
                {   name: "Add department",
                    value: "ADD_DEPARTMENT"
                },
                {   name: "Add role",
                    value: "ADD_ROLE"
                },
                {   name: "Update employee role",
                    value: "UPDATE_ROLE"
                }
            ]
        }
    ]).then(res => {
        let choice =res.choice;
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
                case "ADD_EMPLOYEES":
                    addEmployees();
                    break;
                case "ADD_DEPARTMENTS":
                    addDepartments();
                    break;
                case "ADD_ROLES":
                    addRoles();
                    break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                    break;
                default:
                    exit();
        }
    })

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employee = rows;
        console.log("\n");
        console.table(employee);
    })
    .then(() => inquirer.prompt());
}

function viewDepartments() {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log("\n");
        console.table(departments);
    })
    .then(() => inquirer.prompt());
}

function viewRoles() {
    db.findAllDepartments()
    .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
    })
    .then(() => inquirer.prompt());
}

function addEmployees() {
    db.createEmployee()
    .then(([rows]) => {
        let employee = rows;
        console.log("\n");
        console.table(employee);
    })
    .then(() => inquirer.prompt());
}

function addDepartments() {
    db.createDepartment()
    .then(([rows]) => {
        let employee = rows;
        console.log("\n");
        console.table(employee);
    })
    .then(() => inquirer.prompt());
}

function addRoles() {
    db.createRole()
    .then(([rows]) => {
        let employee = rows;
        console.log("\n");
        console.table(employee);
    })
    .then(() => inquirer.prompt());
}