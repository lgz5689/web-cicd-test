FROM node:20.11.0 as builder

WORKDIR /app

ADD . .

RUN rm -rf node_modules
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM nginx

WORKDIR /usr/share/nginx/html/

USER root

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]