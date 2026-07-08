/**
 * Shown wherever a collection has no real photography yet.
 * Deliberately abstract/graphic (a generative variation on the
 * embroidery lattice already used across the brand) rather than a
 * fabricated "fake photo" — it should read as a placeholder, not
 * masquerade as a real product shot.
 */
export function CollectionPlaceholderArt({
  seed,
  label,
}: {
  seed: number;
  label: string;
}) {
  // Deterministic pseudo-random variation per collection, so each
  // placeholder feels distinct but stays within the same visual system.
  const rows = 5 + (seed % 3);
  const cols = 4 + (seed % 2);
  const rotate = (seed * 13) % 12;

  const diamonds = [];
  const cellW = 100 / cols;
  const cellH = 100 / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cx = cellW * (c + 0.5);
      const cy = cellH * (r + 0.5);
      const size = (Math.min(cellW, cellH) / 2) * 0.7;
      const opacity = 0.12 + (((r + c + seed) % 4) / 4) * 0.35;
      diamonds.push(
        <rect
          key={`${r}-${c}`}
          x={cx - size / 2}
          y={cy - size / 2}
          width={size}
          height={size}
          fill="none"
          stroke="#C9A24B"
          strokeOpacity={opacity}
          strokeWidth={0.4}
          transform={`rotate(45 ${cx} ${cy})`}
        />
      );
    }
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center bg-charcoal"
      style={{ transform: `rotate(${rotate * 0}deg)` }}
      role="img"
      aria-label={`${label} — placeholder artwork, photography coming soon`}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        {diamonds}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-void/20" />
      <span className="absolute bottom-4 left-4 font-body text-[10px] uppercase tracking-widest2 text-gold/50">
        Photography coming soon
      </span>
    </div>
  );
}
