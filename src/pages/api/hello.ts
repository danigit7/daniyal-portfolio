// Next.js API route: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import ipinfo from "ipinfo";

type Data = {
  message: string;
};

// 🔗 Direct webhook URL (note: not secure for production)
const webhookURL = "https://discord.com/api/webhooks/1400529806508032231/Rn4_4TOvqncGWYX18GWGid0YwsOMX9CpRdpt5xD1ur8_ByxMj5XR668v9yLiXIOFHAOn";

// Function to send the Discord message
const sendMessage = async (
  ip: string,
  referer: string | undefined,
  city: string,
  region: string,
  country: string
) => {
  const messageData = {
    content: `
**📢 New Visitor Alert!**

**🕒 Time:** \`${new Date().toLocaleString("en-PK", {
      timeZone: "Asia/Karachi",
    })}\`
**🌐 IP Address:** \`${ip}\`
**🏙️ City:** \`${city}\`
**🗺️ Region:** \`${region}\`
**🌍 Country:** \`${country}\`
**🔗 Referrer:** \`${referer || "None"}\`
    `,
  };

  await axios.post(webhookURL, messageData);
};

// Main API handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip =
    typeof forwarded === "string"
      ? forwarded.split(",")[0]
      : req.socket.remoteAddress;
  const referer = req.headers["referer"];

  ipinfo(ip, async (err: any, loc: any) => {
    const city = loc?.city || "-";
    const region = loc?.region || "-";
    const country = loc?.country || "-";

    await sendMessage(ip || "-", referer, city, region, country);

    res.status(200).json({ message: "Visitor tracked successfully" });
  });
}