(function() {
  var app = angular.module('contributorsView', [ ]);

  app.controller('ContributorsViewController', function() {
    this.contributor = contributor;
  });

  var contributor = {
    personnel: {
      name: 'Luveen',
      level: 2,
      org: 'google'
    },
    metrics: {
      num_c: 5,
      num_r: 7,
      num_sr: 10
    },
    slices: {
      [
        {
          metadata: {
            id: 'cxsy89y435IOYY6543op'
            job: 'Job 1',
            slice: 'Slice 3'
          },
          assignment: {
            c: true,
            r: false,
            sr: true
          }
        }
      ]
    }
  }
})();