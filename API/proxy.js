export default async function handler(req, res) {
  const path = req.query.path || "";

  const target = `https://kbsigmaboy67.github.io/${path}`;

  try {
    const response = await fetch(target);

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Content-Type",
      response.headers.get("content-type") || "text/plain"
    );

    res.status(response.status).send(text);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}
