import { Routes, Components } from 'meteor/vulcan:core';

const checks = {

  step1: () => {
    return !!Routes.step2;
  },

  step2: () => {
    return Components.Step3 && Routes.step3
  },

  step3: () => {
    return !!Components.Step4 && Routes.step4
  },

  step4: () => {
    const c = Components.Step4;
    return !!c && c().props.children && c().props.children.type.name === 'ModalTrigger'
  }

}

export default checks;