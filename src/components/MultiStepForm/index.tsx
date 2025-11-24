"use client";
import React from "react";

import clsx from "clsx";
import { Check, MoveLeft, MoveRight } from "lucide-react";

import Button from "../Button";
import Typography from "../Typography";

import { StyledDiv } from "./style";

type Step = {
  id: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
};

type MultiStepForm = {
  steps: Array<Step>;
  onSubmit: () => void;
  loader: boolean;
};

const MultiStepForm = ({ steps, onSubmit, loader }: MultiStepForm) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const isLastStep = currentStep === steps.length;

  const handleNext = () => {
    if (isLastStep) {
      onSubmit();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <StyledDiv className="multi-step-form-wrapper">
      <div className="multi-step-form-header-content">
        {steps.map((step, i) => {
          const currentIndex = i + 1;
          const active = currentStep >= currentIndex;
          const activeStep = currentIndex === currentStep;
          const completedStep = currentStep > currentIndex;
          return (
            <div
              className={clsx("multi-step-header", {
                active,
                "current-step": activeStep,
              })}
              key={step.id}
            >
              <div className="multi-step-icon-wrapper">
                {completedStep ? <Check /> : step.icon}
              </div>
              <Typography as="p" className="multi-step-form-label">
                {step.label}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="multi-step-form-content-wrapper">
        {steps[currentStep - 1]?.component}
      </div>

      <div className="multi-step-form-btn-wrapper">
        <Button
          variant="outline"
          onClick={() => setCurrentStep((s) => s - 1)}
          disabled={currentStep === 1}
          className="prev-btn"
        >
          <MoveLeft /> Previous
        </Button>
        <Button onClick={handleNext} loading={loader}>
          {isLastStep ? "Submit" : "Next"} <MoveRight />
        </Button>
      </div>
    </StyledDiv>
  );
};

export default MultiStepForm;
