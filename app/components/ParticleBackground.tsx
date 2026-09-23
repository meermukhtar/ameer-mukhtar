"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Particle {
  x: number; y: number; z: number;
  vx: number; vy: number; vz: number;
}

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const COUNT = 65;
    const particles: Particle[] = [];
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    // Palette colors for particles - unified purple theme
    const palette = [
      new THREE.Color("#a855f7"), // purple-500
      new THREE.Color("#c084fc"), // purple-400
      new THREE.Color("#d946ef"), // fuchsia-500
      new THREE.Color("#e879f9"), // fuchsia-400
    ];

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 160;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 60;
      particles.push({ x, y, z, vx: (Math.random() - 0.5) * 0.025, vy: (Math.random() - 0.5) * 0.025, vz: (Math.random() - 0.5) * 0.012 });
      positions[i * 3] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const linePositions = new Float32Array(COUNT * COUNT * 6);
    const lineGeo = new THREE.BufferGeometry();
    const lineAttr = new THREE.BufferAttribute(linePositions, 3);
    lineAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeo.setAttribute("position", lineAttr);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.22 });
    scene.add(new THREE.LineSegments(lineGeo, lineMat));

    const spriteMat = new THREE.PointsMaterial({ size: 1.5, vertexColors: true, transparent: true, opacity: 0.65, sizeAttenuation: true });
    scene.add(new THREE.Points(geometry, spriteMat));

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let frame: number;
    const linesRef = lineGeo;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const posArr = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        const p = particles[i];
        p.x += p.vx + mouse.x * 0.005; p.y += p.vy + mouse.y * 0.005; p.z += p.vz;
        if (p.x > 85) p.x = -85; if (p.x < -85) p.x = 85;
        if (p.y > 55) p.y = -55; if (p.y < -55) p.y = 55;
        if (p.z > 35) p.z = -35; if (p.z < -35) p.z = 35;
        posArr[i * 3] = p.x; posArr[i * 3 + 1] = p.y; posArr[i * 3 + 2] = p.z;
      }
      geometry.attributes.position.needsUpdate = true;

      let idx = 0;
      const lpArr = linesRef.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dz = particles[i].z - particles[j].z;
          if (dx*dx + dy*dy + dz*dz < 900) {
            lpArr[idx++] = particles[i].x; lpArr[idx++] = particles[i].y; lpArr[idx++] = particles[i].z;
            lpArr[idx++] = particles[j].x; lpArr[idx++] = particles[j].y; lpArr[idx++] = particles[j].z;
          }
        }
      }
      for (let k = idx; k < linePositions.length; k++) lpArr[k] = 0;
      linesRef.attributes.position.needsUpdate = true;
      linesRef.setDrawRange(0, idx / 3);

      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount && renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" aria-hidden="true" />;
}
