export default function EducationSection() {
  return (
    <div className="flex flex-1 items-center justify-center min-w-0">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
        <div className="flex flex-col gap-2.5 items-start w-full lg:w-auto">
          <div className="flex flex-col text-primary-brown">
            <p className="font-hitmo font-black text-[clamp(20px,4vw,36px)] leading-normal">Maastricht University</p>
            <p className="font-hitmo font-black text-[clamp(14px,2.5vw,20px)] leading-normal">BSc Computer Science</p>
          </div>
          <p className="font-kanit font-extralight text-base leading-normal text-primary-brown">
            Expected 2027 Graduate
          </p>
        </div>
        <div className="text-primary-brown">
          <p className="font-hitmo font-black text-[clamp(20px,4vw,36px)] leading-normal mb-6">Relevant Skills Developed:</p>
          <div className="flex gap-8 md:gap-12 lg:gap-16">
            <div>
              <p className="font-hitmo font-black text-xl leading-normal mb-2">Technical</p>
              <div className="font-kanit font-extralight text-base leading-normal">
                <p>Cybersecurity</p>
                <p>CI/CD Pipelines</p>
                <p>Java &amp; Python</p>
                <p>Object Oriented Programming</p>
                <p>Leading large projects</p>
              </div>
            </div>
            <div>
              <p className="font-hitmo font-black text-xl leading-normal mb-2">Interpersonal</p>
              <div className="font-kanit font-extralight text-base leading-normal">
                <p>Working in big teams</p>
                <p>Leading said teams</p>
                <p>Managing heavy workloads</p>
                <p>Working with strict deadlines</p>
                <p>Attention to details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
