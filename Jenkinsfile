pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Files') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '/usr/local/bin/docker build -t college-event:v1 .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh '''
                /usr/local/bin/docker rm -f college-event-container || true
                /usr/local/bin/docker run -d --name college-event-container -p 8081:80 college-event:v1
                '''
            }
        }

        stage('Deploy Kubernetes') {
            steps {
                sh '''
                kubectl apply -f deployment.yaml
                kubectl apply -f service.yaml
                '''
            }
        }

        stage('Verify Kubernetes') {
            steps {
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}