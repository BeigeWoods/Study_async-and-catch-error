class Async {
  constructor() {}

  async resolveError(isTrue) {
    return isTrue
      ? await Promise.resolve("True from resolve")
      : await Promise.resolve(new Error("Resolve Error"));
  }

  async rejectError(isTrue) {
    return isTrue
      ? await Promise.resolve("True from reject")
      : await Promise.reject(new Error("Reject Error"));
  }

  async throwError(isTrue) {
    if (isTrue) {
      return await Promise.resolve("True from throw");
    } else {
      throw new Error("Throw Error");
    }
  }

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
