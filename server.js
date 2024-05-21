const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const env = require('dotenv').config();
const app = express();

app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

app.use(static)
