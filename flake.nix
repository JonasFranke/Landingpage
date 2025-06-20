{
  description = "Bun dev env";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    biomepkg.url = "github:isabelroses/nixpkgs/biome-2";
  };

  outputs = { self, nixpkgs, biomepkg, ... }@inputs: 
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
      biome = biomepkg.legacyPackages.${system};
    in
    {

      devShells.x86_64-linux.default = pkgs.mkShell {
          nativeBuildInputs = [
            pkgs.bun
            pkgs.nodejs_24
            biome.biome
            pkgs.ffmpeg
          ];

          shellHook = ''
            echo "Bun $(bun --version) and Biome $(biome --version) are ready!" &&
            export BIOME_BINARY=$(which biome)
          '';
        };

    };
}
