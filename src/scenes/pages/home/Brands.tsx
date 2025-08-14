import Marquee from "react-fast-marquee";
import Image from "next/image";
import { brandsData } from "@/lib/contants";

export default function Brands() {
  return (
    <Marquee
      className="bg-brands-gray"
      pauseOnHover={true}
      speed={80}
      gradient={false}
    >
      {brandsData.map((x) => (
        <div
          key={x.id}
          style={{ width: 130, height: 130 }}
          className="mx-8 flex items-center justify-center overflow-hidden"
        >
          <Image
            src={x.logo}
            alt={x.brand}
            width={130}
            height={130}
            className="object-cover"
            loading="eager"
          />
        </div>
      ))}
    </Marquee>
  );
}
