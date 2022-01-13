import * as React from "react";
import { MiniDrawer } from "../../MiniDrawer";

function Dashboard({ datum }) {
  return (
    <div>
      <MiniDrawer />
      <div>
        {datum.map((data) => {
          return (
            <CardDisp
              title={data.title}
              type={data.type}
              auth={data.auth}
              rating={data.yourRating}
              summary={data.summary}
              recommend={data.recommend}
            />
          );
        })}
        <CardDisp />
      </div>
    </div>
  );
}

function CardDisp({ title, type, auth, rating, summary, recommend }) {
  return (
    <div class="card">
      <div class="card-header">{title}</div>
      <div class="card-body">
        <h5 class="card-title">
          {type} by {auth}
        </h5>
        <p class="card-text">{summary}</p>
        <p class="card-text">Would I recommend this? - {recommend}</p>
        <p>My rating for this is {rating}/10</p>
      </div>
    </div>
  );
}

export { Dashboard };
