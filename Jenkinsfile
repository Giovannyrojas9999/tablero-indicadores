pipeline {
    agent any
    
    environment {
        IMAGE_NAME = "tablero-app"
    }

    stages {
        stage(' Clonar Repositorio') {
            steps {
                checkout scm
            }
        }

        stage(' Construir Imagen') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest ./app'
            }
        }

        stage(' Despliegue') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}