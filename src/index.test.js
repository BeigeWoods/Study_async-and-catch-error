const Async = require("./index.js");
const classAsync = new Async();

describe("resolveError", () => {
  test("apply true to parameter", () => {
    classAsync
      .resolveError(true)
      .then((value) => expect(value).toBe("True from resolve"))
      .catch((error) => expect(error).toBeUndefined());
  });

  test("apply false to parameter", () => {
    classAsync
      .resolveError(false)
      .then((value) => expect(value.message).toBe("Resolve Error"))
      .catch((error) => expect(error).toBeUndefined());
  });
});

describe("rejectError", () => {
  test("apply true to parameter", () => {
    classAsync
      .rejectError(true)
      .then((value) => expect(value).toBe("True from reject"))
      .catch((error) => expect(error).toBeUndefined());
  });

  test("apply false to parameter", () => {
    classAsync
      .rejectError(false)
      .then((value) => expect(value).toBeUndefined())
      .catch((error) => expect(error.message).toBe("Reject Error"));
  });
});

describe("throwError", () => {
  test("apply true to parameter", () => {
    classAsync
      .throwError(true)
      .then((value) => expect(value).toBe("True from throw"))
      .catch((error) => expect(error).toBeUndefined());
  });

  test("apply false to parameter", () => {
    classAsync
      .throwError(false)
      .then((value) => expect(value).toBeUndefined())
      .catch((error) => expect(error.message).toBe("Throw Error"));
  });
});

describe("callbackRejectError", () => {
  test("apply true to parameter", () => {
    classAsync
      .callbackRejectError(true, (error) => expect(error).toBeUndefined())
      .then((value) => expect(value).toBe("True from reject"));
  });

  test("apply false to parameter", () => {
    classAsync
      .callbackRejectError(false, (error) =>
        expect(error.message).toBe("Reject Error")
      )
      .then((value) => expect(value).toBeUndefined());
  });
});

describe("throwRejectError", () => {
  test("apply true to parameter", () => {
    classAsync
      .throwRejectError(true)
      .then((value) => expect(value).toBe("True from reject"))
      .catch((error) => expect(error).toBeUndefined());
  });

  test("apply false to parameter", () => {
    classAsync
      .throwRejectError(false)
      .then((value) => expect(value).toBeUndefined())
      .catch((error) =>
        expect(error.message).toBe("Catch Error : Reject Error")
      );
  });
});
