pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-creds' // Replace with your Jenkins Docker Hub credentials ID
        IMAGE_NAME = 'instantprachi/my-app'       // Replace with your Docker Hub repo
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                  branches: [[name: 'main']],              // Replace with your branch
                  userRemoteConfigs: [[
                      url: 'https://github.com/SmitaParale/Ci-Cd-Pipeline-Project.git',
                      credentialsId: 'github-pat'        // Replace with your GitHub credentials ID
                  ]]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', "${DOCKERHUB_CREDENTIALS}") {
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build and push successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}

