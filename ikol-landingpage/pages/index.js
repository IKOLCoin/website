import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import Navbar from "./navbar";

const Index = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl");

    const scene = new THREE.Scene();

    // Fog
    const fog = new THREE.Fog("#000000", 1, 2.5);

    scene.fog = fog;

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const gridTexture = textureLoader.load("/grid-6.png");
    const heightTexture = textureLoader.load("/displacement-7.png");
    const metalnessTexture = textureLoader.load("/metalness-2.png");

    // Plane
    const parameters = {
      displacementScale: 0.2,
      metalness: 1,
      roughness: 0.4,
    };

    const geometry = new THREE.PlaneGeometry(1, 2, 24, 24);
    const material = new THREE.MeshStandardMaterial({
      map: gridTexture,
      displacementMap: heightTexture,
      displacementScale: parameters.displacementScale,
      metalness: parameters.metalness,
      metalnessMap: metalnessTexture,
      roughness: parameters.roughness,
    });
    const plane = new THREE.Mesh(geometry, material);
    const plane2 = new THREE.Mesh(geometry, material);

    plane.rotation.x = -Math.PI * 0.5;
    plane2.rotation.x = -Math.PI * 0.5;

    plane.position.y = 0.0;
    plane.position.z = 0.15;
    plane2.position.y = 0.0;
    plane2.position.z = -1.85;
    scene.add(plane);
    scene.add(plane2);


    // Lights
    const ambientLight = new THREE.AmbientLight("#fec10c", 0);
    scene.add(ambientLight);


    const spotlight = new THREE.SpotLight(
      "#fec10c",
      10,
      25,
      Math.PI * 0.1,
      0.25
    );
    spotlight.position.set(0.5, 0.75, 2.1);
    spotlight.target.position.x = -0.25;
    spotlight.target.position.y = 0.25;
    spotlight.target.position.z = 0.25;
    scene.add(spotlight);
    scene.add(spotlight.target);

    const spotlight2 = new THREE.SpotLight(
      "#fec10c",
      10,
      25,
      Math.PI * 0.1,
      0.25
    );
    spotlight2.position.set(-0.5, 0.75, 2.1);
    spotlight2.target.position.x = 0.25;
    spotlight2.target.position.y = 0.25;
    spotlight2.target.position.z = 0.25;
    scene.add(spotlight2);
    scene.add(spotlight2.target);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Base camera
    const camera = new THREE.PerspectiveCamera(
      23,
      sizes.width / sizes.height,
      0.01,
      20
    );
    camera.position.x = 0;
    camera.position.y = 0.06;
    camera.position.z = 1.1;

    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Post-processing
    const effectComposer = new EffectComposer(renderer);
    effectComposer.setSize(sizes.width, sizes.height);
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.uniforms["amount"].value = 0;

    effectComposer.addPass(rgbShiftPass);
    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
    effectComposer.addPass(gammaCorrectionPass);

    var bloomParams = {
      strength: 0,
    };

    const bloomPass = new UnrealBloomPass();
    bloomPass.strength = bloomParams.strength;

    effectComposer.addPass(bloomPass);

    // Resize handler
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      effectComposer.setSize(sizes.width, sizes.height);
      effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Animation
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      plane.position.z = (elapsedTime * 0.15) % 2;
      plane2.position.z = ((elapsedTime * 0.15) % 2) - 2;

      effectComposer.render();

      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const timelineData = [
    {
      quarter: "Q1 2025",
      description: [
        "Token Launch and Launch of Influenz Marketplace."

      ],
    },
    { quarter: "Q2 2025", description: ["Building out more infrastructure."] },
    { quarter: "Q3 2025", description: ["Beta Testing for Gamification System."] },
    { quarter: "Q4 2025", description: ["Full Credentialing System Release."] },
    { quarter: "Q1 2026", description: ["More info coming soon."] },

  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const calculateProgressWidth = () => {
    const progress = (selectedIndex / (timelineData.length - 1)) * 100;
    return progress;
  };

  const handleScroll = (id) => {
	const section = document.querySelector(id);
	if (section) {
		section.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
};


  return (
    <div>
      <Head>
        <title>IKOL- Empowering Influencers in the Web3.0</title>
        <meta
          name="description"
          content="Revolutionizing social media engagement and reputation management with blockchain technology."
        />
        <link rel="icon" href="./logo.svg" />

      </Head>

      <main>
        <Navbar />

        <section id="hero" className="HeroSection">
          <div className="titles">
            <h1>Empowering Influencers in the <span className="yellow">Web3.0</span></h1>
            <h2>
              Revolutionizing social media engagement and reputation management with blockchain technology.
            </h2>
            <div className="buttons">
              <button>Learn More About IKOL 🡥</button>
              <button onClick={() => handleScroll("#tokenomics")}>Explore Tokenomics 🡥</button>
            </div>
          </div>

          <canvas ref={mountRef} className="webgl"></canvas>
        </section>

        <section id="about" ref={(el) => (sectionsRef.current[0] = el)}
          className="AboutSection section">

          <div className="textSide">
            <h1>
              What is <span className="yellow">IKOL?</span>
            </h1>
            <p>
              IKOL stands for &apos;I am a Key Opinion Leader&apos;. It&apos;s a Web3.0 ecosystem designed to empower influencers by creating opportunities for engagement, reputation management, and monetization.
            </p>
          </div>

          <div className="imageSide">
            <div className="fourBox">
              <div>
                <img src="./Coin.png"></img>
                <p>Exchange</p>
              </div>
              <div>
                <img src="./Shield.png"></img>
                <p>Services</p>
              </div>
              <div>
                <img src="./Euro.png"></img>
                <p>Educational</p>
              </div>
              <div>
                <img src="./Safe.png"></img>
                <p>Staking</p>
              </div>
            </div>
            <img className="logo" src="./logo.svg"></img>
          </div>
        </section>

        <section id="tokenomics" ref={(el) => (sectionsRef.current[1] = el)}
          className="tokenomicSection section">
          <h1> <span className="yellow">IKOL Token:</span> The Backbone of the Ecosystem</h1>

          <div className="tokenomicColumns">

            <div className="imageSide">
              <img src="./chart.svg"></img>
            </div>

            <div className="textSide">
              <div className="allocations">
                <p className="blond">Token allocations:</p>
                <p> <span className="t100">O</span> Community Sale: 30%</p>
                <p> <span className="t75">O</span> Liquidity Pools: 30%</p>
                <p> <span className="t50">O</span> Market-Making: 30%</p>
                <p> <span className="t25">O</span> Incentives / Airdrops: 10%</p>
                <p className="gray">IKOL tokens ensure interoperability across the community and incentivize ecosystem participants.</p>
              </div>
            </div>
          </div>

        </section>

        <section id="partners" ref={(el) => (sectionsRef.current[2] = el)}
          className="tokenomicSection section">
          <h1>Meet Our Partners</h1>

          <div className="partnerColumns">

            <div className="imageSide">
              <a href="https://influe.nz/"><img src="./influ.png"></img></a>
              <p className="t400">Influenz: A Marketplace for Influencers.</p>
              <p>Influenz connects influencers and brands, facilitating transparent and impactful collaborations.</p>
            </div>

            <div className="textSide">
              <p className="titalic">More partners coming soon!</p>
            </div>


          </div>

        </section>

        <section ref={(el) => (sectionsRef.current[3] = el)} className="appSection section">
          <h1>Applications in the <span className="yellow">IKOL Ecosystem</span> </h1>
          <div className="appColumns">
            <div>
              <img src="./people.svg"></img>
              <p className="blond">Influencer-Brand Marketplace <br></br><br></br>
                <span className="lower">
                  Streamline collaborations between brands and influencers.
                </span>
              </p>
            </div>
            <div>
              <img src="./like.svg"></img>
              <p className="blond">Gamified Engagement <br></br><br></br>
                <span className="lower">
                  Reward followers and enhance community interactions.
                </span>
              </p>
            </div>
            <div>
              <img src="./metric.svg"></img>
              <p className="blond">Influencer Rating System <br></br><br></br>
                <span className="lower">
                  Build trust with KPIs based on provable metrics.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section id="roadmap" ref={(el) => (sectionsRef.current[4] = el)} className="roadmap section">
          <h1>Our Journey Ahead</h1>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <>
                <div
                  key={`timeline-item-${index}`}
                  className={`timeline-item ${index <= selectedIndex ? "active" : ""}`}
                  onClick={() => setSelectedIndex(index)}
                >

                  <span>{item.quarter}</span>
                </div>
                <div
                  className="timeline-progress"
                  style={{
                    width: `${calculateProgressWidth()}%`, 
                  }}

                />
              </>
            ))}
          </div>

          <div className="description">
            <h3>{timelineData[selectedIndex].quarter}</h3>
            <ul>
              {timelineData[selectedIndex].description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>


        </section>

        <section id="contact" ref={(el) => (sectionsRef.current[5] = el)} className="callSection section">
          <img src="./logo.svg"></img>
          <h1>Be Part of the Future</h1>
          <p>Join the IKOL community today and redefine influence in the digital era.</p>
          <div>
            <button>Join Our Community</button>
            <button>Subscribe for Updates</button>
          </div>

        </section>

        <section className="footter">
          <div>
            <a href="https://www.instagram.com/ikoltoken"><img src="./Instagram.svg"></img></a>
            <a href="https://t.me/+7eByzLltvq1lMTkx"><img src="./Telegram.svg"></img></a>
            <a href="https://x.com/ikoltoken"><img src="./Twitter.svg"></img></a>
            <a><img src="./Discord.svg"></img></a>
            <a href="https://www.youtube.com/@IKOLToken"><img src="./Youtube.svg"></img></a>
          </div>
          <div>
            <a>Privacy Policy</a>
            <a>Terms of Use</a>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Index;
