const testToken = (req,res,next) => {
  try {
    res.send("Token is valid");
  }
  catch(error) { next(error); };
};

module.exports = testToken;
