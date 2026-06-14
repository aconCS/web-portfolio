export default function AboutSection() {
  return (
    <div className="flex flex-1 items-center justify-center min-w-0">
      <div className="flex flex-col lg:flex-row gap-[30px] items-center">
        <div className="flex items-center">
          <div className="flex flex-col gap-[10px] items-center p-[10px] text-primary-brown">
            <p className="font-hitmo font-black text-[36px] leading-[normal]">Hobbies</p>
            <div className="flex flex-col font-kanit font-light text-[20px] text-center leading-[normal]">
              <p className="mb-0">Calisthenics</p>
              <p className="mb-0">Bouldering</p>
              <p className="mb-0">Speedcubing</p>
              <p className="mb-0">Volleyball</p>
              <p>Hiking</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center w-0 h-[99px] mx-4">
            <div className="rotate-90 w-[99px] h-0 border-t border-primary-brown/30" />
          </div>
          <div className="flex lg:hidden items-center justify-center w-full h-0 mx-4 my-[10px]">
            <div className="w-[99px] h-0 border-t border-primary-brown/30" />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] items-start p-[10px]">
          <p className="font-hitmo font-black text-[36px] text-primary-brown whitespace-nowrap leading-[normal]">Who am I?</p>
          <div className="flex flex-col font-kanit font-light justify-center max-w-[560px] text-[20px] text-primary-brown leading-[normal]">
            <p>
              I am a BSc Computer Science student at{' '}
              <span className="font-kanit font-medium">Maastricht University</span>
              , member of{' '}
              <span className="font-kanit font-medium">MaaSec&rsquo;s</span>
              {' '}CTF, bug bounty and Security Consulting teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
