import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api/v1/users", (req, res) => {
    const users = [
        {id: 1, name: "John Wick"},
        {id: 2, name: "Javier Milei"}
    ];

    return res.status(200).json({ users });
});

app.listen(3000, () => {
    console.log("App listening on port 3000!");
});