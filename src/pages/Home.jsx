export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="py-16 section">
        <h1 className="text-4xl font-bold">ForeverDocs</h1>
        <p className="mt-4 text-muted">
          Protecting Black family legacies with secure, community-rooted digital vaults.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/waitlist" className="btn btn-primary">Join the Waitlist</a>
          <a href="/impact" className="btn btn-outline">Learn More</a>
        </div>
      </section>

      <section className="py-12 section" id="problem">
        <h2 className="text-2xl font-semibold">The Problem: The Paper Cut That Bleeds for Generations</h2>
        <p className="mt-3 text-muted">
          In the American South, there are over 1.6 million acres of land known as heirs' property. It’s land owned by Black families, often passed down since Reconstruction, but without a clear, legal title. When the owner dies, if just one of the dozens of descendants can't be found or is pressured to sell, the entire property can be forcibly sold at a fraction of its value.
        </p>
        <p className="mt-3 text-muted">
          This isn't a rare loophole; it's a primary driver of involuntary Black land loss, costing families billions in generational wealth. The root cause? A missing will. A misplaced deed. A system that preys on disorganized paper records. This is how wealth is systematically erased—not with a bang, but with a lost document.
        </p>
      </section>

      <section className="py-12 section" id="solution">
        <h2 className="text-2xl font-semibold">The Solution: A Digital Safe Deposit Box, Built on Community Trust</h2>
        <p className="mt-3 text-muted">
          ForeverDocs is a free digital vault designed to stop this bleeding. We give families a simple, secure place to store their most important documents—the will, the deed, the insurance policy.
        </p>
        <p className="mt-3 text-muted">
          But technology alone is not enough. Trust is everything. That's why our distribution isn't an app store link; it’s a QR code in the hands of a pastor, a barber, or a funeral home director. We go where our community already is, providing a tool that’s as easy to use as taking a picture. You can designate your heirs with a tap, ensuring the right people get the right information at the right time.
        </p>
        <p className="mt-3 text-muted">
          This isn't just about storing files; it's about creating a clear, simple plan to protect a family's legacy.
        </p>
      </section>

      <section className="py-12 section" id="blockchain">
        <h2 className="text-2xl font-semibold">Why Blockchain? The Unbreakable Promise.</h2>
        <p className="mt-3 text-muted">
          So, how do we make this promise permanent and trustworthy? How do we build a system that our community can own, and that no corporation or entity can ever take away? That is the only reason we use the blockchain.
        </p>
      </section>

      <section className="py-12 section">
        <h2 className="text-2xl font-semibold">The Digital Family Crest: A Permanent, Public Proof.</h2>
        <p className="mt-3 text-muted">
          When a family secures their vault, they can mint a Digital Family Crest on the blockchain. Think of it as a digital flag planted on a specific date, creating a public, tamper-proof timestamp. It says to the world, "On this day, the Carter family secured their legacy." It contains no private data, but it serves as an unforgettable, un-erasable proof of preparedness that can be a powerful tool against any future claim or dispute.
        </p>
      </section>

      <section className="py-12 section">
        <h2 className="text-2xl font-semibold">Transparent Funding: An "Each One, Fund One" Model.</h2>
        <p className="mt-3 text-muted">
          Our nonprofit runs on a revolutionary funding model. A sponsor—be it a foundation, a church, or a Web3 protocol—doesn't just donate to us. They can publicly "Sponsor 1,000 Family Crests in Atlanta." Because it happens on a public blockchain, everyone can see the funds were used to help 1,000 specific families get protected. It’s radical transparency. It keeps us accountable to the community we serve, not just to our donors.
        </p>
      </section>
    </main>
  )
}
