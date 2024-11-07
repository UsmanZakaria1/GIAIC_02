import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full h-[91px] bg-[#252b42] flex items-center justify-between px-[136px]">
      {/* Brand Name */}
      <div className="flex items-center">
        <h3 className="text-white text-2xl font-bold">BrandName</h3>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link href="/" legacyBehavior>
          <a className="text-white text-lg hover:text-gray-400">Home</a>
        </Link>
        <Link href="/product" legacyBehavior>
          <a className="text-white text-lg hover:text-gray-400">Product</a>
        </Link>
        <Link href="/pricing" legacyBehavior>
          <a className="text-white text-lg hover:text-gray-400">Pricing</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-white text-lg hover:text-gray-400">Contact</a>
        </Link>
      </div>

      {/* Login and Join Us Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/login" legacyBehavior>
          <a className="text-white text-lg hover:text-gray-400">Login</a>
        </Link>
        <Link href="/join" legacyBehavior>
          <a className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">JOIN US</a>
        </Link>
      </div>
    </nav>
  );
}
