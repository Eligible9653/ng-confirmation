angular.module('sfp-confirmation-modal', ['ui.bootstrap'])
        .directive('ngConfirmationCallback', ['$modal',
            function ($modal) {

                var ModalInstanceCtrl = function ($scope, $modalInstance) {
                    $scope.ok = function () {
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                };

                return {
                    scope: {
                        ngConfirmationCallback: "&", //declare a function binding for directive
                        ngDismissalCallback: "&" //declare a function binding for directive
                    },
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                            element.bind('click', function () {
                                if (!element.hasClass('disabled')) {
                                    var message = attrs.message || 'Are you sure?';
                                    var confirm = attrs.confirmButton || 'Yes';
                                    var cancel = attrs.cancelButton || 'Cancel';
                                    var modalHtml = '<div class="modal-body">' +
                                        message +
                                        '</div>' +
                                        '<div class="modal-footer">' +
                                        '<button class="btn btn-primary" ng-click="ok()">' + confirm + '</button>' +
                                        '<button class="btn btn-default" ng-click="cancel()">' + cancel + '</button>' +
                                        '</div>';

                                    var modalInstance = $modal.open({
                                        template: modalHtml,
                                        controller: ModalInstanceCtrl,
                                        size: 'sm'
                                    });

                                    modalInstance.result.then(function () {
                                        scope.ngConfirmationCallback();
                                    }, function () {
                                        if (angular.isFunction(scope.ngDismissalCallback())) {
                                            scope.ngDismissalCallback();
                                        }
                                    });
                                }
                            });
                        }

                    }
            }
        ]);
