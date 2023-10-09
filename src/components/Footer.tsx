/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Container, Typography } from "@mui/material";
import {
  Twitter,
  LinkedIn,
  YouTube,
  Instagram,
  Facebook,
  Reddit,
} from "@mui/icons-material";

function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#414141",
          color: "#ffffff",
          paddingTop: 8,
          paddingBottom: 4,
        }}
      >
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            rowGap: 4,
          }}
        >
          <ul>
            <p>The Apps</p>
            <li>Medical Imaging XR</li>
            <li>Dissection Master XR</li>
            <li>Anatomy Master XR</li>
            <li>TeamXR</li>
            <li>RecordXR</li>
          </ul>
          <ul>
            <p>Download and Buy</p>
            <li>Download Apps</li>
            <li>Buy</li>
          </ul>
          <ul>
            <p>Support</p>
            <li>Tutorials and Manuals</li>
            <li>Book a Demo</li>
            <li>Get Help</li>
          </ul>
          <ul>
            <p>About</p>
            <li>About Medicalholodeck</li>
          </ul>
          <ul>
            <p>News and Events</p>
            <li>Newsroom</li>
          </ul>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#2c2c2c",
          color: "#ffffff",
          paddingTop: 4,
          paddingBottom: 8,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <Typography>
            <a>Contact</a>
          </Typography>
          <Box>
            <Typography
              sx={{
                textDecoration: "underline",
                fontWeight: 600,
                marginBottom: 2,
              }}
            >
              Newsletter
            </Typography>
            <Box sx={{ display: "flex" }}>
              <input placeholder="Email address" />
              <button className="input-button">Sign Up</button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 4 }}>
            <a>
              <LinkedIn />
            </a>
            <a>
              <YouTube />
            </a>
            <a>
              <Twitter />
            </a>
            <a>
              <Instagram />
            </a>
            <a>
              <Facebook />
            </a>
            <a>
              <Reddit />
            </a>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default Footer;
