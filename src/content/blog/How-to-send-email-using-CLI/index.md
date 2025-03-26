---
title: How to send email using terminal
description: Test your SMTP credentials without any extra tool just from your terminal
draft: false
tags:
  - email
  - SMTP
  - gmail
  - terminal
date: 2025-03-23T18:30:00.000Z
---

In this tutorial we'll use the terminal to send email using SMTP. This method can be used to test the SMTP credentials by sending a test email.

## Before you start

1. You'll need a UNIX based terminal with openssl installed.
2. SMTP credentials from any service like [Gmail](https://support.google.com/a/answer/176600?hl=en), AWS SES, Mailchimp etc. We'll use Gmail credentials in this example

## Encode the SMTP credentials

Base64 encode the SMTP username and password (password will be app password for gmail). Copy the result of each of the commands.

```shell
echo -n "<username>" | openssl enc -base64
echo -n "<password>" | openssl enc -base64
```

## Creating the email body

Create a file named mail.txt with the following content.

```
EHLO example.com
AUTH LOGIN
<base64 username>
<base64 password>
MAIL FROM: your@gmail.com
RCPT TO: receiver@example.com
DATA
From: Sender Name <your@gmail.com>
To: receiver@example.com
Subject: Did it work?

This message was sent using the terminal.
.
QUIT
```

Replace [your@gmail.com](mailto:your@gmail.com) with your gmail id and [receiver@example.com](mailto:receiver@example.com) with the email id you want to send the message.

## Sending the email

Run the following command to send the email.

```shell
openssl s_client -crlf -quiet -starttls smtp -connect <email server>:<port> < /path/to/mail.txt
```

Replace your mail server host and port provided to you by the service.

Check your receiver mailbox.

![](1.webp)

**Congratulations!🎉 You've successfully sent email from the terminal.**
