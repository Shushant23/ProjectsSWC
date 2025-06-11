export default function RadioGroup({ label, name, options, selectedValue, onChange }) {
    return (
      <div className="radio-group">
        <p>{label}</p>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  }
  