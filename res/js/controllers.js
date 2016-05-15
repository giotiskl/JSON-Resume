myApp.controller('resumeController', ['$scope', '$log', 'resumeService', function($scope, $log, resumeService) {
    //Modal data
    $scope.modalContent = {
        heading: "",
        body: ""
    };
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

    /**
    * Gets only the 4 first letters from the date string
    * @return {string} year from date string
    */
    $scope.getYear = function(dateString) {
        if (typeof dateString === 'undefined') return;
        return dateString.substring(0, 4);
    };

    /**
    * Opens the modal window setting its content
    * @param {object} the content of the modal window
    */
    $scope.openModal = function(content) {
        var modal = document.getElementById('modal'),
            modalContainer = document.getElementById('modal__container'),
            modalOverlay = document.getElementById('modal__overlay');

        $scope.modalContent.heading = content.heading;
        $scope.modalContent.body = content.body;

        modal.classList.add('modal--is-open');
        modalContainer.classList.add('scaleIn');
        modalOverlay.classList.add('fadeIn');
    };

    /**
    * Closes the modal window
    */
    $scope.closeModal = function() {
        var modal = document.getElementById('modal'),
            modalContainer = document.getElementById('modal__container'),
            modalOverlay = document.getElementById('modal__overlay');

        //modal.classList.remove('modal--is-open');
        modalContainer.classList.remove('scaleIn');
        modalOverlay.classList.remove('fadeIn');

        modalContainer.classList.add('scaleOut');
        modalOverlay.classList.add('fadeOut');

        //Ugly timeout hack to reset animations, to get out of the trouble of intercepting
        //an animationEnd event, while achieving a similarly seamless effect
        setTimeout(function () {
            modal.classList.remove('modal--is-open');
            modalContainer.classList.remove('scaleOut');
            modalOverlay.classList.remove('fadeOut');
        }, 470);
    };
}]);
