"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function AnchoredDetails({
  anchor,
  title,
  children,
}: {
  anchor: string;
  title: ReactNode;
  children: ReactNode;
}) {
  const details = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function reveal() {
      if (window.location.hash === `#${anchor}` && details.current)
        details.current.open = true;
    }
    // Next перехватывает переходы по якорям, поэтому раскрываем секцию сами.
    function followAnchor(event: MouseEvent) {
      const link = event.target instanceof Element
        ? event.target.closest("a")
        : null;
      if (
        link?.pathname === window.location.pathname &&
        link.hash === `#${anchor}` &&
        details.current
      ) details.current.open = true;
    }
    reveal();
    window.addEventListener("hashchange", reveal);
    document.addEventListener("click", followAnchor);
    return () => {
      window.removeEventListener("hashchange", reveal);
      document.removeEventListener("click", followAnchor);
    };
  }, [anchor]);

  return (
    <details ref={details} id={anchor} className="content-fold skill-sector">
      <summary>
        {title}
        <span className="fold-indicator" aria-hidden="true" />
      </summary>
      {children}
    </details>
  );
}
