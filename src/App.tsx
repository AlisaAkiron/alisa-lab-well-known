import { wellKnownFiles } from "./well-known-files";

function App() {
  return (
    <>
      <h1>Alisa Lab Well Known Host</h1>
      <p>This website is used to host the well-known files for the Alisa Lab</p>
      <p>
        <ol>
          {wellKnownFiles.map((wellKnownFile) => (
            <li key={wellKnownFile.fileName}>
              <a href={`/.well-known/${wellKnownFile.fileName}`}>
                {wellKnownFile.name}
              </a>
            </li>
          ))}
        </ol>
      </p>
    </>
  );
}

export default App;
