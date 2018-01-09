import { Routes, Components, Collections } from 'meteor/vulcan:core';

const containsChild = (component, childName) => {
  return !!component && component().props.children && component().props.children.type.name === childName;
}

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
    return containsChild(Components.Step5, 'ModalTrigger');
  },

  step5: () => {
    return containsChild(Components.Step5, 'Schema');
  },

  step6: () => {
    return Collections.find(c => c.options.collectionName === 'Movies');
  },

  step7: () => {
    return containsChild(Components.Step7, 'GraphQLSchema');
  }

}

export default checks;