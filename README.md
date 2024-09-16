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

1. Conexión a la Máquina Virtual en AWS🖥️
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

Para configurar las credenciales de AWS en tu máquina local

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



2. Inicialización del Proyecto AWS CDK con TypeScript🖥️
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

3.Listar archivos del directorio principal🖥️

(ls -l): Se utiliza para mostrar los archivos y carpetas dentro del directorio principal del proyecto junto con sus permisos, propietarios, tamaños y fechas de modificación.
Cambio de directorio y listado de archivos (cd bin && ls -l): Cambia al subdirectorio bin y lista los archivos dentro de él. En este caso, se encuentra el archivo proyecto-investigacion.ts.
Edición de archivo (nano proyecto-investigacion.ts): Se utiliza el editor de texto nano para abrir y modificar el archivo proyecto-investigacion.ts dentro del directorio bin.
![image](https://github.com/user-attachments/assets/e2df38f5-4729-4d54-baab-63d66b481224)

4.Comandos AWS CDK🖥️
Cambio de directorio (cd /home/ubuntu/proyecto-investigacion): Cambia al directorio donde se encuentra el proyecto llamado proyecto-investigacion.

Generar plantilla de bootstrap (cdk bootstrap --show-template > bootstrap-template.yaml): Utiliza AWS CDK para generar una plantilla de bootstrap y guarda esta plantilla en un archivo llamado bootstrap-template.yaml. Este archivo contiene la infraestructura básica para inicializar un entorno AWS.

Edición de archivo YAML (nano bootstrap-template.yaml): Abre el archivo bootstrap-template.yaml en el editor de texto nano para su visualización o modificación.

![image](https://github.com/user-attachments/assets/aa95f381-daa1-4e79-8122-be750895b5a0)

5.Buckets de Amazon S3🖥️
La imagen muestra la sección de "General Purpose Buckets" en la consola de Amazon S3. Aquí se listan los buckets que almacenan los datos de un proyecto en la nube. Los buckets mostrados son:

cdk-hnb659fds-assets-246795990712-us-east-1: Utilizado para almacenar activos generados por el AWS CDK (Cloud Development Kit).
cf-templates-pzimtaod5gnl-us-east-1: Buckets de plantillas CloudFormation utilizadas para definir y desplegar infraestructuras como código (IaC).
Cada bucket tiene una columna que muestra la región, la fecha de creación y un acceso al "IAM Access Analyzer", que analiza las políticas de acceso de IAM para asegurar permisos adecuados.

![image](https://github.com/user-attachments/assets/05485a58-721c-4e1e-9f22-90791d069ddb)

6.Inicialización del Entorno con AWS CDK Bootstrap🖥️
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

7.Verificación de Stacks Desplegados en AWS CloudFormation🖥️
Después de inicializar el entorno de AWS CDK mediante el proceso de bootstrap, es importante revisar los stacks creados para confirmar que el entorno está listo para desplegar aplicaciones. Aquí está lo que hice:

Acceder al Panel de AWS CloudFormation: Ingresé al servicio de AWS CloudFormation para revisar los stacks creados. CloudFormation se encarga de gestionar los recursos desplegados mediante plantillas definidas en AWS CDK.

Stacks Desplegados: En el panel se pueden observar los siguientes stacks con el estado CREATE_COMPLETE, lo que indica que fueron creados exitosamente:

CDKToolkit: Este stack incluye los recursos necesarios para desplegar aplicaciones de AWS CDK en este entorno. Fue creado automáticamente durante el proceso de bootstrap.
ProyectoInvestigacionStack: Este stack corresponde a los recursos específicos que definí para el proyecto de investigación que estoy desplegando. También muestra el estado CREATE_COMPLETE, lo que indica que la infraestructura se ha desplegado correctamente.
Detalles del Stack CDKToolkit:

Stack ID: Identificador del stack en CloudFormation, que incluye la región y la cuenta de AWS donde fue desplegado.
Descripción: Este stack contiene los recursos básicos necesarios para desplegar aplicaciones de CDK en este entorno.
Estado: El estado final CREATE_COMPLETE confirma que el proceso de creación del stack ha finalizado sin problemas.
Confirmación del Despliegue Exitoso: El estado de los stacks indica que tanto la infraestructura básica de CDKToolkit como los recursos específicos del proyecto fueron creados satisfactoriamente, lo que permite continuar con el despliegue de la aplicación o servicio utilizando AWS CDK.

![image](https://github.com/user-attachments/assets/283568be-b554-4773-9497-4d7ee90b757c)

8. Despliegue de la infraestructura con CDK🖥️
En este paso, ejecuto el comando cdk deploy para desplegar la infraestructura definida en AWS. El proceso de despliegue incluye los siguientes elementos:

Compilación y Publicación de Artefactos: CDK construye la pila (ProyectoInvestigacionStack) y publica los artefactos necesarios para que CloudFormation pueda desplegar los recursos.

Advertencias: Aparece una advertencia indicando que la API MachineImage#latestAmazonLinux está en desuso y será eliminada en futuras versiones. Esto no detiene el despliegue, pero se recomienda actualizarla a MachineImage.latestAmazonLinux.

Errores de Credenciales: Durante el proceso, se generan advertencias sobre credenciales que no pueden asumir roles específicos. Esto sucede porque las credenciales actuales no tienen los permisos necesarios para algunos roles en la cuenta de AWS, pero el despliegue puede continuar.

Revisión de Cambios de Seguridad: CDK muestra una lista de cambios potencialmente sensibles en las reglas de los grupos de seguridad, solicitando confirmación para proceder. En este caso, se permiten conexiones SSH (Puerto 22) y HTTP (Puerto 80) desde cualquier dirección IPv4.

Ejecución del Despliegue: Tras confirmar la intención de aplicar estos cambios, CDK inicia la creación del stack usando CloudFormation, lo que aprovisiona todos los recursos en AWS.

Este paso es crucial, ya que asegura que todos los componentes de la infraestructura estén disponibles en la nube para su uso.
![image](https://github.com/user-attachments/assets/6e5f5383-35d0-4849-b4a3-065fb49df22e)

9. Despliegue Completo y Resultados🖥️
Una vez completado el despliegue de la infraestructura con cdk deploy, se muestra la siguiente información:

Dirección IP Pública de la Instancia EC2:

La IP pública de la instancia desplegada es 3.80.123.244. Esta IP puede usarse para acceder al servidor.
URLs de los Servicios Web Desplegados:

La plantilla web desplegada puede accederse desde: http://3.80.123.244/webplantilla
Una segunda aplicación web simple puede accederse desde: http://3.80.123.244/websimple
Stack ARN:

El ARN del stack es arn:aws:cloudformation:us-east-1:246795990712:stack/ProyectoInvestigacionStack/f53e3120-73c5-11ef-a22c-128c7975f89d, que identifica de forma única el stack en AWS.
Tiempo de Despliegue:

El despliegue completo tomó aproximadamente 157 segundos, incluyendo la creación de todos los recursos necesarios en AWS.
Este detalle finaliza la explicación del despliegue en el Paso 9 y proporciona información clave sobre los recursos y accesos a los servicios web.
![image](https://github.com/user-attachments/assets/6a00168d-c32b-4508-9777-ac0222ffa33c)


10.Realizacion🖥️
La imagen muestra que has creado una pila de AWS CloudFormation llamada "ProyectoInvestigacionStack." El estado de la pila es "CREATE_COMPLETE," lo que significa que se ha creado con éxito. Este es el paso final en el que confirmas que todos los recursos de AWS que definiste se han implementado correctamente.

![image](https://github.com/user-attachments/assets/3d78a60d-2c6a-4994-bd77-20f7ea09d335)
Después del despliegue exitoso de la infraestructura con CDK, se puede verificar la instancia EC2 creada accediendo al panel de control de EC2 en la consola de AWS. En este caso, se han desplegado y gestionado varias máquinas virtuales (MV), como se muestra en la lista:

Instancia ProyectoInvestigacionStack:

ID de la instancia: i-015fe55803a19fb04.
Tipo de instancia: t2.small, que tiene más capacidad que las otras dos instancias t2.micro.
Estado: Running (en ejecución), con todos los checks de estado (2/2) pasados exitosamente.
IP Pública: 3.80.123.244, la cual se puede usar para acceder al servicio desplegado en esta instancia.
Otras instancias (para desarrollo y pruebas):

Se observan otras dos instancias (MV Pruebas y MV Desarrollo) con diferentes configuraciones, pero no forman parte directa del stack desplegado.
Este paso es importante para confirmar que la infraestructura está operativa y accesible.
![image](https://github.com/user-attachments/assets/1ae85226-9ee5-4832-b71e-c24ce2b9659a)



JAVA 

1.Inicialización del Proyecto AWS CDK
Este proyecto fue inicializado utilizando AWS CDK con JavaScript. Se configuró un entorno de desarrollo que permite definir la infraestructura en AWS mediante código.

Pasos Realizados:
Creación del Proyecto: Se utilizó el comando cdk init app --language javascript para crear la estructura base del proyecto en JavaScript.
Configuración Automática: El comando generó archivos esenciales, como cdk.json, e instaló automáticamente las dependencias necesarias.
Uso de Git: Se inicializó un repositorio Git para el control de versiones.
Comandos Útiles:
npm run test: Ejecuta pruebas unitarias.
npx cdk deploy: Despliega la infraestructura definida a la cuenta de AWS.
npx cdk diff: Compara los cambios entre la infraestructura desplegada y la nueva configuración.
npx cdk synth: Genera la plantilla de CloudFormation a partir del código.
Este proyecto utiliza AWS CDK para implementar la infraestructura como código (IaC), facilitando la gestión y despliegue de recursos en AWS.

![image](https://github.com/user-attachments/assets/e94c1011-daf1-4236-b99c-56327bf87635)

Este proyecto define y despliega la infraestructura en AWS usando AWS CDK con JavaScript. Los archivos dentro de bin/ y lib/ contienen la lógica principal para la creación y configuración de recursos de AWS.

![image](https://github.com/user-attachments/assets/0c600c11-9de7-46bd-a57c-a9132af34150)



2. La imagen muestra la salida del comando cdk bootstrap --template bootstrap-template.yaml, que se usa para inicializar el entorno de despliegue de AWS Cloud Development Kit (CDK). Esto crea los recursos necesarios en la cuenta de AWS para permitir despliegues de aplicaciones definidas mediante CDK.
   ![image](https://github.com/user-attachments/assets/c512e1d4-4dcf-475a-b990-5468198da99e)
   ![image](https://github.com/user-attachments/assets/c2fba690-bf3e-4525-bb5a-7a921fa415de)
  La imagen muestra el resultado del despliegue de una pila (stack) en AWS usando CloudFormation a través de CDK (Cloud Development Kit)
![image](https://github.com/user-attachments/assets/a83d00b3-35cf-4df4-9d7e-47f68e4de142)
3.La creacion fue exitosa
![image](https://github.com/user-attachments/assets/7c5d2bab-f060-4cc1-9cde-3a5151aa3182)
4.La imagen muestra la ejecución del comando cdk destroy, utilizado para eliminar la pila de recursos de AWS creada anteriormente con CDK. Aquí te explico los detalles clave:

Advertencia: Se muestra una advertencia similar a las anteriores, indicando que la API MachineImage#latestAmazonLinux está en desuso, recomendando usar MachineImage.latestAmazonLinux2 en su lugar.

Confirmación de eliminación: El sistema te pregunta si deseas eliminar la pila JavaStack, a lo que respondes con "y" (sí).

Destrucción de la pila: El proceso comienza a destruir los recursos asociados con la pila JavaStack. Aunque muestra una advertencia de que no se pueden asumir ciertas credenciales, el proceso continúa de todos modos.

Resultado: La pila JavaStack ha sido eliminada correctamente, con el estado final marcado como destroyed (destruido).

En resumen, has eliminado con éxito la pila y los recursos que habías creado previamente en AWS.
![image](https://github.com/user-attachments/assets/2299f525-f99f-4e7f-80de-dfb16bf0c50c)








#Bibliografía    
*Customize AWS CDK bootstrapping - AWS Cloud Development Kit (AWS CDK) v2. *(s. f.). https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping-customizing.html

*DefaultStackSynthesizer — AWS Cloud Development Kit 2.158.0 documentation. *(2020). https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk/DefaultStackSynthesizer.html

Kulkarni, P. (2023, 26 noviembre). *Launching EC2 with AWS CDK: A Beginner’s Guide - Prajot Kulkarni - Medium. Medium. *https://medium.com/@prajotkulkarni/launching-ec2-with-aws-cdk-a-beginners-guide-fda01369a122

*Tutorial: Create your first AWS CDK app - AWS Cloud Development Kit (AWS CDK) v2.* (s. f.). https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html
