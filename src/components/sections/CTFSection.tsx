export default function CTFSection() {
  return (
    <div className="flex flex-1 items-center justify-center min-w-0 gap-[80px] px-[40px]">
      <div className="font-kanit font-extralight text-[16px] text-primary-brown leading-[normal]">
        <p className="mb-0">
          <span className="font-kanit font-medium">CTF</span>
          {' '}competition participations as a{' '}
          <span className="font-kanit font-medium">MaaSec</span>
          {' '}team member.
        </p>
        <p className="mb-0">
          Timeline of my CTF progression,{' '}
          <span className="font-kanit font-medium">writeups</span>
          {' '}for the challenges
        </p>
        <p>
          that I contributed to are available{' '}
          <span className="font-kanit font-medium">here</span>.
        </p>
      </div>
      <div className="grid grid-cols-[max-content_max-content] grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 gap-x-6 py-[10px]">
        <p className="col-start-1 row-start-1 font-hitmo font-black text-[28px] text-primary-brown leading-[normal] self-start">2026</p>
        <p className="col-start-1 row-start-3 font-hitmo font-black text-[28px] text-primary-brown leading-[normal] self-start">2025</p>
        <div className="col-start-2 row-start-2 leading-[normal]">
          <p className="font-hitmo font-black text-[20px] text-primary-brown mb-0">THEM?!CTF</p>
          <p className="font-kanit font-extralight text-[16px] text-primary-brown mb-0">15# out of 586</p>
          <p className="font-kanit font-extralight text-[16px] text-primary-brown mb-0">54 problems solved</p>
          <p className="font-kanit font-extralight text-[16px] text-primary-brown">8056pts</p>
        </div>
        <div className="col-start-2 row-start-4 leading-[normal]">
          <p className="font-hitmo font-black text-[20px] text-primary-brown mb-0">PicoCTF</p>
          <p className="font-kanit font-extralight text-[16px] text-primary-brown mb-0">Personal Practice</p>
          <p className="font-kanit font-extralight text-[16px] text-primary-brown">Writeups</p>
        </div>
      </div>
    </div>
  );
}
