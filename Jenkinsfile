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
        stage('Build Docker Image') {
            agent {
                kubernetes {
                    label 'example-master'
                }
            }
            steps {
                echo "health check"
            }
        }
    }
}
