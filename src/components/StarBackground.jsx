import { useEffect, useRef } from "react";

const StarBackground = () => {
  //Canvas Reference
  const canvasRef = useRef(null);

  useEffect(() => {
    // Inside useEffect: Drawing Logic
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //Canvas Sizing
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    //Create Stars
    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random(),
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    }));

    //Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        //Move each star slightly.
        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

        //If a star hits the edge of the screen, it bounces back.
        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.max(0.2, Math.min(star.opacity, 1));

        //star twinkle by randomly increasing or decreasing its brightness.
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      //animation repeat
      requestAnimationFrame(animate);
    };

    //Start Animation + Resize Handling
    animate();
    window.addEventListener("resize", setCanvasSize);
    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  return (
    //Canvas Element in JSX

    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none mix-blend-screen opacity-50"
    />
  );
};

export default StarBackground;
