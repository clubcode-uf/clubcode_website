"use client";
import Waves from "../shadcn/Waves";

const WavesBg = () => {
  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
      <Waves
        lineColor="#3d4aff"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </div>
  );
};

export default WavesBg;
