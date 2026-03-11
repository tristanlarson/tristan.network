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

Tailscale, specifically the server portion (which isn't Open Sourced), is used to initiate P2P VPN connections between your hosts.

There's a great alternative whose server is fully open sourced, it's called [NetBird](https://netbird.io). There's also an open source server that can be used by the Tailscale clients called [Headscale](https://headscale.net/stable/). 

I've been meaning to migrate from Tailscale to NetBird for a while now, and at some point I had the NetBird clients installed on all my servers, but the NetBird DNS conflicted with Tailscale's, and at the time I couldn't continue so I disabled NetBird.
