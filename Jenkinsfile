pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
    }
    stage('Build') {
            agent {
                docker {
                    image 'test:123'
                    reuseNode true
                }
            }
            steps {
                sh 'ls'
            }
        }
}
