const users = [];

const findUserByEmail = (email) => users.find((user) => user.email === email);

const saveUser = (user) => users.push(user);

module.exports = { findUserByEmail, saveUser };
