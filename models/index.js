const User = require("./User");
const Boat = require("./Boat");

Boat.belongsTo(User);
User.hasMany(Boat);

module.exports = {
    User,
    Boat
}