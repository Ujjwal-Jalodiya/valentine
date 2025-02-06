import { useState } from "react";
import ValentineCard from "./components/ValentineCard";
import YesPage from "./components/YesPage";

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div>
      {accepted ? <YesPage /> : <ValentineCard setAccepted={setAccepted} />}
    </div>
  );
}

export default App;
