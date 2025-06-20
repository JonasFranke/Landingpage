import { SiSpotify } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import type React from "react";

interface SpotifyLink {
  spotifyLink: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SpotifyLogoComponent: React.FC<SpotifyLink> = ({
  spotifyLink,
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
        <Link href={spotifyLink} target="_blank">
          <SiSpotify
            size={45}
            className="hover:fill-gray-300 transition duration-700 ease-in-out"
            aria-label="Spotify Logo"
          />
        </Link>
      </div>
    </button>
  );
};

export default SpotifyLogoComponent;
