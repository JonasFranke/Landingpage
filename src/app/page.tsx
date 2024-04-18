"use client";
import GithubDetailsComponent from "@/app/assets/GithubDetailsComponent";
import GithubLogoComponent from "@/app/assets/GithubLogoComponent";
import InstagramLogoComponent from "@/app/assets/InstagramLogoComponent";
import SpotifyLogoComponent from "@/app/assets/SpotifyLogoComponent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveringDetails, setHoveringDetails] = useState<boolean>(false);

  return (
    <>
      <SpeedInsights />
      <Analytics />
      <main className="overflow-hidden">
        <p className="text-green-700 text-center font-extrabold text-4xl mt-32 hover:animate-zoomInOut">
          Jonas Franke
        </p>
        <div className="flex justify-center items-center relative mt-32 p-5">
          <GithubLogoComponent
            githubLink="https://github.com/jonasfranke"
            onMouseEnter={() => {
              setHoveredLogo("Github");
              setFadeOut(false);
              setHovered(true);
            }}
            onMouseLeave={() => {
              if (!hoveringDetails) {
                setFadeOut(true);
              }

              setTimeout(() => {
                if (!hovered) {
                  setHoveredLogo(null);
                  setHovered(false);
                }
              }, 500);
            }}
          />
          <InstagramLogoComponent
            instaLink="https://instagram.com/jns.frnk"
            onMouseEnter={() => {
              setHoveredLogo("Instagram");
              setFadeOut(false);
              setHovered(true);
            }}
            onMouseLeave={() => {
              if (!hoveringDetails) {
                setFadeOut(true);
              }
              setTimeout(() => {
                if (!hovered) {
                  setHoveredLogo(null);
                  setHovered(false);
                }
              }, 500);
            }}
          />
          <SpotifyLogoComponent
            spotifyLink="https://open.spotify.com/user/313z6mjtm5ngodivuxxaza54rzfu?si=f00d403b755a4046"
            onMouseEnter={() => {
              setHoveredLogo("Spotify");
              setFadeOut(false);
              setHovered(true);
            }}
            onMouseLeave={() => {
              if (!hoveringDetails) {
                setFadeOut(true);
              }
              setTimeout(() => {
                if (!hovered) {
                  setHoveredLogo(null);
                  setHovered(false);
                }
              }, 500);
            }}
          />
        </div>
        <div className="flex justify-center">
          <p className="text-gray-700 font-mono hover:text-gray-600 transition-colors duration-300">
            Hover over a logo
          </p>
        </div>
        <div
          className={`transition-all duration-500 delay-200 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="flex justify-center text-white">
            {hoveredLogo ? hoveredLogo : ""}
          </p>
          <div className="flex justify-center">
            {hoveredLogo === "Github" ? (
              <GithubDetailsComponent
                onMouseEnter={() => {
                  setFadeOut(false);
                  setHoveringDetails(true);
                }}
                onMouseLeave={() => {
                  setFadeOut(true);
                  setHoveringDetails(false);
                  setTimeout(() => {
                    setHoveredLogo(null);
                  }, 500);
                }}
              />
            ) : null}
          </div>
        </div>
      </main>
      <footer className="bg-gray-950 text-white fixed bottom-0 p-6 sm:p-8 left-0 right-0 flex justify-center">
        <p className="font-mono text-green-500 sm:text-xs">
          ©2023 Jonas Franke
        </p>
        <Link href="/imprint" className="fixed right-3">
          <button className="bg-blue-600 rounded p-1.5" type="button">
            Impressum
          </button>
        </Link>
      </footer>
    </>
  );
}
