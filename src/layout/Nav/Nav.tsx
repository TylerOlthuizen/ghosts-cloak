import { FaDiscord } from "react-icons/fa";
import { GiToken } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";

export const Nav = () => {
  return (
    <nav className="text-white p-4">
      <div className="container">
        <ul className="flex space-x-4 justify-end gap-4">
          <li>
            <a
              href="https://discord.gg/ff9p6vmV"
              className="hover:opacity-50 flex items-center gap-2"
              target="_blank"
            >
              <FaDiscord /> Discord
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Ghosts_Cloak"
              className="hover:opacity-50 flex items-center gap-2"
              target="_blank"
            >
              <FaXTwitter /> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://birdeye.so/token/G8svWrsGepijxVWsnEGtdxikqYkUUEByV1zFJrySsj6S?chain=solana"
              className="hover:opacity-50 flex items-center gap-2"
              target="_blank"
            >
              <GiToken /> $SPOOK
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
