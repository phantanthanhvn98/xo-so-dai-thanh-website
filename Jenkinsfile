pipeline {
 agent {
      kubernetes {
          label 'your-kubernetes-label'
      }
  }
  stages {
      stage('Build Docker Image') {
          steps {
              script {
                  docker.build("example:master")
              }
          }
      }
  }
}
