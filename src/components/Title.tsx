import { Box, Typography } from "@mui/material";

const titleBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  marginTop: "2rem",
};

const logoStyle = {
  width: "130px",
  height: "130px",
  content: `url("data:image/svg+xml,%3Csvg height='100%25' width='100%25' viewBox='0 0 500 500' fill='%23aaaaaa' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='250' cy='250' r='240' stroke='%23aaaaaa' stroke-width='5' fill='none'/%3E%3Cpolygon points='85 258 217 100 265 292 79 371'%3E%3C/polygon%3E%3Cpolygon points='230 127 281 77 339 323 91 380 91 374 274 297'%3E%3C/polygon%3E%3Cpolygon points='295 108 339 71 403 352 105 384 348 330'%3E%3C/polygon%3E%3C/svg%3E")`,
  filter:
    "brightness(0) saturate(100%) invert(36%) sepia(0%) saturate(57%) hue-rotate(174deg) brightness(103%) contrast(80%)",
};

function Title() {
  return (
    <Box sx={titleBoxStyle}>
      <Box sx={logoStyle}></Box>
      <Typography variant="h2" component="h1" fontWeight={100}>
        Newsroom
      </Typography>
      <Typography
        variant="h4"
        component="h3"
        fontWeight={100}
        sx={{ textAlign: "center" }}
      >
        Updates, Events + Conferences, Publications
      </Typography>
    </Box>
  );
}

export default Title;
