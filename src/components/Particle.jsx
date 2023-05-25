import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0"
      }}
      params={{
        particles: {
          color: {
            value: "#ffffff"
          },
          line_linked: {
            color: {
              value: "#ffffff"
            }
          },
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;
