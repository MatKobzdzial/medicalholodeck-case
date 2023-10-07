/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ButtonBase, Modal, Box, Button, Grid } from "@mui/material";
import { FileOpen, ErrorOutline } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";

type MediaCardProps = {
  img: string;
  type: string;
  title: string;
  description?: string;
  link: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  padding: "50px 50px",
};

export default function MediaCard({
  img,
  type,
  title,
  description,
  link,
}: MediaCardProps) {
  const [open, setOpen] = useState(false);

  let renderedTitle = title.length < 66 ? title : title.slice(0, 66) + "...";
  let renderedDescription = "";
  if (description) {
    renderedDescription =
      description?.length < 140
        ? description
        : description.slice(0, 140) + "...";
  }

  function requireEULA() {
    return type.toLowerCase().includes("use case");
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleAcceptEULA() {
    setOpen(false);
    window.open(link, "_self");
  }

  const showModal = requireEULA() && (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div style={{ display: "grid", justifyItems: "center" }}>
          <ErrorOutline sx={{ fontSize: 100, color: "#707070" }} />
        </div>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          fontWeight={600}
          sx={{ color: "#707070" }}
        >
          EULA Acceptance
        </Typography>
        <Typography
          id="modal-modal-description"
          variant="subtitle1"
          lineHeight={1.2}
          fontWeight={200}
          sx={{ mt: 2, color: "#8F8F8F" }}
        >
          By pressing "I Accept" below you are indicating your agreement to the
          <a
            href="https://www.medicalholodeck.com/en/support/pdf/MH%20EULA09-2023%200201.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#707070",
              display: "inline-block",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <strong>EULA terms</strong>
              <FileOpen fontSize="small" />
            </div>
          </a>
        </Typography>
        <Grid container justifyContent={"space-between"} marginTop={4}>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleAcceptEULA}
              color="success"
            >
              Accept
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClose} color="error" variant="outlined">
              Decline
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );

  return (
    <>
      {showModal}
      <a href={requireEULA() ? "javascript:void(0)" : link}>
        <ButtonBase
          disableRipple
          sx={{ textAlign: "left" }}
          onClick={handleOpen}
        >
          <Card
            sx={{
              maxWidth: 390,
              height: 400,
              borderRadius: 3,
              border: "1px solid #ddd",
              transition: "ease-in 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              cursor: "pointer",
            }}
          >
            <CardMedia sx={{ height: 223 }} image={img} title={title} />
            <CardContent>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ textTransform: "uppercase", marginBottom: 2 }}
              >
                {type}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                lineHeight={1.1}
                marginBottom={0.4}
                fontWeight={500}
              >
                {renderedTitle}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {renderedDescription}
              </Typography>
            </CardContent>
          </Card>
        </ButtonBase>
      </a>
    </>
  );
}
