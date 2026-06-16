"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const skills = [
  "Flutter", "React", "Django", "PostgreSQL",
  "Firebase", "GitHub", "DigitalOcean", "RAG Models",
  "Machine Learning", "Python", "REST APIs",
];

// Map skill → emoji icon
const skillIcons: Record<string, string> = {
  Flutter: "🦋", React: "⚛️", Django: "🎸", PostgreSQL: "🐘",
  Firebase: "🔥", GitHub: "🐙", DigitalOcean: "🌊", "RAG Models": "🤖",
  "Machine Learning": "🧠", Python: "🐍", "REST APIs": "🔗",
};

export default function SkillsGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const tooltip = tooltipRef.current;
    if (!mount || !tooltip) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 500);
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Globe wireframe sphere
    const sphereGeo = new THREE.SphereGeometry(90, 24, 16);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Ambient glow ring
    const ringGeo = new THREE.TorusGeometry(92, 0.8, 8, 60);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.2 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    // Place skill labels as sprites on sphere surface
    interface SkillNode {
      mesh: THREE.Mesh;
      phi: number;
      theta: number;
      name: string;
    }
    const nodes: SkillNode[] = [];
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const colors = [
      "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7",
      "#ec4899", "#14b8a6", "#f59e0b", "#10b981",
      "#ef4444", "#06b6d4", "#84cc16",
    ];

    skills.forEach((skill, i) => {
      // Fibonacci sphere distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / skills.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 90;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      // Create canvas sprite for the skill label
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 80;
      const ctx = canvas.getContext("2d")!;

      // Background pill
      ctx.clearRect(0, 0, 256, 80);
      const grad = ctx.createLinearGradient(0, 0, 256, 0);
      grad.addColorStop(0, colors[i % colors.length] + "cc");
      grad.addColorStop(1, colors[(i + 3) % colors.length] + "88");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(4, 10, 248, 60, 30);
      ctx.fill();

      // Border
      ctx.strokeStyle = colors[i % colors.length];
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(4, 10, 248, 60, 30);
      ctx.stroke();

      // Text
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 22px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${skillIcons[skill] ?? "💡"} ${skill}`, 128, 40);

      const texture = new THREE.CanvasTexture(canvas);
      const matSprite = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const geoSprite = new THREE.PlaneGeometry(38, 12);
      const mesh = new THREE.Mesh(geoSprite, matSprite);
      mesh.position.set(x, y, z);
      mesh.lookAt(0, 0, 0);
      mesh.rotateY(Math.PI);
      nodeGroup.add(mesh);
      nodes.push({ mesh, phi, theta, name: skill });
    });

    // Floating dot particles inside globe
    const dotCount = 60;
    const dotGeo = new THREE.BufferGeometry();
    const dotPos = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const r = Math.random() * 80;
      const a = Math.random() * Math.PI * 2;
      const b = Math.random() * Math.PI;
      dotPos[i * 3] = r * Math.sin(b) * Math.cos(a);
      dotPos[i * 3 + 1] = r * Math.sin(b) * Math.sin(a);
      dotPos[i * 3 + 2] = r * Math.cos(b);
    }
    dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPos, 3));
    const dotMat = new THREE.PointsMaterial({ color: 0x6366f1, size: 1.2, transparent: true, opacity: 0.4 });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // Mouse / drag rotation
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotVel = { x: 0, y: 0 };
    let autoRotate = true;

    const onMouseDown = (e: MouseEvent) => { isDragging = true; autoRotate = false; prevMouse = { x: e.clientX, y: e.clientY }; };
    const onMouseUp = () => { isDragging = false; setTimeout(() => { autoRotate = true; }, 2000); };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      rotVel.y = dx * 0.003;
      rotVel.x = dy * 0.003;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    mount.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    // Resize
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (autoRotate) {
        nodeGroup.rotation.y += 0.004;
        nodeGroup.rotation.x += 0.001;
        sphere.rotation.y += 0.001;
        ring.rotation.z += 0.002;
      } else {
        nodeGroup.rotation.y += rotVel.y;
        nodeGroup.rotation.x += rotVel.x;
        rotVel.x *= 0.9;
        rotVel.y *= 0.9;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      mount.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        ref={mountRef}
        className="w-full cursor-grab active:cursor-grabbing"
        style={{ height: "480px" }}
        aria-label="Interactive 3D skills globe"
      />
      <div
        ref={tooltipRef}
        className="absolute pointer-events-none px-3 py-1.5 bg-white/90 dark:bg-zinc-900/90 text-gray-900 dark:text-white text-sm font-medium rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700 opacity-0 transition-opacity"
      />
      <p className="text-sm text-gray-400 dark:text-gray-500 mt-2 select-none">
        🖱 Drag to rotate
      </p>
    </div>
  );
}
