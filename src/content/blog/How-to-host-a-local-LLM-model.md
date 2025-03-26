---
title: How to host a local LLM model
description: Use Ollama and docker to host your own LLM model.
draft: true
date: 2025-03-25T18:30:00.000Z
---

Hosting your own local LLM can be fast, secure and private to online alternative.

## Before getting started

1. You'll need a fairly decent machine if you want quicker responses. But as long as you are using it alone you can get by with a old machine also.
2. We'll use docker to host the LLM and web ui so make sure [docker](https://docs.docker.com/engine/install/) is installed and running.

## Installing Ollama

In this tutorial we'll use [Ollama](https://ollama.com) to host the LLM and later connect an UI. Create a directory called chat and create a compose.yml file inside it.

```shell
mkdir chat
cd chat
touch compose.yml
```

Add the following to the compose.yml file.

```yaml
services:
    ollama:
        image: ollama/ollama
        container_name: ollama
        restart: unless-stopped
        ports:
            - 11434:11434
        volumes:
            - ./ollama-data:/root/.ollama
```

Now, run the container.

```shell
docker compose up -d
```

And go to \<ip>:11434. You'll be able to see ollama is running. ![](/local-llm/1.webp)
