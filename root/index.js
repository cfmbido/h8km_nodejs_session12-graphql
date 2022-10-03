const axios = require("axios");

const placeholderUsers = [];

const root = {
  hello: () => {
    return "Hello world!";
  },
  hacktiv8: () => {
    return "Hacktiv8";
  },
  getAllUsers: async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (error) {
      return [];
    }
  },
  createUser: (args) => {
    const { id, username } = args;

    placeholderUsers.push({ id, username });

    return "Successfully create one user";
  },
  getCreatedUsers: () => {
    return placeholderUsers;
  },
};

module.exports = root;
