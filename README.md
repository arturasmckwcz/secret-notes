# **Backend**:

## **In concrete terms, this means the following**:

### We ask you to build a CRUD API that allows a user to interact with an entity ‘secretNote’.

- As a user, I should be able to post that entity to an Endpoint of the API and it encrypts the value of the field ‘note’, and as well stores it in a database in an encrypted format.

- As a user I should then be able to retrieve my note in a decrypted format.

- There should also be a way for a user to specify that he wants to retrieve his note in an encrypted format.

Note: Assume that your application is only going to be used by a single user who controls the private key of the API. So only care about the entity ‘secretNote’ - User management and authentication is not part of the challenge.

Spend as much time as you personally need for it. If you are hired after the challenge, your time will be credited to you. Even if individual requirements should not be implemented in full, but you don’t feel comfortable investing more time, you should communicate that. That way we can probably still have a session about the achieved results.

## **The following basic conditions apply**:

### Implement the assignment using the following technologies

- TypeScript

- NestJS

- Database of your choice

- Work on your solution in a public Gitlab repository and use git as you would use it in the company.

- Your application should be packaged in a container and can be run using docker or other container interfaces.

- Also write an example (non-functional) kubernetes manifest, for deploying your application OR an example gitlab-ci.yaml for building your application.

#

## **TODO**:

### The stub of nest.js

- [x] install
- [x] try things

### Prototype

- [ ] dev secretNote model
- [ ] wire db
- [ ] dev CRUD functions
- [ ] add encryption
- [ ] add auth

### Deployment

- [ ] containers
- [ ] kubernetes?
