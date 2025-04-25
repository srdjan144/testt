require("dotenv").config();
const express = require("express");
const axios = require("axios").default;
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/properties", async (req, res) => {
    try {
        const response = await axios.get("https://api.apimo.pro/agencies/2188/properties", {
            headers: {
                Authorization: process.env.APIMO_AUTH,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Erreur API Apimo :", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Erreur lors de la récupération des biens" });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
