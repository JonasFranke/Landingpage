{
  description = "Bun dev env";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs, ... }@inputs: 
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {

      devShells.x86_64-linux.default = pkgs.mkShell {
          nativeBuildInputs = [
            pkgs.bun
            pkgs.nodejs_24
            pkgs.biome
          ];

          shellHook = ''
            echo "Bun $(bun --version) and Biome $(biome --version) are ready!" &&
            export BIOME_BINARY=$(which biome)
          '';
        };

    };
}
