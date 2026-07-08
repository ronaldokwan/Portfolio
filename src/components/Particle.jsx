import { lazy, Suspense, useEffect, useState } from "react";

// The particle background is pure decoration, so its ~65KB (gzip) engine is
// loaded only once the browser is idle — it never competes with first paint.
const ParticleCanvas = lazy(() => import("./ParticleCanvas"));

function Particle() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setReady(true));
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setReady(true), 200);
    return () => window.clearTimeout(id);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <ParticleCanvas />
    </Suspense>
  );
}

export default Particle;
