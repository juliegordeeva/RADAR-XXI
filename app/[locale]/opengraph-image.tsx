import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "RADAR XXI Kids";

export default async function OgImage() {
  const line = "Cards, calendars, family quests";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FDFAF4",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, color: "#5A6360" }}>RADAR XXI Kids</div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#1F2421", lineHeight: 1.1, maxWidth: 900 }}>
          {line}
        </div>
        <div style={{ fontSize: 28, color: "#C2542F" }}>4–16</div>
      </div>
    ),
    size,
  );
}
