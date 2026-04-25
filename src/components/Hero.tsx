import { AsciiStars } from './AsciiStars';

export function Hero() {
  return (
    <section id="inicio" className="px-12 py-16 min-h-[70vh] flex flex-col justify-center max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Column */}
        <div className="space-y-12">
          <div>
            <h1 className="text-6xl font-bold text-neutral-900 tracking-tight">
              yo.
            </h1>
          </div>
          
          <div className="max-w-md">
            <p className="text-[22px] text-neutral-900 leading-snug">
              Me gusta saber hacer muchas cosas, y blablablableblebleblublublu me llamo Danna
            </p>
          </div>
          
          <div className="pt-8">
            <a href="#sobre-mi" className="text-lg text-neutral-900 underline decoration-1 underline-offset-4 hover:text-[#a5d6a7] transition-colors">
              más sobre mí y mi trayectoria :)
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Placeholder Passport/Document Image */}
          <div className="relative z-10 bg-[#f4f2ef] w-[380px] h-[480px] shadow-sm p-8 flex flex-col rotate-[-2deg]">
            <div className="border-b border-neutral-300 pb-2 mb-6">
              <span className="text-[10px] font-bold text-neutral-500 tracking-widest">YOUR PASSPORT PHOTO</span>
            </div>
            
            {/* The actual photo placeholder attached with a simulated clip */}
            <div className="relative ml-auto mr-4 mt-2">
              <div className="w-32 h-40 bg-[#e0deda] border-4 border-white shadow-md flex items-center justify-center text-neutral-400 rotate-3">
                <span className="text-sm">Placeholder</span>
              </div>
              {/* Paperclip simulation */}
              <div className="absolute -top-4 -right-2 w-4 h-12 border-2 border-neutral-400 rounded-full rotate-[30deg]"></div>
            </div>

            <div className="mt-auto border-t border-neutral-300 pt-4">
              <span className="text-[10px] font-bold text-neutral-500 tracking-widest">TELL US ABOUT YOUR STORY</span>
              <div className="h-px bg-neutral-300 mt-6 w-full"></div>
              <div className="h-px bg-neutral-300 mt-6 w-full"></div>
            </div>
          </div>

          {/* ASCII Stars Overlay */}
          <div className="absolute top-10 right-0 md:-right-16 z-20 pointer-events-none">
            <AsciiStars />
          </div>

          {/* Bottom Right Green Text */}
          <div className="absolute -bottom-4 right-8 z-20">
            <p className="text-[#a5d6a7] italic text-xl font-medium">
              Quien soy es por<br />lo que fui
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
