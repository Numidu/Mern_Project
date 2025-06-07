import product from "../Model/product.js";

export function addProduct(req, res) {
  console.log(req.users);
  if (req.users == null) {
    res.status(401).json({
      message: "Please login and try again",
    });
    return;
  }
  if (req.users.roll != "admin") {
    res.status(401).json({
      message: "You are not authorized to perform this action",
    });
    return;
  }

  const data = req.body;
  const newProduct = new product(data);

  newProduct
    .save()
    .then(() => {
      res.json({
        message: "product save succesfully",
      });
    })
    .catch(() => {
      res.status(500).json({
        error: "product add faild",
      });
    });
}
