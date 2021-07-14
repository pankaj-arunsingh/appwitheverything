const axios = {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          content: "the app state is in redux store",
          important: true,
          id: 1,
        },
        {
          content: "volvo is best car in the world",
          important: false,
          id: 2,
        },
      ],
    })
  ),
};

export default axios;
