FROM oven/bun:latest

WORKDIR /himmel

COPY package.json .

RUN bun install

COPY . .

EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"

ENTRYPOINT [ "bun", "run", "./himmel-server/index.ts" ]

