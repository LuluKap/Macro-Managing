INSERT INTO department (name)
VALUES ("Operations"),
        ("Finance"),
        ("Sales"),
        ("HR");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 75000, 3),
    ("Salesperson", 60000, 3),
    ("Lead Operator", 95000, 1),
    ("Operator", 80000, 1),
    ("Lead Accountant", 80000, 2),
    ("Accountant", 70000, 2),
    ("HR Rep", 55000, 4),
    ("Head of Complaints", 60000, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Mumtaz", "Naftali", 11, 1),
        ("Wilfrith", "Yechezkel", 12, 1),
        ("Sandip", "Ina", 12, 1),
        ("Gio", "Gülten", 12, 1),
        ("Alícia", "Carlisle", 13, 2),
        ("Adam", "Nora", 14, 2),
        ("Markel", "Lali", 14, 2),
        ("Álvaro", "Sin", 14, 2),
        ("Ellen", "Boban", 9, 3),
        ("Rio", "Devraj", 10, 3),
        ("Kaelyn", "Putu", 10, 3),
        ("Godgifu", "Euadne", 10, 3),
        ("Marco", "Sveinn", 15, 4),
        ("Lilias", "Iuno", 16, 4),
        ("Taneka", "Jéssica", 16, 4),
        ("Igor", "Brutus", 16, 4);

INSERT INTO manager (first_name, last_name)
VALUES ("Jajna", "Valdís"),
        ("Orianne", "Carina"),
        ("Dalimil", "Parveen"),
        ("Chaska", "Anushka");

