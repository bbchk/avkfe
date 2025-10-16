# AVAK GROUP Front-end

* include sizes to specs
* need to update olx 
* router lacks support for nested routes and also dynamic routes
* set subdomains for both accum and fertilizers 
* make buy button send bought items to viber as message, so we reach out back
* add accessories (charging systems, etc. etc.), look up what akum sells
* make header stick when scrolling up and dissapear when scrolling down
* Прийом відпрацьованих свинцевих АКБ додати
* scrape akum for car batteries and all the metadata


p2
* I would like to add button for regulating gallery
||||||| parent of 1e4cf90 (feat)
* add map 
=======
* add map 
* integrate ability to export catalog of goods as price list document
>>>>>>> 1e4cf90 (feat)


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

<!-- # TODO: what flags are necessary then? -->
<!-- update-submodules-default: -->
<!-- 	git submodule update --init --recursive --remote --merge -->
<!---->

