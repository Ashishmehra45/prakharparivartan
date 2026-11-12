
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'प्रखर परिवर्तन | हिन्दी दैनिक समाचार पत्र',
  description:
    'प्रखर परिवर्तन एक हिन्दी दैनिक समाचार पत्र है, जो मध्य प्रदेश सहित देशभर की ताजा खबरें, राजनीति, सामाजिक मुद्दे, शिक्षा, व्यापार और जनहित से जुड़ी खबरें निष्पक्ष एवं विश्वसनीय तरीके से प्रस्तुत करता है।',
  keywords: [
    'प्रखर परिवर्तन',
    'हिंदी समाचार पत्र',
    'मध्य प्रदेश समाचार',
    'भोपाल समाचार',
    'ताजा हिंदी खबरें',
    'आज की खबरें',
    'हिंदी दैनिक समाचार',
  ],
  authors: [{ name: 'प्रखर परिवर्तन' }],
  creator: 'प्रखर परिवर्तन',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'प्रखर परिवर्तन | हिन्दी दैनिक समाचार पत्र',
    description:
      'मध्य प्रदेश और देशभर की ताजा खबरें, राजनीति, शिक्षा, व्यापार और सामाजिक मुद्दों की विश्वसनीय जानकारी।',
    siteName: 'प्रखर परिवर्तन',
    locale: 'hi_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body className={`${montserrat.variable} bg-[#f7f5f0] text-black font-sans`}>

        {/* NEW MODERN HEADER (MASTHEAD) - Fully Responsive */}
        <header className="max-w-[1200px] mx-auto bg-white px-2 pt-2 border-x-2 border-t-2 border-black">

          {/* Top small strip */}
          <div className="flex justify-between items-center text-[10px] sm:text-sm font-bold pb-1 border-b border-gray-200">
            <span>हिन्दी दैनिक</span>
            <span className="uppercase text-[10px] sm:text-xs font-semibold">
              RNI.NO.MPHIN/26/A4164
            </span>
          </div>

          {/* Main Title, Logo & Email Section */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end relative py-3 gap-4">

            <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8rem] font-extrabold tracking-tighter leading-none flex items-center justify-center md:justify-start w-full md:w-auto">
              <span className="text-[#c60c46] tracking-tighter">प्रखर</span>
              <span className="text-[#f58220] ml-2 sm:ml-3 tracking-tighter">परिवर्तन</span>
            </h1>

            {/* Logo and Email */}
            <div className="flex flex-col items-center md:items-end w-full md:w-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-gray-400 rounded-full flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold text-center mb-1">
                <span>दैनिक</span>
                <span>प्रखर</span>
                <span>परिवर्तन</span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-gray-700 text-center md:text-right">
                Email-shrivastavanilesh2@gmail.com
              </span>
            </div>
          </div>

          {/* Cyan/Blue Info Strip */}
          <div className="bg-[#008ba3] text-white text-[10px] sm:text-sm font-bold px-2 sm:px-3 py-2 flex flex-col sm:flex-row flex-wrap justify-between items-center border-y-2 border-black gap-2 sm:gap-0">

            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1.5 sm:space-x-2">
              <span className="bg-[#ffcc00] text-black px-1 rounded-sm text-[10px] sm:text-xs">वर्ष - 1</span>
              <span className="bg-[#ffcc00] text-black px-1 rounded-sm text-[10px] sm:text-xs">अंक - 145</span>
              <span className="bg-white text-black px-1.5 sm:px-2 py-[2px] text-[10px] sm:text-xs">भोपाल से प्रकाशित</span>
            </div>

            <span className="text-center w-full sm:w-auto mt-1 sm:mt-0">
              भोपाल, गुरुवार 12 नवम्बर 2026
            </span>

            <div className="flex justify-center sm:justify-end items-center space-x-2 mt-1 sm:mt-0 w-full sm:w-auto">
              <span className="bg-[#ffcc00] text-black px-1 rounded-sm text-[10px] sm:text-xs">पृष्ठ - 8</span>
              <span className="bg-[#ffcc00] text-black px-1 rounded-sm text-[10px] sm:text-xs">मूल्य - 2 रुपये</span>
            </div>

          </div>
        </header>

        {/* MAIN CONTENT WRAPPER */}
        <div className="max-w-[1200px] mx-auto bg-white border-x-2 border-b-2 border-black shadow-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
