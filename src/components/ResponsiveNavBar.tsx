/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import {
  LinkedIn,
  Facebook,
  YouTube,
  Reddit,
  Twitter,
  Instagram,
  Filter1,
  Filter2,
  Filter3,
  Filter4,
  Filter5,
  Filter6,
} from "@mui/icons-material";

const pages = [
  { title: "Logo", elements: [""] },
  {
    title: "Store",
    elements: ["Buy", "Lessons", "Download Apps", "Functions"],
  },
  {
    title: "The Apps",
    elements: [
      "Medical Imaging XR",
      "Dissection Master XR",
      "Anatomy Master XR",
      "RecordXR",
      "TeamXR",
      "Cloud Rendering",
    ],
  },
  {
    title: "Support",
    elements: [
      "Tutorials and Manulas",
      "Technical Specification",
      "FAQ",
      "Changelog",
      "EULA",
    ],
  },
  {
    title: "About",
    elements: ["Newsroom", "Careers", "Contact"],
  },
];

function ResponsiveAppBar({
  open,
  setOpen,
  hovered,
  setHovered,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
  hovered: any;
  setHovered: any;
}) {
  let renderedElements = pages
    .filter((page) => {
      return page.title === hovered;
    })
    .map((page) => {
      return page.elements;
    });

  return (
    <AppBar
      position="fixed"
      className={`appbar ${open ? "open" : ""}`}
      onMouseLeave={() => setOpen(false)}
      sx={{
        boxShadow: "none",
        backgroundColor:
          open && hovered !== "Logo"
            ? "rgba(45, 45, 45, 0.90)"
            : "rgba(45, 45, 45, 0.75)",
        backdropFilter: "blur(10px)",
        transition: "ease-in-out 0.2s",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          className={`toolbar`}
          disableGutters
          variant="dense"
          sx={{
            display: "flex",
            gap: 4,
            width: 700,
            minHeight: 38,
            margin: "0 auto",
            transition: "ease-in-out 0.2s",
          }}
        >
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {pages.map((page) => (
              <Button
                className="button"
                onMouseEnter={() => {
                  setOpen(true);
                  setHovered(page.title);
                }}
                disableRipple
                key={page.title}
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  display: "block",
                  padding: 0,
                  fontWeight: 400,
                  textTransform: "none",
                  transition: "ease-in-out 0.2s",
                  "&:hover": {
                    color: "rgba(255, 255, 255)",
                  },
                }}
              >
                {page.title === "Logo" ? (
                  <div className="logo-div"></div>
                ) : (
                  page.title
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      {hovered === "Logo" || (
        <Container className={open ? "visible" : "hidden"}>
          <Box
            sx={{
              width: 800,
              margin: "0 auto",
              color: "#eee",
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              fontWeight={500}
              sx={{ marginLeft: -1 }}
              marginBottom={2}
            >
              {hovered}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.1,
                marginBottom: 6,
              }}
            >
              {!renderedElements[0]
                ? ""
                : renderedElements[0].map((element) => {
                    return <Typography className="link">{element}</Typography>;
                  })}
            </Box>
            <Box marginBottom={1}>
              <Typography
                variant="caption"
                component="p"
                sx={{ color: "#bbb" }}
                marginBottom={1}
              >
                Languages
              </Typography>
              <Box sx={{ display: "flex", gap: 1.4 }}>
                <Filter1 fontSize="large" className="link" />
                <Filter2 fontSize="large" className="link" />
                <Filter3 fontSize="large" className="link" />
                <Filter4 fontSize="large" className="link" />
                <Filter5 fontSize="large" className="link" />
                <Filter6 fontSize="large" className="link" />
              </Box>
            </Box>
            <Box marginBottom={6}>
              <Typography
                variant="caption"
                component="p"
                sx={{ color: "#bbb" }}
                marginBottom={1}
              >
                Social Media
              </Typography>
              <Box sx={{ display: "flex", gap: 1.4 }}>
                <LinkedIn fontSize="large" className="link" />
                <YouTube fontSize="large" className="link" />
                <Twitter fontSize="large" className="link" />
                <Instagram fontSize="large" className="link" />
                <Facebook fontSize="large" className="link" />
                <Reddit fontSize="large" className="link" />
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </AppBar>
  );
}
export default ResponsiveAppBar;
