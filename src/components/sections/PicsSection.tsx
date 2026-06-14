import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo4 from '../../assets/photo4.jpg';
import photo5 from '../../assets/photo5.jpg';

const leftPics = [photo1, photo4];
const rightPics = [photo3, photo5];

export default function PicsSection() {
  return (
    <div className="w-full h-full flex items-center justify-center px-[20px] lg:px-[40px]">
      <div className="flex gap-[15px] md:gap-[20px] lg:gap-[29px] h-[200px] md:h-[260px] lg:h-[316px] w-full max-w-[728px]">
        <div className="flex flex-col gap-[15px] md:gap-[20px] lg:gap-[31px] flex-1 min-h-0">
          {leftPics.map((src, i) => (
            <div key={i} className="flex-1 min-h-0">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="shrink-0 w-auto h-full">
          <img src={photo2} alt="" className="h-full w-auto" />
        </div>
        <div className="flex flex-col gap-[15px] md:gap-[20px] lg:gap-[31px] flex-1 min-h-0">
          {rightPics.map((src, i) => (
            <div key={i} className="flex-1 min-h-0">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
