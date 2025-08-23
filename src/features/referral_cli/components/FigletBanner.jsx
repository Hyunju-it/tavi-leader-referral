import { useEffect } from 'react';
import figlet from 'figlet';

export default function FigletBanner({ font, setLines }) {
  useEffect(() => {
    figlet.text("TAVI", { font }, (err, data) => {
      if (!err && data) {
        setLines((prev) => [
          prev[0],
          data
        ]);
      }
    });
  }, [font, setLines]);

  return null; // This component does not render anything itself
}
