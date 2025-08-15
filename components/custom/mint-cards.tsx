import Image from 'next/image'
import React from 'react'

const MintCardGrid = () => {
    const cards = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1,
        price: Math.floor(Math.random() * 100) + 1
    }))

    return (
        <div className="bg-[#000D18] px-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16">
                {cards.map((card) => (
                    <div key={card.id} className="group relative bg-[#000D18] px-4 py-6 overflow-hidden shadow-lg transition-all duration-100 hover:border-x border-white/30 border-b">
                        <Image src={"/NftCard.png"} alt="NftCard" width={1000} height={1000} className="w-full  object-cover" />
                        <div className="absolute -bottom-4 left-0 w-full right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                            <button className="bg-[#FF6348] hover:[#FF6348] w-full text-white font-bold px-6 py-3 transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 cursor-pointer flex items-center justify-between">
                                <div>
                                    BUY MINT
                                </div>
                                <div>
                                    {card.price} SOl
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MintCardGrid