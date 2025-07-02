'use client'



export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/public/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}