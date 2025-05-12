import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const FireParticles = () => {
  const [init, setInit] = useState(false);

  // Initialize the particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "#ffffff",
              },
            },
            particles: {
              number: {
                value: 50,
              },
              color: {
                value: "#000000",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: { min: 1, max: 5 },
              },
              move: {
                enable: true,
                speed: 2,
              },
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default FireParticles;
