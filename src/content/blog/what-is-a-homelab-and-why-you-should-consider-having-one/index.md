---
title: What is a Homelab and why you should consider having one?
description: This is a list of all the tools and services that I self host in my Homelab
draft: false
tags:
  - homelab
  - docker
date: 2025-04-01T13:38:00.000Z
---
Homelab is the name given to the server(s) that reside locally in your home that you can use for various functions such as virtualization, testing, NAS, media server etc. This server can be a raspberry pi, an old pc/laptop or any other computer. 

## The homelab architecture

### The server

For my homelab server I use an Asrock Deskmeet x600, it is a mini ITX barebone unit. It is a great fit for a homelab due to its compact size. The specs are:

1. **CPU:** Ryzen 7 5700G
2. **RAM:** 64GB
3. **Storage:** 

   * Internal - 500GB + 4TB
   * External - 4TB + 1TB
   * Network Attached Storage - 1TB

![homelab pc](asrock-deskmeet.jpg)

## Storage

Storage is an important part of any homelab. For me, I am using it as a media server, photos and drive. So I have a lot of storage for this data as well as for backups.

**Internal 1:** This is a [Crucial P3 500GB M.2 drive](https://amzn.to/4la3gqk). It is used as the OS drive for the hypervisor and all the VMs.

**Internal 2:** This is a [Seagate Ironwolf 4TB](https://amzn.to/4hTktSd) hard drive and is used to store everything. 

**External 1:** This is a [Seagate 4TB external hard drive](https://amzn.to/4i0MxDc). This is the backup drive. All important stuff is backed up to this drive daily.

**External 2:** This is a 1TB [drive](https://amzn.to/3RAxEMR) from an old computer housed in a [SATA to USB enclosure](https://amzn.to/3XByywf). It is used as my time machine backup disk.

**NAS:** It's a [Synology NAS](https://amzn.to/3E2Rv4k) with a 1TB drive from another old computer. This stores the backup of all my VMs.

## Architecture

This is a high level architecture of my homelab.





## Services Running

All of the services that I am running are through [Docker](https://www.docker.com) on Debian VMs. This enables easy onboarding and testing of these services and does not leave residue after uninstallation.

### Utilities

#### [Nginx Proxy Manager](https://nginxproxymanager.com)

When starting out you can access your homelab resources with the ip and port combination but it gets very difficult to remember all the ips and ports to your service. Moreover, some services require you to run over SSL. Nginx Proxy Manager provides an easy to use GUI for nginx to be used as reverse proxy and handles SSL as well.

![nginx proxy manager](nginx-proxy-manager.png)

#### [Adguard](https://adguard.com/en/welcome.html)

We use adblock on your browsers but that's it, there is not option to block ads from other resources like on a smart TV or OS level telemetry. This is where a DNS based adblock like Adguard comes into play. It serves two purposes. Firstly, It blocks DNS queries to the Ad services essentially blocking the ad providing a network wide adblock. And second, it provides internal DNS records to my local resources. You just have to change the DHCP settings on your router to use adguard as the DNS server.

#### [Twingate](https://www.twingate.com)

#### [Vaultwarden](https://github.com/dani-garcia/vaultwarden)

Creating a strong password for every site and then remembering it is not humanly possible. That is where password managers come in, but they are not free or very limited in their free tier. Vaultwarden is an alternative implementation of the Bitwarden Client API, written in Rust and compatible with the official bitwarden clients.[](https://bitwarden.com/download/)

![vaultwarden](vaultwarden.png)

#### [It-tools](https://github.com/CorentinTh/it-tools)

Want to convert markdown to HTML, hash a piece of text, convert hex to rgb, prettify JSON etc? This is collection of all these tools and many more in a single application. No need to go to different sites or download multiple tools. I have a self hosted version of this [here](https://tools.nipunh.com).

![it-tools](it-tools.png)

#### Speedtest

#### Uptime Kuma

#### OpenMedia vault

#### Portainer

#### Code Server

#### Home Assistant

### Productivity

#### Nextcloud

#### Immich

#### Gitea

#### Homarr

#### Ollama

### Entertainment

#### Jellyfin

#### \*arr Stack
