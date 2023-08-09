'use strict';

require('should');

const crc64 = require('../');

describe('buffer test', function() {
  const retString = '11051210869376104954';

  it('check \'123456789\'', function() {
    const ret = crc64.crc64('123456789');
    ret.should.be.equal(retString);
  });

  it('check Buffer(\'123456789\')', function() {
    const ret = crc64.crc64(Buffer.from('123456789'));
    ret.should.be.equal(retString);
  });

  it('check \'123456789\' with previous value', function() {
    const ret = crc64.crc64('123456789', '0');
    ret.should.be.equal(retString);
  });

  it('check Buffer(\'123456789\') with previous value', function() {
    const ret = crc64.crc64(Buffer.from('123456789'), '0');
    ret.should.be.equal(retString);
  });
});
