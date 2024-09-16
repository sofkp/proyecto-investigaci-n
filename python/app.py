#!/usr/bin/env python
import os
import aws_cdk as cdk
from proyecto_investigacion_stack import ProyectoInvestigacionStack

# Configurar el sintetizador para usar el rol LabRole
sintetizador = cdk.DefaultStackSynthesizer(
    cloud_formation_execution_role_arn='arn:aws:iam::246795990712:role/LabRole'
)

app = cdk.App()
ProyectoInvestigacionStack(app, "ProyectoInvestigacionStack",
    env=cdk.Environment(account="246795990712", region="us-east-1"),
    synthesizer=sintetizador
)

app.synth()
