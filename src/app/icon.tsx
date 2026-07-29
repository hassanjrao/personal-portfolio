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
          background: "linear-gradient(135deg, #0e7490, #06b6d4 60%, #f59e0b)",
          borderRadius: 14,
          color: "#06121c",
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
