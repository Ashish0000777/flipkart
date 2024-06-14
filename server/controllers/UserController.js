const User = require ("../models/UserSchema")

module.exports.Signup = async (request, response) => {
  try {
    let exist = await User.findOne({ username: request.body.username });
    console.log(exist);
    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    } else {
      const user = request.body;
      const newUser = new User({
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        password: user.password,
        username: user.username,
      });
      await newUser.save();
      response.status(200).json({ message: user });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports.Login = async (request, responce) => {
  try {
    let username = request.body.username;
    let password = request.body.password;
    let data = await User.findOne({
      username: username,
      password: password,
    });
    if (data) {
      return responce.status(200).json({ data: data });
    } else {
      return responce.status(401).json("invalid request");
    }
  } catch (error) {
    responce.status(500).send({ message: error.message });
  }
};
