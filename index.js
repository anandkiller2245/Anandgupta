const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/download', async (req, res) => {
  const { url } = req.query;

  if (!url) return res.status(400).json({ error: 'URL required' });

  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url);

    const image = await page.$eval("meta[property='og:image']", el => el.content);
    await browser.close();

    res.json({ download_url: image });
  } catch (err) {
    res.status(500).json({ error: "Failed to extract image", details: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
