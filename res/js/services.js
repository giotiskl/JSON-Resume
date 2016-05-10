myApp.service('resumeService', ['$http', function($http) {
    this.resumeData = null;
    this.getResumeData = function() {
        if (this.resumeData !== null) return this.resumeData;
        else {
            return $http.get('res/resume/resume.json');
        }
    };
}]);
