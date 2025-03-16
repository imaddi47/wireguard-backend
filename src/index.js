const express = require('express');
const { exec } = require('./lib/utils');

const wireguardRoutes = require('./routes/wireguard');
const userRoutes = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Mount routes
app.use('/api/wireguard', wireguardRoutes);
app.use('/api/users', userRoutes);

// System info route
app.get('/system-info', async (req, res) => {
    try {
        const stdout = await exec('uname -a');
        const systemLocation = await exec('curl ipinfo.io');
        res.json({ data: {
          "system-info": stdout,
          "systrem-location": JSON.parse(systemLocation)
        } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
