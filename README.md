# CarCar

Team:

* Person 1 - Aki Hama (Service)
* Person 2 - Curtis Cheung (Sales)

## Design


Following NAV bar is required for Automobile page:
1) Enter a technician
2) Enter a service appointment
3) List of appointments
4) Individual VIN detail when a suer enter the VIN number

## Port Information ##
      Sales: Port 8090
      Service: Port 8080
      Inventory(for browser or insomnia): port 8100
      Inventory(for polling service): port 8000
        base URL of poll -> http://inventory-api:8000
      React: Port 3000

    Two RESTful views with urls:
    list_service are functins for:
      -GET-  get the list of service  http://localhost:8080/api/service/
      -POST- Create a service   http://localhost:8080/api/service/
    detail_service are function for:
      -GET-  get the detail of service http://localhost:8080/api/service/<str:vin>/
      -PUT-  Update a service  http://localhost:8080/api/service/<vin>/
      -DELETE-  Delete a service  http://localhost:8080/api/service/<str:vin>/

## Service microservice


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
