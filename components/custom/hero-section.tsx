import Image from 'next/image';
import React from 'react'

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#00120A] from-10% via-[#00120A] via-85% to-[#443E35] to-100% relative overflow-hidden">
            <div className="relative z-10 min-h-screen flex flex-col">
                <div className="flex justify-between items-center px-6 py-4">
                    <div className="text-white italic text-xl font-bold tracking-wider nova-square">EHYZ</div>
                    <div className="text-white text-xl font-bold italic nova-square">Leaderboard</div>
                    <button className="relative px-6 py-4 text-white font-bold hover:bg-gray-900 transition-colors cursor-pointer">
                        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-white"></div>
                        <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-white"></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white"></div>
                        CONNECT WALLET
                    </button>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-screen md:h-[calc(100vh-80px)]">
                    <div className="flex flex-col items-center justify-center relative text-center w-[90%] !min-h-[80%]">
                        <h1 className="text-5xl md:text-7xl font-bold londrina-outline text-white mb-6 tracking-wider">
                            EXPLORE NFT COLLECTION
                        </h1>
                        <p className="text-xl text-white max-w-4xl mb-12 nova-square italic leading-tight font-extrabold">
                            A collection of 2525 highly-Fashionable NFTs on the ETH Blockchain. Unique, metaverse-ready, and designed to benefit their holders.
                        </p>
                        <button className="px-12 py-4 border-2 border-white text-white font-mono text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                            START GAME
                        </button>

                        <div className="p-4 absolute top-0 left-0 text-start">
                            <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white"></div>
                            <div className="text-white text-xs">DSP: <span className="text-[#21E786]">1707 X 979</span></div>
                            <div className="text-white text-xs">FPS: <span className="text-[#21E786]">67.90</span></div>
                        </div>
                        <div className="text-white text-xs absolute top-1/2 left-0">{"///:"}<span className="text-[#21E786] text-xs">0.20</span></div>
                        <div className="text-[#21E786] text-xs absolute top-1/2 right-0">0.49<span className="text-white text-xs">:\\\</span> </div>
                        <div className="p-4 absolute bottom-0 left-0 text-start">
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white"></div>
                            <div className="text-white text-xs">EVO: <span className="text-[#21E786]">Alpha</span></div>
                            <div className="text-white text-xs">VERS: <span className="text-[#21E786]">01.08.84</span></div>
                        </div>
                        <div className="p-4 absolute top-0 right-0 text-end">
                            <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white"></div>
                            <div className="text-white font-mono text-xs">10-08-2025 <span className="text-[#21E786]">:DATE</span></div>
                            <div className="text-white font-mono text-xs">02:56:20 <span className="text-[#21E786]">:TIME</span></div>
                        </div>
                        <div className="p-4 absolute bottom-0 right-0 text-end">
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white"></div>
                            <div className="text-white font-mono text-xs">74.906 <span className="text-[#21E786]">:LOG</span></div>
                            <div className="text-white font-mono text-xs">Win11 Chrome/138.0.0.0 <span className="text-[#21E786]">:SYS</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#21E786] animate-pulse"></div>
                <div className="absolute top-3/4 right-3/4 w-1 h-1 bg-[#21E786] animate-ping"></div>
                <div className="absolute bottom-2/3 left-1/4 w-1 h-1 bg-[#21E786] animate-pulse"></div>
                <div className="absolute bottom-2/3 left-3/4 w-2.5 h-2.5 bg-[#21E786] animate-ping"></div>
                <div className="absolute bottom-1/3 left-3/4 w-2 h-2 bg-[#21E786] animate-pulse"></div>
            </div>
        </div>
    )
}

export default HeroSection;