pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'docker-hub-creds' // Replace with your Jenkins Docker Hub credentials ID
        IMAGE_NAME = 'smita694/realworldweb'       // Replace with your Docker Hub repo
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
                    docker.build("smita694/realworldweb:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', 'docker-hub-creds') {
                        docker.image("smita694/realworldweb:latest").push()
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

