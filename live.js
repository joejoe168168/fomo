// Live adapter placeholder: GeckoTerminal trending pools for BSC, Solana and Robinhood.
const networkMap={bsc:'bsc',solana:'solana',robinhood:'robinhood'};
async function fetchTrending(chain){const r=await fetch('https://api.geckoterminal.com/api/v2/networks/'+networkMap[chain]+'/trending_pools?include=base_token');return r.json()}
window.fomoData={fetchTrending,networkMap};
