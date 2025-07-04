interface AppEmbedProps{
  src?:string;
}

const AppEmbed = ({src}: AppEmbedProps) => {
  const scale = 0.45; 

  const widthOriginal = 1280;
  const heightOriginal = 720; 

  const widthScaled = widthOriginal * scale;
  const heightScaled = heightOriginal * scale;

  return (
    <div
      style={{
        width: widthScaled,
        height: heightScaled,
        border: 'none',
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative',
        margin: 'auto',
      }}
    >
      <iframe
        src={src}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: widthOriginal,
          height: heightOriginal,
          border: 'none',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
        title="Mini demo escalada"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default AppEmbed;
