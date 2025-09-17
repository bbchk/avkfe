# Live World 

## DEV GOALS P1
* Introduce logging library (inspect how one,that's most popular build), maybe we can write one if it is very easy

## DEV GOALS P100
* Create dependency graph for this project

## Overview

The **Live World ** is a e-commerce front-end application. TODO...

### Tech stack

front-end jv

vanilla.js
redis
logging system

back-end separate application 

RoR
psql

### Dependent Services

- **TODO**  
  Repository: [link](https://git.internetbrands.com/smb-portal/smb-portal.git)

## Development

### Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker](https://www.docker.com/)
- [Make](https://www.gnu.org/software/make/)

## Installation & Configuration

1. **Clone the Repository**

   ```sh
   git clone TODOJ 
   cd TODO 
   ```

2. **Run the Automated Setup**

   ```bash
   make setup
   ```

   After the setup is complete, the application will be running and accessible.

3. **Verify the application is running**
   - **API:** `http://localhost:8080`
   - **Swagger Docs:** `http://localhost:8080/api-docs`


### Configuration

After running `make setup`, the environment files `.env` from defaults in Makefile and `./src/.env` from `./src/.env.example` created. 
These copied `.env` files are gitignored, allowing you to modify them as needed.

> **NOTE:** After change in any env file, to restart the application container with changed configuration, please run:

```bash
make up
```

### Testing

To run tests, please use: 

```sh
TODO
```
