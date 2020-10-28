import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GenInfo />
      <EduInfo />
      <ExpInfo />
    </div>
  );
}

const GenInfo = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [num, setNum] = React.useState("");

  const onName = (e) => {
    setName(e);
  };
  const onEmail = (e) => {
    setEmail(e);
  };
  const onNum = (e) => {
    setNum(e);
  };

  return (
    <div className="general">
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => onName(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => onEmail(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(event) => onNum(event.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
      {"name: " + name} 
      <br />
      {"email: " + email}
      <br />
      {"number: " + num}
      <br />
    </div>
  );
};

const EduInfo = () => {
  return (
    <div className="education">
      <form>
        <input type="text" placeholder="School"></input>
        <input type="text" placeholder="Degree"></input>
        <input type="text" placeholder="Date"></input>
      </form>
    </div>
  );
};

const ExpInfo = () => {
  return (
    <div className="experience">
      <form>
        <input type="text" placeholder="Company"></input>
        <input type="text" placeholder="Position"></input>
        <input type="text" placeholder="Job Duties"></input>
        <input type="text" placeholder="Date"></input>
      </form>
    </div>
  );
};

const DisplayInfo = (props) => {
  
};

export default App;
