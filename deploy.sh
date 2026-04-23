#!/usr/bin/env bash
set -euo pipefail

HOST="${DEPLOY_HOST:-root@157.230.167.214}"
REMOTE_PATH="${DEPLOY_PATH:-/opt/resonare/projects/growthrings}"

npm run build
rsync -az --delete out/ "$HOST:$REMOTE_PATH/"

echo "Deployed to $HOST:$REMOTE_PATH"
