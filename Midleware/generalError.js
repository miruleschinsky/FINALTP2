
const generalError = (req, res, next) => {
    res.status(404).send("not found");
    next();
  };
  

  export default generalError