export default function CTFSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-w-0 gap-8 md:gap-12 lg:gap-16">
      <div className="font-kanit font-extralight text-[clamp(16px,2.5vw,20px)] text-primary-brown leading-normal order-2 lg:order-1">
        <p>
          <span className="font-kanit font-medium">CTF</span>
          {' '}competition participations as a{' '}
          <span className="font-kanit font-medium">MaaSec</span>
          {' '}team member.
        </p>
        <p>
          Timeline of my CTF progression,{' '}
          <span className="font-kanit font-medium">writeups</span>
          {' '}for the challenges
        </p>
        <p>
          that I contributed to are available{' '}
          <span className="font-kanit font-medium">here</span>.
        </p>
      </div>
      <div className="grid grid-cols-[max-content_max-content] grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 gap-x-6 py-2.5 order-1 lg:order-2">
        <p className="col-start-1 row-start-1 font-hitmo font-black text-xl text-primary-brown leading-normal self-start">2026</p>
        <p className="col-start-1 row-start-3 font-hitmo font-black text-xl text-primary-brown leading-normal self-start">2025</p>
        <div className="col-start-2 row-start-2 leading-normal">
          <p className="font-hitmo font-black text-[clamp(16px,2.5vw,20px)] text-primary-brown">THEM?!CTF</p>
          <p className="font-kanit font-extralight text-base text-primary-brown">15# out of 586</p>
          <p className="font-kanit font-extralight text-base text-primary-brown">54 problems solved</p>
          <p className="font-kanit font-extralight text-base text-primary-brown">8056pts</p>
        </div>
        <div className="col-start-2 row-start-4 leading-normal">
          <p className="font-hitmo font-black text-[clamp(16px,2.5vw,20px)] text-primary-brown">PicoCTF</p>
          <p className="font-kanit font-extralight text-base text-primary-brown">Personal Practice</p>
          <p className="font-kanit font-extralight text-base text-primary-brown">Writeups</p>
        </div>
      </div>
    </div>
  );
}
