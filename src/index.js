class Async {
  constructor() {}

  // plain
  resolveError(isTrue) {
    return isTrue
      ? Promise.resolve("True from resolve")
      : Promise.resolve(new Error("Resolve Error"));
  }

  rejectError(isTrue) {
    return isTrue
      ? Promise.resolve("True from reject")
      : Promise.reject(new Error("Reject Error"));
  }

  async throwError(isTrue) {
    if (isTrue) {
      return Promise.resolve("True from throw");
    } else {
      throw new Error("Throw Error");
    }
  }

  // about returnError
  async returnError(bool) {
    return await this.rejectError(bool).catch((error) => error);
  }

  async then_returnError(bool) {
    return await this.rejectError(bool)
      .then((value) => `return : ${value}`)
      .catch((error) => error);
  }

  async noReturn_returnError(bool) {
    await this.rejectError(bool).catch((error) => error);
  }

  async noReturn_then_returnError(bool) {
    await this.rejectError(bool)
      .then((value) => `return : ${value}`)
      .catch((error) => error);
  }

  // about callbackError
  async callbackError(bool, callback) {
    return await this.rejectError(bool).catch((error) => callback(error));
  }

  async then_callbackError(bool, callback) {
    return await this.rejectError(bool)
      .then((value) => `callback : ${value}`)
      .catch((error) => callback(error));
  }

  async noReturn_callbackError(bool, callback) {
    await this.rejectError(bool).catch((error) => callback(error));
  }

  async noReturn_then_callbackError(bool, callback) {
    await this.rejectError(bool)
      .then((value) => `callback : ${value}`)
      .catch((error) => callback(error));
  }

  // about throwExtraError
  async throwExtraError(bool) {
    return await this.rejectError(bool).catch((error) => {
      throw new Error(`Extra Error : ${error.message}`);
    });
  }

  async then_throwExtraError(bool) {
    return await this.rejectError(bool)
      .then((value) => `extra : ${value}`)
      .catch((error) => {
        throw new Error(`Extra Error : ${error.message}`);
      });
  }

  async noReturn_throwExtraError(bool) {
    await this.rejectError(bool).catch((error) => {
      throw new Error(`Extra Error : ${error.message}`);
    });
  }

  async noReturn_then_throwExtraError(bool) {
    await this.rejectError(bool)
      .then((value) => `extra : ${value}`)
      .catch((error) => {
        throw new Error(`Extra Error : ${error.message}`);
      });
  }
}

module.exports = Async;
