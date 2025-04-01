---
title: What is a Homelab and why you should consider having one?
description: This is a list of all the tools and services that I self host in my Homelab
draft: true
tags:
  - homelab
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

My homelab consists of three physical devices:

1. Homelab server
2. Synology NAS
3. Router + Wifi Access point
