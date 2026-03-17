import "./styles.css";
import { useState } from "react";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

export default function App() {
  // 1. Initialize state for the form fields
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // 2. Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from refreshing
    alert(`Received new registration:\n${name}\n${address}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} style={{ textAlign: "left", padding: "20px" }}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name} // State drives the UI
            onChange={(e) => setName(e.target.value)} // UI updates the state
          />
        </div>

        <div>
          <label>Address: </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}