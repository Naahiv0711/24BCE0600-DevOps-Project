pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/Applications/Docker.app/Contents/Resources/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    }

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
                sh '''
                    export PATH=/usr/local/bin:/Applications/Docker.app/Contents/Resources/bin:/opt/homebrew/bin:$PATH
                    docker version
                    docker build -t college-event:v1 .
                '''
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh '''
                    export PATH=/usr/local/bin:/Applications/Docker.app/Contents/Resources/bin:/opt/homebrew/bin:$PATH

                    docker rm -f college-event-container || true

                    docker run -d \
                        --name college-event-container \
                        -p 8081:80 \
                        college-event:v1
                '''
            }
        }

        stage('Deploy Kubernetes') {
            steps {
                sh '''
                    export PATH=/usr/local/bin:/Applications/Docker.app/Contents/Resources/bin:/opt/homebrew/bin:$PATH

                    kubectl apply -f deployment.yaml
                    kubectl apply -f service.yaml
                '''
            }
        }

        stage('Verify Kubernetes') {
            steps {
                sh '''
                    export PATH=/usr/local/bin:/Applications/Docker.app/Contents/Resources/bin:/opt/homebrew/bin:$PATH

                    kubectl get pods
                    kubectl get svc
                '''
            }
        }

    }
}