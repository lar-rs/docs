FROM rust:1.31

# WORKDIR /usr/src/wqms
COPY . .

RUN cargo install mdbook

CMD [""]
