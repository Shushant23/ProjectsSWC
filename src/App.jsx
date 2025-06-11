import { useState } from "react";
import Input from "./components/Input";
import RadioGroup from "./components/RadioGroup";
import Select from "./components/Select";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [comment, setComment] = useState("");
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>📝 User Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="👤 Name:"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <Input
          label="🎂 Age:"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />

        <label className="field-label">💬 Comment:</label>
        <textarea
          rows={4}
          value={comment}
          placeholder="Enter your comment"
          onChange={(e) => setComment(e.target.value)}
          className="text-area"
        />

        <RadioGroup
          label="🚚 Shipping Method:"
          name="shipping"
          options={[
            { value: "Pickup", label: "Pickup" },
            { value: "Delivery", label: "Delivery" },
          ]}
          selectedValue={shipping}
          onChange={(e) => setShipping(e.target.value)}
        />

        <Select
          label="💳 Payment Method:"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          options={[
            { value: "", label: "Select a payment method" },
            { value: "Visa", label: "Visa" },
            { value: "Master Card", label: "Master Card" },
            { value: "UPI", label: "UPI" },
            { value: "GIFT", label: "Gift" },
          ]}
        />

        <button type="submit" className="submit-btn"> Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <h3>✅ Submitted Data</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Comment:</strong> {comment}</p>
          <p><strong>Shipping:</strong> {shipping}</p>
          <p><strong>Payment:</strong> {payment}</p>
        </div>
      )}
    </div>
  );
}
