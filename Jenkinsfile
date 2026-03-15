pipeline{
    agent any
    environment{
        PORT "8040"
        CONTAINER_NAME "node-app"
        IMAGE_NAME "ahmedkabil/node-app"
    }

    stages{
        stage("remove the old container"){
            steps{
                sh "docker container rm -f ${CONTAINER_NAME} || true"
            }
        }
        stage("build the docker image"){
            steps{
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage("deploy the app"){
            steps{
                sh "docker container run -d -e PORT=${PORT} --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}:latest"
            }
        }
        stage("cleaning the workspace"){
            steps{
                cleanWS()
            }
        }
    }
    post{
        success{
            echo "the app is now runnig in http://${Node_IP}:${PORT}"
        }
    }
}