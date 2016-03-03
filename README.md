# AngularJsDirectives
all custom directives are placed here
***
# Usage
1. download the ngMessage javascript file from angularJs website
2. add script reference to congDirectives.js before your own script
3. add script: 
   ```javascript
window.myApp = angular.module("myApp", ["ngMessages","congDirectives"]);
```
4. html template:
```html
<form name="myForm" novalidate>
    <div form-group-validation='houseNumber'>
        <label for="houseNumber" class="control-label">House Number</label>
        <input type="text" class="form-control" name="houseNumber" placeholder="House Number" ng-model="houseNumber" required ng-pattern="/^\d{1,10}$/">
    </div>
</form>
```

---
# Example
[Please click here for an example](http://plnkr.co/0PYuNJQDSsxLpHic0ADa "Example")

