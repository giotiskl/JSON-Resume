myApp.controller('resumeController', ['$scope', '$log', 'resumeService', function($scope, $log, resumeService) {
    //Fetch the resume data from the resume service
    $scope.resumeData = [];
    //if getResumeData is a promise then fetch the data
    //with an ajax call and cache it in the service
    if ('then' in resumeService.getResumeData()) {
        resumeService.getResumeData()
        .then(
        //Success
        function(res) {
            resumeService.resumeData = $scope.resumeData = res.data;
            console.log($scope.resumeData);
        },
        //Failure
        function(res) {
            $log.error(res);
        });
    }
    //Otherwise fetch the cached version
    else {
        $scope.resumeData = resumeService.getResumeData();
    }
}]);
