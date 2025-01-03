FROM ruby:3.3.5

WORKDIR /app

# 必要なパッケージをインストール
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
    build-essential \
    git \
    pkg-config \
    redis \
    default-libmysqlclient-dev \
    default-mysql-client \
    && rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Gemfileと依存関係インストール
COPY Gemfile Gemfile.lock ./
RUN bundle install

# アプリケーションコードをコピー
COPY . .

# 環境変数設定
ENV RAILS_ENV=production
ENV RAILS_LOG_TO_STDOUT=true
ENV SECRET_KEY_BASE=${SECRET_KEY_BASE}

# DB準備
RUN bundle exec rails db:prepare

# エントリポイント設定
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["entrypoint.sh"]
CMD ["bash", "-c", "rm -f tmp/pids/server.pid && bundle exec rails s -b '0.0.0.0'"]
