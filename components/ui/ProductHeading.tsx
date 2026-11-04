// Описательный префикс остаётся меньше названия и после удаления кавычек.
export function ProductHeading({
  title,
  kind,
}: {
  title: string;
  kind: "safety" | "parent";
}) {
  const match = title.match(
    /^(PDF-календарь|Ежедневник|Карточки безопасности|PDF calendar|Diary|Safety cards):?\s+(.+)$/,
  );
  if (!match) return title;
  const [, prefix, name] = match;
  if (kind === "safety")
    return (
      <>
        {prefix}
        <span className="hero-title-detail">{name}</span>
      </>
    );
  return (
    <>
      <span className="hero-title-detail hero-title-prefix">
        {prefix}
      </span>
      {name}
    </>
  );
}
