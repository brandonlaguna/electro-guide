import MainLayout from "@/components/MainLayout";
import { StepTest } from "@/components/StepTest";
import { useExcercise } from "./hook/useExcercise";

const Excercise = () => {
  const { renderStep, handleBackStep, handleNextStep } = useExcercise();
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

export default Excercise;
