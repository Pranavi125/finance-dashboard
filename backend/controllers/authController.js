import jwt from "jsonwebtoken";

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (email === "test@test.com" && password === "123456") {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({
      token,
      user: { email },
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
};