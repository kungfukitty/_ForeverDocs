import React, { useEffect, useState } from 'react'

export default function DemoCrest(){
  const [block, setBlock] = useState(null)
  const [error, setError] = useState('')

  useEffect(()=>{
    (async () => {
      try {
        const response = await fetch('https://rpc.sepolia.org', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 })
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        setBlock(parseInt(data.result, 16));
      } catch (e) {
        setError('Failed to fetch Sepolia block number');
        console.error(e);
      }
    })()
  }, [])

  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">Demo Crest (Sepolia)</h1>
      <div className="card p-6 space-y-3">
        <p>Live testnet block: <b>{block ?? '…'}</b></p>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <p className="text-sm text-muted">This verifies Web3 connectivity for future on‑chain proofs.</p>
      </div>
    </article>
  )
}
