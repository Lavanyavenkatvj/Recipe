const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const FILE = 'recipes.json';

app.get('/recipes', (req, res) => {
    const data = fs.readFileSync(FILE);
    res.json(JSON.parse(data));
});

app.post('/recipes', (req, res) => {
    const recipes = JSON.parse(fs.readFileSync(FILE));
    recipes.push(req.body);
    fs.writeFileSync(FILE, JSON.stringify(recipes, null, 2));
    res.json({ message: "Recipe added!" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));