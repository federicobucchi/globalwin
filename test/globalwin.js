var assert = require('assert');
var GlobalWin = require('../globalwin.js').GlobalWin;

describe('Global Win', function(){

  describe('Run Constructor', function(){
    var globalWin = new GlobalWin();

    it('name should be correct', function(){
      assert(globalWin.name === 'Global Window', 'Name is not correct');
    })

    it('subname should be empty', function(){
      assert(globalWin.subname === '', 'Subname is not empty');
    })

    it('options should be undefined', function(){
      assert(globalWin.options === undefined, 'Options is not undefined');
    })

  })

  describe('Run Constructor with options', function(){
    var globalWin = new GlobalWin({
      name: 'Super Global Window',
      subname: 'Subname of the Super Global Window',
    });

    it('options should be defined', function(){
      assert(globalWin.options != undefined, 'Options is undefined');
    })

    it('name should be the one in the options', function(){
      assert(globalWin.name === 'Super Global Window', 'Name is not correct');
    })

    it('subname should be the one in the options', function(){
      assert(globalWin.subname === 'Subname of the Super Global Window',
        'Subname is not correct');
    })

  })

  describe.skip('Destroy - Move on Functional Testing', function(){
    var globalWin = new GlobalWin();

    it('globalWin should be undefined', function(){
      globalWin.destroy();

      assert(globalWin === undefined, 'globalWin still exist');
    })

  })

})