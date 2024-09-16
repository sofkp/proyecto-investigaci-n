const cdk = require('aws-cdk-lib');
const ec2 = require('aws-cdk-lib/aws-ec2');
const iam = require('aws-cdk-lib/aws-iam');
const { Stack } = cdk;
const { Construct } = require('constructs');

class JavaStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const vpc = ec2.Vpc.fromLookup(this, 'DefaultVpc', { isDefault: true });

    const instance = new ec2.Instance(this, 'MyInstance', {
      vpc: vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux(),
      role: iam.Role.fromRoleArn(this, 'LabRole', 'arn:aws:iam::246795990712:role/LabRole', {
        mutable: false,
      }),
    });

    instance.connections.allowFromAnyIpv4(ec2.Port.tcp(22), 'SSH');
    instance.connections.allowFromAnyIpv4(ec2.Port.tcp(80), 'HTTP');

    instance.userData.addCommands(
      'yum update -y',
      'yum install -y git',
      'git clone https://github.com/utec-cc-2024-2-test/webplantilla.git /proyecto-investigacion/java/webplantilla',
      'git clone https://github.com/utec-cc-2024-2-test/websimple.git /proyecto-investigacion/java/websimple',
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

module.exports = { JavaStack };
