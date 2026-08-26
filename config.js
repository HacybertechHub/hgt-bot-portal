// HGT-BOT ENV CONFIG v5.0 - FINAL WORKING
window.ENV = (function(){
  const BUILD = { VERSION: "v5.0.1-Pro-ENV", BUILD_DATE: new Date().toISOString().split('T')[0], BUILD_NUMBER: Date.now(), PORTAL_NAME: "HGT-BOT Billing Hub", NTC_PREFIX: "HGT-NTC-2026-" };
  const ADMIN_CONFIG = {
    PRIMARY: "__ADMIN_PASS__",
    FALLBACKS: ["admin217","HGTAdmin2026!","HGT-BOT-Admin","HACYBER2026"],
    VERSIONS: { "v5.0": "admin217", "v4.2": "HGTAdmin2026!", "v4.0": "HGT-BOT-Admin", "v3.0": "HACYBER2026" }
  };
  function getAdminPassword(){
    if(ADMIN_CONFIG.PRIMARY && ADMIN_CONFIG.PRIMARY!== "__ADMIN_PASS__" && ADMIN_CONFIG.PRIMARY.length >= 3){ return ADMIN_CONFIG.PRIMARY; }
    return ADMIN_CONFIG.FALLBACKS[0];
  }
  function isValidAdmin(pass){
    if(!pass) return false;
    if(pass === ADMIN_CONFIG.PRIMARY) return true;
    return ADMIN_CONFIG.FALLBACKS.includes(pass);
  }
  const WALLETS = {
    USDT_TRC20: "TBdEnSsWQwZAMKiRe54fPi3d45aJyoXqj6",
    BTC: "35e99VQwk2dYUiBJeKe2wnd73drgFFacPp",
    ETH: "0x575acfce162dc14fb2f6a7440c0da61c3d5f8a8f",
    BANK: { ACCOUNT: "217061367039", NUMBER: "101019644", NAME: "Godfrey N Joshua", BANK_NAME: "LEAD BANK", FULL: "217061367039 / 101019644 - Godfrey N Joshua (LEAD BANK)" }
  };
  return {
    VERSION: BUILD.VERSION, BUILD_DATE: BUILD.BUILD_DATE, BUILD_NUMBER: BUILD.BUILD_NUMBER, PORTAL_NAME: BUILD.PORTAL_NAME, PORTAL_VERSION: BUILD.VERSION, NTC_PREFIX: BUILD.NTC_PREFIX,
    ADMIN_PASS: getAdminPassword(), ADMIN_PRIMARY: ADMIN_CONFIG.PRIMARY, ADMIN_FALLBACKS: ADMIN_CONFIG.FALLBACKS, ADMIN_VERSIONS: ADMIN_CONFIG.VERSIONS, ADMIN_CURRENT: "admin217",
    getAdminPassword: getAdminPassword, isValidAdmin: isValidAdmin,
    USDT_TRC20: WALLETS.USDT_TRC20, BTC: WALLETS.BTC, ETH: WALLETS.ETH, BANK_ACCOUNT: WALLETS.BANK.ACCOUNT, BANK_NUMBER: WALLETS.BANK.NUMBER, BANK_NAME: WALLETS.BANK.NAME, BANK_BANK: WALLETS.BANK.BANK_NAME, BANK_FULL: WALLETS.BANK.FULL,
    isInjected: function(){ return this.ADMIN_PRIMARY!== "__ADMIN_PASS__"; },
    getVersion: function(){ return this.VERSION + " | " + this.BUILD_DATE; },
    debug: function(){ return { version: this.VERSION, injected: this.isInjected(), primarySet: this.ADMIN_PRIMARY!== "__ADMIN_PASS__", fallbackCount: this.ADMIN_FALLBACKS.length, currentAdmin: this.ADMIN_CURRENT, buildDate: this.BUILD_DATE }; }
  };
})();
console.log("HGT-BOT ENV v5.0 Loaded", window.ENV.debug());
