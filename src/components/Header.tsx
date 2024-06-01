import React from "react";
import Image from "next/image";
import Logo from "../../public/blog-logo.png";

const Header = () => {
  return (
    <header className="flex justify-center py-4">
      <Image
        src={Logo}
        alt="Logo of this website"
        width={250}
        height={250}
      ></Image>
    </header>
  );
};

export default Header;
