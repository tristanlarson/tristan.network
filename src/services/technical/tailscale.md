---
layout: layouts/service.njk
title: Tailscale
logo: /images/services/tailscale.svg
image: /images/services/tailscale-page.svg
image_alt: image depicting the tailscale client on a phone in front of the tailscale client on a laptop
link_tristan:
link_official: https://tailscale.com
order: 7
---

Tailscale (which isn't open source) is used to initiate P2P VPN connections between your hosts. This is incredibly helpful for people like me who have servers behind CGNAT, where you can't expose a port for a traditional VPN server, and for people with multiple servers across different networks. Setup is incredibly simple, you just istall tailscale, enable/start the systemd service if applicable, then run "tailscale up" and use a browser to authenticate it to your network.

There's a great alternative with an open source server called [NetBird](https://netbird.io). There's also an open source server that can be used with Tailscale clients called [Headscale](https://headscale.net/stable/). 

I've been meaning to migrate from Tailscale to NetBird for a while now, and at some point I had the NetBird clients installed on all my servers, but the NetBird DNS conflicted with Tailscale's, and at the time I couldn't continue so I disabled NetBird.

UPDATE 2026-06-04: I decided to put Immich and Actual Budget behind my Tailscale VPN for security.
