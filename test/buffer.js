/**
 * Kaidi ZHU <zhukaidi@souche.com> created at 2017-09-05 17:31:16 with ❤
 *
 * Copyright (c) 2017 Souche.com, all rights reserved.
 */
'use strict';

const assert = require('assert');

require('should');

const crc64 = require('../');

describe('buffer test', function() {
    const retString = '11051210869376104954';

    it('check \'123456789\'', function() {
        const ret = crc64.crc64('123456789');
        ret.should.be.equal(retString);
    });

    it('check Buffer(\'123456789\')', function() {
        const ret = crc64.crc64(new Buffer('123456789'));
        ret.should.be.equal(retString);
    });

    it('check \'123456789\' with previous value', function() {
        const ret = crc64.crc64('123456789', '0');
        ret.should.be.equal(retString);
    });

    it('check Buffer(\'123456789\') with previous value', function() {
        const ret = crc64.crc64(new Buffer('123456789'), '0');
        ret.should.be.equal(retString);
    });
});
