import { P } from "@/components/Common/Typography";
import MainLayout from "@/components/MainLayout";
import { StepTest } from "@/components/StepTest";
import { View } from "react-native";
import { BasicDefinition } from "./Contents";
import useIntroduction from "./hook/useIntroduction";

const Introduction = () => {
  const { responseAnswer, renderStep, handleBackStep, handleNextStep } =
    useIntroduction();

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

export default Introduction;
