/** Keep the complete product name while separating its descriptive subtitle. */
export function ProductHeading({
  title,
  kind,
}: {
  title: string;
  kind: "safety" | "parent";
}) {
  const start = title.search(/[«“]/);
  if (start < 0) return title;
  if (kind === "safety")
    return (
      <>
        {title.slice(0, start).trim()}
        <span className="hero-title-detail">{title.slice(start)}</span>
      </>
    );
  const end = title.search(/[»”]/);
  if (end < start) return title;
  return (
    <>
      <span className="hero-title-detail hero-title-prefix">
        {title.slice(0, start).trim()}
      </span>
      {title.slice(start, end + 1)}
      {title.slice(end + 1).trim() && (
        <span className="hero-title-detail">{title.slice(end + 1).trim()}</span>
      )}
    </>
  );
}
