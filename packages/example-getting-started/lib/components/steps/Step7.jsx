import React from 'react';
import { Components, registerComponent, Collections } from 'meteor/vulcan:core';

const text = `
## The GraphQL Schema

Collection schemas are used to make sure your data is properly formatted before inserting it in the database, but they also have one more important purpose: generating your *GraphQL* schema. 

[GraphQL](http://graphql.org) is the technology used to power Vulcan's data layer, in other words make your server-side data available to the browser. 

Every GraphQL API endpoint needs a schema to indicate what data should be made available to clients, and in Vulcan that *GraphQL* schema is automatically generated for you from the *JavaScript* schema you wrote in Step 5. 

To visualize it, just find this component's code in \`lib/components/steps/Step7.jsx\` and uncomment the \`Components.GraphQLSchema\` component.
`;

const after = `
`;

const Step7 = () => (
  <Components.Step step={7} text={text} after={after}>
    <Components.GraphQLSchema/>
  </Components.Step>
);

registerComponent('Step7', Step7);
