// Vercel Serverless Function (後端入口)
export default function handler(req, res) {
  res.status(200).json({
    message: "來自 Vercel 伺服器的問候！現在時間: " + new Date().toLocaleTimeString(),
    status: "success"
  });
}