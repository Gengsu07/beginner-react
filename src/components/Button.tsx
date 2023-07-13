interface Props {
  color?: // set color tobe optional;
  | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  btn_text: string;
  onClick: () => void;
}

// set default color to primary
const Button = ({ color = "primary", btn_text, onClick }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {btn_text}
      </button>
    </>
  );
};

export default Button;
