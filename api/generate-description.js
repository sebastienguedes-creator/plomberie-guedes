export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { prompt, base64Image } = req.body;
  const apiKey = process.env.MISTRAL_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'MISTRAL_API_KEY non configurée sur Vercel' });
  }

  try {
    let imageContent = [];
    if (base64Image) {
      imageContent = [
        {
          type: "image_url",
          image_url: base64Image
        }
      ];
    }

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "pixtral-12b-2409",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              ...imageContent
            ]
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}