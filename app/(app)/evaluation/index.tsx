import { P } from "@/components/Common/Typography";
import MainLayout from "@/components/MainLayout";
import { useEvaluation } from "./hook/useEvaluation";
import React from "react";
import { StepTest } from "@/components/StepTest";

const Evaluation = () => {
  const { renderStep, handleBackStep, handleNextStep, evaluation } =
    useEvaluation(1);
  return (
    <MainLayout>
      {renderStep !== null && (
        <StepTest
          id={renderStep.id}
          title={renderStep.title}
          subTitle={renderStep.subTitle}
          content={renderStep.content}
          images={renderStep.images}
          onBack={() => handleBackStep()}
          onNext={() => handleNextStep()}
          disableBack={renderStep.disableBack}
          disableNext={renderStep.disableNext}
        />
      )}
    </MainLayout>
  );
};

export default Evaluation;
