#!/bin/bash

# Build the project
npm run build

# Add all changes
git add .

# Commit with timestamp
git commit -m "Build and deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
git push origin main

echo "✅ Build, commit, and push complete!"
