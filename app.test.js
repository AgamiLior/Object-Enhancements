describe("#createInstructor", function () {
    it("create an Object with name of instructor", function () {
        expect(createInstructor('John','Smith')).toEqual({firstName:'John', lastName: 'Smith'});
    });
});


describe("#InstructorSaysHi", function () {
    it("Return Hi", function () {
        expect(sayHi()).toEqual('Hi!');
    });
});

describe("#InstructorSaysBye", function () {
    it("Return Bye", function () {
        expect(sayBye()).toEqual('Colt says bye!');
    });
});

describe("#createAnimal", function () {
    it("Create Animal and execute her noise", function () {
        expect(d.bark()).toEqual('Wooof!');
    });
});
