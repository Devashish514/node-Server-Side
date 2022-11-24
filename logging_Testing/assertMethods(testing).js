// throws Method...

var assert = require("assert");

function divide(num, den) {
    if (!den) {
        throw new RangeError("Division by zero"); s
    }
    return num / den;
}

assert.throws(divide.bind(null, 1, 0));
assert.throws(divide.bind(null, 2, 0), RangeError);
assert.throws(divide.bind(null, 3, 0), Error);
assert.throws(divide.bind(null, 4, 0), /Division by zero/);
assert.throws(divide.bind(null, 5, 0), (error) => {
    return error instanceof Error && /zero/.test(error.message)
});

// assert.throws(divide.bind(null,1,1));


//ifError method

assert.ifError(null); //successfull
assert.ifError(new Error("error")); //throws exception
