const baseStats = [
  { label: "New Signups", value: 1240 },
  { label: "Active Teams", value: 318 },
  { label: "Avg. Response", value: 42, suffix: " min" },
];

export default function LivePreview({ demoRuns, onRunDemo }) {
  return (
    <section className="live-preview" aria-label="Live Product Preview">
      <div className="preview-header">
        <h2>Live Momentum Preview</h2>
        <p>Press the button to simulate a fresh growth cycle and watch key numbers climb.</p>
      </div>

      <div className="preview-grid">
        {baseStats.map((item, index) => {
          const growth = index === 0 ? 17 : index === 1 ? 6 : -1;
          const computed = item.value + growth * demoRuns;

          return (
            <article className="metric-card" key={item.label}>
              <span>{item.label}</span>
              <strong>
                {computed.toLocaleString()}
                {item.suffix ?? ""}
              </strong>
            </article>
          );
        })}
      </div>

      <div className="preview-actions">
        <button type="button" className="demo-button" onClick={onRunDemo}>
          Run Live Demo
        </button>
        <p>
          Demo runs: <strong>{demoRuns}</strong>
        </p>
      </div>
    </section>
  );
}
