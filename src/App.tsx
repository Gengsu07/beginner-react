import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ExeAlert from "./components/ExeAlert";

function App() {
  let items = ["Jakarta", "Yogyakarta", "Surabaya", "Malang", "Palembang"];
  const handlerSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handlerSelectedItem}
      />
      <Alert>
        <li>
          Hello <strong>Gengsu</strong>
        </li>
        <li>
          Hello <strong>Wahyudi</strong>
        </li>
        <li>
          Sugeng <strong>Wahyudi</strong>
        </li>
      </Alert>
      <Button
        color="primary"
        btn_text="Pencet Sini"
        onClick={() => console.log("Clicked")}
      />
      <Button
        color="success"
        btn_text="Klik Sini"
        onClick={() => console.log("Clicked")}
      />
      <hr />
      <ExeAlert alert="primary">
        "Alert" <strong>"MAYDAY MAYDAY"</strong>
      </ExeAlert>
      <hr />
      <ExeAlert alert="danger">
        "Alert" <strong>"DANGER DANGER"</strong>
      </ExeAlert>
    </div>
  );
}
export default App;
