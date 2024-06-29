import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Logo from "../../assets/javelin.png";
import Image from "next/image";

export default function LandingHeader() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                src={Logo.src}
                className="rounded-full w-12 h-12"
                alt="Logo"
                width={32} // Specify the width of the image
                height={32}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-gray-300 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm rounded-lg text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
