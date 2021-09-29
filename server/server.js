/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const path = require("path");
const apiRouter = require("./routers/apiRouter.js");
const signupController = require("./controllers/signupController.js");
const loginController = require("./controllers/loginController.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//let webpack handle static serves during development
if (process.env.NODE_ENV === "production") {
	//statically serve everything in the build folder on the route '/build'
	app.use("/build", express.static(path.join(__dirname, "../build")));

	//serve index.html on the route '/'
	app.get("/", (req, res) => {
		return res.status(200).sendFile(path.join(__dirname, "../index.html"));
	});
}

//funnel all api requests to standalone route handler
app.use("/api", apiRouter);

//handle new user signups
app.post("/signup",
	signupController.createUser,
	(req, res) => res.status(200).json(res.locals.newUserInfo)
);

//login user accounts
app.post("/login",
	loginController.verifyLogin,
	(req, res) => res.status(200).json(res.locals.userInfo)
);

//send 404 on requests to bad routes
app.use((req, res) => res.status(404).send("Woops!! This page doesn't seem to exist..."));

//global error handling
app.use((err, req, res, next) => {
	const defaultErr = {
		log: "Express error handler caught unkown middleware errror",
		status: 500,
		message: { err: "An error occured" }
	};
	const errObj = Object.assign({}, defaultErr, err);
	console.log(errObj.log);
	return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}...`));
