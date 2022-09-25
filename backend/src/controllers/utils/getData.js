const { User, Roles } = require("../../db");

const getDBUsers = async () => {
  try {
    let DBUsers = await User.findAll({
      include: [
        {
          model: Roles,
          attributes: ["role"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return DBUsers;
  } catch (error) {
    console.log(`GET DB USERS ${error}`);
  }
};

module.exports = {
  getDBUsers,
};
