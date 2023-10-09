import React from "react";
import "./App.css";
import MediaCard from "./components/MediaCard";
import mediaCards from "./data";
import { Grid } from "@mui/material";
import Title from "./components/Title";
import UseCase from "./pages/UseCase";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const gridStyle = {
  maxWidth: "800px",
  display: "grid",
  gap: 2,
  gridTemplateColumns: "repeat(auto-fit, minmax(390px, 1fr))",
  margin: "20px auto",
  justifyItems: "center",
};

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Title />
                <Grid container sx={gridStyle}>
                  {mediaCards.map((mediaCard) => {
                    return (
                      <Grid
                        item
                        key={mediaCard.title}
                        maxWidth={390}
                        padding={0}
                      >
                        <MediaCard
                          img={mediaCard.img}
                          type={mediaCard.type}
                          title={mediaCard.title}
                          description={mediaCard.description}
                          link={mediaCard.link}
                        ></MediaCard>
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            }
          />
          <Route path="use-case" element={<UseCase />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
