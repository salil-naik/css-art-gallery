export function Credit(props) {
  return (
    <div className="credits">
      {props.data["art-name"]} by{" "}
      <a href={props.data["gh-link"]} target="_blank" rel="noreferrer">
        {props.data.name}
      </a>
    </div>
  );
}
