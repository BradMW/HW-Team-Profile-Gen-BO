const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("init", () => {
        it("should create an instance of an manager when we call it with the new keyword", () => {
            const manager1 = new Manager("Brad", 123, "bodell94@yahoo.com", 990);
            expect(manager1.name).toEqual("Brad");
            expect(manager1.id).toEqual(123);
            expect(manager1.email).toEqual("bodell94@yahoo.com");
            expect(manager1.officeNum).toEqual(990);
        })
    })
    describe("getName", () => {
        it("should get the name of the manager that was created", () => {
            const manager2 = new Manager("Brad", 123, "bodell94@yahoo.com", 990);
            const result = manager2.getName();
            expect(result).toEqual("Brad")
        })
    })

    describe("getId", () => {
        it("should get the ID of the manager that was created", () => {
            const manager3 = new Manager("Brad", 123, "bodell94@yahoo.com", 990);
            const result = manager3.getId();
            expect(result).toEqual(123)
        })
    })

    describe("getEmail", () => {
        it("should get the email of the manager that was created", () => {
            const manager4 = new Manager("Brad", 123, "bodell94@yahoo.com", 990);
            const result = manager4.getEmail();
            expect(result).toEqual("bodell94@yahoo.com")
        })
    })

    describe("getRole", () => {
        it("should get the role of the manager that was created", () => {
            const manager5 = new Manager("Brad", 123, "bodell94@yahoo.com", 990);
            const result = manager5.getRole();
            expect(result).toEqual("Manager")
        })
    })
})