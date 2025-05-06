import "./style.css";
import { useRef, useEffect } from "react";

export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      throw new Error("canvas要素の取得に失敗しました");
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("canvasのコンテキストの取得に失敗しました");
    }
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "red";
    ctx.fill();
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="bg-[#d3d3d3] block mx-auto"
        width={480}
        height={480}
      />
    </div>
  );
};
