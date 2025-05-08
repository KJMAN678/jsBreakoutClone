import "./style.css";
import { useRef, useEffect, createContext } from "react";
import { Draw } from "./Draw";

export const canvasSize = {
  width: 0,
  height: 0,
};

export const ball = {
  radius: 10,
};


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

    // 使い方あってる？
    canvasSize.width = canvas.width;
    canvasSize.height = canvas.height;

    let x = canvasSize.width / 2;
    let y = canvasSize.height - 30;

    Draw(ctx, x, y);

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
