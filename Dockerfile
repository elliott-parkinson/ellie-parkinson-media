FROM denoland/deno:latest

WORKDIR /app

# Copy the rest of the repo
COPY . .

# Expose whatever port your Deno app uses
EXPOSE 8000

# Default command (can be overridden by docker-compose)
CMD ["deno", "task", "start"]
