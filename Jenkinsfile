pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "tablero-app"
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                checkout scm
            }
        }

        stage(' Construir Imagen') {
            steps {
                // Usamos 'bat' para comandos de Windows
                bat "docker build -t ${IMAGE_NAME}:latest ./app"
            }
        }

        stage('Pruebas Unitarias') {
            steps {
                script {
                    echo 'Ejecutando pruebas automatizadas con Jest...'
                    bat "docker run --rm -v %WORKSPACE%/app:/source -w /tmp/app node:18-alpine sh -c \"cp -r /source/. . && npm install && npm test\""
                }
            }
        }

        stage(' Despliegue') {
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