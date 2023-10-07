import { Typography } from "@mui/material";

function Title() {
  return (
    <div className="title">
      <div className="logo"></div>
      <Typography variant="h2" component="h1" fontWeight={100}>
        Newsroom
      </Typography>
      <Typography variant="h4" component="h3" fontWeight={100}>
        Updates, Events + Conferences, Publications
      </Typography>
    </div>
  );
}

export default Title;
