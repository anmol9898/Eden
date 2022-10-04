import "./App.css";
import Box from "@mui/material/Box";
import Name from "./components/body/Name";
import Configuration from "./components/body/Configuration";
import Workspace from "./components/body/Workspace";
import Launch from "./components/body/Launch";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import logo from "./assets/logo.png";
import { useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState("Eren");
  const steps = ["", "", "", ""];
  const getStepContent = (step) => {
    if (step === 0) return <Name stepfn={handleNext} nameSet={setName} />;
    else if (step === 1) return <Workspace stepfn={handleNext} />;
    else if (step === 2) return <Configuration stepfn={handleNext} />;
    else if (step === 3) return <Launch stepfn={handleNext} name={name} />;
  };
  const theme = createTheme({typography: {fontSize: 60}});
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  return (
    <div className="App">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem"
        }}
      >
        <img src={logo}></img>
        <Box sx={{ width: "30%"}}>
        <ThemeProvider theme={theme}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          </ThemeProvider>
        </Box>
        <div>{getStepContent(activeStep)}</div>
      </Box>
    </div>
  );
}

export default App;
