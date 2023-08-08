import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="./meekah.jpg" alt="myLook" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1> Abdulakeem Babatunde Bolarinwa </h1>
      <p>
        A Software Developer who specializes in Frontend development and leans
        heavily towards this area of expertise. I have extensive knowledge of
        React.js and its ecosystem, including React Router, and Redux with a
        deep understanding of how to build reusable components, manage state and
        optimize performance. Through my passion for frontend development and
        commitment to excellence, I have demonstrated my ability to deliver
        outstanding results in a dynamic and fast-paced environment. I look
        forward to leveraging my skills and experience to drive new and exciting
        projects in the future{" "}
        <span role="img" aria-labelledby="emoji">
          🤙
        </span>
        .
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" emoji="🤙" color="red" />
      <Skill name="JavaScript" emoji="🤙" color="brown" />
      <Skill name="Web Design" emoji="🤙" color="green" />
      <Skill name="Git and Github" emoji="🤙" color="gray" />
      <Skill name="React" emoji="🤙" color="lightBlue" />
      <Skill name="Solidity" emoji="🤙" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <div>
        <div className="skill" style={{ backgroundColor: props.color }}>
          <span> {props.name}</span>
          <span> {props.emoji}</span>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
