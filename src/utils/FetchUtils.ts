export const makeRequest = (request: any, { success, fail }: any) => {
  return new Promise((resolve, reject) => {
    request
      .then((response: any) => {
        if (typeof success === "function") {
          //   if (split) {
          //     const { type, data } = response;
          //     success(data);
          //     return;
          //   }
          success(response);
        }
      })
      .catch((error: any) => {
        if (typeof fail === "function") {
          fail(error);
        }
      });
  });
};
