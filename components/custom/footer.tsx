import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-[#000D18]">
            <div className="border-t border-white/30"></div>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="flex items-center">
                        <span className="text-green-400 text-lg">/</span>
                        <span className="text-white text-base font-bold nova-square italic tracking-tighter">
                            © WEBTHREE 2025
                        </span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-green-400 text-lg">/</span>
                        <span className="text-white text-base font-bold nova-square italic tracking-tighter">
                            ALL RIGHTS RESERVED
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
