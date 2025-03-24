---
title: Minimal code reverse proxy setup
description: Set up a reverse proxy with minimal code and a management UI.
draft: true
date: 2025-03-25T18:30:00.000Z
---

Are you managing a reverse proxy for multiple applications and want an easy way to setup a reverse proxy to manage all your services with built-in SSL. In this tutorial we'll setup [Nginx Proxy Manager](https://nginxproxymanager.com) using docker.

## Getting things ready

Before you begin make sure you have installed [docker](https://docs.docker.com/engine/install/) on the machine that you want the reverse proxy to be in. In this tutorial we'll host the reverse proxy on the same machine as our applications.

## Docker compose file
