import "./Configuration.css";
import PersonIcon from "@mui/icons-material/Person";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Typography, Container, CssBaseline } from "@mui/material";
import { useState } from "react";

const Configuration = (props) => {
  const [selected, setSelected] = useState("my");
  const tiers = [
    {
      title: "For myself",
      description: ["Write Better. Think", "more clearly.Stay", "organized."],
    },
    {
      title: "With my team",
      description: ["Wikis, docs, tasks &", "projects, all in one", "place."],
    },
  ];
  const handleSubmit = (event) => {
    event.preventDefault(props);
    props.stepfn();
    const data = new FormData(event.currentTarget);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handleBoxClick = (e) => {
    console.log(e.currentTarget.id);
    setSelected(e.currentTarget.id);
  };
  const text1 = (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}
      >
        <Avatar>
          <PersonIcon />
        </Avatar>
        <Typography paragraph align="center" fontSize="2rem" fontWeight={700}>
          {tiers[0].title}
        </Typography>
        {tiers[0].description.map((it) => {
          return (
            <Typography paragraph align="center" size="medium" color="#64708A">
              {it}
            </Typography>
          );
        })}
      </Box>
    </>
  );
  const text2 = (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Avatar>
          <Diversity3Icon />
        </Avatar>
        <Typography paragraph align="center" fontSize="2rem" fontWeight={700}>
          {tiers[1].title}
        </Typography>
        {tiers[1].description.map((it) => {
          return (
            <Typography paragraph align="center" size="medium" color="#64708A">
              {it}
            </Typography>
          );
        })}
      </Box>
    </>
  );
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Typography paragraph align="center" fontSize="2rem" fontWeight={700}>
          How are you planning to use Eden?
        </Typography>
        <Typography paragraph align="center" size="medium" color="#64708A">
          We'll streamline your setup experience accordingly.
        </Typography>
        <Box sx={{ flexGrow: 1, marginTop: "4rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Item>
                <button className="myButton" id="my" onClick={handleBoxClick}>
                  {text1}
                </button>
              </Item>
            </Grid>
            <Grid item xs={6} md={6}>
              <Item>
                <button className="myButton" id="team" onClick={handleBoxClick}>
                  {text2}
                </button>
              </Item>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Button
            variant="contained"
            size="medium"
            type="submit"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Workspace
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default Configuration;
