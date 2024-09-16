!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ProyectoInvestigacionStack } from '../lib/proyecto-investigacion-stack';

const sintetizador = new cdk.DefaultStackSynthesizer({
  cloudFormationExecutionRole: 'arn:aws:iam::246795990712:role/LabRole'  // Usar LabRole
});

const app = new cdk.App();
new ProyectoInvestigacionStack(app, 'ProyectoInvestigacionStack', {
   env: { account: '246795990712', region: 'us-east-1' },
   synthesizer: sintetizador
 });