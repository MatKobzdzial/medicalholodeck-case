import { Box, CardMedia, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import ResponsiveAppBar from "../components/ResponsiveNavBar";
import Footer from "../components/Footer";
import React from "react";

function UseCase() {
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered]: [any, any] = React.useState();

  return (
    <div className="use-case">
      <div>
        <ResponsiveAppBar
          open={open}
          setOpen={setOpen}
          hovered={hovered}
          setHovered={setHovered}
        />
        <div
          style={{ maxWidth: 1000, margin: "0 auto" }}
          className={open && hovered !== "Logo" ? "open-nav" : ""}
        >
          <Typography
            component="h1"
            fontWeight={400}
            paddingTop={8}
            sx={{ fontSize: "38px" }}
          >
            Training Germany's Next Top Surgeons
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            fontWeight={500}
            marginTop={2}
          >
            The University Hospital Bonn is Teaching Surgery in Virtual Reality
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            fontWeight={400}
            marginTop={3}
          >
            UKB is using Medicalholodeck's{" "}
            <a
              href="https://www.medicalholodeck.com/en/import-edit-discuss-dicom-in-virtual-reality-medical-imaging-xr/"
              className="anchor"
            >
              Medical Imaging XR
            </a>{" "}
            to train germany's next top surgeons in virtual reality. By using VR
            young med students can collaboratively study and work on real
            patient's cases in a fully immersive 3D environment. Training and
            teaching in VR safes time and raises education quality.
          </Typography>
          <CardMedia
            image="https://www.medicalholodeck.com/images/stories/VR-Projekt-Lehre-header-600.jpg"
            sx={{ height: 550, borderRadius: 1, marginTop: 4 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            marginTop={4}
          >
            <Typography component="p" sx={{ fontSize: "24px" }}>
              It sounds futuristic and looks unusual at first glance. Four
              medical students and an assistant doctor stand at the front of the
              lecture hall, equipped with VR headsets on their heads. Everyone
              looks around a bit uncoordinated, turning every now and then and
              putting their hands in the air around them. They can no longer
              perceive the real space. Since the summer semester 2021, Dr. Jan
              Arensmeyer and Philipp Feodorovici from the Clinic for General,
              Visceral, Thoracic and Vascular Surgery at the UKB have already
              given this special kind of seminar.
            </Typography>
            <Typography sx={{ fontSize: "24px" }} component="p">
              Together with senior physician PD Dr. Philipp Lingohr and Senior
              Physician Dr. Nils Sommer from the teaching team at the surgical
              clinic has been working on this since they received funding from
              the state of North Rhine-Westphalia for the virtual teaching pilot
              project. With the support of Prof. Joachim Schmidt, Head of
              Thoracic Surgery at the UKB, and in close cooperation with an
              innovative software company from Zurich / Switzerland, the VR tool
              has been readjusted and improved again and again since the first
              use of the VR tool in the last semester. In the meantime, VR
              technology is reliably in use almost every Wednesday in the
              surgery lecture hall and is continuously being further developed
              despite the low budget.
            </Typography>
            <Typography sx={{ fontSize: "24px" }} component="p">
              Complex 2D representations from imaging processes - such as MRT or
              CT - can be experienced three-dimensionally in the virtual world.
              The students learn the anatomy of the skeleton, the vessels or the
              internal organs, artificially worked up three-dimensionally,
              mostly from the textbook. In the advanced part of the study, the
              focus is on the interpretation of the diagnostic imaging (X-ray,
              CT, MRT) and presents major challenges, especially for the
              inexperienced observer. “We can now close this gap. As the
              students of the University of Bonn view and process the
              three-dimensional reconstruction of the imaging in real time in
              the VR-Space and thus simulate the detailed view of the surgeon on
              the body of a patient, they can develop and learn a good
              understanding of the real anatomy and the various clinical
              pictures the surgical treatment approach much faster, ”says Dr.
              Arensmeyer.{" "}
            </Typography>
            <Typography sx={{ fontSize: "24px" }} component="p">
              And the fun factor is not neglected when using the VR glasses
              teaching. The students need little training time and learn to use
              images intuitively in the VR space in a relaxed atmosphere.
              According to initial evaluations, well over 90 percent of the
              students who have taken part so far want work with VR glasses to
              be permanently integrated into everyday clinical practice and
              teaching.
            </Typography>
            <Typography sx={{ fontSize: "24px" }} component="p">
              In the near future, it should also be possible to experience
              virtual interventions using the tool without risk and to meet
              virtually with users from other locations. "At the moment, the VR
              units are still tied to a specific location, but our vision for
              the future is that we can also offer participation in VR lessons
              at any location, e.g. from home. Experts or lecturers from
              different clinics could also meet in the virtual world to discuss
              a patient's case and plan surgery, with the students participating
              as observers. 'Remote learning', says Feodorovici, can thereby
              also gain a high status in medical training ”.
            </Typography>
            <Typography sx={{ fontSize: "24px" }} component="p">
              <a
                href="https://www.ukbnewsroom.de/assistenzaerzte-bringen-virtual-reality-in-den-hoersaal/"
                rel="noreferrer"
                target="_blank"
                className="anchor"
              >
                Read more on the website of the UKB
                <ArrowForwardIos />
              </a>
            </Typography>
          </Box>
          <hr className="hr" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography fontSize={33} component="h2" fontWeight={500}>
              About Medicalholodeck
            </Typography>
            <Typography sx={{ fontSize: "24px" }} component="p">
              Medicalholodeck is the platform for medical teamwork in virtual
              reality.{" "}
              <a
                className="anchor"
                href="https://www.medicalholodeck.com/en/import-edit-discuss-dicom-in-virtual-reality-medical-imaging-xr/"
              >
                Medical Imaging XR
              </a>
              ,{" "}
              <a
                className="anchor"
                href="https://www.medicalholodeck.com/en/human-anatomy-atlas-in-virtual-reality-dissection-master-xr/"
              >
                Dissection Master XR
              </a>
              , and{" "}
              <a
                className="anchor"
                href="https://www.medicalholodeck.com/en/zygote-3D-anatomy-in-virtual-reality-anatomy-master-xr/"
              >
                Anatomy Master XR
              </a>{" "}
              are available. The suite of apps is used for 3D surgical planning
              in and outside the operating room and medical education in teams
              in VR.
            </Typography>
            <Typography>
              <a
                className="anchor"
                href="https://www.medicalholodeck.com/en/store/index.html#downloads"
              >
                Download Free Trial
              </a>
            </Typography>
            <hr className="hr" />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            marginBottom={4}
          >
            <Typography fontSize={33} component="h2" fontWeight={500}>
              Contact
            </Typography>
            <Box>
              <Typography sx={{ fontSize: "24px" }} component="p">
                <a className="anchor" href="mailto:info@medicalholodeck.com">
                  info@medicalholodeck.com
                </a>
              </Typography>
              <Typography sx={{ fontSize: "24px" }} component="p">
                <a className="anchor" href="https://www.medicalholodeck.com/">
                  www.medicalholodeck.com
                </a>
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "24px" }}
              component="p"
              lineHeight={1.4}
            >
              <strong>Medicalholodeck AG</strong>
              <br />
              Technoparkstr. 1
              <br />
              8005 Zurich
              <br />
              Switzerland
            </Typography>
          </Box>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default UseCase;
