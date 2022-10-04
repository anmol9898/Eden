import "./App.css";
import Box from "@mui/material/Box";
import Head from "./components/head/Head";
import Name from "./components/body/Name";
import Configuration from "./components/body/Configuration";
import Workspace from "./components/body/Workspace";
import Launch from "./components/body/Launch";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import logo from "./assets/logo.png";
import { useState } from "react";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState("Eren");
  const steps = ["", "", "", ""];
  const getNumberOfSteps = () => {
    return 4;
  };
  const getStepContent = (step) => {
    if (step === 0) return <Name stepfn={handleNext} nameSet={setName} />;
    else if (step === 1) return <Workspace stepfn={handleNext} />;
    else if (step === 2) return <Configuration stepfn={handleNext} />;
    else if (step === 3) return <Launch stepfn={handleNext} name={name} />;
  };
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
        }}
      >
        <img src={logo}></img>

        <Box
          sx={{ width: "40%" }}
          // sm={{ width: "60%" }}
          // lg={{ width: "60%" }}
          // md={{ width: "40%" }}
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <div>{getStepContent(activeStep)}</div>
      </Box>
    </div>
  );
}

export default App;
