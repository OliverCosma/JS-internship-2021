import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles/Home.module.css'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Radio,  RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  


const personalDetails = () => {
    const [value, setValue] = React.useState('home');
    function getSteps() {
        return ['Choose delivery ', 'Tell us the address', 'Confirm order'];
      }
    
      const handleChange = (event) => {
        setValue(event.target.value);
      };
      function getStepContent(stepIndex) {
        switch (stepIndex) {
          case 0:
            return  (
    <FormControl component="fieldset">
      <FormLabel component="legend">Delivery</FormLabel>
      <RadioGroup aria-label="Delivery" name="radio_name" value={value} onChange={handleChange}>
        <FormControlLabel name="home" value="home" control={<Radio />} label="At your home" />
        <FormControlLabel name="pickup" value="pickup" control={<Radio />} label="Pick up from Plopilor" />
      </RadioGroup>
    </FormControl>
    )
    
          case 1:
            return  (
                <form className={classes.root} noValidate autoComplete="off">
                  <Input placeholder="Name" inputProps={{ 'aria-label': 'description' }} />
                  <Input placeholder="Address"  inputProps={{ 'aria-label': 'description' }} />
                  <Input placeholder="Phone number"  inputProps={{ 'aria-label': 'description' }} />
                </form>
              );
          case 2:
            return 'Here should be your order';
          default:
            return 'Unknown stepIndex';
        }
      }
    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  
  const handleNext2 = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 2);
  }; 


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={styles.bigDiv}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                color="primary"
              >
                Back
              </Button>
              <Button variant="contained" color="secondary" onClick={
                  (value==="home")?handleNext:handleNext2}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default personalDetails
