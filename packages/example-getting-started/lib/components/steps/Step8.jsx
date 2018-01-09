import React from 'react';
import { Components, registerComponent, Collections } from 'meteor/vulcan:core';

const text = `
## Seeding Data

`;

const Step6 = () => (
  <Components.Step step={6} text={text}>
    <ul>
      {Collections.map((c, i) => <li key={i}><code>{c.options.collectionName}</code></li>)}
    </ul>
  </Components.Step>
);

registerComponent('Step6', Step6);
