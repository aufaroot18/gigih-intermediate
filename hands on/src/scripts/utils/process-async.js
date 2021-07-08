const ProcessAsync = {
  firstStarted() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('First Started');
      }, 2000);
    });
  },

  firstFinished() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('First Finished');
      }, 2000);
    });
  },

  secondStarted() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Second Started');
      }, 2000);
    });
  },

  secondFinished() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Second Finished');
      }, 2000);
    });
  },

  thirdStarted() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Third Started');
      }, 2000);
    });
  },

  thirdFinished() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Third Finished');
      }, 2000);
    });
  },
};

export default ProcessAsync;
