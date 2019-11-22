//bcrypt necessary for password hatching
var bcrypt = require("bcryptjs");

//creating user model
//setting as export because we will need it required on the server

module.exports = function(sequelize,DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    );
    //Determining if a hashed password entered compares to
    //a hased password stored in the database
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.beforeCreate(user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  
    return User;
    
};