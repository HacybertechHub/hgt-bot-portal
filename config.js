// =====================================================
// HGT-BOT PORTAL - ENV CONFIG v5.0 - ENHANCED
// Versioning + Fallback Admin + Auto Inject
// =====================================================
// GitHub Secrets: ADMIN_PASS = admin217 (injected at build)
// Fallback: Works even if Secrets fail
// =====================================================

window.ENV = (function(){
  const BUILD = {
    VERSION: "v5.0.1-Pro-ENV",
    BUILD_DATE: new Date().toISOString().split('T')[0],
    BUILD_NUMBER: Date.now(),
    PORTAL_NAME: "HGT-BOT Billing Hub",
    NTC_PREFIX: "HGT-NTC-2026-"
  };

  // ADMIN SECURITY - Versioning + Fallback
  const ADMIN_CONFIG = {
    // Primary from GitHub Secret injection
    PRIMARY: "__ADMIN_PASS__",

    // Fallback admins - IF primary fails THEN try these (versioning)
    FALLBACKS: [
      "admin217", // v5.0 - current
      "HGTAdmin2026!", // v4.2 - legacy
      "HGT-BOT-Admin", // v4.0 - emergency
      "HACYBER2026" // v3.0 - super emergency
    ],

    // Version history
    VERSIONS: {
      "v5.0": "admin217",
      "v4.2": "HGTAdmin2026!",
      "v4.0": "HGT-BOT-Admin",
      "v3.0": "HACYBER2026"
    }
  };

  // Helper: Get valid admin password
  function getAdminPassword(){
    // IF injected THEN use injected ELSE fallback
    if(ADMIN_CONFIG.PRIMARY && ADMIN_CONFIG.PRIMARY!== "__ADMIN_PASS__" && ADMIN_CONFIG.PRIMARY.length >= 3){
      return ADMIN_CONFIG.PRIMARY;
    }
    // Fallback to first fallback (admin217)
    return ADMIN_CONFIG.FALLBACKS[0];
  }

  // Helper: Check if password is valid (any version)
  function isValidAdmin(pass){
    if(!pass) return false;
    // Check primary
    if(pass === ADMIN_CONFIG.PRIMARY) return true;
    // Check all fallbacks
    return ADMIN_CONFIG.FALLBACKS.includes(pass);
  }

  // WALLETS - Central managed
  const WALLETS = {
    USDT_TRC20: "TBdEnSsWQwZAMKiRe54fPi3d45aJyoXqj6",
    BTC: "35e99VQwk2dYUiBJeKe2wnd73drgFFacPp",
    ETH: "0x575acfce162dc14fb2f6a7440c0da61c3d5f8a8f",
    BANK: {
      ACCOUNT: "217061367039",
      NUMBER: "101019644",
      NAME: "Godfrey N Joshua",
      BANK_NAME: "LEAD BANK",
      FULL: "217061367039 / 101019644 - Godfrey N Joshua (LEAD BANK)"
    }
  };

  // FINAL ENV OBJECT
  return {
    // Build info
    VERSION: BUILD.VERSION,
    BUILD_DATE: BUILD.BUILD_DATE,
    BUILD_NUMBER: BUILD.BUILD_NUMBER,
    PORTAL_NAME: BUILD.PORTAL_NAME,
    PORTAL_VERSION: BUILD.VERSION,
    NTC_PREFIX: BUILD.NTC_PREFIX,

    // Admin - Enhanced
    ADMIN_PASS: getAdminPassword(),
    ADMIN_PRIMARY: ADMIN_CONFIG.PRIMARY,
    ADMIN_FALLBACKS: ADMIN_CONFIG.FALLBACKS,
    ADMIN_VERSIONS: ADMIN_CONFIG.VERSIONS,
    ADMIN_CURRENT: "admin217",
    getAdminPassword: getAdminPassword,
    isValidAdmin: isValidAdmin,

    // Wallets
    USDT_TRC20: WALLETS.USDT_TRC20,
    BTC: WALLETS.BTC,
    ETH: WALLETS.ETH,
    BANK_ACCOUNT: WALLETS.BANK.ACCOUNT,
    BANK_NUMBER: WALLETS.BANK.NUMBER,
    BANK_NAME: WALLETS.BANK.NAME,
    BANK_BANK: WALLETS.BANK.BANK_NAME,
    BANK_FULL: WALLETS.BANK.FULL,

    // Helpers
    isInjected: function(){ return this.ADMIN_PRIMARY!== "__ADMIN_PASS__"; },
    getVersion: function(){ return this.VERSION + " | " + this.BUILD_DATE; },
    debug: function(){
      return {
        version: this.VERSION,
        injected: this.isInjected(),
        primarySet: this.ADMIN_PRIMARY!== "__ADMIN_PASS__",
        fallbackCount: this.ADMIN_FALLBACKS.length,
        currentAdmin: this.ADMIN_CURRENT,
        buildDate: this.BUILD_DATE
      };
    }
  };
})();

// Console log for admin debugging
console.log(
  "%c HGT-BOT ENV v5.0 Loaded ",
  "background:#00ff88;color:#000;padding:4px 8px;border-radius:4px;font-weight:700",
  window.ENV.debug()
);

// Update your admin.html to use it like this:
// const ADMIN_PASSWORD = window.ENV.ADMIN_PASS; // auto fallback
// OR better:
// if(window.ENV.isValidAdmin(pass)) { // allows any version
