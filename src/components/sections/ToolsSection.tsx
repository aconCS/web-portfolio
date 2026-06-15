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
    <div className="flex flex-col md:flex-row items-center justify-center min-w-0 gap-8 md:gap-12 lg:gap-20 py-2.5">
      {tools.map((tool) => (
        <div key={tool.title} className="flex flex-col gap-2.5 items-center p-2.5 text-primary-brown">
          <p className="font-hitmo font-black text-[clamp(22px,4.5vw,36px)] leading-normal">{tool.title}</p>
          <div className="flex flex-col font-kanit font-light text-base sm:text-xl leading-normal text-center">
            {tool.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
