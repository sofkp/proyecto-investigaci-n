#!/usr/bin/env node

require('source-map-support/register');

const cdk = require('aws-cdk-lib');
const { JavaStack } = require('../lib/java-stack');

const sintetizador = new cdk.DefaultStackSynthesizer({
  cloudFormationExecutionRole: 'arn:aws:iam::246795990712:role/LabRole'
});

const app = new cdk.App();
new JavaStack(app, 'JavaStack', {
  env: { account: '246795990712', region: 'us-east-1' },
  synthesizer: sintetizador
});


