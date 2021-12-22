1. There is at least one thing to correct. In both modules, i.e. users and secret-notes destructuring of params might be a bad practice. One needs to accept as a param an object and validate it inside. Luckily NestJS handles destructuring of null exception and the app keeps on running.

2. I didn't do all the CRUD as it is kind of boilerplate. Create and Read (all and one) pretty much suffice imho.

3. I didn't choose GraphQL as there wasn't such a requirement and it would bring another chunk of boilerplate code while a simple REST API perfectly fits the job.

4. Thus REST suggests URL for switching between decrypted and encrypted notes.

5. Docker file is provided. To get the app dockerized one needs to run in the project root dir:
`docker build -t secret-notes .` and then 
`docker run -p 3000:3000 -d secret-notes`

6. I'm completely new to kubernettes and to CI piplining so I didn't even start. I believe I'm able to follow instructions and get it up and running.
