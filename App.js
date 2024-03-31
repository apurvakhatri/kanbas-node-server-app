import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import express from 'express';
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
app.listen(4000)


// app.use(cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL
// }));
// CourseRoutes(app);
// ModuleRoutes(app);
// AssignmentRoutes(app);
// app.listen(process.env.PORT || 4000);