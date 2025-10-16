# AVAK GROUP Front-end

learn:
* find out all the batteries manufecturer code (for all the companies)
    * put it near accumulator themselves
    * find out what other product lines current manufacturers have

* create list of standard questions to ask every person who comes:
    * start/stop ?
    * for yourself? you want good one?
    * etc. 

* we need ready (prepped) catalog for all other options that we can suggest



for bohdana:
* need to update olx account itself and also posts
    * make one photo collage with working utk, new accumulators and somehting else 
    * Прийом відпрацьованих свинцевих АКБ додати


* we need to correct polarities and photos 

* include working hours to footer
* include sizes to specs (include manufacturer number to specs?)
* make buy button send bought items to viber as message, so we reach out back

* set subdomains for both accum and fertilizers 

* scrape akum for car batteries and all the metadata
* add accessories (charging systems, etc. etc.), look up what akum sells



* create patterns for automate response
Доброго дня
Ми уточнили розміри. Наразі в самому магазині за 175 на 175 доступний EUROKRAFT GOLD 60Ah 600A за ціною 2450.0₴ від Болгарії, Monbat. На нього даємо два роки гарантії
11:57

Звісно, заїжджайте.
Ми знаходимося при в’їзді у Вінницю по Немирівському шосе, не доїжджаючи до АЗС БРСМ
Ось посилання на гугл мапу для зручнішої навігації: https://maps.app.goo.gl/Xv8UuSQWiou2GtJz9

if person asks for a specific model -> suggest very similar things (and explain similarity)

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

