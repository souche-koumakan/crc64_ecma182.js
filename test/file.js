'use strict';

const path = require('path');

require('should');

const crc64 = require('../');

describe('buffer test', function() {
  const retString = '5178350320981835788';

  it('check crc64File()', function(done) {
    crc64.crc64File(path.join(__dirname, 'pic.png'), function(err, ret) {
      ret.should.be.equal(retString);
      done();
    });
  });

  it('check crc64File() wrong file', function(done) {
    crc64.crc64File('asdflkj', function(err) {
      err.should.be.instanceof(Error);
      err.message.should.match(/no such file or directory/);
      done();
    });
  });
});
