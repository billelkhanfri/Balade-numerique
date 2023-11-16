import React from "react";
import "./markerCard.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function MarkerCard({ selectedMarker }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        zIndex: 1000,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bottom: "0",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column"}}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {selectedMarker.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              aria-label="Open in Google Maps"
              onClick={() => {
                const url = `https://www.google.com/maps/dir/?api=1&destination=${selectedMarker.position[0]},${selectedMarker.position[1]}`;
                window.open(url, "_blank");
              }}
              className="card-content-button"
            >
              Embaraquer
            </button>
          </Box>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={selectedMarker.image}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default MarkerCard;
