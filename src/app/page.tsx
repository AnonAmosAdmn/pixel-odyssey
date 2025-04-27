'use client'; 

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SplashPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      
      <video
        src="/Video/splash.mp4"
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      
      <div
        style={{
          zIndex: 2,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        
      </div>
    </div>
  );
};

export default SplashPage;
