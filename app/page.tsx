export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Team Leads &amp; HR Managers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Reduce Meeting Fatigue with<br />
          <span className="text-[#58a6ff]">Smart Scheduling</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze your team&apos;s calendar patterns and get AI-powered recommendations for optimal meeting lengths, recovery breaks, and protected focus time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start for $11/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">40%</div>
            <div className="text-sm text-[#8b949e] mt-1">Less meeting time</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">2hrs</div>
            <div className="text-sm text-[#8b949e] mt-1">More focus daily</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">3min</div>
            <div className="text-sm text-[#8b949e] mt-1">Setup time</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Google & Outlook calendar sync",
              "AI meeting pattern analysis",
              "No-meeting block suggestions",
              "Team fatigue score dashboard",
              "Weekly scheduling reports",
              "Up to 25 team members"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the calendar integration work?",
              a: "Connect your Google or Outlook calendar via OAuth. We read event metadata only — no meeting content or attendee details are stored."
            },
            {
              q: "Can I use this for my whole team?",
              a: "Yes. The Pro plan supports up to 25 team members. Each member connects their own calendar and you get a unified fatigue dashboard."
            },
            {
              q: "What if I want to cancel?",
              a: "Cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} MeetingOptimizer. All rights reserved.
      </footer>
    </main>
  );
}
