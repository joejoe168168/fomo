# Intelligence design

The dashboard follows patterns found in GMGN, BullX, DexScreener, Cielo, GoPlus, and open-source Solana rug checkers. A useful memecoin screen needs four separate answers: can I exit (liquidity and turnover), who owns supply (top-holder and linked-wallet concentration), who is buying (wallet quality and net flow), and can the contract restrict me (mint, freeze, tax, blacklist and proxy permissions).

The score in `src/intelligence.js` is deliberately explainable. It is a triage signal, not a prediction or investment recommendation. Missing holder, authority, or security data lowers confidence and must be rendered as **unknown**, never as safe.

Robinhood Chain is EVM-compatible (mainnet chain ID 4663, ETH gas). Its public RPC supports chain reads; market and holder indexing still depends on an indexed provider or Blockscout/Alchemy Data API. The UI should show Robinhood as “coverage pending” when no indexed pool exists.

Recommended live providers: GeckoTerminal/DexScreener for pools and OHLCV, GoPlus for EVM token security, Helius or Birdeye for Solana mint/freeze and transaction streams, and Blockscout or Alchemy for Robinhood. Smart-wallet labels should be earned from realized PnL, win rate, sample size, and non-bot behavior rather than follower count.
