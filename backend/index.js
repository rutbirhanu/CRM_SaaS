const express= require("express")
const connectDB = require("./Config/dbConfig")
const cors = require("cors");

const customerRoutes = require("./Route/customerRoute");
const inventoryRoutes = require("./Route/inventoryRoute");
const adminRoutes = require("./Route/adminRoute");
const socialsRoutes = require("./Route/socialMediaRoute")


const app = express()

app.use(express.json()); 
app.use(cors()); 


app.use("/customer", customerRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/admin", adminRoutes);
app.use("/socials", socialsRoutes);


connectDB()
app.listen(8080, () => {
    console.log("server started")
})


