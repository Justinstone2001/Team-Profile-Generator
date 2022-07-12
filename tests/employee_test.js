const Employee = require("../lib/employee");

test("create new employee", () => {
    const employeeTest = new Employee();
    expect(typeof(employeeTest)).toBe("object");
});

test("test name", () => {
    const name = "Justin"
    const employeeTest = new Employee(name);
    expect(employeeTest.name).toBe(name);
});

test("test Id", () => {
    const id = 900
    const employeeTest = new Employee("Justin", id);
    expect(employeeTest.id).toBe(id);
});

test("test email", () => {
    const email = "Justin@yahoo.com"
    const employeeTest = new Employee("Justin", 900, email);
    expect(employeeTest.email).toBe(email);
});


test("test getName", () => {
    const name = "Justin"
    const employeeTest = new Employee(name);
    expect(employeeTest.getName()).toBe(name);
});

test("test getId", () => {
    const id = 123
    const employeeTest = new Employee("Justin", id);
    expect(employeeTest.getId()).toBe(id);
});

test("test getEmail", () => {
    const email = "Justin@yahoo.com"
    const employeeTest = new Employee("Justin", 900, email);
    expect(employeeTest.getEmail()).toBe(email);
});


test("test getRole", () => {
    const role = "Employee"
    const employeeTest = new Employee("Justin", 900, "justin@yahoo,.com");
    expect(employeeTest.getRole()).toBe(role);
});