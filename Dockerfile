# ==========================================
# Stage 1: Build Environment
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies with frozen lockfile for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy application source code
COPY . .

# Build production bundle
RUN npm run build

# ==========================================
# Stage 2: Production Nginx Runtime
# ==========================================
FROM nginx:1.27-alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Container health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O - http://localhost/ || exit 1

# Start Nginx server in foreground
CMD ["nginx", "-g", "daemon off;"]
