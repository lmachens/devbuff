// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { DISCORD_WEBHOOK_URL } = process.env;
  if (!DISCORD_WEBHOOK_URL) {
    throw new Error("DISCORD_WEBHOOK_URL is not set");
  }

  const { email, why, when, more } = req.body;
  if (
    typeof email !== "string" ||
    typeof why !== "string" ||
    typeof when !== "string"
  ) {
    res.status(400).json({
      error: "Missing required fields",
    });
    return;
  }

  await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "DevBuff Bot",
      content: "New registration!",
      embeds: [
        {
          title: "E-Mail",
          description: email,
        },
        {
          title: "Why",
          description: why,
        },
        {
          title: "When",
          description: when,
        },
        {
          title: "More",
          description: more || "",
        },
      ],
    }),
  });

  res.status(200).json({ success: true });
}
