import express from "express";
import employeesRoutes  from './routes/employees.routes.js';
import index from './routes/index.routes.js';


const app = express();

app.use(express.json());

// Routes
app.use('/api', employeesRoutes);
app.use(index);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    })
});

export default app;