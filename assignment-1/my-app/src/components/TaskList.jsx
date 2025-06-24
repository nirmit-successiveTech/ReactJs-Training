export default function Tasklist({ list }) {
  return (
    <>
      {list.map((element, index) => {
        return (
          <div id="list-element" key={index}>
            <ul style={{ margin: 20, padding: 10 }} >
              <li>{element}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
