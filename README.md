# ng-confirmation
**Problem:** I want to create a modal that asks the client if a certain request should really be made, since some changes can not be undone by the client himself. Creating a modal template and controller is extremely redundant and uses up too much time.

**Solution:** This directive makes it possible to quickly build a confirmation modal dialogue with the client to ensure a confirmed action.

## Dependencies
* Angular
* Bootstrap (JS & CSS)
* Bootstrap Angular UI (currently only supported by version 0.12.1)

## Installation
Inject confirmation-modal & ui.bootstrap module into your angular app
```javascript
var app = angular.module('myApp', ['sfp-confirmation-modal', 'ui.bootstrap']);
```
 
| Attribute                | Type   | Description                                                                | Required |
|--------------------------|--------|----------------------------------------------------------------------------|----------|
| ng-confirmation-callback | String | The $scope callback function that should be called once modal is confirmed | Yes      |
| ng-dismissal-callback    | String | The $scope callback function that should be called once modal is dismissed | No       |
| message                  | String | The message displayed in the confirmation modal                            | No       |
| confirm-button           | String | Text displayed in the confirmation button in the modal                     | No       |
| cancel-button            | String | The text displayed in the cancellation button in the modal                 | No       |
 
## Disabling The Modal
You can disable the modal by adding a 'disabled' class to the html tag.

## Examples
Check out my plunker [demo](http://plnkr.co/edit/tS14DNSExP8MULceFQCL?p=preview) :)

### Directive Example
 ```html
<button ng-init="item={message:'Hello'};item2={message:'World'};" class="btn-danger" ng-confirmation-callback="test(item,item2)" ng-dismissal-callback="testN()" message="Are you sure you want to follow through with the request?" confirm-button="Yeah Buddy!" cancel-button="Nah, I'm good">Test It!</button>
```
 
### Callbacks Examples
 ```javascript
$scope.test = function (item1, item2) {
 console.log(item1.message, item2.message);
};
 
$scope.testN = function () {
 console.log("I got rejected :(");
};
```

**Callbacks have to be available in a parent controller**

