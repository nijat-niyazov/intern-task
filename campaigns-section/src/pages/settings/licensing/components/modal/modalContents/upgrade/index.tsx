import { RadioChangeEvent } from 'antd';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { value } from '~/redux/stepsSlice';
import {
  AddExtend4,
  AddNew2,
  AddNew3,
  Extende2,
  Extende3,
  UpgradeOptions,
  Web2,
  Web4,
} from './steps';
import Button from '~/components/button';

type Step = {
  header?: string;
  component: React.ReactElement;
  onClick?: () => void;
};

const LicenseUgrade: FC = () => {
  const [selected, setSelected] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const onChange = (e: RadioChangeEvent) => setSelected(e.target.value);

  const licenseValue = useSelector(value);

  const handleCurrentStep = (num: number) => setCurrentStep(p => p + num);

  const stepComponents: Step[][] = [
    [
      {
        header: 'How many device license do you want to add ?',
        component: <AddNew2 />,
      },
      { component: <AddNew3 /> },
    ],
    [
      {
        header: 'How long do you want to extend license ?',
        component: <Extende2 />,
      },
      { component: <Extende3 /> },
    ],
    [
      {
        header: 'How many device license do you want to add ?',
        component: <AddNew2 />,
      },
      {
        header: 'How long do you want to extend license ?',
        component: <Extende2 />,
      },
      { component: <AddExtend4 /> },
    ],
    [
      {
        header: 'Select the package you want to add',
        component: <Web2 />,
      },

      { component: <Web4 /> },
    ],
  ];

  const activeSteps = stepComponents[selected];
  let currentComponent = activeSteps?.[currentStep - 1];

  const stepsCount = activeSteps.length + 1;
  const isLastStep = activeSteps.length === currentStep;

  return (
    <div className="p-5">
      {/* Body */}

      <div className="m-auto flex flex-col gap-y-10 items-center">
        {currentStep === 0 ? (
          <UpgradeOptions onChange={onChange} selected={selected} />
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="font-bold mb-5 text-lg text-[#65676b]">
              {currentComponent?.header ?? 'You are almost done!'}
            </h1>
            {currentComponent?.component}
          </div>
        )}
      </div>

      {/* Body */}

      {/* Footer */}

      <div className="flex mt-10 items-center justify-between">
        <span>
          Step {currentStep + 1} of {stepsCount}
        </span>
        <div className="flex items-center justify-end gap-2">
          <Button
            disabled={currentStep === 0}
            label="Previous"
            type="default"
            onClick={() => handleCurrentStep(-1)}
          />

          <Button
            label={isLastStep ? 'Submit' : 'Continue'}
            disabled={licenseValue < 1}
            type="primary"
            onClick={() => {
              handleCurrentStep(1);
              {
                currentComponent?.onClick && currentComponent.onClick();
              }
            }}
          />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default LicenseUgrade;
