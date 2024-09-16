# Proyecto Investigación : AWS CDK
Introducción 🚀
En la era de la computación en la nube, la eficiencia y la escalabilidad son clave para el desarrollo y la implementación de aplicaciones. Amazon Web Services (AWS) ofrece una amplia gama de herramientas para facilitar estos objetivos, y una de las más destacadas es el AWS Cloud Development Kit (AWS CDK). 🌥️🛠️

¿Qué es el AWS Cloud Development Kit (AWS CDK)? 🤔
AWS CDK es un marco de desarrollo de infraestructura como código (IaC) que permite a los desarrolladores definir recursos de AWS usando lenguajes de programación populares como TypeScript, JavaScript, Python, Java y C#. 💻🔧 Esto hace que la configuración y el manejo de recursos en la nube sean mucho más accesibles y eficientes, permitiendo a los desarrolladores centrarse en la lógica de sus aplicaciones en lugar de en configuraciones complejas.

Beneficios del AWS CDK 🎯
Lenguajes de Programación Populares: Utiliza lenguajes que ya conoces, lo que simplifica el proceso de desarrollo y mejora tu productividad. 💬💡
Abstracciones de Alto Nivel: Ofrece constructores y patrones predefinidos para simplificar la definición de recursos complejos. 🏗️🔩
Integración con AWS Services: Soporte completo para todos los servicios de AWS, alineando tus recursos con las mejores prácticas. 🌐📊
Desarrollo Basado en Código: Facilita la reutilización de componentes y la integración con sistemas de control de versiones. 📂🔄
Implementación: Creación de una Máquina Virtual 🖥️


En esta implementación, vamos a utilizar AWS CDK para crear una máquina virtual (EC2) en la nube de AWS. Esta instancia contendrá dos aplicaciones web: websimple y webplantilla. La aplicación websimple ofrecerá una configuración básica y funcional, mientras que webplantilla añadirá una capa extra de personalización y estructura a la implementación. 🌐📦

![image](https://github.com/user-attachments/assets/6d2d41f1-52bd-4a31-abd9-04c3fed00a60)

1)Conexión a la Máquina Virtual en AWS
Acceso vía SSH: Usamos el comando ssh -i ./ssh/labuser.pem ubuntu@52.23.232.31 para conectarnos a la máquina virtual en AWS.
Clave del host: Autenticamos la conexión y agregamos la clave del host a los known hosts.
Sistema Ubuntu: Acceso a una instancia de Ubuntu 22.04 LTS, revisión de estado del sistema y actualizaciones disponibles.
Directorios AWS: Navegamos al directorio /home/ubuntu/.aws y editamos el archivo credentials para configurar credenciales de AWS.


#Bibliografía 
*Customize AWS CDK bootstrapping - AWS Cloud Development Kit (AWS CDK) v2. *(s. f.). https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping-customizing.html

*DefaultStackSynthesizer — AWS Cloud Development Kit 2.158.0 documentation. *(2020). https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk/DefaultStackSynthesizer.html

Kulkarni, P. (2023, 26 noviembre). *Launching EC2 with AWS CDK: A Beginner’s Guide - Prajot Kulkarni - Medium. Medium. *https://medium.com/@prajotkulkarni/launching-ec2-with-aws-cdk-a-beginners-guide-fda01369a122

*Tutorial: Create your first AWS CDK app - AWS Cloud Development Kit (AWS CDK) v2.* (s. f.). https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html
