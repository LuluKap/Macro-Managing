const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name,' ',manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.roles_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id"
        );  
    }

    findAllManagers(employeeId) {
        return this.connection.promise().query(
            "SELECT id, first_name, last_name FROM employee WHERE id > 0 ?",
            employeeId
        );
    }

    findAllDepartments(departmentId) {
        return this.connection.promise().query(
            "SELECT id, name FROM department WHERE id > 0 ",
            departmentId
        );
    }

    createEmployee(employee) {
        return this.connection.promise().query(
            "INSERT INTO employee SET ?",
            employee);
    }

    createDepartment(departments) {
        return this.connection.promise().query(
            "INSERT INTO department SET ?",
            departments);
    }

    createRole(roles) {
        return this.connection.promise().query(
            "INSERT INTO roles SET ?",
            roles);
    }
}

connection.connect(function (err) {
    if (err) throw err;
});
module.exports = new DB(connection);