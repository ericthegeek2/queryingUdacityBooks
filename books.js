const api = "https://reactnd-books-api.udacity.com";


const express = require('express')

const app = express()

import { env } from "process";
import router from "./routers";

app.use(router)


const PORT = env('PORT') || 3000


app.listen(PORT , (req,res) =>(
    console.log(`server running on port ${Port}`)
))




