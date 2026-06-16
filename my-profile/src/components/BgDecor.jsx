import "../styles/globals.css";

export default function BgDecor() {
  return (
    <div className="bg-decor">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="bg-decor__square"
          style={{
            width:  `${40 + (i * 17) % 80}px`,
            height: `${40 + (i * 17) % 80}px`,
            top:    `${(i * 137) % 100}%`,
            left:   `${(i * 97) % 100}%`,
            transform: `rotate(${i * 15}deg)`,
          }}
        />
      ))}
    </div>
  );
}
