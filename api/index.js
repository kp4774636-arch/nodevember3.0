import express from 'express';
import connectDB from '../config/db.js';
import authRoute from '../routes/auth.routes.js';
import bookRoutes from '../routes/book.routes.js';
import orderRoutes from '../routes/order.routes.js';
import aiRoutes from '../routes/ai.routes.js';
const app = express();



app.use(express.json());
connectDB();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Bookstore API is running");
});

app.use("/api/auth",authRoute);
app.use("/api/books",bookRoutes);
app.use("/api/aiorder",aiRoutes);
app.use("/api/order",orderRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});