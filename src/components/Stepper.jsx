import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// add the name of each step
const steps = ["signup/login", "profile", "concern", "appointment"];

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = () => {
    return activeStep === 1; //add which step you want to make optional
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional()) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderText = (text) => {
    return (
      <Box mt={6} mb={6} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "800",
            color: "rgb(32, 40, 45)",
            fontFamily: '"Nunito Sans", sans-serif',
            width: "90%",
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  };

  const renderButtons = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2,mb:5 }}>
        <Button
          variant="outlined"
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {isStepOptional() && (
          <Button color="secondary" onClick={handleSkip} sx={{ mr: 1 }}>
            Skip
          </Button>
        )}

        {activeStep === steps.length ? (
          <Button variant="contained" color="success" onClick={handleReset}>
            Reset
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "finish" : "Next"}
          </Button>
        )}
      </Box>
    );
  };

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional() && index === 1) {
            // also edit this line of optional index is changed
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 0 ? (
        <>
          <div>
            {renderText(
              `The user will land and proceed to 🔑 log in or ✍️ sign up`
            )}
            {renderButtons()}
          </div>
        </>
      ) : activeStep === 1 ? (
        <>
          <div>
            {renderText(
              `The user will create their profile by adding details such as their name, age, 📋 previous medical records, or gender`
            )}
            {renderButtons()}
          </div>
        </>
      ) : activeStep === 2 ? (
        <>
          <div>
            {renderText(
              `The user can provide details about their symptoms, how long they have been feeling unwell, and any pre-existing conditions. 💊`
            )}
            {renderButtons()}
          </div>
        </>
      ) : activeStep === 3 ? (
        <>
          <div>
            {renderText(
              `Voilà! 📅 Appointment is booked, and confirmation details will be dispatched from our end to user`
            )}
            {renderButtons()}
          </div>
        </>
      ) : activeStep === steps.length ? (
        <>
          {renderText(
            `The details of the patient with potential disease, figured out by AI, ML, and Deep Learning🤖, will be relayed to the concerned medical 👩‍⚕️staff at the targeted hospital 🏥.  `
          )}
          {renderButtons()}
        </>
      ) : null}
    </Box>
  );
}
