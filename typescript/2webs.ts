import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class ProyectoInvestigacionStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, {
      ...props,
    });

    const vpc = ec2.Vpc.fromLookup(this, 'DefaultVpc', { isDefault: true });

    const instance = new ec2.Instance(this, 'MyInstance', {
      vpc: vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.SMALL),
      machineImage: ec2.MachineImage.latestAmazonLinux(),
      role: iam.Role.fromRoleArn(this, 'LabRole', 'arn:aws:iam::246795990712:role/LabRole', {
        mutable: false,
      }),
    });

    instance.connections.allowFromAnyIpv4(ec2.Port.tcp(22), 'Permitir tráfico SSH');
    instance.connections.allowFromAnyIpv4(ec2.Port.tcp(80), 'Permitir tráfico HTTP');

    instance.userData.addCommands(
      'yum update -y',
      'yum install -y git',
      'git clone https://github.com/utec-cc-2024-2-test/webplantilla.git /proyecto-investigacion/webplantilla',
      'git clone https://github.com/utec-cc-2024-2-test/websimple.git /proyecto-investigacion/websimple',
      'ls -l',
    );
    
    new cdk.CfnOutput(this, 'InstancePublicIp', {
      value: instance.instancePublicIp,
    });
    new cdk.CfnOutput(this, 'WebSimpleURL', {
      value: `http://${instance.instancePublicIp}/websimple`,
      description: 'URL de websimple',
    });

    new cdk.CfnOutput(this, 'WebPlantillaURL', {
      value: `http://${instance.instancePublicIp}/webplantilla`,
      description: 'URL de webplantilla',
    });
  }
}
