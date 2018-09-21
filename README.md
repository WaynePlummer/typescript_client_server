# TS_client_server

## Introduction

If, for any reason, you ever want to do some client/server prototyping using TypeScript on both the client and the server (using Chrome and nodeJS), this Visual Studio Code (VSC) project would be a reasonable place to start.

With the `Debugger for Chrome` extension loaded in VSC, you can set breakpoints in the TypeScript code of both client and server and have them work AOK.

The whole debug experience is within the VSC environment... note how the console logging all appears appropriately interleaved in the VSC Debug Console whether it comes from client or server.

## Source Tree

### server

The server-side .TS files go in here with their own `tsconfig.json`.

### views

The client-side web pages go in here.

### client

The client-side .TS files go in here with their own `tsconfig.json`.
