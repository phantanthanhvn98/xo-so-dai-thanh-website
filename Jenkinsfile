pipeline {
    agent any
    stages{
        stage('Build') {
            steps {
                script {
                    docker.build("example:master")
                }
            }
        }
    }
    stages {
        stage('Build Docker Image') {
            agent {
                kubernetes {
                    label 'your-kubernetes-label'
                }
            }
        }
    }
}
