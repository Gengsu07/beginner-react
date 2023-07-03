import { MouseEvent } from "react";

function ListGroup() {
  let kota = ["Jakarta", "Yogyakarta", "Surabaya", "Malang", "Palembang"];
  //   kota = [];
  //   const getKota = () => {
  //     return kota.length === 0 && <p>Kota is not Found</p>;
  //   };
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List Title</h1>
      {kota.length == 0 && <p>Kota is not Found</p>}
      {/* {getKota()} */}
      <ul className="list-group">
        {kota.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={() => console.log(item, index)}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
