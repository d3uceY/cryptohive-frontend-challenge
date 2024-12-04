// Import assets
import airplane from './assets/airplane.svg';
import battery from './assets/battery.svg';
import wlan from './assets/wlan.svg';
import play from './assets/play.svg';
import info from './assets/info.svg';
import lesserThan from './assets/lesserThan.svg';

// Import components and data
import GalleryBlock from './components/GalleryBlock.jsx';
import { GALLERY_DATA } from './assets/data.js';

// Import styles
// I could have used Tailwind CSS to style the grid but chose to use regular CSS instead
import './css/grid-style.css';


export default function App() {
  return (
    <div className='bg-[#000]'>
      <main className="text-white max-w-[428px] mx-auto bg-background min-h-screen">
        
        {/* Top status bar showing time and system icons */}
        <div className="taskbar max-w-[80%] mx-auto flex items-center justify-between  pt-2">
          <div className="time ">
            <p className='font-medium'>03:50</p>
          </div>
          <div className="icons flex items-center gap-2">
            <img src={airplane} alt="airplane" className="h-[22px] aspect-square" />
            <img src={wlan} alt="wlan" className="h-[22px] aspect-square" />
            <img src={battery} alt="battery" className="h-[22px] aspect-square" />
          </div>
        </div>

        {/* Navigation bar with Safari controls and page title */}
        <nav className='border-b-2 border-black'>
          <div className='flex items-center gap-1 pl-2'>
            <img src={play} alt="play" className='h-[9px] aspect-square rotate-180' />
            <p className='text-[12px] leading-[0px]'>Safari</p>
          </div>

          <div className='flex items-center justify-between py-2 pr-2 pl-[0.2rem]'>
            <div className="back-btn">
              <img src={lesserThan} alt="lesserThan" className='h-[25px]' />
            </div>

            <h1 className='font-bold '>Public Stories</h1>

            <div className="info-btn">
              <img src={info} alt="info" />
            </div>
          </div>
        </nav>

        {/* Main content section containing story gallery */}
        <section className="gallery-main-container px-3">
          {/* Header with title and view filter */}
          <div className=' flex justify-between py-3'>
            <p className='font-medium text-[14px]'>Public Stories</p>
            <div className='flex gap-1 items-center  w-fit px-3 py-1 rounded-xl bg-greyfaded  '>
              <div className='text-[11px] font-medium capitalize '>Snap views</div>
              <img src={lesserThan} alt="lesserThan" className="rotate-[270deg] h-[14px] leading-[0]" />
            </div>
          </div>

          {/* Scrollable grid of gallery items */}  
          <div className="gallery-grid-container overflow-y-auto max-h-[calc(100vh-128px)]">
            {GALLERY_DATA.map((item, index) => (
              <GalleryBlock key={index} data={item} />
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}