module.exports = {
  name: 'booking-feature-upgrade',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-upgrade',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
