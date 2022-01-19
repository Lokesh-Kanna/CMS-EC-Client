import "./Profile.css";
import { MiniDrawer } from "../../MiniDrawer";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Profile({ datum, remData }) {
  return (
    <div>
      <MiniDrawer />
      <div id="profile-page">
        {datum.map((data, index) => {
          return (
            <CardDisp
              title={data.title}
              type={data.type}
              auth={data.auth}
              rating={data.yourRating}
              summary={data.summary}
              recommend={data.recommend}
              img={data.img}
              id={index}
              remData={remData}
              datum={datum}
            />
          );
        })}
        <CardDisp />
      </div>
    </div>
  );
}

function CardDisp({
  title,
  type,
  auth,
  rating,
  summary,
  recommend,
  img,
  id,
  remData,
  datum,
}) {
  const navigate = useNavigate();
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
          <div className="card-actions">
            <Button
              onClick={() => {
                navigate("/edit-post/" + id);
              }}
              variant="contained"
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                remData(datum.filter((data, index) => index != id));
              }}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Profile };
