import { useState } from "react";
import { Button, Card, Modal } from "./index.js";
import "./App.css"

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      
      {/* Button */}
      <Button
        text="Open Modal"
        type="primary"
        onClick={() => setOpen(true)}
      />

<div className="card-container">
   {/* Card */}
      <Card title="My Card"
      img={"https://images.pexels.com/photos/35267296/pexels-photo-35267296.jpeg"}>
        <p>This content is coming from App.jsx</p>
        <h4>This content is coming from App.jsx</h4>
      </Card>

 <Card title="My Card"
      img={"https://images.pexels.com/photos/35137958/pexels-photo-35137958.jpeg"}>
        <p>This content is coming from App.jsx</p>
        <h4>This content is coming from App.jsx</h4>
      </Card>

</div>
     

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h3>Hello Modal</h3>
        <p>This modal is reusable</p>

        <Button
          text="Close"
          type="secondary"
          onClick={() => setOpen(false)}
        />
      </Modal>
      

    </div>
  );
}

export default App;
