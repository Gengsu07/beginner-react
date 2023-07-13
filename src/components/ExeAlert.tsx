import { ReactNode, useState } from "react";
import Button from "./Button";
interface Props {
  alert?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  children: ReactNode;
}

const ExeAlert = ({ alert, children }: Props) => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <div className={"alert alert-" + alert + " alert-dismissible"}>
          {children}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      <Button
        color={alert}
        btn_text="My Alert"
        onClick={() => setAlertVisible(true)}
      />
    </>
  );
};

export default ExeAlert;
