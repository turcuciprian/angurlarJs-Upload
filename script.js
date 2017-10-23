var app = angular.module('test', []);


app.controller('mainCtrl',['$scope','$http', function ($scope,$http) {
  $scope.tText = 'Mara are mere';
  $scope.uploadMe = function(){
    console.log('upload button pressed');
    $http({
              method: 'POST',
              url: 'server/uploadFile',
              headers: {
                  'Content-Type': 'multipart/form-data'
              },
              data: {
                  file: $scope.file
              },
              transformRequest: function (data, headersGetter) {
                  var formData = new FormData();
                  angular.forEach(data, function (value, key) {
                      formData.append(key, value);
                  });

                  var headers = headersGetter();
                  delete headers['Content-Type'];

                  return formData;
              }
          });
  }
}]);
