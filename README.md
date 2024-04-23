
# JustEatTakeAway Web Assessment

The project consists of a front end developed in React and a back end built using the Java Spring Boot framework.
This project retrieves restaurant data from the JustEat API at https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/{postcode}. 
It filters the data to display only the name, address, cuisines, and rating of the restaurants. In this example, the postcode RM77EX is used. The postcode can be changed. Details seen in the following parts. 

**You can check out how data is displayed in the repository with "resultPageDemo.png" image.**



## Prerequisites
1. Node.js: Download and install Node.js along with npm (Node Package Manager).
2. Java Development Kit (JDK): The backend service requires JDK 17 or higher. Download JDK 17+ from Oracle's JDK Archive.
3. Unix Systems: Ensure the front-end files are executable. You can run the following command: chmod +x ./node_modules/.bin/react-scripts.

# Getting Started
These instructions will get your copy of the project up and running on your local machine for development and testing purposes.
## Installing
Clone the repository to your local machine using the following commands:

git clone https://github.com/goumaoxiaomusi/process_restaurant_data.git
cd path-to-your-project-directory

### Setting up the Front-End
Navigate to the front-end directory and install the necessary packages:

cd web-frontend/front-end
npm install


### Setting up the Back-End
Ensure the backend.jar file is in your directory.


## Running the Application
### Starting the Back-End
To start the back-end service, use the following command:

java -jar backend.jar

This command starts the back-end service, typically accessible at http://localhost:8080/restaurant.

### Starting the Front-End
Ensure the back end is running before starting the front end. In the front-end directory, use the following command to start the service:

cd web-frontend/front-end
npm run start

This will compile and launch the front-end application on http://localhost:3000. If your web browser does not automatically open, manually enter http://localhost:3000 or http://localhost:3000/result in your browser's address bar to view the application. Entering any other path may result in a "404 Not Found" error.

### Change Postcode
To view data from a different postcode, navigate to web-frontend/front-end/src/store/modules and open the restaurantStore.js file. On line 26, change "RM77EX" to your desired UK postcode, then save the file and restart the front end to see the updated data.

# Assumptions
It was unclear whether to list all cuisines for each restaurant, so cuisines are currently displayed as badges.

# Improvements
Several enhancements could be made to improve the robustness of this web application:

1. Render all the data onto the page, displaying only 10 restaurants at a time with pagination to allow users to view additional data.
2. Include two dropdown lists that allows users to filter restaurants based on cuisine type and rating.
3. Add a search bar enabling users to manually enter a UK postcode, with the backend rendering data based on the entered postcode.
