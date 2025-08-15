import React from 'react'

const LeagueCard = () => {
  const leagueEntries = [
    {
      id: 1,
      logo: "🛡️",
      name: "REALTECH",
      score: 17,
      solValue: null
    },
    {
      id: 2,
      logo: "⚡",
      name: "PYSCHO AZOV",
      score: 15,
      solValue: "30 SOL"
    },
    {
      id: 3,
      logo: "🔱",
      name: "SSTS",
      score: 8,
      solValue: "25 SOL"
    },
    {
      id: 4,
      logo: "🐝",
      name: "38TH ARMA",
      score: 11,
      solValue: "25 SOL"
    }
  ]

  return (
    <div className="bg-[#000D18] py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 font-mono tracking-wider">
          THE LEAGUE
        </h2>

        <div className="bg-[#000D18] border border-white/30 rounded-lg p-8">
          {leagueEntries.map((entry, index) => (
            <div key={entry.id}>
              <div className="flex items-center justify-between py-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{entry.logo}</div>
                  <span className="text-white font-mono text-lg font-bold tracking-wider">
                    {entry.name}
                  </span>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-mono text-xl font-bold">
                      {entry.score}
                    </span>
                    <span className="text-white text-lg">💀</span>
                  </div>
                  
                  {entry.solValue && (
                    <span className="text-white font-mono text-lg font-bold">
                      {entry.solValue}
                    </span>
                  )}
                </div>
              </div>

              {index < leagueEntries.length - 1 && (
                <div className="border-t border-orange-500/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeagueCard