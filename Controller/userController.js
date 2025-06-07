import user from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function registerUser(req, res) {
  const data = req.body;
  data.password = bcrypt.hashSync(data.password, 10);

  const newUser = new user(data);
  newUser
    .save()
    .then(() => {
      res.json({ message: "user registerd succefully" });
    })
    .catch((err) => {
      res.status(500).json({
        error: "user register failed",
      });
    });
}

export function loginUser(req, res) {
  const data = req.body;

  user
    .findOne({
      email: data.email,
    })
    .then((User) => {
      if (user == null) {
        res.status(404).json({ error: "User not found" });
      } else {
        const isPasswordofCorrect = bcrypt.compareSync(
          data.password,
          User.password
        );
        if (isPasswordofCorrect) {
          //check password
          const token = jwt.sign(
            {
              firstName: User.firstName,
              lastName: User.lastName,
              email: User.email,
              roll: User.roll,
            },
            "kv123"
          );

          res.json({ message: "Login Successful", token: token });
        } else {
          res.json({ message: "Login Failed" });
        }
      }
    });
}
