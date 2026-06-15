import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo4 from '../../assets/photo4.jpg';
import photo5 from '../../assets/photo5.jpg';

const leftPics = [photo1, photo4];
const rightPics = [photo3, photo5];

export default function PicsSection() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-7 w-full max-w-4xl"
        style={{ height: 'clamp(280px, 70vw, 700px)' }}>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-7 flex-1 min-h-0 min-w-0">
          {leftPics.map((src, i) => (
            <div key={i} className="flex-1 min-h-0 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="shrink-0 -my-[clamp(20px,4vw,50px)] w-auto max-w-[35%]">
          <img src={photo2} alt="" className="h-full w-full object-cover"
            style={{ height: 'calc(100% + clamp(40px, 8vw, 100px))', objectPosition: '50% 50%' }} />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-7 flex-1 min-h-0 min-w-0">
          {rightPics.map((src, i) => (
            <div key={i} className="flex-1 min-h-0 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
