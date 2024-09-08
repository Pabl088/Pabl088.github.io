import style from "./Skills.module.css";
import TechStack from "./TechStack/TechStack.jsx";
import ToolStack from "./ToolStack/ToolStack.jsx";

function Skills() {
  return (
    <div className={style.container}>
      <TechStack />
      <ToolStack />
    </div>
  );
}

export default Skills;
