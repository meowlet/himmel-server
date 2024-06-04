FROM oven/bun:latest

WORKDIR /himmel

COPY package.json .

RUN bun install

COPY . .

EXPOSE 3212

ENV PORT 3212

ENV HOSTNAME "0.0.0.0"

ENTRYPOINT [ "bun", "run", "./himmel-server/index.ts" ]

