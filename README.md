# Daybreak Coffee

A tiny, original cafe website for demonstrating [Clanky](https://github.com/pablozaiden/clanky):
create an automatic workspace, run a few chats, inspect their code, and preview a
real change. No application dependencies, accounts, API keys, database, payments
or external assets. All illustrations are original SVGs included in this repository.

## Run locally

With Bun 1.4.2 or newer:

```sh
bun run dev
```

Open <http://localhost:3000>. There is no dependency installation step.
Use `PORT` to select another port, or `HOST` to change the default loopback bind.

`bun run build` optionally creates a standalone `dist/daybreak` executable.
Run it with `NODE_ENV=production ./dist/daybreak`, or use `bun run start` to
serve a production bundle directly from source.

## Use the devcontainer

Open this repository in a Dev Containers-compatible tool, or use its public
GitHub URL when creating an automatic Clanky workspace. Choose the **local**
provisioning host and name the workspace **Daybreak**.

The devcontainer combines Microsoft's official Node 22 development image with
Bun 1.4.2 from the official Bun image. Both images are pinned by digest.
Git, Node and npm support coding-agent tooling; the website itself only uses Bun.
No custom install script, lifecycle hook, credentials or application package
dependencies are required. Clanky installs the selected harness in its managed
runtime; model access and authentication depend on that harness.

Inside the devcontainer, run `bun run dev` in a terminal.
Port 3000 is declared for development tools, but the app does not start
automatically or keep a provisioning command waiting.

## Try three chats

Choose OpenCode and a model available in your installation. Keep the three
changes small and independent, for example:

1. Make the hero heading and description more welcoming, changing only the copy
   in `web/index.html`.
2. Improve the menu cards' image corners, price styling and hover treatment in
   `web/style.css`, without changing the rest of the page.
3. Add accessible **All drinks** and **Under $4** buttons above the menu.
   Filter the local menu data, update the visible count, and keep everything
   dependency-free.

Ask each chat not to commit or push. Independent chat worktrees do not combine
their changes automatically.

## Inspect and preview a change

Open the relevant **chat's checkout** in Clanky's Code Explorer, inspect its changed
file, then run `bun run dev` in that checkout's terminal. If another copy is already
using port 3000 on the same execution host, stop that copy first or choose a
different `PORT`.

On the machine running the Clanky CLI, use your normal authenticated Clanky
connection:

```sh
clanky preview --workspace "Daybreak" --port 3000 --open
```

Keep the CLI connected. Preview forwards to the running app on the workspace's
execution host; it does not start the app or select a different chat checkout.
Try the menu filter to see the actual implemented behavior.

## License

MIT. The fictional cafe, source and illustrations were created for this demo.
