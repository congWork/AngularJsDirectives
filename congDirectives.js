(function () {
    /*----created by chicong chen-----
	 ------modified date: 030216
	 ------version: v1.0.0
     ------Dependency: bootstrap css, ngMessages
	 */
    var congDirectives=angular.module("congDirectives", ["ngMessages"]);
    congDirectives.directive("formGroupValidation", formGroupValidation);
    function formGroupValidation() {
        return {
            require: '^form',
            restrict: 'A',
            transclude: true,
            replace:true,
            scope: {
                inputField: '@formGroupValidation'
            },
            controller: controllerFun,
            controllerAs: 'vm',
            link: function (scope, element, attrs, formCtrl) {
                scope.form = formCtrl;
          
            },
       
            template: '<div class="form-group has-feedback" ng-class="vm.getValidationClass()"><ng-transclude></ng-transclude>' +
                '<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" style="top:32px;position:absolute;" ng-show="vm.isValid() && vm.getInputObj().$dirty"></span>' +
                '<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" style="top:32px;position:absolute;" ng-show="!vm.isValid() && vm.getInputObj().$dirty"></span>' +
                '<div ng-messages="vm.getInputObj().$error" ng-if="vm.getInputObj().$dirty" class="help-block">' +
                '<div ng-message="required">This field is required</div>' +
                '<div ng-message="pattern">Invalid house number</div> </div></div>'

        };
    }
    controllerFun.$inject = ['$scope'];
    function controllerFun($scope) {
        var vm = this;
        vm.field = $scope.inputField;
        vm.getValidationClass = getValidationClass;
        vm.getInputObj = getInputObj;
        vm.isValid = isValid;
        function getInputObj() {
            return $scope.form[vm.field];
        }
        function getValidationClass() {
            if ($scope.form[vm.field].$pristine) return '';
            if (hasFieldError()) {
                return 'has-error';
            } else {
                return 'has-success';
            }
        }
        function hasFieldError() {

            return $scope.form[vm.field].$invalid && !$scope.form[vm.field].$pristine;
        }
        function isValid() {
            return $scope.form[vm.field].$valid;
        }
    }
})();



