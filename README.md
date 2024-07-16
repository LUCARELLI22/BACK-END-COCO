# Mi proyecto en React : "GESTOR DE PRODUCTOS "

 # DESCRIPCION : El siguiente proyecto fue creado con la idea de gestionar productos en general , utilizando para inicializar el programa un sistema de registro y login  , en el programa los usuarios pueden crear , editar , elimiar y visualizar sus productos de una forma cómoda y práctica .

 # TECNOLOGIAS : se trabajó utilizando lenguaje javascript , se utiliza un sistema de validación de usuarios con email y contraseñas , se utilizo JWT (jason web token) para asi obtener un sistema seguro ,se utilizó tambien node js , enrutadores express , se han colocado las rutas para los controladores en general , se utilizó un sistema de validación de productos , también para su carga , eliminación y actualización . 


 # AUTOR : Lucas Alfredo Melo / 2024 LM DEV. Todos los derechos reservados.- 



# CREAR TABLAS SQL : 

# PRODUCTOS : 
# CREATE TABLE `productos` (
#  `id` int(190) NOT NULL,
#  `titulo` varchar(255) NOT NULL,
# `precio` decimal(10,2) NOT NULL,
#  `stock` int(11) NOT NULL,
# `descripcion` text DEFAULT NULL,
#   `codigo` int(200) NOT NULL
# ) 

# USUARIOS :
#   CREATE TABLE `usuarios` (
#  `email` varchar(255) NOT NULL,
#  `password` varchar(255) NOT NULL
#  )

