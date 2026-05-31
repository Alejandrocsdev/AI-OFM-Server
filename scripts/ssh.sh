#!/bin/bash

KEY_PATH="$HOME/.ssh/vast"

mkdir -p "$HOME/.ssh"

chmod 700 "$HOME/.ssh"

if [ -f "$KEY_PATH" ]; then
  echo "SSH key already exists: $KEY_PATH"
  echo ""
  echo "Public key:"
  cat "$KEY_PATH.pub"
  exit 0
fi

ssh-keygen -t ed25519 -f "$KEY_PATH" -N "" -C "vast"

chmod 600 "$KEY_PATH"
chmod 644 "$KEY_PATH.pub"

echo ""
echo "SSH key created:"
echo "Private key: $KEY_PATH"
echo "Public key:  $KEY_PATH.pub"

echo ""
echo "Public key:"
cat "$KEY_PATH.pub"