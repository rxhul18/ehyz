const CollectionMarquee = () => {
    return (
        <div className="bg-[#000D18] py-6 border-y border-white/40 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                <div className="flex items-center space-x-8 text-white text-xl font-extrabold">
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                </div>
                <div className="flex items-center space-x-8 text-white text-xl font-extrabold">
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                    <span>NEW COLLECTION</span>
                </div>
            </div>
        </div>
    )
}

export default CollectionMarquee