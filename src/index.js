import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
//#be9ec0 #ef8200 #234d20
const Skills = [
  {
    name: "Web Design",
    level: "Advanced",
    color: "#0e0fdf",
  },
  {
    name: "HTML+CSS",
    level: "Advanced",
    color: "#234d20",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
    color: "brown",
  },
  {
    name: "React",
    level: "Advanced",
    color: "#ef8200",
  },
  {
    name: "Solidity",
    level: "Beginner",
    color: "#be9ec0",
  },
  {
    name: "Git and Github",
    level: "Advanced",
    color: "gray",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one skill component
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
        projects in the future.
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
      {Skills.map((data) => (
        <Skill name={data.name} level={data.level} color={data.color} />
      ))}

      {/* <Skill name="HTML+CSS" emoji="🤙" color="red" />
      <Skill name="JavaScript" emoji="🤙" color="brown" />
      <Skill name="Web Design" emoji="🤙" color="green" />
      <Skill name="Git and Github" emoji="💪" color="gray" />
      <Skill name="React" emoji="🤙" color="lightBlue" />
      <Skill name="Solidity" emoji="🫡" color="orange" /> */}
    </div>
  );
}

function Skill({ name, color, level }) {
  return (
    <div>
      <div>
        <div className="skill" style={{ backgroundColor: color }}>
          <span>{name}</span>
          <span>{level === "Beginner" && "🫡"}</span>
          <span>{level === "Intermediate" && "💪"}</span>
          <span>{level === "Advanced" && "🤙"}</span>
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
