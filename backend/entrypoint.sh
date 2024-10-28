#!/bin/bash
set -e

# 必要に応じてデータベースのマイグレーションを実行
# echo "Running database migrations..."
# bundle exec rails db:migrate

# サーバーの起動
exec "$@"
