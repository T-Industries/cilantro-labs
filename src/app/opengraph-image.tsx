import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cilantro Labs — AI agents for restaurants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(52,211,153,0.35), transparent 60%), #050608",
          color: "#f5f7f5",
          fontFamily: "system-ui, -apple-system, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #6ee7b7 0%, #10b981 60%, #047857 100%)",
            }}
          />
          <div style={{ fontSize: 26, fontWeight: 600 }}>Cilantro Labs</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            The AI workforce behind every great restaurant.
          </div>
          <div style={{ fontSize: 28, color: "#8a9097", maxWidth: 900 }}>
            AI agents that quietly handle the work no one went to culinary
            school for.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#8a9097",
          }}
        >
          <span>cilantro-labs.com</span>
          <span style={{ color: "#34d399" }}>● AI agents · live</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
