# CarCar

Team:

* Person 1 - Aki Hama (Service)
* Person 2 - Curtis Cheung (Sales)

## Design
The design for the application on the Seller side is first you have to create an inventory. On the navbar, go to Inventory, then create a Manufacturer. Afterwards Create a new vehicle model. Include a tinyurl of a picture of that vehicle. After that Create a new automobile, this is where you can pick the color, year and vin number for the new automobile you will be selling.

Once the automobile is created, you may go to sales and create a profile for an employee who will be selling the automobile.

On customer side, all you need to do is create a profile under sales -> customer. Once you have filled the necissary information, you may click the button labeled "Let's get to buying!"

If a customer is indeed going to buy a automobile from an employee, You can create a new sale record under new sale! There you will enter the vin of the car you are selling, the employee in charge of selling car, and the customer buying. Lastly you agree on a sale price and create the receipt.

To view past sales throughout the company you may choose to view the Sales record tab under sales. To be more precise to see who is really selling the most cars you may go to past employee sales to filter between employees.

The delete inventory or employees you must log into admin - create a superuser in the cli of the api you want to delete something in. Then go to the admin page and log in. You can then delete whatever you want. Reason being, there is no login on the application thus anyone can delete things which would not be great.

## Service microservice

Explain your models and integration with the inventory
microservice, here.

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
