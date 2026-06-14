const tools = [
  {
    title: 'Web',
    items: ['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Design',
    items: ['Figma', 'Affinity', 'Davinci Resolve'],
  },
  {
    title: 'Cybersec',
    items: ['Nmap', 'Splunk', 'Wireshark', 'Metasploit', 'Burp Suite', 'Microsoft Sentinel'],
  },
];

export default function ToolsSection() {
  return (
    <div className="flex flex-col md:flex-row flex-1 items-center justify-center min-w-0 gap-[30px] md:gap-[60px] lg:gap-[125px] px-[20px] md:px-[40px] lg:px-[60px] py-[10px]">
      {tools.map((tool) => (
        <div key={tool.title} className="flex flex-col gap-[10px] items-center p-[10px] text-primary-brown">
          <p className={`font-hitmo font-black leading-[normal] ${tool.title === 'Design' ? 'text-[28px]' : 'text-[36px]'}`}>{tool.title}</p>
          <div className="flex flex-col font-kanit font-light text-[20px] leading-[normal] text-center">
            {tool.items.map((item) => (
              <p key={item} className="mb-0">{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
