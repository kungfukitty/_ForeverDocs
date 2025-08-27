import React, { useEffect, useState } from 'react'
import { cfg } from '../config.js'

export default function DemoCrest() {
  const [pledged, setPledged] = useState(() => Number(localStorage.getItem('fd_pledged')||'12'))
  const [minted, setMinted] = useState(() => Number(localStorage.getItem('fd_minted')||'3'))

  // simple demo increment buttons (remove later)
  const inc = (k,setter)=>()=>{ const v = (Number(localStorage.getItem(k)||'0')+1); localStorage.setItem(k,String(v)); setter(v) }

  // paste your testnet details when ready
  const crest = {
    chain: 'Base Sepolia (demo)',
    contract: '0xYourTestnetContractHere',
    sampleTx: '0xSampleTxHashHere'
  }

  return (
    <section className="section py-12">
      <h1 className="text-3xl font-extrabold">Digital Family Crest — Testnet Demo</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card p-6">
          <div className="font-semibold">Testnet Reference</div>
          <div className="text-sm text-muted mt-2">Chain: {crest.chain}</div>
          <div className="text-sm text-muted break-all">Contract: {crest.contract}</div>
          <div className="text-sm text-muted break-all">Sample Tx: {crest.sampleTx}</div>
        </div>

        <div className="card p-6">
          <div className="font-semibold mb-2">Impact Counters (demo)</div>
          <div className="flex items-center justify-between py-2">
            <span>Families pledged</span>
            <div className="flex items-center gap-3">
              <span className="font-bold">{pledged}</span>
              <button className="btn btn-secondary btn-sm" onClick={inc('fd_pledged', setPledged)}>+1</button>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Crests minted (testnet)</span>
            <div className="flex items-center gap-3">
              <span className="font-bold">{minted}</span>
              <button className="btn btn-secondary btn-sm" onClick={inc('fd_minted', setMinted)}>+1</button>
            </div>
          </div>
          <div className="text-xs text-muted mt-3">Counters are demo-only; real counts will come from our onchain indexer.</div>
        </div>
      </div>
    </section>
  )
}
