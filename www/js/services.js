angular.module('starter.services', [])

//.factory('Chats', function() {
//  // Might use a resource here that returns a JSON array
//
//  // Some fake testing data
//
//
//
//});

//接口
angular.module('starter.services')
  //固定写法
  .factory('rBootHome', ['$http', '$q',function($http, $q) {
     return{
       //rBootHomeFunction: function(params) {
       //  var deferred = $q.defer();
       //  $http({
       //    method: 'POST',
       //    url: 'http://www.tuling123.com/openapi/api?key=14127acc5f694ea1adb1c1e68e64fb63',
       //    responseType: 'json',
       //      //APIKEY:'14127acc5f694ea1adb1c1e68e64fb63',
       //    //timeout: GlobalConfig.requestTimeout,
       //    info:'你好'
       //  }).then(function(data) {
       //
       //    deferred.resolve(data);
       //  }, function(error) {
       //    deferred.reject(error);
       //  });
       //  return deferred.promise;
       //}

       //二次
       rBootHomeFunction: function(params) {
         var deferred = $q.defer();
         $http({
           method: 'POST',
           url: 'http://www.tuling123.com/openapi/api?key='+params.key+'&info='+params.info,
           responseType: 'json',

           key:params.key,
           timeout: 30000,
           info:params.info,
           //userid:params.userid,

         }).then(function(data){

           deferred.resolve(data);
         }, function(error) {
           deferred.reject(error);
         });
         return deferred.promise;
       }



     }
   }
   ])

