import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GenInfo />
    </div>
  );
}

const GenInfo = () => {
  const validStyle = {
    border: "2px solid black",
  };
  const invalidStyle = {
    border: "2px dashed red",
  };

  const [nameStyle, setNameStyle] = React.useState();
  const [emailStyle, setEmailStyle] = React.useState();
  const [numStyle, setNumStyle] = React.useState();

  const initialInfo = {
    name: "",
    email: "",
    num: "",
  };

  const [userInfo, setUserInfo] = React.useState(initialInfo);

  // const onSubmit = () => {
  //   if (userInfo.name.length >= 2) {
  //     setNameStyle(validStyle);
  //   } else {
  //     alert("Please fill out the name field correctly");
  //     setNameStyle(invalidStyle);
  //   }

  //   if (userInfo.email.includes("@") && userInfo.email.includes(".com")) {
  //     setEmailStyle(validStyle);
  //   } else {
  //     alert("Please fill out the email field correctly");
  //     setEmailStyle(invalidStyle);
  //   }

  //   if (userInfo.num.length >= 10) {
  //     setNumStyle(validStyle);
  //   } else {
  //     alert("Please fill out the number field correctly");
  //     setNumStyle(invalidStyle);
  //   }
  // };

  return (
    <div className="general">
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) =>
            setUserInfo({ ...userInfo, name: event.target.value })
          }
          style={nameStyle}
        ></input>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) =>
            setUserInfo({ ...userInfo, email: event.target.value })
          }
          style={emailStyle}
        ></input>
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(event) =>
            setUserInfo({ ...userInfo, num: event.target.value })
          }
          style={numStyle}
        ></input>
      </form>
      <EduInfo onInfo={userInfo} />
    </div>
  );
};

const EduInfo = (props) => {
  const userInfo = props.onInfo;

  const initialEdu = {
    school: "",
    degree: "",
    date: "",
  };
  const [edu, setEdu] = React.useState(initialEdu);

  return (
    <div className="education">
      <form>
        <input
          type="text"
          placeholder="School"
          onChange={(event) => setEdu({ ...edu, school: event.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Degree"
          onChange={(event) => setEdu({ ...edu, degree: event.target.value })}
        ></input>
        <input
          type="month"
          placeholder="Date Completed (yyyy)"
          onChange={(event) => setEdu({ ...edu, date: event.target.value })}
        ></input>
      </form>

      <ExpInfo onEdu={edu} onInfo={userInfo} />
    </div>
  );
};

const ExpInfo = (props) => {
  const initialExp = {
    company: "",
    position: "",
    duties: "",
    dateStart: "",
    dateEnd: "",
  };

  const [exp, setExp] = React.useState(initialExp);

  let userData = [props.onInfo, props.onEdu, exp];

  return (
    <div className="experience">
      <form>
        <input
          type="text"
          placeholder="Company"
          onChange={(event) => setExp({ ...exp, company: event.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Position"
          onChange={(event) => setExp({ ...exp, position: event.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Job Duties"
          onChange={(event) => setExp({ ...exp, duties: event.target.value })}
        ></input>
        <input
          type="month"
          placeholder="Date Started"
          onChange={(event) => setExp({ ...exp, dateStart: event.target.value })}
        ></input>
        <input
          type="month"
          placeholder="Date Ended"
          onChange={(event) => setExp({ ...exp, dateEnd: event.target.value })}
        ></input>
      </form>
      <DisplayInfo onDisp={userData} />
    </div>
  );
};

const DisplayInfo = (props) => {
  const initialData = [
    {
      name: "",
      email: "",
      num: "",
    },

    {
      school: "",
      degree: "",
      date: "",
    },
    {
      company: "",
      position: "",
      duties: "",
      dateStarted: "",
      dateEnded: "",
    },
  ];

  const [data, setData] = React.useState(initialData);

  const handleSubmit = () => {
    setData(props.onDisp);
    console.log(data);


    //validation of input fields will go here


  };

  return (
    <div>
      <button onClick={() => handleSubmit()}>Submit</button>
      <h1>{data[0].name}</h1>
      <p>{data[0].email} - {data[0].num}</p>
      <br />
      <p>{data[1].school} - {data[1].degree} - {data[1].date}</p>
      <br />
      <p>{data[2].company} - {data[2].position} - {data[2].dateStart} to {data[2].dateEnd}</p>
      <p>{data[2].duties}</p>
    </div>
  );
};

export default App;
