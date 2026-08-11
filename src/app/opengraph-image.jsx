import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Khalid Hasan Meskat — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0f",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#f59e0b",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          &lt;KHM /&gt;
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#e8e8f0", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            Khalid Hasan Meskat
          </div>
          <div style={{ color: "#f59e0b", fontSize: 32, fontWeight: 600 }}>
            Frontend Developer
          </div>
          <div style={{ color: "#9ca3af", fontSize: 24, maxWidth: 800, lineHeight: 1.4 }}>
            React · Next.js · Tailwind CSS · Accessible UI
          </div>
        </div>

        <div style={{ display: "flex", color: "#6b7280", fontSize: 22 }}>
          Available for remote & full-time roles
        </div>
      </div>
    ),
    { ...size }
  );
}
