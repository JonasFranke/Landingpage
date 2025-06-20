import { SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import type React from "react";

interface InstagramLink {
  instaLink: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const InstagramLogoComponent: React.FC<InstagramLink> = ({
  instaLink,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      type="button"
      className="mx-2 hover:animate-wiggle"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="hover:scale-150 transition duration-700">
        <Link href={instaLink} target="_blank">
          <SiInstagram
            size={45}
            className="hover:fill-gray-300 transition duration-700 ease-in-out"
            aria-label="Instagram Logo"
          />
        </Link>
      </div>
    </button>
  );
};

export default InstagramLogoComponent;
