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

1. Conexión a la Máquina Virtual en AWS
Para conectarte a tu máquina virtual en AWS, sigue estos pasos:

Acceso vía SSH
Utiliza el siguiente comando para conectarte a tu máquina virtual:

bash
Copy code
ssh -i ./ssh/labuser.pem ubuntu@52.23.232.31
Clave del Host
Autenticamos la conexión y agregamos la clave del host a los known_hosts.

Sistema Ubuntu
Accede a la instancia de Ubuntu 22.04 LTS, revisa el estado del sistema y las actualizaciones disponibles.

Directorios AWS
Navega al directorio /home/ubuntu/.aws y edita el archivo credentials para configurar las credenciales de AWS.
![image](https://github.com/user-attachments/assets/6cd968fa-c7d8-4d05-9d95-fd301e731622)



2. Inicialización del Proyecto AWS CDK con TypeScript
Inicialización
Ejecuta el siguiente comando para crear una aplicación base de AWS CDK en TypeScript:

bash
Copy code
cdk init app --language typescript
Comandos útiles
npm run build: Compila TypeScript a JavaScript.
npm run watch: Compila automáticamente en cada cambio.
npm run test: Ejecuta las pruebas Jest.
cdk deploy: Despliega el stack en la cuenta/region de AWS.
cdk diff: Muestra los cambios respecto al estado actual.
cdk synth: Genera la plantilla de CloudFormation.
Git Repository
Inicializa un repositorio Git y configura la rama principal (sugerencia para cambiar a main):

bash
Copy code
git init
git add .
git commit -m "Initial commit"
git branch -M main
![image](https://github.com/user-attachments/assets/97118be0-bf21-4295-acb5-f3e91c7dd8ce)

3.
Listar archivos del directorio principal (ls -l): Se utiliza para mostrar los archivos y carpetas dentro del directorio principal del proyecto junto con sus permisos, propietarios, tamaños y fechas de modificación.
Cambio de directorio y listado de archivos (cd bin && ls -l): Cambia al subdirectorio bin y lista los archivos dentro de él. En este caso, se encuentra el archivo proyecto-investigacion.ts.
Edición de archivo (nano proyecto-investigacion.ts): Se utiliza el editor de texto nano para abrir y modificar el archivo proyecto-investigacion.ts dentro del directorio bin.
![image](https://github.com/user-attachments/assets/e2df38f5-4729-4d54-baab-63d66b481224)

4.Comandos AWS CDK
Cambio de directorio (cd /home/ubuntu/proyecto-investigacion): Cambia al directorio donde se encuentra el proyecto llamado proyecto-investigacion.

Generar plantilla de bootstrap (cdk bootstrap --show-template > bootstrap-template.yaml): Utiliza AWS CDK para generar una plantilla de bootstrap y guarda esta plantilla en un archivo llamado bootstrap-template.yaml. Este archivo contiene la infraestructura básica para inicializar un entorno AWS.

Edición de archivo YAML (nano bootstrap-template.yaml): Abre el archivo bootstrap-template.yaml en el editor de texto nano para su visualización o modificación.

![image](https://github.com/user-attachments/assets/aa95f381-daa1-4e79-8122-be750895b5a0)

5.Buckets de Amazon S3
La imagen muestra la sección de "General Purpose Buckets" en la consola de Amazon S3. Aquí se listan los buckets que almacenan los datos de un proyecto en la nube. Los buckets mostrados son:

cdk-hnb659fds-assets-246795990712-us-east-1: Utilizado para almacenar activos generados por el AWS CDK (Cloud Development Kit).
cf-templates-pzimtaod5gnl-us-east-1: Buckets de plantillas CloudFormation utilizadas para definir y desplegar infraestructuras como código (IaC).
Cada bucket tiene una columna que muestra la región, la fecha de creación y un acceso al "IAM Access Analyzer", que analiza las políticas de acceso de IAM para asegurar permisos adecuados.

![image](https://github.com/user-attachments/assets/05485a58-721c-4e1e-9f22-90791d069ddb)

6.Configuración de Credenciales de AWS
Para configurar las credenciales de AWS en tu máquina local, sigue estos pasos:

Navegar al Directorio de Configuración de AWS: Utiliza el siguiente comando para moverte al directorio .aws, que es donde AWS guarda sus archivos de configuración:

bash
Copy code
cd /home/ubuntu/.aws
Listar los Archivos en el Directorio de AWS: Ejecuta el siguiente comando para ver los archivos en el directorio .aws:

bash
Copy code
ls -l
Verás dos archivos principales:

config: Contiene la configuración general de AWS.
credentials: Contiene las credenciales de acceso (clave de acceso y clave secreta).
Editar el Archivo de Credenciales: Para modificar o agregar nuevas credenciales de AWS, abre el archivo credentials usando un editor de texto como nano:

bash
Copy code
nano credentials
Dentro de este archivo, puedes agregar tus credenciales de la siguiente forma:

ini
Copy code
[default]
aws_access_key_id = TU_ACCESS_KEY_ID
aws_secret_access_key = TU_SECRET_ACCESS_KEY
![image](https://github.com/user-attachments/assets/b99d7f41-166a-4035-b037-ffaaaa3e5636)
![image](https://github.com/user-attachments/assets/c7124f07-9ed2-4f0d-9aac-c72ac6fa6386)

7.Inicialización del Entorno con AWS CDK Bootstrap
Para desplegar infraestructura utilizando AWS CDK, es necesario preparar el entorno de AWS mediante el proceso de bootstrap. Esto instala los recursos necesarios en la cuenta de AWS para que CDK pueda funcionar correctamente.

A continuación, los pasos que seguí para hacerlo:

Ejecutar AWS CDK Bootstrap con una Plantilla:

Ejecuté el siguiente comando para inicializar el entorno utilizando una plantilla personalizada en formato YAML:

bash
Copy code
cdk bootstrap --template bootstrap-template.yaml
Nota importante: Durante la ejecución, se me notificó que el uso de aws-cdk-lib.aws_ec2.MachineImage#latestAmazonLinux está deprecado y será eliminado en futuras versiones de AWS CDK. La recomendación es usar MachineImage.latestAmazonLinux2 en su lugar para asegurar compatibilidad en el futuro.
Política de Ejecución Predeterminada:

El entorno fue inicializado usando la política de ejecución predeterminada AdministratorAccess, que otorga los permisos necesarios para que CDK pueda desplegar infraestructura. Si se necesita una política de ejecución personalizada, se puede hacer mediante el argumento:

bash
Copy code
--cloudformation-execution-policies
Resultado Exitoso:

Al finalizar el proceso, recibí un mensaje que confirmaba que el entorno fue inicializado correctamente, lo que significa que ahora está listo para desplegar stacks de CDK en la región us-east-1:

bash
Copy code
Environment aws://246795990712/us-east-1 bootstrapped.
Este paso es esencial para asegurarse de que el entorno de AWS esté listo para gestionar los recursos que definiré y desplegaré usando AWS CDK. Ahora, con el entorno bootstrapped, puedo proceder a crear y desplegar mis infraestructuras como código en AWS.
![image](https://github.com/user-attachments/assets/efb8f594-ebe5-412d-a686-d1f5686db319)

8.






#Bibliografía 
*Customize AWS CDK bootstrapping - AWS Cloud Development Kit (AWS CDK) v2. *(s. f.). https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping-customizing.html

*DefaultStackSynthesizer — AWS Cloud Development Kit 2.158.0 documentation. *(2020). https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk/DefaultStackSynthesizer.html

Kulkarni, P. (2023, 26 noviembre). *Launching EC2 with AWS CDK: A Beginner’s Guide - Prajot Kulkarni - Medium. Medium. *https://medium.com/@prajotkulkarni/launching-ec2-with-aws-cdk-a-beginners-guide-fda01369a122

*Tutorial: Create your first AWS CDK app - AWS Cloud Development Kit (AWS CDK) v2.* (s. f.). https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html
