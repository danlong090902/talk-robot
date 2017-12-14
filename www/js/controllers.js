angular.module('starter.controllers', [])


//首页
.controller('rbHomeCtrl',function($ionicPopup,$scope,rBootHome) {

  //title状态
  $scope.rbaction ='';
  $scope.contentArray=[];
  //用户添加
  $scope.content='';
  console.log(window.top)
//按回车键发送
  document.onkeydown=function(e){
    if(e.keyCode="13"){
      $scope.send()
    }
  }

  $scope.send=function(){//对话函数

    if($scope.content!=''){

          console.log($scope.contentArray)
        $scope.rbaction ='正在输入...';
          $scope.dataParameter={
            key:'2612c5cc42c4408bbc1dbc1f7e7b73f0',
            info:$scope.content.input
          }
          $scope.contentArray.push({
            input:$scope.content,
            classState:true,
            src:'img/username.svg'
          })


      //调用接口

      rBootHome.rBootHomeFunction($scope.dataParameter)
        .then(function(data){
          if(data.data.text){
            $scope.content='';
            $scope.rbaction ='';
          }
          //接口反馈
          $scope.contentArray.push({
            input:data.data.text,
            classState:false,
            src:'img/rb.svg'
          })
          console.log(data)
        },function(){
          //网络错误
          $scope.rbaction ='';
          $scope.contentArray.push(
            { input:'图灵抽风了',
              classState:false,
              src:'img/rb.svg'
            })
        })

      }else{
            var alertPopup = $ionicPopup.alert({
            title: '内容填写不规范',
            okText: '确定'
          });
          //关闭弹框
          setTimeout(function(){
            alertPopup.close();
          },1000)
        }



  }
});
