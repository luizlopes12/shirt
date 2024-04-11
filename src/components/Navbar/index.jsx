import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
  return (
    <nav className="bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/img/brand-logo.svg" alt="Brand logo" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
