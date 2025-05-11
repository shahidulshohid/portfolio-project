// FireParticles.tsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFirePreset } from "@tsparticles/preset-fire";

const FireParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the fire preset
    await loadFirePreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-fire"
      init={particlesInit}
      options={{
        preset: "fire",
        background: {
          color: "#000"
        }
      }}
    />
  );
};

export default FireParticles;
