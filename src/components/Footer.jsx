function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">FlashFit</h2>
          <p className="text-gray-400">30-minute fashion delivery service in Hyderabad.</p>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col gap-2 transition duration-300">
          <a href="#features" className="hover:text-[#f3423a]">Features</a>
          <a href="#how-it-works" className="hover:text-[#f3423a]">How it Works</a>
          <a href="/survey" className="hover:text-[#f3423a]">Survey</a>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/flashfit.in/?igsh=ZHprd3c3Zmxucndj#" target="_blank" rel="noopener noreferrer" className="hover:text-[#f3423a] transition duration-300">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2025 FlashFit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;