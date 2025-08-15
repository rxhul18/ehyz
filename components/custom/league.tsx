import Image from 'next/image'
import React from 'react'

const LeagueCard = () => {
  const leagueEntries = [
    {
      id: 1,
      logo: "/league/RealTech.png",
      name: "REALTECH",
      score: 17,
      solValue: null
    },
    {
      id: 2,
      logo: "/league/A308.png",
      name: "PYSCHO AZOV",
      score: 15,
      solValue: "30 SOL"
    },
    {
      id: 3,
      logo: "/league/SSTS.png",
      name: "SSTS",
      score: 8,
      solValue: "25 SOL"
    },
    {
      id: 4,
      logo: "/league/38th.png",
      name: "38TH ARMA",
      score: 11,
      solValue: "25 SOL"
    }
  ]

  return (
    <div className="bg-[#000D18] py-16 px-8 pb-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white nova-square text-center mb-12">
          THE LEAGUE
        </h2>

        <div className="bg-[#00120A] border border-white/30 rounded-lg p-8">
          {leagueEntries.map((entry, index) => (
            <div key={entry.id}>
              <div className="flex items-center justify-between py-6">
                <div className="flex items-center space-x-4">
                  <Image src={entry.logo} alt={entry.name} width={1000} height={1000} className="w-6 object-cover" />
                  <span className="text-white nova-square italic text-lg font-bold">
                    {entry.name}
                  </span>
                </div>

                <div className="flex items-center space-x-10">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-mono text-xl font-bold">
                      {entry.score}
                    </span>
                    <Image src={"/skull.png"} alt="skull" width={1000} height={1000} className="w-6 object-cover" />
                  </div>
                  
                  {entry.solValue && (
                    <span className="text-white font-mono text-lg font-bold">
                      {entry.solValue}
                    </span>
                  )}
                </div>
              </div>

              {index < leagueEntries.length - 1 && (
                <div className="border-t border-2 border-[#FF6348]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeagueCard