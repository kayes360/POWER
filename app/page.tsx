'use client'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleScreenClick() {
      if (iframeRef.current) {
        iframeRef.current.classList.toggle('landscape');
      }
    }

    window.addEventListener('click', handleScreenClick);

    return () => {
      window.removeEventListener('click', handleScreenClick);
    };
  }, []);

  return (
    <div className="bg-neutral-600 flex justify-center items-center h-screen">
      <div className="w-full lg:w-3/4 bg-white rounded-md p-1 lg:p-4 m-1">
        <iframe
          ref={iframeRef}
          className="w-full aspect-video rounded-md"
          src="https://game.borofpani.com/car-racing-3d"
        ></iframe>
      </div>
    </div>
  );
}
