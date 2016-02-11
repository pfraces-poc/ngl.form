angular.module('app.log', [
  'ngl.lodash' // lodash
])

.factory('appLogCache', function () {
  'use strict';

  return [];
})

.factory('appLog', function ($injector) {
  'use strict';

  var lodash = $injector.get('lodash');
  var appLogCache = $injector.get('appLogCache');

  var log = function (msg) {
    if (!lodash.isString(msg)) { msg = JSON.stringify(msg, null, 2); }
    appLogCache.push(msg);
  };
  
  return log;
})

.directive('appLog', function ($injector) {
  'use strict';
  
  var appLogCache = $injector.get('appLogCache');

  var controller = function ($scope) {
    $scope.log = appLogCache;
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'log/log.html'
  };
});