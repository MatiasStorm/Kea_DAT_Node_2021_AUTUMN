require("dotenv").config();

const cookieParser = require("cookie-parser");
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

/* Middleware */
const middleware = require("./middleware");

app.use(cookieParser());

app.use(projectsRouter.router);
app.use(pagesRouter.router);
app.use(contactRouter.router);
app.use(adminRouter.router);

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
