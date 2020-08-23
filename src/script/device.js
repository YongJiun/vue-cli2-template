import mobile_detect from 'mobile-detect';

(function(g) {

  var ua = window.navigator.userAgent,
      md = new mobile_detect(ua);

  var device = get_device(),
      system = get_system(),
      browser = get_browser();

  var fb = /fbav/.test(window.navigator.userAgent.toLowerCase()),
      line = /line/.test(window.navigator.userAgent.toLowerCase());

  window.device = {
    mode: device,
    system: system,
    browser: browser,
    fb: fb,
    line: line
  };

  function get_device() {return md.phone() ? 'phone' : md.tablet() != null ? 'pad' : 'desktop'; }
  function get_system() {if (device == 'desktop') {if (/(Macintosh)/i.test(navigator.userAgent)) return 'macintosh'; else if (/(Windows|windows)/i.test(navigator.userAgent)) return 'windows'; else return 'else'; } else if (device == 'phone') {if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) return 'ios'; else if (/(android|Android)/i.test(navigator.userAgent)) return 'android'; else return 'else'; } }
  function get_browser() {var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; var isFirefox = typeof InstallTrigger !== 'undefined'; var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0; var isIE = /*@cc_on!@*/ false || !!document.documentMode; var isEdge = !isIE && !!window.StyleMedia; var isChrome = !!window.chrome && !!window.chrome.webstore; var isBlink = (isChrome || isOpera) && !!window.CSS; if (isOpera) return ['opera']; else if (isFirefox) return ['firefox']; else if (isSafari) return ['safari']; else if (isIE) return ['ie']; else if (isEdge) return ['edge']; else if (isChrome) return ['chrome']; else if (isBlink) return ['blink']; }

})(window);