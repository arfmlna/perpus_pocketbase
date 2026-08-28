FROM alpine:latest

ARG PB_VERSION=0.30.2

RUN apk add --no-cache \
    unzip \
    ca-certificates

WORKDIR /pb

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb && rm /tmp/pb.zip

# COPY hanya jika foldernya ada di komputer Anda
COPY ./pb_migrations ./pb_migrations
COPY ./pb_hooks ./pb_hooks

# Mengikuti port dinamis dari Railway
EXPOSE 8080

# Menggunakan sh -c agar bisa membaca variable ${PORT} dari Railway
CMD ["sh", "-c", "/pb/pocketbase serve --http=0.0.0.0:${PORT:-8080} --dir=/pb/pb_data"]