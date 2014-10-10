function GlobalWin(options) {

  this.options = options,
  this.subname = '',
  this.name = 'Global Window',
  this.version = '0.1',

  this.destroy = function(){

    delete window.globalWin

  }

  this.createGlobalWin = function(options){

    if (options){

      if (options.subname){

        this.subname = options.subname;

      }

      if (options.name){

        this.name = options.name;

      }

    }

  }

  this.regenerate = function(){

    delete window.globalWin

    window.globalWin = new window.GlobalWin({
      subname : 'Regenerated'
    });

  }

  this.DisableScroll = function(){

    document.body.style.overflow = 'hidden';

  }

  this.EnableScroll = function(){

    document.body.style.overflow = 'auto';

  }

  return this.createGlobalWin(this.options)

}