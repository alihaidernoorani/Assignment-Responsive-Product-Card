import Image from "next/image";

export default function CardLayout() {
    return (
        <div className="flex flex-col justify-center items-center md:flex-row flex-wrap gap-x-4 gap-y-6 m-6">
            <Card src="/flower-image-1.png" price={800} />
            <Card src="/flower-image-2.png" price={850} />
            <Card src="/flower-image-3.png" price={900} />
        </div>
    );
}

interface CardAttributes {
    src: string;
    price: number;
}

export function Card({ src, price }: CardAttributes) {
    return (
        <div className="bg-white text-center w-full md:w-1/3 lg:w-1/4 rounded-lg transition-transform transform hover:scale-105">
            <div>
                <Image 
                    src={src} 
                    alt="Card Image" 
                    width={350}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <p className="font-bold text-lg sm:text-xl lg:text-2xl py-3">Rs {price}</p>
            <p className="text-sm sm:text-base lg:text-lg py-3 mx-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <button className="bg-black text-white m-4 px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-md text-sm sm:text-base lg:text-lg">
                Buy Now
            </button>
        </div>
    );
}
