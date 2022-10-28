# CarCar

## Link to Excalidraw diagram https://excalidraw.com/#json=232PGy0hUeoiSYqYuivVv,9-B8I70IfLKWPFedf0juYw

- Step - 1 : Fork This Repo / then clone the forked
  - use git clone (URL) --> AFTER FORKING
- Step - 2 : Open the cloned repo - cd into repo then maybe use code . in terminal ## cd ->whatever folder you put project beta in<- then do it again into the project
  - cd (directory) --> then cd project-beta
  - once in project-beta use --> code . to open it in vscode
- Step - 3 : After it is opened, you may then look around...why not, its a beautiful file
- Step - 4 : In terminal run ## docker compose up --build ##, this will create all docker containers required to run the application
  - in the vscode terminal run command --> docker compose up --build
- Step - 5 : You can now open http://localhost:3000/ to use said application
- click link to localhost:3000
- Step - 6 : Go to ## Design to read about how this application is used.
- Also note, the nav bar, works, you have to click the arrows next to the names to access the dropdown menu for each section of the nav ###
- You can follow along using our provided examples


## Team:


    * Person 1 - Aki Hama (Service) / (Inventory)
    * Person 2 - Curtis Cheung (Sales) / (Inventory)



## Design (Here is a provided example to follow, to learn about our application)
- The design for the application on the Seller side is first you have to create an inventory. On the navbar, go to Inventory, then create a Manufacturer.
- Example : Let's use "Tesla" as our manufacturer
- Afterwards Create a new vehicle model. Include a tinyurl of a picture of that vehicle.
- --> lets input model name as "Model Y"
- --> Here is a already made tinyurl of a picture "https://tinyurl.com/2p8w467h" Paste this in the urls field
- --> Make sure to find the manufacturer you created for the manufacturer field. In this case it is Tesla
- After that Create a new automobile, this is where you can pick the color, year and vin number for the new automobile you will be selling.
- example --> Let's use the color "red" and the Vin # "4Y1SL65848Z411439" --> Then pick the Model Y you have created
- Check the tab "All Automobiles" to see if your Automobile has been made

Once the automobile is created, you may go to sales and create a profile for an employee who will be selling the automobile.
- Let's use Dockerman as the new employee
On customer side, all you need to do is create a profile under sales -> customer. Once you have filled the necissary information, you may click the button labeled "Let's get to buying!"
- Maybe let's enter your name!
If a customer is indeed going to buy a automobile from an employee, You can create a new sale record under new sale! There you will enter the vin of the car you are selling, the employee in charge of selling car, and the customer buying. Lastly you agree on a sale price and create the receipt.
- Here you will find the form in which purchases are made - lets go ahead and fill this out.
- First let's put the vin we made which should be "4Y1SL65848Z411439"
- Next let's put Dockerman as the person selling the vehicle
- Now let's put your name as the customer
- Finally let's create a sales price --> Let's use 20000 as the price of this model Y
- Now click the button Enjoy Your New Baby! to take home your new car!
To view past sales throughout the company you may choose to view the Sales record tab under sales.
- Here in the sales record, you will find the sale that we have just made.
 To be more precise to see who is really selling the most cars you may go to past employee sales to filter between employees. As you type, the filter will start to take out the ones that do not fit the characters you are typing. Only leaving the desired employee that you want to look up.
- The search bar is for employee name that you want to look up.

Now head over to Service drop down meanu
There you will see "New Technician", "New service appointment", "Service Appointments", and "Service History"
- Register a New Technician
- Click the "New Technican" from the one of the scroll down after clicking Service.
- Enter Technician's Name. For example "John Doe"
- Enter Employee ID. Any unique number
- Click register to get the technician data registered.

Creating a new service appointment for a particular automobile
- Goto "New Service Appointment"
- Enter the 17 character VIN number, such as "4Y1SL65848Z411439".  Entering exactly 17 chacracters is IMPORTANT for 'magic' to happen in the backend. no .. more like needing to have exact digit to compare with the vin in the inventory, which also have 17 character vin.
- Enter Customer's name.  Call it "Jane Doe".
- Enter the Date of Service.  Maybe "10/31/22"
- Enter the Time of Service.  "12pm" ?
- Assign a Technician from the drop down meanu.  One we have is "John Doe"  Click it
- Type down the reason for the service appointment on the input field just below the 'assigning technician' Maybe type it "Oil Change"
- Click register to get the service going!

Looking at Service Appointments
Next lets talk about the "Service Appointments".
- This is the place where the user will see all the service appointments that is occuring currently.
- You will see Vin of the automobile, Customer's name, the date of the service, time of the service, technician handling the service, and the reason for the visit.   Wait .. do you see... a VIP? (You should see the 'VIP' if you  entered "4Y1SL65848Z411439" when we were making a service appointment.)
- The VIP tells us the customer bought the automobile from the companies inventory.  Congrats Jane!! your getting a VIP treatment for the Service.
Other thing you'll see here:
- ((  Delete Button  )) --> Deletes the appointment. Thus delete from the appointment list.
- ((  Finished Button  )) --> Delete the appointment list but keeps the past service for future reference.

Service History
- Finally the last part of the service is to check the past "Service History" for particular VIN number.
- Enter the Vin on the search input. Type "4Y1SL65848Z411439" and press enter.
- What do you see?  The past service history of VIN 4Y1SL65848Z411439!!



## Port Information

  Sales: Port 8090
- URL -> http://localhost:8080/api/sales/

  Service: Port 8080
- URL -> http://localhost:8080/api/service/

  Inventory(for browser or insomnia): port 8100
- URL -> http://localhost:8100/api/automobiles/

  Inventory(for polling service): port 8000
- base URL of poll -> http://inventory-api:8000

  React: Port 3000  (For checking the FrontEnd)
- URL -> http://localhost:3000/


##

    RESTful Manufactures views with urls
1. api_manufacturers are functions for:
- GET-  get the list of manufacturers  http://localhost:8100/api/manufacturers/
- POST- Create a manufacturers   http://localhost:8100/api/manufacturers/
2. api_manufacturer are function for:
- GET-  get the detail of manufacturer http://localhost:8100/api/manufacturers/<:id>/
- PUT-  Update a manufacturer  http://localhost:8100/api/manufacturers/<:id>/
- DELETE-  Delete a manufacturer  http://localhost:8100/api/manufacturers/<:id>/

##

    RESTful Vehicle models views with urls
1. api_vehicle_models are functions for:
- GET-  get the list of vehicle models  http://localhost:8100/api/models/
- POST- Create a vehicle models   http://localhost:8100/api/models/
2. api_vehicle_model are function for:
- GET-  get the detail of vehicle model http://localhost:8100/api/models/:id/
- PUT-  Update a vehicle model  http://localhost:8100/api/models/:id/
- DELETE-  Delete a vehicle model  http://localhost:8100/api/models/:id/

##

    RESTful Automobile views with urls
1. api_automobiles are functions for:
- GET-  get the list of automobiles  http://localhost:8100/api/automobiles/
- POST- Create a automobiles   http://localhost:8100/api/automobiles/
2. api_automobile are function for:
- GET-  get the detail of automobile 	http://localhost:8100/api/automobiles/:vin/
- PUT-  Update a automobile 	http://localhost:8100/api/automobiles/:vin/
- DELETE-  Delete a automobile  	http://localhost:8100/api/automobiles/:vin/

##

    RESTful Service views with urls
1. list_service are functions for:
- GET-  get the list of service  http://localhost:8080/api/service/
- POST- Create a service   http://localhost:8080/api/service/
2. detail_service are function for:
- GET-  get the detail of service http://localhost:8080/api/service/<int:pk>/
- PUT-  Update a service  http://localhost:8080/api/service/<int:pk>/
- DELETE-  Delete a service  http://localhost:8080/api/service/<int:pk>/

##

    RESTful Technician views with urls
1. list_technician are functions for:
- GET-  get the list of technician  http://localhost:8080/api/technician/
- POST- Create a technician   http://localhost:8080/api/technician/
2. detail_technician are function for:
- GET-  get the detail of technician http://localhost:8080/api/technician/<int:pk>/
- PUT-  Update a technician  http://localhost:8080/api/technician/<int:pk/
- DELETE-  Delete a technician  http://localhost:8080/api/technician/<int:pk>/

##

    RESTful Sales Person views with urls
1. sales_person_list are functions for:
- GET-  get the list of sales person  http://localhost:8080/api/sales-persons/
- POST- Create a sales person   http://localhost:8080/api/sales-persons/
2. sales_person_details functions for:
- GET-  get the detail of sales person http://localhost:8080/api/sales-persons/<int:pk>/
- PUT-  Update a sales person  http://localhost:8080/api/sales-persons/<int:pk>/
- DELETE-  Delete a sales person http://localhost:8080/api/sales-persons/<int:pk>/

##

    RESTful Customer views with urls
1. customer_list are functions for:
- GET-  get the list of customers http://localhost:8080/api/customers/
- POST- Create a customer   http://localhost:8080/api/customers/
2. customer_delete functions for:
- GET-  get the detail of customer http://localhost:8080/api/customers/<int:pk>/
- PUT-  Update a customer  http://localhost:8080/api/customers/<int:pk>/
- DELETE-  Delete a customer http://localhost:8080/api/customers/<int:pk>/

##

    RESTful Sales Records views with urls
1. sales_record_list are functions for:
- GET-  get the list of Sales Records http://localhost:8080/sales-records/

##

    RESTful autmobileVO views with urls
1. automobile_vo_list are functions for:
- GET-  get the list of automobiles http://localhost:8080/api/automobileVO/
2. auto_vo_delete functions for:
- DELETE-  Delete a automobuiles http://localhost:8080/api/automobileVO/<int:pk>/

##

To delete inventory or employees you must log into admin - create a superuser in the cli of the api you want to delete something in. Then go to the admin page and log in. You can then delete whatever you want. Reason being, there is no login on the application thus anyone can delete things which would not be great.


## Service microservice

1. Model 1: Service
  Model to create a service for the customer:

  - customer_name |  CharField  |  max_length = 25                  |  For generating customer's name
  - date          |  DateField  |                                   |  Date of the service
  - reason        |  CharField  |  max_length = 100                 |  Customer's reason for automobile service
  - technician    |  ForeignKey |  to Technician CASCADE on delete  |  Choosing created technician from drop down
  - vin_service   |  CharField  |  max_length = 17 (IMPORTANT)      |  For User to enter the VIN (Later it - matches whether the automobile was from the past inventory, for VIP treatment)
  - time          |  TimeField  |                                   |  Choosing time for the visit
  - vip           |  BooleanField  |  default = False               |  VIP treatment for customer who bought the vechile from the past inventory
  - service_finished |  BooleanField  |  default = False            |  Indicate if the service are finished


2. Model 2: Technician
  To Create a Technicain we need:

  - name             |   CharField     |  max_length = 25  |  Technician's name
  - employee_number  |   IntegerField  |  unique = True    |  A unique employee number to identify the employee just incase if theres same name


  Model 3:AutomobileVO
  Grab the VIN inventory data from the Inventory microservice (Automobile) to compare whether if the serviced automobile is from the past inventory.
  If it was the customoer will get VIP treatment.

  - vin              |   CharField     |   max_length = 17 (IMPORTANT)  | VIN number that user enter must - be vin length of 17 this is due to
                                                                        inventory vin being length of 17.  When we do the comparison
                                                                        the length also have to match



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
