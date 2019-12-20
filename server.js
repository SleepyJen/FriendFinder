const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require('./app/routing/apiRoutes');
app.use('/api/friends', apiRoutes);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});