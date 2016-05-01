/*angular.module('myApp',[]).controller('HelloController',function($scope){
	$scope.name="Sudheer"
});*/
var adapter = new ng.upgrade.UpgradeAdapter();

angular.module('angular-legacy',[]);
angular.module('angular-legacy').directive('foo', 
    function() {
      return {
        restrict: 'EAC',
        require: '?ngModel',
        template: 'fooDirective',
        link: function($scope, element, attrs, controller) {
          var controllerOptions, options;
          element.text('FOO: ');
        }
      };
    }
  );
  
var Foo2 = ng.core
  .Component({
    selector: 'foo2',
    template: 'Foo 2',    
  })
  .Class({
    constructor: function () { }
  });
  
var AppComponent = ng.core
  .Component({
    selector: 'app',
    template: '<foo></foo>, <foo2></foo2>',
    directives: [adapter.upgradeNg1Component('foo'), Foo2]
  })
  .Class({
    constructor: function () { }
  });  

angular.module('angular-legacy').directive('app', adapter.downgradeNg2Component(AppComponent));

adapter.bootstrap(document.body, ['angular-legacy']);