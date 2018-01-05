import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const text = `
## Core Components

Now that you have an idea of Vulcan's basic features, let's dive into what *really* makes Vulcan special: how it handles **data**. 

In Vulcan, each type of data belongs to its own **collection** (or **model** if you're more familiar with that term). So you could have a \`Posts\` collection, a \`Comments\` collection, a \`Movies\` collection, and so on. 

And each collection features a [schema](http://docs.vulcanjs.org/schemas.html) that defines what a post, comment, or movie should look like (in other words, what fields it should have).

So let's create a schema right now! 
`;

const Step4 = () => (
  <Components.Step step={4} text={text}>
    {/*
    <Components.ModalTrigger component={<a href="#">Click Me!</a>}>
      <div>Hello World!</div>
    </Components.ModalTrigger>
    */}
  </Components.Step>
);

registerComponent('Step5', Step5);
