import express from 'express';
import mongoose from "mongoose";
import cors from "cors";

// Import routes
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import UserRoutes from "./Users/routes.js";
import Lab5 from "./Lab5.js";
import Hello from "./Hello.js";

const app = express();

// Establish MongoDB connection
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connected successfully!");
    console.log(mongoose.connection.readyState);
    // Set up middleware
    app.use(cors());
    app.use(express.json());

    // Set up routes
    CourseRoutes(app);
    UserRoutes(app);
    ModuleRoutes(app);
    AssignmentRoutes(app);
    Lab5(app);
    Hello(app);

    // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
