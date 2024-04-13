import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white w-full bg-gray-200  shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="w-24 h-12" src="/img/brand-logo.svg" alt="Brand logo" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
