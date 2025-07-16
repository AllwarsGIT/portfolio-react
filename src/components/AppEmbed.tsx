interface AppEmbedProps {
  src?: string;
  className?: string;
}

const AppEmbed = ({ src = "", className = "" }: AppEmbedProps) => {
  return (
    <div
      className={`w-full h-[300px] ${className}`}
    >
      <iframe
        src={src}
        className="w-full h-full border-none"
        title="Demo responsive"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};


export default AppEmbed;
