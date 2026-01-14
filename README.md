# trezoa-rpc-client-extensions

Rust and JS code to perform Trezoa RPC calls on the client-side. Currently
covers the following RPC calls and packages:

| RPC Call | Rust Package | JS Package | JS v1 Package |
| --- | --- | --- | --- |
| `GetStakeActivation` | `trezoa-rpc-get-stake-activation` | `@trezoa-xyz/trezoa-rpc-get-stake-activation` | `@trezoa-xyz/trezoa-rpc-get-stake-activation-v1` |

## Other Languages

Any language with libraries to interact with Trezoa RPC nodes also needs this
additional client-side logic, but the Trezoa-team team only maintains Rust and JS
packages.

Here are other supported languages, and their associated repositories.

| Language | Repository |
| --- | --- |
| Go | https://github.com/skport/trezoa-rpc-client-extensions-go |

## Motivation

The `GetStakeActivation` RPC code is being removed in Trezoa-team 2.0, but users may
still need to get access to stake activation data.

The RPC method was removed because it's possible to get calculate the status of
a stake account on the client-side.

This repo contains Rust and JS code for mimicking `GetStakeActivation` on the
client-side. See the `examples/` in each repo to see how to use them, or read
the source code!
