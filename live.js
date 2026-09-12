// Live adapter placeholder: GeckoTerminal trending pools for BSC, Solana and Robinhood.
const networkMap={bsc:'bsc',solana:'solana',robinhood:'robinhood'};
async function fetchTrending(chain){const r=await fetch('https://api.geckoterminal.com/api/v2/networks/'+networkMap[chain]+'/trending_pools?include=base_token');return r.json()}
async function security(chain,address){if(!address)return {available:false,reason:'No contract address'};try{return await fetch('/api/security?chain='+chain+'&address='+encodeURIComponent(address)).then(r=>r.json())}catch(e){return {available:false,reason:e.message}}}
window.fomoData={fetchTrending,security,networkMap};
