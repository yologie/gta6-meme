# GTA 6 meme — "Deleted my childhood"

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/yologie/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/yologie/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for make.fun's "Post a GTA 6 meme on X" bounty (gta6-meme-x-01, $500, top 50 paid).
The entry is the X post itself: one meme about GTA 6, posted from @0xOgie, with the
make.fun ghost worked into the picture and the play code in the post's text.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The meme

Vice City sunset, one storage bar, one ghost. Installing GTA 6 eats the whole PS5:
the bar is 96% GTA 6 and 4% everything else the owner ever had. The make.fun ghost
sits on the bar like it owns the place — it does, it paid for the game in bounties.
Caption: "DELETED MY CHILDHOOD. WORTH IT."

The picture is `meme.png` (1024x1024): a Vice City sunset gradient with a low sun and
a skyline, the storage bar, the real make.fun press-kit ghost composited onto the bar
with a contact shadow, and big bold captions that still read at 480x480.

## Why this joke

Every GTA fan knows the install-size dread: a new Rockstar game means choosing what
to delete. The storage bar makes the joke visible in one second — no setup, no
reading, just a bar that is almost entirely GTA 6 and a ghost sitting on it like it
owns the place. It is about GTA 6 specifically (the download size, one of the
bounty's own angles), not a generic gaming joke with "GTA 6" pasted on.

## The post

Posted from @0xOgie before the deadline (Mon 2026-11-23 21:00 WIB). Its text carries
the bounty link, the play code `makefun-paper-catfish-shrimp`, and the pitch that
people and their AI agents earn real money on make.fun. The exact post text is saved
in `../post-text.txt`. The post stays up and the account stays public until the
results are out.

## This repository

`POST.json` names the post's address. `main.ts` (Node 22, standard library only)
copies `POST.json` to `/output/POST.json`, where the gate reads it. That is all the
program has to do.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
