from aws_cdk import (
    Stack,
    aws_ec2 as ec2,
    aws_iam as iam,
    CfnOutput
)
from constructs import Construct

class PythonStack(Stack):

    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        vpc = ec2.Vpc.from_lookup(self, "DefaultVpc", is_default=True)

        instance = ec2.Instance(self, "MyInstance",
            vpc=vpc,
            instance_type=ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE2, ec2.InstanceSize.SMALL),
            machine_image=ec2.MachineImage.latest_amazon_linux(),
            role=iam.Role.from_role_arn(self, "LabRole", "arn:aws:iam::246795990712:role/LabRole", mutable=False)
        )

        instance.connections.allow_from_any_ipv4(ec2.Port.tcp(22), "Allow SSH")
        instance.connections.allow_from_any_ipv4(ec2.Port.tcp(80), "Allow HTTP")

        instance.user_data.add_commands(
            "yum update -y",
            "yum install -y git",
            "git clone https://github.com/utec-cc-2024-2-test/webplantilla.git /proyecto-investigacion/webplantilla",
            "git clone https://github.com/utec-cc-2024-2-test/websimple.git /proyecto-investigacion/websimple",
            "ls -l"
        )

        CfnOutput(self, "InstancePublicIp", value=instance.instance_public_ip)
        
        CfnOutput(self, "WebSimpleURL", 
            value=f"http://{instance.instance_public_ip}/websimple",
            description="URL de websimple"
        )

        CfnOutput(self, "WebPlantillaURL", 
            value=f"http://{instance.instance_public_ip}/webplantilla",
            description="URL de webplantilla"
        )
