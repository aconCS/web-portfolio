export default function EducationSection() {
  return (
    <div className="flex flex-1 items-center justify-center min-w-0">
      <div className="flex flex-col lg:flex-row gap-[50px] items-center">
        <div className="flex flex-col gap-[10px] items-start whitespace-nowrap w-full lg:w-auto">
          <div className="flex flex-col text-primary-brown">
            <p className="font-hitmo font-black text-[28px] md:text-[32px] lg:text-[36px] leading-[normal] mb-0">Maastricht University</p>
            <p className="font-hitmo font-black text-[16px] md:text-[18px] lg:text-[20px] leading-[normal]">BSc Computer Science</p>
          </div>
          <p className="font-kanit font-extralight text-[16px] leading-[normal] text-primary-brown">
            Expected 2027 Graduate
          </p>
        </div>
        <div className="relative text-primary-brown">
          <p className="font-hitmo font-black text-[28px] md:text-[32px] lg:text-[36px] leading-[normal] mb-6">Relevant Skills Developed:</p>
          <div className="flex gap-[30px] md:gap-[45px] lg:gap-[60px]">
            <div>
              <p className="font-hitmo font-black text-[20px] leading-[normal] mb-2">Technical</p>
              <div className="font-kanit font-extralight text-[16px] leading-[normal]">
                <p className="mb-0">Cybersecurity</p>
                <p className="mb-0">CI/CD Pipelines</p>
                <p className="mb-0">Java &amp; Python</p>
                <p className="mb-0">Object Oriented Programming</p>
                <p>Leading large projects</p>
              </div>
            </div>
            <div>
              <p className="font-hitmo font-black text-[20px] leading-[normal] mb-2">Interpersonal</p>
              <div className="font-kanit font-extralight text-[16px] leading-[normal]">
                <p className="mb-0">Working in big teams</p>
                <p className="mb-0">Leading said teams</p>
                <p className="mb-0">Managing heavy workloads</p>
                <p className="mb-0">Working with strict deadlines</p>
                <p>Attention to details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
