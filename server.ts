import homepage from "./web/index.html";

const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535.");
}

const server = Bun.serve({
  hostname: process.env.HOST ?? "127.0.0.1",
  port,
  routes: { "/": homepage },
  development: process.env.NODE_ENV !== "production",
});

console.info(`Daybreak Coffee is ready at http://${server.hostname}:${server.port}`);
