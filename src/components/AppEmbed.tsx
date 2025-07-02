

const AppEmbed = () => {
  return (
    <div style={{ width: '700px', height: '467px', border: '2px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
  <iframe
    src="https://job-searching-app-react.vercel.app/"
    style={{
      width: '1400px', // doble ancho real
      height: '934px', // doble alto real
      border: 'none',
      transform: 'scale(0.5)', // reduce a la mitad
      transformOrigin: 'top left',
    }}
    title="Mini demo escalada"
    sandbox="allow-scripts allow-same-origin"
  />
    </div>
  );
};

export default AppEmbed;
