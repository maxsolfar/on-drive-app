const { User, Roles } = require("../db");
const { getDBUsers } = require("./utils/getData");

/*
? GET ALL USERS
*/
const getAllUsers = async (req, res, next) => {
  try {
    const DBData = await getDBUsers();
    return res.status(200).send(DBData);
  } catch (error) {
    return res.status(400).send(`Can't get Users: ${error}`);
  }
};

/*
? GET USER 
*/
const getUser = async (req, res, next) => {
  const { idUser } = req.params;
  try {
    const DBUser = await getDBUsers();
    const findUser = DBUser?.find((user) => user.id === idUser);
    if(findUser){
      return res.status(200).send(findUser);
    }
    else{
      return res.status(400).send({ error: "User doesn´t exist" });
    }
  } catch (error) {
    return res.status(400).send({ error: "Error find User" });
  }
};

/*
? POST USER 
*/
const postUser = async (req, res, next) => {
  const {
    email,
    password,
    name,
    last_name,
  } = req.body;
  const defaultRole = "passenger";
  if (
    !email ||
    !password ||
    !name ||
    !last_name
  ) {
    return res.status(400).send({ error: "Missing data in the request" });
  }

  try {
    const newUser = await User.create({
      email,
      password,
      name,
      last_name
    });

    const rolesUser = await Roles.findAll({
      where: { role: defaultRole },
    });

    await newUser.addRoles(rolesUser);
    return res.send(newUser);

  } catch (error) {
    return res.status(400).send({ error: `Can't create a new user ${error}` });
  }
};

/*
? DELETE USER 
*/
const deleteUser = async (req, res, next) => {
  try {
    const { idUser } = req.params;
    const findUser = await User.findByPk(idUser);
    if (findUser) {
      await findUser.destroy();
      return res.status(200).send("User was Delete");
    }
  } catch (error) {
    return res.status(400).send({ error: "Can't Delete the user" });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  postUser,
  deleteUser
};
