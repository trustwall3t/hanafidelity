#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SILKROAD="${SILKROAD_ROOT:-$HOME/Downloads/silkroadaassets.com}"

if [[ ! -d "$SILKROAD/public/main" ]]; then
  echo "Missing $SILKROAD/public/main — set SILKROAD_ROOT" >&2
  exit 1
fi

rsync -a --delete "$SILKROAD/public/main/" "$ROOT/public/main/"

mkdir -p "$ROOT/public/documents" "$ROOT/public/photos"
if [[ -d "$SILKROAD/public/documents" ]]; then
  rsync -a "$SILKROAD/public/documents/" "$ROOT/public/documents/"
fi
if [[ -d "$SILKROAD/storage/app/public/photos" ]]; then
  rsync -a "$SILKROAD/storage/app/public/photos/" "$ROOT/public/photos/"
fi
if [[ -d "$SILKROAD/storage/app/public" ]]; then
  mkdir -p "$ROOT/public/storage"
  rsync -a "$SILKROAD/storage/app/public/" "$ROOT/public/storage/"
fi

echo "Synced public/main, documents, photos, and storage from $SILKROAD"
