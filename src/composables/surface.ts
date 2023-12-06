import { colord } from "colord";

export function useSurface() {
  function surfaces(isDark = false) {
    if (isDark) {
      return ["bg-app-dark-surface1", "bg-app-dark-surface2", "bg-app-dark-surface3", "bg-app-dark-surface4"];
    }
    return ["bg-app-light-surface1", "bg-app-light-surface2", "bg-app-light-surface3", "bg-app-light-surface4"];
  }

  const vSurface = {
    mounted(el: HTMLDivElement) {
      const bgColor = el.querySelector(".bgColor") as HTMLSpanElement;
      const computedStyle = window.getComputedStyle(el);
      const color = colord(computedStyle.backgroundColor).toHex();
      bgColor.innerHTML = color;
    },
  };

  return {
    surfaces,
    vSurface,
  };
}
