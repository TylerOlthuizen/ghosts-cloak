export const Hero = () => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center p-12 text-center">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
          Ghosts Cloak
        </h1>
        <p className="mb-8">
          Discover and collect exclusive Ghosts Cloak NFTs on the Solana
          blockchain.
        </p>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://magiceden.io/marketplace/ghosts_cloak"
            className="bg-purple-600 text-white hover:bg-purple-800 font-bold py-2 px-4 rounded cta"
            target="_blank"
          >
            Buy on Magic Eden
          </a>
          <a
            href="https://www.tensor.trade/trade/ghosts_cloak"
            className="bg-blue-600 text-white hover:bg-blue-800 font-bold py-2 px-4 rounded cta"
            target="_blank"
          >
            Buy on Tensor
          </a>
        </div>
      </div>
    </div>
  );
};
