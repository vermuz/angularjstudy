# angularjstudy

# AngularJS 
- Model view whatever
- Model <-> View
- Model (app) contains a controller which is used by html which becomes a view once you use ng-app (app name)
and within a view i.e. div (you use ng-controller which comes from the ng-app used at the top)
- All AngularJS services start with a $, i.e $scope

# Dependency Injection
- Giving a function an object
- Rather can creating an object inside a function, you pass it to the function

# Scope Service
- It is a big part of the thing that binds model to the view.
- It is an object from scope service.
- It involves dependency injection.
- Scope will show a lot of functions, that is AngularJS doing dependency injection
- Inclusion of $scope in function parameters, leads to AngularJS recognizing that and injecting into the 
function

# Using other angular services (Examples)
- Angular-Messages (will give you something like form error handling pretty quick)
- Angular-Resource (good at loading resources pretty quick)

# We can use functions inside arrays
var example = [1, '2', function() { alert('Hello'); }];
