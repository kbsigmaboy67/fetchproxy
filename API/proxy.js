export default async function handler(req, res) {
  try {
    const path = req.query.path || "";

    const targetUrl = `https://kbsigmaboy67.github.io/${path}`;

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "User-Agent": "Vercel-Proxy"
      }
    });

    const contentType = response.headers.get("content-type") || "text/plain";
    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Type", contentType);

    res.status(response.status).send(data);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}
