# brickgram
BrickGram is a diagraming tool for Cloud infrastructure. Use it to init, plan and apply your infra leveraging Terraform and AI.

## Work in Progress
To run, open the terminal and run:
```
docker run -it --rm --name="draw" -p 8080:8080 -p 8443:8443 jgraph/drawio
```
This would run a Draw.IO image on your local machine.
Then, in a different terminal tab run:
```
cd brickgram
npm start
```
If this is your first run, don't forget to run:
```
npm install
```