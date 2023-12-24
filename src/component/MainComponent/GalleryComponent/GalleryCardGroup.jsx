import React, { useEffect, useState } from 'react';


const getPatternSize = (index) => {
    const patterns = [
        ['col-span-1', 'col-span-1', 'col-span-1'],
        ['col-span-1', 'col-span-2'],
        ['col-span-2', 'col-span-1'],
        ['col-span-3']
    ];

    const patternIndex = index % patterns.length;
    return patterns[patternIndex];
};

const GalleryCardGroup = ({ items, searchQuery }) => {
    const [imageSizes, setImageSizes] = useState([]);

    useEffect(() => {
        let sizes = [];
        items.forEach((_, index) => {
            const pattern = getPatternSize(index);
            sizes.push(...pattern);
        });
        setImageSizes(sizes);
        console.log(sizes)
    }, [items]);

    const filteredImages = searchQuery
        ? items.filter((image) => image.toLowerCase().includes(searchQuery.toLowerCase()))
        : items;

    return (
        <>
            <div className=" w-full grid grid-cols-3 gap-2 overflow-y-auto h-[40vh] lg:h-[70vh]">
                {filteredImages.map((item, index) => (
                    <div key={index} className={`${imageSizes[index]} relative group`}>
                        <img
                            src={item.image}
                            alt={`Culture Image ${index}`}
                            className="w-full h-[89px] lg:h-[186px] rounded-lg object-cover"
                        />
                        <div
                            className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                            <div className="font-urbanist text-white font-semibold text-lg">{item.name}</div>
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg opacity-0 transition-opacity group-hover:opacity-70"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GalleryCardGroup;
