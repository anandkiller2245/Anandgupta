const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/download", async (req, res) => {
  const videoUrl = req.query.url;
  if (!videoUrl) return res.status(400).json({ error: "URL required" });

  try {
    const options = {
      method: 'GET',
      url: 'https://pinterest-video-and-image-downloader.p.rapidapi.com/api/',
      params: { url: videoUrl },
      headers: {
        'X-RapidAPI-Key': 'f64b91815amsh6462c3ff2f08087p14dae3jsn6ac189d738b6',
        'X-RapidAPI-Host': 'pinterest-video-and-image-downloader.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Download failed", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
