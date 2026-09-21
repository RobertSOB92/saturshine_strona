import { useEffect, useRef } from 'react';

export function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe all fade-up children
    const targets = el.querySelectorAll('.fade-up');
    targets.forEach((t) => observer.observe(t));
    // Also observe the container itself if it has fade-up
    if (el.classList.contains('fade-up')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
