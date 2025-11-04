import "./List.css";

const bikini = ["Bob", "Patrick", "Carlos", "Gary", "Neptune"];
const List = (props) => {
  console.log(props);
  return (
    <>
      <h5>Les fiers habitants de Bikini Bottom</h5>
      <ul className="List">
        {/* map est  une boucle quasiment identique a  foreach que je peux utiliser dans le jsx */}
        {/* {bikini.map((value, index) => (
        <li key={index}>{value}</li>
      ))} */}
        {/* une version développée de la callback ci-dessous */}
        {bikini.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
