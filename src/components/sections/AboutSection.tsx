export default function AboutSection() {
  return (
    <div className="flex items-center justify-center min-w-0">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        <div className="flex flex-col gap-2.5 items-center p-2.5 text-primary-brown order-2 lg:order-1">
          <p className="font-hitmo font-black text-[clamp(24px,5vw,36px)] leading-normal">Hobbies</p>
          <div className="flex flex-col font-kanit font-light text-base sm:text-xl text-center leading-normal">
            <p>Calisthenics</p>
            <p>Bouldering</p>
            <p>Speedcubing</p>
            <p>Volleyball</p>
            <p>Hiking</p>
          </div>
        </div>
        <div className="w-[99px] h-px lg:w-px lg:h-[99px] bg-primary-brown/30 shrink-0 order-2 lg:order-1" />
        <div className="flex flex-col gap-2.5 items-start p-2.5 order-1 lg:order-2">
          <p className="font-hitmo font-black text-[clamp(24px,5vw,36px)] text-primary-brown leading-normal">Who am I?</p>
          <div className="flex flex-col font-kanit font-light justify-center max-w-[560px] text-base sm:text-xl text-primary-brown leading-normal">
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
