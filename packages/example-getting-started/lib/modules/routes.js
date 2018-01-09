import { addRoute } from 'meteor/vulcan:core';

addRoute({ name: 'step0', path: '/', componentName: 'Step0' });
addRoute({ name: 'step1', path: '/step/1', componentName: 'Step1' });
// addRoute({ name: 'step2', path: '/step/2', componentName: 'Step2' });  // <- uncomment me!
// addRoute({ name: 'step3', path: '/step/3', componentName: 'Step3' });  // <- write route to step 3 here
addRoute({ name: 'step4', path: '/step/4', componentName: 'Step4' }); // <- write route to step 4 here
addRoute({ name: 'step5', path: '/step/5', componentName: 'Step5' });
addRoute({ name: 'step6', path: '/step/6', componentName: 'Step6' });
addRoute({ name: 'step7', path: '/step/7', componentName: 'Step7' });
// addRoute({ name: 'step8', path: '/step/8', componentName: 'Step8' });
