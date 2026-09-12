# Fomo Terminal

Windows desktop prototype for researching hot memecoins across BSC and Solana, with Robinhood Chain planned as an adapter.

## Research basis

- DEX Screener provides token profiles and pair endpoints with a public rate limit.
- GeckoTerminal provides trending pools and OHLCV endpoints, cached roughly one minute.
- Robinhood Chain publishes public mainnet RPC documentation; market indexing/liquidity coverage will be validated before enabling that chain.

## Run

```bash
npm install
npm start
```

The current UI uses representative mock data. `live.js` exposes a keyless GeckoTerminal adapter for BSC, Solana, and Robinhood Chain trending pools. Robinhood mainnet is chain ID 4663, uses ETH gas, and documents `https://rpc.mainnet.chain.robinhood.com` as its public RPC.

Planned intelligence modules include GoPlus token security (honeypot, mint, blacklist, proxy, taxes), concentration and LP-lock analysis, Solana mint/freeze authority checks, and smart-wallet tracking from indexed swap streams. These signals are research aids, never an investability guarantee.

`npm start` opens Electron when a graphical display is available. In headless Linux it starts a browser preview at http://127.0.0.1:4173, avoiding Electron's SUID sandbox failure. On Windows it launches the desktop shell.
