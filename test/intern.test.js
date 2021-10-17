const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("init", () => {
        it("should create an instance of an intern when we call it with the new keyword", () => {
            const intern1 = new Intern("Brad", 123, "bodell94@yahoo.com", "UT");
            expect(intern1.name).toEqual("Brad");
            expect(intern1.id).toEqual(123);
            expect(intern1.email).toEqual("bodell94@yahoo.com");
            expect(intern1.school).toEqual("UT");
        })
    })
    describe("getName", () => {
        it("should get the name of the intern that was created", () => {
            const intern2 = new Intern("Brad", 123, "bodell94@yahoo.com", "UT");
            const result = intern2.getName();
            expect(result).toEqual("Brad")
        })
    })

    describe("getId", () => {
        it("should get the ID of the intern that was created", () => {
            const intern3 = new Intern("Brad", 123, "bodell94@yahoo.com", "UT");
            const result = intern3.getId();
            expect(result).toEqual(123)
        })
    })

    describe("getEmail", () => {
        it("should get the email of the intern that was created", () => {
            const intern4 = new Intern("Brad", 123, "bodell94@yahoo.com", "UT");
            const result = intern4.getEmail();
            expect(result).toEqual("bodell94@yahoo.com")
        })
    })

    describe("getRole", () => {
        it("should get the role of the intern that was created", () => {
            const intern5 = new Intern("Brad", 123, "bodell94@yahoo.com", "UT");
            const result = intern5.getRole();
            expect(result).toEqual("Intern")
        })
    })

    describe("getSchool", () => {
        it("should get the school of the intern that was created", () => {
            const intern6 = new Intern("Brad", 123, "bodell94@yahoo.com", "UT");
            const result = intern6.getSchool();
            expect(result).toEqual("UT")
        })
})
})