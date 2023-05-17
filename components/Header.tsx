import Link from "next/link";
import { GiCat } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex flex-1 items-center">
        <Link href="/">
          <GiCat size={36} color="#222" />
        </Link>
        <div className="hidden ml-2 text-2xl sm:block font-medium">
          RongqingBlog
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden sm:block">
          <Link
            className="pr-2 sm:pr-6 text-gray-900 no-underline hover:text-purple-900"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="pr-2 text-gray-900 sm:pr-6 no-underline hover:text-purple-900"
            href="/tags"
          >
            Tags
          </Link>
          <Link
            className="pr-2 text-gray-900 sm:pr-6 no-underline hover:text-purple-900"
            href="/about"
          >
            About
          </Link>
        </div>
        <AiOutlineMenu size={28} className="sm:hidden" />
      </div>
    </div>
  );
};
