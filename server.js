const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use("/api",require("./routes/contactRouter"))
mongoose.connect("mongodb+srv://naftiwala10:naftiwala10@cluster0.zkzjn.mongodb.net/Project0?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("database connected").catch(err))



const PORT = 5000
app.listen(PORT, ()=> console.log ("my server is running",PORT))
