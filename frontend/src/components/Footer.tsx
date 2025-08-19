import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2025 UDV Coaching. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
