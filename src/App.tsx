/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Globe, 
  MousePointer2, 
  Star, 
  Phone, 
  Mail, 
  Search, 
  User, 
  ThumbsUp, 
  Award,
  Zap,
  Flame,
  AlertTriangle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import DemoOverlayBanner from './DemoOverlayBanner';

export default function App() {
  const [counter, setCounter] = useState(148293);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="horror-site" className="min-h-screen bg-black text-white font-serif">
      {/* HEADER MARQUEE */}
      <div className="bg-ugly-yellow text-black border-4 border-ugly-red w-full overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block py-1 font-mono font-bold text-2xl uppercase">
          !!! WELCOME TO THE FUTURE OF THE INTERNET !!! BEST WEB DESIGN AGENCY SINCE 1998 !!! CALL NOW FOR 50% OFF !!! NO REFUNDS !!!
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap">
        {/* LEFT SIDEBAR - CLUTTERED LINKS */}
        <aside className="w-full lg:w-48 bg-ugly-blue border-r-8 border-ugly-pink flex flex-col">
          <div className="bg-white text-black p-0 border-b-4 border-black font-bebas text-3xl italic">NAVIGATION</div>
          {[
            'HOME', 'SERVICES', 'PORTFOLIO', 'ABOUT US', 'TESTIMONIALS', 'CONTACT', 
            'GUESTBOOK', 'SITE MAP', 'AWARDS', 'JOBS', 'PRIVACY (NEW)', 'COOKIES',
            'TERMS', 'AFFILIATES', 'LOGIN', 'SIGNUP', 'FAQ', 'SUPPORT', 'DONATE',
            'BLOG', 'NEWS', 'PRESS', 'STORE', 'LINKS', 'WEBMAIL', 'ADMIN'
          ].map((link, i) => (
            <a 
              key={link} 
              href="#" 
              className={`block border-b border-white hover:bg-black hover:text-ugly-green text-xs p-0 leading-none ${i % 2 === 0 ? 'bg-ugly-pink' : 'bg-ugly-blue'} font-comic`}
            >
              {link}
            </a>
          ))}
          <div className="mt-auto bg-ugly-green p-0 text-black font-bold text-center border-t-8 border-black">
            <p className="text-[10px]">VISITOR COUNT:</p>
            <div className="bg-black text-ugly-yellow font-mono text-xl tracking-widest border-2 border-white">
              {counter.toString().padStart(8, '0')}
            </div>
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJtY3QyamRxeGZxeGZxeGZxeGZxeGZxeGZxeGZxeGZxeGZxeGZxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWRfbG9nbyZjdD1n/M90mJvC88v8hG/giphy.gif" 
              alt="Under construction" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 bg-white text-black overflow-hidden relative">
          {/* HERO SECTION - MESSY */}
          <div className="bg-ugly-pink relative h-[300px] border-b-10 border-ugly-blue">
            <div className="absolute inset-0 opacity-30 mix-blend-multiply flex flex-wrap overflow-hidden">
               {Array.from({length: 20}).map((_, i) => (
                 <Globe key={i} size={80} className="text-ugly-yellow rotate-45" />
               ))}
            </div>
            <div className="relative z-10 p-0 text-center">
              <h1 className="font-monoton text-6xl text-ugly-blue bg-ugly-yellow inline-block rotate-[-2deg] border-4 border-black">
                WORLD CLASS DESIGNers
              </h1>
              <p className="font-playfair text-4xl text-ugly-red bg-white inline-block mt-[-20px] ml-10 border-2 border-dashed border-black px-4">
                We Build The WWW.
              </p>
              <div className="flex justify-center mt-[-10px]">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="bg-ugly-green p-0 border-8 border-double border-white shadow-[10px_10px_0px_rgba(0,0,0,1)]"
                >
                  <Award size={60} className="text-ugly-red" />
                  <p className="font-bebas text-black leading-none">NO.1 AGENCY</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* SERVICES - GRID OF DOOM */}
          <section className="messy-grid bg-ugly-yellow">
            <div className="bg-ugly-blue text-white font-mono p-0 border-4 border-white rotate-1">
              <h2 className="text-4xl underline">OUR SERVICES</h2>
              <ul className="text-xs list-disc ml-4">
                <li>HTML 4.01</li>
                <li>CSS (STYLISH)</li>
                <li>JAVA SCRIPTS</li>
                <li>FLASH (PRO)</li>
                <li>MARQUEE TECH</li>
                <li>GIF ANIMATION</li>
                <li>BMP SUPPORT</li>
                <li>PAGERS</li>
                <li>AOL OPTIMIZATION</li>
              </ul>
            </div>
            
            <div className="bg-white col-span-2 border-8 border-ugly-pink">
              <h3 className="blink font-comic text-5xl text-ugly-red text-center">!!! HOT DEAL !!!</h3>
              <p className="text-[12px] p-0 font-serif leading-none">
                Get a website today for only $9999. We use the latest technology including tables, framesets, and transparent spacer.gifs to ensure your pixel perfect layout matches your legacy Netscape Navigator browsers. Don't be left behind in the information superhighway!
              </p>
              <button className="w-full bg-ugly-green text-black font-bebas text-4xl hover:bg-ugly-pink hover:text-white cursor-pointer active:translate-y-2 border-b-8 border-black">
                ORDER NOW ORDER NOW ORDER NOW
              </button>
            </div>

            <div className="bg-black text-ugly-yellow p-0 overflow-hidden">
               <img 
                 src="https://picsum.photos/seed/tech/200/200" 
                 alt="Tech" 
                 className="w-full grayscale brightness-200 contrast-200"
                 referrerPolicy="no-referrer"
               />
               <p className="text-[8px] italic">FIG 1. THE INTERNET AT WORK (EST. 2005)</p>
            </div>
          </section>

          {/* MORE CLUTTER */}
          <div className="flex flex-wrap p-0">
             <div className="w-1/2 bg-ugly-pink text-white font-comic border-4 border-dotted border-black">
                <p className="text-xl">MEET THE CEO</p>
                <img 
                  src="https://picsum.photos/seed/ceo/100/100" 
                  alt="CEO" 
                  className="rounded-full border-4 border-ugly-green float-left mr-0"
                  referrerPolicy="no-referrer"
                />
                <p className="text-[10px]">
                  "I love computers and the web. We make websites that load fast on 56k modems if you disable images. Call me maybe."
                </p>
                <div className="clear-both"></div>
             </div>
             <div className="w-1/2 bg-ugly-blue text-white font-playfair p-0 border-inset border-4 border-white">
                <p className="text-2xl italic">REVIEWS</p>
                <div className="bg-white text-black text-[9px] mb-0 border border-black">
                   <Star size={10} className="inline text-ugly-yellow fill-current" />
                   <Star size={10} className="inline text-ugly-yellow fill-current" />
                   <Star size={10} className="inline text-ugly-yellow fill-current" />
                   <p>"The website they made for my cat grooming business is so loud and bright, I love it!" - Mrs. Higgins</p>
                </div>
                <div className="bg-ugly-green text-black text-[9px] mb-0 border border-black">
                   <ThumbsUp size={10} className="inline" />
                   <p>"I can't find anything on the site, which makes it a fun game for my kids." - Dave</p>
                </div>
             </div>
          </div>

          {/* BOTTOM SEARCH BAR */}
          <div className="bg-ugly-red p-0 border-y-4 border-black flex">
             <div className="bg-white p-0 px-2 font-bold font-mono">SEARCH:</div>
             <input type="text" className="flex-1 bg-white border-2 border-ugly-blue" placeholder="type internet keywords here..." />
             <button className="bg-ugly-yellow p-0 px-4 hover:bg-black hover:text-white">GO!</button>
          </div>

          {/* MASSIVE PORTFOLIO DUMP */}
          <div className="bg-white">
             <div className="bg-black text-white p-0 flex justify-between">
                <span className="font-bebas text-4xl">RECENT WORK (UNFILTERED)</span>
                <span className="font-mono text-xs self-center">Showing 1 of 9999 pages</span>
             </div>
             <div className="flex flex-wrap">
                {Array.from({length: 12}).map((_, i) => (
                  <div key={i} className="w-1/4 h-20 bg-gray-300 border border-black relative overflow-hidden group">
                    <img 
                      src={`https://picsum.photos/seed/${i}/150/150`} 
                      className="w-full h-full object-cover grayscale brightness-50"
                      alt={`work ${i}`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ugly-pink opacity-0 group-hover:opacity-100 flex items-center justify-center pointer-events-none">
                       <p className="text-[8px] font-bold text-black rotate-45">VIEW SITE</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* SCROLLING TEXT CLUTTER */}
          <footer className="bg-black text-ugly-green border-t-10 border-ugly-pink p-0 flex flex-wrap">
             <div className="w-full bg-ugly-red text-white p-0 text-center animate-pulse">
                !!! HACKER SAFE SEAL OF APPROVAL !!! NO VIRUS DETECTED BY NORTON 2004 !!!
             </div>
             <div className="w-1/3 border-r border-white">
                <p className="text-[10px]">OPTIMIZED FOR:</p>
                <div className="flex flex-wrap gap-0">
                   <Search size={16} className="text-white" />
                   <Globe size={16} className="text-white" />
                   <MousePointer2 size={16} className="text-white" />
                   <Zap size={16} className="text-white" />
                   <Flame size={16} className="text-white" />
                </div>
             </div>
             <div className="w-2/3 p-0">
                <p className="text-[8px] font-mono leading-[0.5rem]">
                  LEGAL DISCLAIMER: DESIGNHORROR IS NOT RESPONSIBLE FOR EYE STRAIN, SEIZURES, OR LOSS OF BRAIN CELLS RESULTING FROM BROWSING THIS WEBSITE. ALL CONTENT IS PROPERTY OF THE WORLD WIDE WEB. DO NOT STEAL OUR GIFS OR WE WILL BE VERY SAD.
                </p>
                <p className="text-center font-comic text-xs underline mt-1">
                   back to top | contact webmaster | optimized for 800x600 resolution
                </p>
             </div>
          </footer>
        </main>

        {/* RIGHT SIDEBAR - ADVERTS */}
        <aside className="w-full lg:w-48 bg-ugly-yellow border-l-8 border-ugly-green flex flex-col">
           <div className="bg-red-600 text-white p-0 font-bold text-center border-b-4 border-black">ADVERTISEMENTS</div>
           {[1,2,3,4,5].map(i => (
             <div key={i} className="bg-white border-4 border-dashed border-ugly-blue p-0 mt-0 mb-0">
                <p className="text-center font-bebas text-xl text-ugly-red mb-0">WIN A PC!!!</p>
                <img 
                  src={`https://picsum.photos/seed/ad${i}/150/100`} 
                  alt="Advert" 
                  className="w-full h-auto opacity-80"
                  referrerPolicy="no-referrer"
                />
                <button className="w-full bg-ugly-pink text-[10px] p-1 animate-pulse">CLICK HERE IF YOU ARE A HUMAN</button>
             </div>
           ))}
           <div className="bg-black text-white text-[8px] p-1 mt-auto">
              <p>Site last updated: June 14, 2005 03:42 AM</p>
           </div>
        </aside>
      </div>

      {/* FLOATING ANNOYANCE */}
      <motion.div 
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="fixed bottom-10 right-10 bg-ugly-pink border-8 border-white p-0 z-50 shadow-2xl cursor-move w-40"
      >
        <div className="bg-black text-white text-[10px] flex justify-between p-1">
           <span>CHAT NOW</span>
           <span className="font-bold cursor-default">X</span>
        </div>
        <div className="flex p-0 bg-white items-center">
           <User size={30} className="text-gray-400" />
           <p className="text-[8px] text-gray-500">Service: "Hi! How can I help you spend money?"</p>
        </div>
        <textarea className="w-full h-10 text-[10px] border-t border-black" placeholder="type here..."></textarea>
      </motion.div>

      {/* BRIGHT OVERLAYS */}
      <div className="fixed top-0 left-0 w-2 h-screen bg-ugly-red opacity-50 z-[100] pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-2 h-screen bg-ugly-blue opacity-50 z-[100] pointer-events-none"></div>
      <DemoOverlayBanner />
    </div>
  );
}

