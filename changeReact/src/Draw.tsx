import { canvasSize, ball } from "./App";


export const Draw = (ctx: CanvasRenderingContext2D, x: number, y: number) => {

    let dx = 2;
    let dy = -2;

    // Note: setInterval をそのまま使って大丈夫か?
    setInterval(() => {

        // もっと引数減らせないか？
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
        DrawBall(ctx, x, y);

        if (x + dx > canvasSize.width - ball.radius || x + dx < ball.radius) {
            dx = -dx;
        }

        if (y + dy > canvasSize.height - ball.radius || y + dy < ball.radius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
        
    }, 10);
}

const DrawBall = (ctx: CanvasRenderingContext2D, x: number, y: number) => {

    ctx.beginPath();
    ctx.arc(x, y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

}
