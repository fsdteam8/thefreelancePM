import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-4 text-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="text-black font-bold">
            <Image
              src="/Logo.png"
              alt="logo"
              height={500}
              width={500}
              className="w-[79px] h-[103px]"
            />
          </div>
          <p className="text-sm text-gray-600 max-w-xs">
            Your complete resource hub for freelance project management success.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="http://www.linkedin.com/company/the-freelance-pm-club"
              target="_blank"
              className="text-blue-800"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/thefreelancepm"
              target="_blank"
              className="text-blue-800"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@thefreelancepm"
              target="_blank"
              className="text-blue-800"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@thefreelancepm"
              target="_blank"
              className="text-blue-800"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap gap-24 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/templates">Templates</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/jobBoard">Job Board</Link>
              </li>
              <li></li>
              <li>
                <Link href="/testmonial">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Membership</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Join Now</a>
              </li>
              <li>
                <Link href="/subscription">Pricing</Link>
              </li>
              <li>
                <a href="#">Benefits</a>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="container border-t border-[#004AAD] mt-8 pt-4 text-center text-xs text-gray-500">
        © 2025 The Freelance PM Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
