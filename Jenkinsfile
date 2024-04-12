pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                sh 'ls'
            }
        }
        stage('Deploy') {
            agent {
                kubernetes {
                  yaml '''
                    apiVersion: v1
                    kind: Pod
                    spec:
                      containers:
                      - name: maven
                        image: maven:alpine
                        command:
                        - cat
                        tty: true
                      - name: node
                        image: node:16-alpine3.12
                        command:
                        - cat
                        tty: true
                    '''
                }
            }
        }
    }
}
