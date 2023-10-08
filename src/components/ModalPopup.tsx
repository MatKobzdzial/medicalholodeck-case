import { Modal, Box, Typography, Grid, Button } from "@mui/material";
import { ErrorOutline, FileOpen } from "@mui/icons-material";

type ModalPopupProps = {
  open: boolean;
  handleClose: any;
  handleAcceptEULA: any;
};

const boxStyle = {
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

  "@media (max-width: 600px)": {
    width: 400,
    lineHeight: 1,
  },
};

const aStyle = {
  textDecoration: "none",
  color: "#707070",
  display: "inline-block",
};

function ModalPopup({ open, handleClose, handleAcceptEULA }: ModalPopupProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={boxStyle}>
        <Box sx={{ display: "grid", justifyItems: "center" }}>
          <ErrorOutline sx={{ fontSize: 100, color: "#707070" }} />
        </Box>
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          sx={{ color: "#707070" }}
        >
          EULA Acceptance
        </Typography>
        <Typography
          variant="subtitle1"
          lineHeight={1.2}
          fontWeight={200}
          sx={{ mt: 1, color: "#8F8F8F" }}
        >
          By pressing "I Accept" below you are indicating your agreement to the
          <a
            href="https://www.medicalholodeck.com/en/support/pdf/MH%20EULA09-2023%200201.pdf"
            target="_blank"
            rel="noreferrer"
            style={aStyle}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <strong>EULA terms</strong>
              <FileOpen fontSize="small" />
            </Box>
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
}

export default ModalPopup;
