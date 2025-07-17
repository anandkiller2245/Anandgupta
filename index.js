const express = require("express");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const cors = require("cors");

puppeteer.use(StealthPlugin());

const app = express();
app.use(cors());

app.get("/api/download", async (req, res) => {
  const url = req.query.url;
  if (!url || !url.includes("pinterest.com")) {
    return res.status(400).json({ error: "Invalid Pinterest URL" });
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
        "--window-size=1920x1080",
      ],
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    );
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

    // Instead of page.waitForTimeout()
    await new Promise(resolve => setTimeout(resolve, 5000));

    const mediaUrl = await page.evaluate(() => {
      const videoMeta = document.querySelector("meta[property='og:video']");
      const imageMeta = document.querySelector("meta[property='og:image']");
      return videoMeta?.content || imageMeta?.content || null;
    });

    await browser.close();

    if (!mediaUrl) {
      return res.status(404).json({ error: "No media found on Pinterest page." });
    }

    return res.json({ download_url: mediaUrl });
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
