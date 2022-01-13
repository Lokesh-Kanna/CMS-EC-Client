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
              img={data.img}
            />
          );
        })}
        <CardDisp />
      </div>
    </div>
  );
}

function CardDisp({ title, type, auth, rating, summary, recommend, img }) {
  return (
    <div class="card mb-3" style={{ maxWidth: 1000 }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={img}
            class="img-fluid rounded-start"
            style={{ maxHeight: 300, minWidth: 200, maxWidth: 200 }}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              A {type} by {auth}
            </p>
            <p class="card-text">
              My rating for this {type} is {rating}/10
            </p>
            <p class="card-text">{summary}</p>
            <p class="card-text">
              Will I recommend this {type}? - {recommend}
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
