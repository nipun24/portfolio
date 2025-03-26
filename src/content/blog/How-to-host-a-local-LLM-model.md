---
title: How to host a local LLM model
description: Use Ollama and docker to host your own LLM model.
draft: false
tags:
  - ollama
  - open webui
  - chatgpt
  - docker
  - deepseek r1
  - LLM
date: 2025-03-25T18:30:00.000Z
---

Hosting your own local LLM can be fast, secure and private to online alternative.

## Before getting started

1. You'll need a fairly decent machine if you want quicker responses. But as long as you are using it alone you can get by with a old machine also.
2. We'll use docker to host the LLM and web ui so make sure [docker](https://docs.docker.com/engine/install/) is installed and running.

## Installing Ollama

In this tutorial we'll use [Ollama](https://ollama.com) to host the LLM and later connect an UI. Create a directory called `chat` and create a `compose.yml` file inside it.

```shell
mkdir chat
cd chat
touch compose.yml
```

Add the following to the `compose.yml` file.

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

And go to \<ip>:11434. You'll be able to see ollama is running.

![](/local-llm/1.webp)

## Adding the UI for chat

For the UI we'll use the [open web UI](https://github.com/open-webui/open-webui) project. To add this we'll edit the compose.yml file.

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
    open-webui:
        image: ghcr.io/open-webui/open-webui:main
        restart: unless-stopped
        container_name: ollama-webui
        volumes:
            - ./open-webui-data:/app/backend/data
        environment:
            - 'OLLAMA_BASE_URL=http://ollama:11434'
        ports:
            - 3000:8080
```

Then re-run the containers.

```yaml
docker compose down
docker compose up -d
```

Now, navigate to \<ip>:3000 and create a admin account.![](/local-llm/2.webp)

## Downloading a LLM

Now we have all the essentials setup and running to download a use a LLM model. You can any model from the [Ollama website](https://ollama.com). For this tutorial we'll use the [deelseek-r1](https://ollama.com/library/deepseek-r1:1.5b) model with 1.5 billion parameters.

On the web interface go to select model and search deepseek-r1:1.5b and click pull to begin downloading. Wait for the model to get downloaded.

![](/local-llm/3.webp)

![](/local-llm/4.webp)

Once the model is downloaded select the model and begin chatting.![](/local-llm/5.webp)

![](/local-llm/6.webp)Okay! the jokes might not be as funny 😅 but you have your own private chatbot.
