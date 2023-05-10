require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const locationRouter = require("./routes/location.routes");
const authRouter = require("./routes/auth.routes");
const commentRouter = require("./routes/comment.routes");

const connectDB = require("./db/connect");
const NotFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("tiny"));
app.use(cookieParser("cookieParser"));
app.use(helmet());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the server side..." });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/location", locationRouter);
app.use("/api/v1/comment", commentRouter);

app.use(NotFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
