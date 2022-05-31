export default function Loader() {
  return (
    <div className="sk-chase"> 
    { Array.from({length: 12}).map((_, i) =>
    <div
      key={`dot-${i}`}
      className={`sk-circle${i + 1} sk-circle`}
    />
  )}
    </div>
  )
}