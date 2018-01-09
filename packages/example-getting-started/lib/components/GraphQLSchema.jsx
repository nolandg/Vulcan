import React from 'react';
import { registerComponent, GraphQLSchema } from 'meteor/vulcan:core';
import checks from '../modules/checks';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';

console.log(GraphQLSchema)

const GraphQLSchemaComponent = ({}) => (
  <div className="graphql-schema">
    <pre>
      <code>{GraphQLSchema.finalSchema[0]}</code>
    </pre>
  </div>
);

registerComponent('GraphQLSchema', GraphQLSchemaComponent);
