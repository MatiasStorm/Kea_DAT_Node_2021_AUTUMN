require("dotenv").config();

// Database
const {sequelize} = require("./database/connectSqlite.js");


const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Import and use routes */
const projectsRouter = require("./routers/projects.js");
const pagesRouter = require("./routers/pages.js")
const contactRouter = require("./routers/contact.js");
const adminRouter = require("./routers/admin.js");
const techonogiesRouter = require("./routers/technologies.js");

/* Middleware */
const middleware = require("./middleware");

// Used to parse http only jwt cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(projectsRouter);
app.use(pagesRouter);
app.use(contactRouter);
app.use(adminRouter);
app.use(techonogiesRouter);

const { createPage } = require("./render.js");
const { urlencoded } = require("express");

/* Ready the pages */
const frontpagePage = createPage("frontpage/frontpage.html", { 
        title: "Nodefolio | Welcome"
});
const CVPage = createPage("CVPage/CVPage.html");
const projectsPage = createPage("projects/projects.html");
const contactPage = createPage("contact/contact.html");
const adminPage = createPage("admin/admin.html");
const dashboard = createPage("admin/dashboard/dashboard.html");
const editProject = createPage("admin/dashboard/editProject.html");

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/cv", (req, res) => {
    res.send(CVPage);
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

app.get("/admin/dashboard", middleware.authenticateToken, (req, res) => {
    // assert login
    res.send(dashboard);
})

app.get("/admin", (req, res) => {
    res.send(adminPage);
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});
