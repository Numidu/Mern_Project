import reviewmodel from "../Model/review.js";
export function addReview(req, res) {
  if (req.users == null) {
    res.status(401).json({
      message: "Please login first",
    });
    return;
  }

  const data = req.body;
  data.name = req.users.firstName + " " + req.users.lastName;
  data.profilePicture = req.users.profilePicture;
  data.email = req.users.email;
  const newReview = new reviewmodel(data);
  newReview
    .save()
    .then(() => {
      res.json({
        message: "Review add sucessfully ",
      });
    })
    .catch(() => {
      res.status(401).json({
        messsage: "Review add failed",
      });
    });
}

export function getReview(req, res) {
  const user = req.users;

  if (user == null || user.roll != "Admin") {
    reviewmodel.find({ isApproved: true }).then((review) => {
      res.json(review);
    });
    return;
  }

  if (user.roll == "Admin") {
    reviewmodel.find().then((reviews) => {
      res.json(reviews);
    });
  }
}

export async function deleteReview(req, res) {
  const email = req.params.email;
  if (req.users == null) {
    res.status(401).json({
      message: "please login and try again",
    });

    return;
  }
  if (req.users.roll == "Admin") {
    try {
      await reviewmodel.deleteOne({ email: email });
      res.json({
        message: "Review deleted succefully",
      });
    } catch (error) {
      res.status(500).json({
        error: "review deleted failed",
      });
    }
    // reviewmodel
    //   .deleteOne({ email: email })
    //   .then(() => {
    //     res.json({
    //       message: "Review deleted succefully",
    //     });
    //   })
    //   .catch(() => {
    //     res.status(500).json({
    //       error: "review deleted failed",
    //     });
    //   });
  }

  if (req.users.roll != "Customer") {
    if (req.users.email == email) {
      reviewmodel
        .deleteOne({ email: email })
        .then(() => {
          res.json({
            message: "Review deleted succefully",
          });
        })
        .catch(() => {
          res.status(500).json({
            error: "review deleted failed",
          });
        });
    } else {
      res.status(500).json({
        error: "You can't delete this",
      });
    }
  }
}

export function approveReview(req, res) {
  const email = req.params.email;
  if (req.users == null) {
    res.status(401).json({
      message: "please login and try again",
    });
    return;
  }

  if (req.users.roll == "Admin") {
    reviewmodel
      .updateOne(
        {
          email: email,
        },
        {
          isApproved: true,
        }
      )
      .then(() => {
        res.json({
          message: "Review update approve succefully",
        });
      })
      .catch(() => {
        res.status(500).json({
          error: "review update aprove failed",
        });
      });
  } else {
    res.status(403).json({
      message: "You are not and admin",
    });
  }
}
