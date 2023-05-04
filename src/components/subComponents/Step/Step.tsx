import * as React from 'react';
import './step.scss';

import { NavLink } from 'react-router-dom';

interface IStepProps {
    children: string;
    link: string;
    active: string;
}

const Step: React.FC<IStepProps> = ({children, link, active}) => {
  return (
    <NavLink to={link} className={`step step__${active}`}>
        {children}
      </NavLink>
  );
};

export default Step;
