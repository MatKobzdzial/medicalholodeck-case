/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ButtonBase } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ModalPopup from "./ModalPopup";

type MediaCardProps = {
  img: string;
  type: string;
  title: string;
  description?: string;
  link: string;
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
    <ModalPopup
      open={open}
      handleClose={handleClose}
      handleAcceptEULA={handleAcceptEULA}
    />
  );

  return (
    <>
      {showModal}
      {/* Find different way of void-linking */}
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
