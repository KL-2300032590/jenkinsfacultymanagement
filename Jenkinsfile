pipeline {
    agent any

    stages {

        // ===== FRONTEND BUILD =====
        stage('Build Frontend') {
            steps {
                dir('facultyreactapp') {
                    sh '''
                    #!/bin/bash

                    # Add Node to PATH
                    export PATH=$PATH:/opt/homebrew/bin

                    # Sanity check
                    echo "Using Node: $(which node)"
                    echo "Using npm: $(which npm)"

                    # Build steps
                    npm install || { echo "npm install failed"; exit 1; }
                    npm run build || { echo "npm run build failed"; exit 1; }
                    '''
                }
            }
        }

        // ===== FRONTEND DEPLOY =====
        stage('Deploy Frontend to Tomcat') {
            steps {
                sh '''
                TOMCAT_DIR="/Users/pardhasaradhireddy/apache-tomcat-10.1.43/webapps/reactfacultyapi"
                
                # Stop Tomcat
                /Users/pardhasaradhireddy/apache-tomcat-10.1.43/bin/shutdown.sh || true
                
                # Remove old deployment
                rm -rf "$TOMCAT_DIR"
                
                # Create fresh directory
                mkdir -p "$TOMCAT_DIR"
                
                # Copy build output (Vite outputs to dist/)
                cp -R facultyreactapp/dist/* "$TOMCAT_DIR/"
                
                # Start Tomcat
                /Users/pardhasaradhireddy/apache-tomcat-10.1.43/bin/startup.sh
                '''
            }
        }

        // ===== BACKEND BUILD =====
        stage('Build Backend') {
            steps {
                dir('FacultyDemo') {
                    sh '''
                    #!/bin/bash

                    # Add Maven to PATH
                    export PATH=$PATH:/Users/pardhasaradhireddy/maven/bin

                    # Sanity check
                    echo "Using Maven: $(which mvn)"
                    mvn -v || { echo "Maven not found"; exit 1; }

                    # Build backend
                    mvn clean package || { echo "Maven build failed"; exit 1; }
                    '''
                }
            }
        }

        // ===== BACKEND DEPLOY =====
       // ===== BACKEND DEPLOY =====
stage('Deploy Backend to Tomcat') {
    steps {
        sh '''
        WEBAPPS_PATH="$TOMCAT_HOME/webapps"

        # Clean old deployment
        rm -f "$WEBAPPS_PATH/Facultymanagement.war"
        rm -rf "$WEBAPPS_PATH/Facultymanagement"

        # Copy new WAR
        cp FacultyDemo/target/Facultymanagement.war "$WEBAPPS_PATH/"
        '''
    }
}

    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Pipeline Failed.'
        }
    }
}
