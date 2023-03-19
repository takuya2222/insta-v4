import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer w-24 h-24 relative hidden lg:inline-grid">
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            layout="fill"
            className="object-contain"
            alt="logo"
          />
        </div>
        <div className="cursor-pointer w-10 h-24 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            layout="fill"
            className="object-contain"
            alt="logo"
          />
        </div>
        <h1 className="">Right sides</h1>
      </div>

      {/* Middle */}

      {/* Light */}
    </div>
  );
}
