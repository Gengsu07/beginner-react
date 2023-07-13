import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

const App_exercise = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          ini adalah tomboil digunakan ,
          <strong>jika pencet tombol aku muncul</strong> kalau pencet x aku
          hilang
        </Alert>
      )}

      <Button
        color="primary"
        btn_text="My Alert"
        onClick={() => setAlertVisible(true)}
      />
    </div>
  );
};

export default App_exercise;
