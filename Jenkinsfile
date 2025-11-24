pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "tablero-app"
    }

    stages {
        stage('Limpiar Workspace') {
            steps {
                // Limpia el directorio de trabajo antes de empezar
                cleanWs()
            }
        }

        stage('Clonar Repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Construir Imagen') {
            steps {
                // Usamos 'bat' para comandos de Windows
                bat "docker build --no-cache -t ${IMAGE_NAME}:latest ./app"
            }
        }

        stage('Pruebas Unitarias') {
            steps {
                script {

                    bat "docker run --rm ${IMAGE_NAME}:latest node -e \"console.log('Pruebas simuladas exitosas');\""
                }
            }
        }

        stage('Despliegue') {
            steps {
                // Comandos 'bat' para reiniciar contenedores
                bat "docker-compose down"
                bat "docker-compose up -d"
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline finalizado correctamente.'
        }
        failure {
            echo 'El Pipeline falló. Revisa los logs.'
        }
    }
}