import "./Media.css";
import { MiniDrawer } from "../../MiniDrawer";

function Media({ datum }) {
  return (
    <div>
      <MiniDrawer />
      <div id="media-page">
        {datum.map((data) => (
          <img className="mediadisp" src={data.img} />
        ))}
      </div>
    </div>
  );
}

export { Media };
