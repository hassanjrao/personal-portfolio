import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const imgBuffer = readFileSync(join(process.cwd(), "public/hassan.png"));
  const base64 = `data:image/png;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <img
          src={base64}
          width={64}
          height={64}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </div>
    ),
    { ...size }
  );
}
