exports.validateEmployee = (req, res, next) => {
  const { name, department, role, email } = req.body;
  if (!name || !department || !role || !email) {
    return res.status(400).json({ error: "All fields are required." });
  }
  next();
};
