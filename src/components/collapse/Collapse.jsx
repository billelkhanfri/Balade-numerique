import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./collaps.css";

function Collapse({ coup_coeurs }) {
  const [showFullText, setShowFullText] = useState(
    coup_coeurs?.map(() => false) || []
  );

  const toggleFullText = (index) => {
    const newShowFullText = [...showFullText];
    newShowFullText[index] = !newShowFullText[index];
    setShowFullText(newShowFullText);
  };

  return (
    <div style={{ margin: "auto", maxWidth: "95%" 
}}>
      <Grid
        container
        justifyContent="center"
        spacing={4}
      >
        {coup_coeurs && Array.isArray(coup_coeurs)
          ? coup_coeurs.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <Card sx={{ minWidth: 355, margin: "auto" }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ backgroundColor: "#9e0e40 "}} aria-label="recipe">
                        <IoIosHeartEmpty />
                      </Avatar>
                    }
                    title={
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 400, fontFamily: "var(--font-alt)" }}
                      >
                        {item.title}
                      </Typography>
                    }
                    subheader=""
                  />

                  <CardMedia
                    component="img"
                    height="240"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontFamily: "var(--font-alt)" }}
                      >
                        {showFullText[index]
                          ? item.text
                          : `${item.text.slice(0, 100)}...`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ justifyContent: "flex-end" }}>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => toggleFullText(index)}
                      sx={{ color: "var(--color-footer)" }} // Change the color as needed
                    >
                      {showFullText[index] ? (
                        <FaChevronUp className="fav-icon" />
                      ) : (
                        <FaChevronDown className="fav-icon" />
                      )}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
}
export default Collapse;
