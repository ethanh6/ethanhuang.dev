# Deploying the CLI Feature to AWS Amplify Gen 2

This guide explains how to deploy the `feature/curl-cli-support` branch with full middleware support.

## Feature Overview

```bash
curl https://ethanhuang.dev           # Homepage
curl https://ethanhuang.dev/posts     # Blog posts
curl https://ethanhuang.dev/resume    # Resume
```

## Requirements

**AWS Amplify Gen 2** is required for full Next.js middleware support.

## Deployment Steps

### Step 1: Push the Branch

```bash
cd /Users/ethanhuang/myProject/ethanhuang.dev-curl-cli
git add .
git commit -m "Add CLI support via middleware"
git push origin feature/curl-cli-support
```

### Step 2: Deploy via Amplify Console

1. Go to https://console.aws.amazon.com/amplify/
2. Select your app → **App settings** → **Branch settings**
3. Click **Connect branch** → Select `feature/curl-cli-support`
4. Click **Save and deploy**

### Step 3: Test

```bash
curl https://your-preview-url.amplifyapp.com
curl https://your-preview-url.amplifyapp.com/posts
curl https://your-preview-url.amplifyapp.com/resume
```

## Merging to Main

```bash
git checkout main
git merge feature/curl-cli-support
git push origin main
```
