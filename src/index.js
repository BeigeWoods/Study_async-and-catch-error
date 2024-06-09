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

  async callbackRejectError(bool, callback) {
    return await this.rejectError(bool).catch((error) => callback(error));
  }

  async throwRejectError(bool) {
    return await this.rejectError(bool).catch((error) => {
      throw new Error(`Catch Error : ${error.message}`);
    });
  }
}
module.exports = Async;
