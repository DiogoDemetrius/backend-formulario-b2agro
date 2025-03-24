const User = require('../models/User');

const authService = {
  async register(userData) {
    const user = new User(userData);
    await user.save();
    return user;
  }
}

module.exports = authService;