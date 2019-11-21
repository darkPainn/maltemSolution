# maltemSolution
Solution for the movie library. This file contains step-by-step instructions on how to download and run the project on a Windows environment.

Note: the instructions assume that you have the following tools installed: git, maven, node and angular-cli

#Steps:

1. Press on windows button or click on the windows icon and type `cmd` then enter.
2. In the command line interface type `git clone https://github.com/darkPainn/maltemSolution`
3. Once the download is complete, type `cd maltemSolution/back` this folder contains a RESTFul API to fullfill the back-end requirements
4. Run the command: `mvn spring-boot:run` to launch the API
5. Go back to the root of the whole project with `cd ..`
6. Go into the front-end part by `cd front`
7. Install the dependendencies of Angular project by `npm install`
8. Finally launch the application in the browser by `ng serve --open --port 4200`
