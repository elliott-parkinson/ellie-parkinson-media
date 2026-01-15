FROM denoland/deno:latest

WORKDIR /app

# Cache deps first (optional but recommended)
COPY deno.json* ./
RUN deno cache --reload main.ts

# Copy the rest of the repo
COPY . .

# Expose whatever port your Deno app uses
EXPOSE 8000

# Default command (can be overridden by docker-compose)
CMD ["deno", "task", "start"]
