# CarCar
Step - 1 : Fork This Repo / then clone the forked repo ## git clone ->Enter url of forked repo<->
Step - 2 : Open the cloned repo - cd into repo then maybe use code . in terminal ## cd ->whatever folder you put project beta in<- then do it again into the project
Step - 3 : After it is opened, you may then look around...why not, its a beautiful file
Step - 4 : In terminal run ## docker compose up --build ##, this will create all docker containers required to run the application
Step - 5 : You can now open http://localhost:3000/ to use said application
Step - 6 : Go to ## Design to read about how this application is used.
### Also note, the nav bar, works, you have to click the arrows next to the names to access the dropdown menu for each section of the nav ###
## You can follow along using our provided examples

Team:

* Person 1 - Aki Hama (Service)
* Person 2 - Curtis Cheung (Sales)

## Design
- The design for the application on the Seller side is first you have to create an inventory. On the navbar, go to Inventory, then create a Manufacturer. 
## Example : Let's use "Tesla" as our manufacturer
- Afterwards Create a new vehicle model. Include a tinyurl of a picture of that vehicle. 
## --> lets input model name as "Model Y" 
## --> Here is a already made tinyurl of a picture "https://tinyurl.com/2p8w467h"
- After that Create a new automobile, this is where you can pick the color, year and vin number for the new automobile you will be selling. 
## example --> Let's use the color "red" and the Vin # "4Y1SL65848Z411439"

Once the automobile is created, you may go to sales and create a profile for an employee who will be selling the automobile.

On customer side, all you need to do is create a profile under sales -> customer. Once you have filled the necissary information, you may click the button labeled "Let's get to buying!"

If a customer is indeed going to buy a automobile from an employee, You can create a new sale record under new sale! There you will enter the vin of the car you are selling, the employee in charge of selling car, and the customer buying. Lastly you agree on a sale price and create the receipt.

To view past sales throughout the company you may choose to view the Sales record tab under sales. To be more precise to see who is really selling the most cars you may go to past employee sales to filter between employees. As you type, the filter will start to take out the ones that do not fit the characters you are typing. Only leaving the desired employee that you want to look up.


Following NAV bar is required for Automobile page:
1) Enter a technician
2) Enter a service appointment
3) List of appointments
4) Individual VIN detail when a suer enter the VIN number

## Port Information ##
      Sales: Port 8090
      Service: Port 8080
        URL -> http://localhost:8080/api/service/
      Inventory(for browser or insomnia): port 8100
        URL -> http://localhost:8100/api/automobiles/
      Inventory(for polling service): port 8000
        base URL of poll -> http://inventory-api:8000
      React: Port 3000
        URL -> http://localhost:3000/


    RESTful Service views with urls:
    list_service are functins for:
      -GET-  get the list of service  http://localhost:8080/api/service/
      -POST- Create a service   http://localhost:8080/api/service/
    detail_service are function for:
      -GET-  get the detail of service http://localhost:8080/api/service/<str:vin>/
      -PUT-  Update a service  http://localhost:8080/api/service/<vin>/
      -DELETE-  Delete a service  http://localhost:8080/api/service/<str:vin>/

    RESTful Technician views with urls:
    list_technician are functins for:
      -GET-  get the list of technician  http://localhost:8080/api/technician/
      -POST- Create a technician   http://localhost:8080/api/technician/
    detail_technician are function for:
      -GET-  get the detail of service http://localhost:8080/api/technician/<int:pk>/
      -PUT-  Update a technician  http://localhost:8080/api/technician/<int:pk/
      -DELETE-  Delete a technician  http://localhost:8080/api/technician/<int:pk>/
The delete inventory or employees you must log into admin - create a superuser in the cli of the api you want to delete something in. Then go to the admin page and log in. You can then delete whatever you want. Reason being, there is no login on the application thus anyone can delete things which would not be great.

## Service microservice

[] Model
[] Views
[] URLS
[] Polls
[] React
  [] Form
  []

Explain your models and integration with the inventory
microservice, here.

    Model 1: Technician
  Has Technician name and employee number

    Model 2: Service
  Has Vin number, Technician, Reason, Date and Time of
  the appointment.

    Model 3:AutomobileVO
  Has property that grabs the data from Automobile model

    Model 4: Vip
  VIP 'badge' to the service if the vehicle was from the dealership.

VIP service treatment to customer who bought the car from the dealship

Service History => Detail of past service



## Sales microservice

Explain your models and integration with the inventory
microservice, here.
Created four models for microservice
######################################################################
- Model 1 - AutomobileVO - This Value Object Model serves to integrate the inventory microservice by using the vin property.
- This allows us to make the foreign key relationship between salesrecord and automobile from the inventory.
######################################################################
- Model 2 - Customer - Each customer has three properties 
- prop_1 - Name
- prop_2 - Address
- prop_3 - Phone Number
######################################################################
- Model 3 - SalesPerson - Each sales person has three properties
- prop_1 - Name
- prop_2 - Employee Number
- prop_3 - Sales Made --> connected to the sales record model
######################################################################
- Model 4 - SalesRecord - Model used to create a record using ForeignKey to the other 3 models - props in this are foreign keys
- prop_1 - ForeignKey --> AutomobileVO
- prop_2 - ForeignKey --> Customer
- prop_3 - ForeignKey --> SalesPerson
######################################################################
