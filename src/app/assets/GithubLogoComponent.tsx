import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import type React from "react";

interface GithubLink {
  githubLink: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const GithubLogoComponent: React.FC<GithubLink> = ({
  githubLink,
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
        <Link href={githubLink} target="_blank">
          <SiGithub
            size={45}
            className="hover:fill-gray-300 transition duration-700 ease-in-out"
            aria-label="GitHub Logo"
          />
        </Link>
      </div>
    </button>
  );
};

export default GithubLogoComponent;
