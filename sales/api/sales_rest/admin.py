from django.contrib import admin
# import models from . models
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord

# Register SalesPerson
@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass

# Register AutomobileVO
@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass

# Register Customer
@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass

# Register SalesRecord
@admin.register(SalesRecord)
class SalesRecordAdmin(admin.ModelAdmin):
    pass

