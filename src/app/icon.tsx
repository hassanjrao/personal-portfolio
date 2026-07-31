import { ImageResponse } from "next/og";
import { brand } from "@/config/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f766e, #14b8a6 60%, #f59e0b)",
          borderRadius: 14,
          color: "#ffffff",
          fontSize: 38,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        {brand.mark}
      </div>
    ),
    { ...size }
  );
}
