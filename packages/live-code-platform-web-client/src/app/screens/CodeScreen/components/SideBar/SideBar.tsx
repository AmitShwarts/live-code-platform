import './SideBar.style.scss';
import { Button } from "@/app/common/components";

export const SideBar = () => {
  return (
    <div id="side-bar">
      <div className="section">
        <Button label="RUN" style={{width: '100%'}} />
      </div>

      <div className="section">
        <div className="title">Output</div>
        <div id="output-text">Run some code to see your output!</div>
      </div>
    </div>
  );
};
