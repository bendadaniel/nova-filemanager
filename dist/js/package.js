import Rv, { effectScope as Il, ref as we, markRaw as Ml, toRaw as Ll, isRef as Ii, isReactive as vs, toRef as Iv, hasInjectionContext as Mv, inject as Lv, watch as ei, reactive as Nv, getCurrentScope as Nl, onScopeDispose as Pl, nextTick as ms, toRefs as Pv, computed as At, defineComponent as ri, openBlock as L, createElementBlock as Z, createElementVNode as X, Fragment as je, renderList as dr, toDisplayString as ie, resolveComponent as gn, normalizeClass as pn, renderSlot as hr, createBlock as Oe, createCommentVNode as pe, unref as Y, onMounted as Fl, readonly as Fv, getCurrentInstance as Bv, shallowRef as Uv, withModifiers as Te, resolveDirective as za, withDirectives as wt, createVNode as ue, createTextVNode as ut, withCtx as _e, useSlots as $v, Transition as Ua, withKeys as zv, vModelText as Wv, TransitionGroup as Bl, normalizeStyle as Hv } from "vue";
import { Icon as Pt } from "laravel-nova-ui";
var qv = !1, Ul = { NVM_INC: "/Users/benda/.nvm/versions/node/v18.19.0/include/node", COREPACK_ROOT: "/Users/benda/.nvm/versions/node/v18.19.0/lib/node_modules/corepack", npm_package_dependencies__vueuse_core: "^10.1.2", npm_package_devDependencies_postcss_import: "^16.1.0", TERM_PROGRAM: "vscode", NODE: "/Users/benda/.nvm/versions/node/v18.19.0/bin/node", INIT_CWD: "/Users/benda/workplace/nova-filemanager", ANDROID_HOME: "/Users/benda/Library/Android/sdk", NVM_CD_FLAGS: "-q", npm_config_version_git_tag: "true", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_package_devDependencies_vite: "^5.2.6", npm_package_dependencies__types_uuid: "^9.0.2", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/70/mh3gzgrx3jl0tl0dj8vn92br0000gn/T/", npm_config_global_prefix: "/Users/benda/.nvm/versions/node/v18.19.0", CURSOR_CLI: 'ELECTRON_RUN_AS_NODE=1 "/Applications/Cursor.app/Contents/MacOS/Cursor" "/Applications/Cursor.app/Contents/Resources/app/out/cli.js"', npm_package_scripts_lint: "eslint resources/js --fix --ext js,vue,ts", npm_config_init_license: "MIT", TERM_PROGRAM_VERSION: "1.7.33", npm_package_devDependencies__vitejs_plugin_vue: "^5.0.4", npm_package_scripts_dev: "NODE_ENV=development vite build --watch", ZDOTDIR: "/Users/benda", CURSOR_TRACE_ID: "44659bd360014d3d91541f29742c01e6", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", npm_package_scripts_nova_install: "npm --prefix='./vendor/laravel/nova' i", COLOR: "1", TERM_SESSION_ID: "98F0A2F9-39B9-4C53-9741-0E084E660B8A", npm_config_noproxy: "", npm_package_private: "true", npm_config_registry: "https://registry.yarnpkg.com", npm_config_local_prefix: "/Users/benda/workplace/nova-filemanager", npm_package_readmeFilename: "README.md", npm_config_python: "python3", NVM_DIR: "/Users/benda/.nvm", USER: "benda", npm_package_description: "[![Latest Version on Packagist](https://img.shields.io/packagist/v/stepanenko3/nova-filemanager.svg?style=flat-square)](https://packagist.org/packages/stepanenko3/nova-filemanager) [![Total Downloads](https://img.shields.io/packagist/dt/stepanenko3/nova-filemanager.svg?style=flat-square)](https://packagist.org/packages/stepanenko3/nova-filemanager) [![License](https://poser.pugx.org/stepanenko3/nova-filemanager/license)](https://packagist.org/packages/stepanenko3/nova-filemanager)", npm_package_devDependencies_filesize: "^10.1.1", npm_package_license: "MIT", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/benda/.nvm/versions/node/v18.19.0/etc/npmrc", npm_package_exports___import: "./dist/js/package.js", npm_package_devDependencies__inertiajs_inertia: "^0.11.1", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.a1GJWqGAnm/Listeners", npm_package_dependencies_lodash: "^4.17.21", npm_package_scripts_dev_package: "NODE_ENV=development LIB=package vite build --watch", VSCODE_PROFILE_INITIALIZED: "1", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_package_devDependencies_postcss: "^8.4.38", npm_execpath: "/Users/benda/.nvm/versions/node/v18.19.0/lib/node_modules/npm/bin/npm-cli.js", npm_package_module: "./dist/js/package.js", npm_package_scripts_build_tool: "LIB_NAME=tool vite build", PATH: "/var/folders/70/mh3gzgrx3jl0tl0dj8vn92br0000gn/T/yarn--1759606440557-0.5293195190897442:/Users/benda/workplace/nova-filemanager/node_modules/.bin:/Users/benda/.config/yarn/link/node_modules/.bin:/Users/benda/.nvm/versions/node/v18.19.0/libexec/lib/node_modules/npm/bin/node-gyp-bin:/Users/benda/.nvm/versions/node/v18.19.0/lib/node_modules/npm/bin/node-gyp-bin:/Users/benda/.nvm/versions/node/v18.19.0/bin/node_modules/npm/bin/node-gyp-bin:/Users/benda/workplace/nova-filemanager/node_modules/.bin:/Users/benda/workplace/node_modules/.bin:/Users/benda/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/benda/.nvm/versions/node/v18.19.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/benda/.nvm/versions/node/v18.19.0/bin:~/Library/Android/sdk/platform-tools:/Users/benda/.bin:/opt/homebrew/opt/php@8.2/sbin:/opt/homebrew/opt/php@8.2/bin:/opt/homebrew/opt/php@8.1/sbin:/opt/homebrew/opt/php@8.1/bin:/opt/homebrew/opt/php@8.0/sbin:/opt/homebrew/opt/php@8.0/bin:/opt/homebrew/opt/php@7.4/sbin:/opt/homebrew/opt/php@7.4/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/benda/.nvm/versions/node/v18.19.0/bin:~/Library/Android/sdk/platform-tools:/Users/benda/.bin:/opt/homebrew/opt/php@8.2/sbin:/opt/homebrew/opt/php@8.2/bin:/opt/homebrew/opt/php@8.1/sbin:/opt/homebrew/opt/php@8.1/bin:/opt/homebrew/opt/php@8.0/sbin:/opt/homebrew/opt/php@8.0/bin:/opt/homebrew/opt/php@7.4/sbin:/opt/homebrew/opt/php@7.4/bin:/Users/benda/.lmstudio/bin:/Users/benda/Library/Android/sdk/platform-tools:/emulator:/Users/benda/Library/Android/sdk/platform-tools:/emulator:/Users/benda/.lmstudio/bin", npm_config_argv: '{"remain":[],"cooked":["run","build:package"],"original":["build:package"]}', npm_package_devDependencies_uuid: "^9.0.1", npm_package_json: "/Users/benda/workplace/nova-filemanager/package.json", LaunchInstanceID: "82DEB95D-469F-4AF5-AB7E-0239149677E5", _: "/Users/benda/workplace/nova-filemanager/node_modules/.bin/vite", npm_package_dependencies_vue: "^3.4.21", npm_config_userconfig: "/Users/benda/.npmrc", npm_config_init_module: "/Users/benda/.npm-init.js", USER_ZDOTDIR: "/Users/benda", __CFBundleIdentifier: "com.todesktop.230313mzl4w4u92", npm_package_devDependencies_md5: "^2.2.1", npm_command: "run-script", PWD: "/Users/benda/workplace/nova-filemanager", npm_package_devDependencies_tailwindcss: "^3.4.3", LIB_NAME: "package", npm_lifecycle_event: "build:package", EDITOR: "vi", LANG: "en_US.UTF-8", npm_package_name: "", CURSOR_CLI_MODE: "local", npm_package_dependencies_autoprefixer: "^10.4.14", npm_config_progress: "", npm_package_devDependencies_sass: "^1.72.0", npm_package_scripts_build: "yarn build:tool && yarn build:package", npm_config_version_commit_hooks: "true", npm_config_npm_version: "10.2.3", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_package_dependencies__pqina_pintura: "^8.77.0", npm_config_bin_links: "true", npm_config_node_gyp: "/Users/benda/.nvm/versions/node/v18.19.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_main: "./dist/js/tool.js", XPC_SERVICE_NAME: "0", npm_package_version: "", VSCODE_INJECTION: "1", npm_package_dependencies_pinia: "^2.1.7", SHLVL: "5", HOME: "/Users/benda", npm_package_type: "module", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Cursor.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_config_save_prefix: "^", npm_config_strict_ssl: "true", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_version_git_message: "v%s", npm_config_cache: "/Users/benda/.npm", LOGNAME: "benda", YARN_WRAP_OUTPUT: "false", npm_package_scripts_format: "prettier --write 'resources/js/**/*.{css,js,vue,ts}'", npm_lifecycle_script: "LIB_NAME=package vite build", npm_package_exports___require: "./dist/js/package.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/70/mh3gzgrx3jl0tl0dj8vn92br0000gn/T/vscode-git-d235543445.sock", LC_CTYPE: "UTF-8", npm_package_scripts_package: "npm run format && npm run lint && npm run build", NVM_BIN: "/Users/benda/.nvm/versions/node/v18.19.0/bin", npm_config_user_agent: "yarn/1.22.22 npm/? node/v18.19.0 darwin arm64", npm_package_devDependencies__vue_compiler_sfc: "^3.4.21", npm_package_scripts_check_format: "prettier --list-different 'resources/**/*.{css,js,vue,ts}'", npm_config_version_git_sign: "", npm_config_ignore_scripts: "", VSCODE_GIT_ASKPASS_NODE: "/Applications/Cursor.app/Contents/Frameworks/Cursor Helper (Plugin).app/Contents/MacOS/Cursor Helper (Plugin)", GIT_ASKPASS: "/Applications/Cursor.app/Contents/Resources/app/extensions/git/dist/askpass.sh", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", npm_package_dependencies_tailwind_scrollbar_hide: "^1.1.7", npm_package_dependencies__types_lodash: "^4.14.195", npm_package_devDependencies__types_node: "^20.11.30", npm_package_dependencies_resumablejs: "^1.1.0", npm_package_dependencies__pqina_vue_pintura: "^9.0.1", npm_package_files_0: "dist/*", npm_package_devDependencies_vue_cropperjs: "^5.0.0", npm_config_init_version: "1.0.0", npm_config_ignore_optional: "", SECURITYSESSIONID: "18dd3", npm_node_execpath: "/Users/benda/.nvm/versions/node/v18.19.0/bin/node", npm_config_prefix: "/Users/benda/.nvm/versions/node/v18.19.0", COLORTERM: "truecolor", npm_package_scripts_build_package: "LIB_NAME=package vite build", npm_config_version_tag_prefix: "v", NODE_ENV: "production" };
let $l;
const Wa = (s) => $l = s, zl = (
  /* istanbul ignore next */
  Symbol()
);
function ps(s) {
  return s && typeof s == "object" && Object.prototype.toString.call(s) === "[object Object]" && typeof s.toJSON != "function";
}
var Ri;
(function(s) {
  s.direct = "direct", s.patchObject = "patch object", s.patchFunction = "patch function";
})(Ri || (Ri = {}));
function sy() {
  const s = Il(!0), p = s.run(() => we({}));
  let i = [], h = [];
  const k = Ml({
    install($) {
      Wa(k), k._a = $, $.provide(zl, k), $.config.globalProperties.$pinia = k, h.forEach((U) => i.push(U)), h = [];
    },
    use($) {
      return !this._a && !qv ? h.push($) : i.push($), this;
    },
    _p: i,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: s,
    _s: /* @__PURE__ */ new Map(),
    state: p
  });
  return k;
}
const Wl = () => {
};
function Ol(s, p, i, h = Wl) {
  s.push(p);
  const k = () => {
    const $ = s.indexOf(p);
    $ > -1 && (s.splice($, 1), h());
  };
  return !i && Nl() && Pl(k), k;
}
function Vr(s, ...p) {
  s.slice().forEach((i) => {
    i(...p);
  });
}
const Gv = (s) => s();
function gs(s, p) {
  s instanceof Map && p instanceof Map && p.forEach((i, h) => s.set(h, i)), s instanceof Set && p instanceof Set && p.forEach(s.add, s);
  for (const i in p) {
    if (!p.hasOwnProperty(i))
      continue;
    const h = p[i], k = s[i];
    ps(k) && ps(h) && s.hasOwnProperty(i) && !Ii(h) && !vs(h) ? s[i] = gs(k, h) : s[i] = h;
  }
  return s;
}
const Xv = (
  /* istanbul ignore next */
  Symbol()
);
function Yv(s) {
  return !ps(s) || !s.hasOwnProperty(Xv);
}
const { assign: cr } = Object;
function jv(s) {
  return !!(Ii(s) && s.effect);
}
function Kv(s, p, i, h) {
  const { state: k, actions: $, getters: U } = p, T = i.state.value[s];
  let H;
  function F() {
    !T && Ul.NODE_ENV === "production" && (i.state.value[s] = k ? k() : {});
    const z = Pv(i.state.value[s]);
    return cr(z, $, Object.keys(U || {}).reduce((V, ae) => (V[ae] = Ml(At(() => {
      Wa(i);
      const j = i._s.get(s);
      return U[ae].call(j, j);
    })), V), {}));
  }
  return H = Hl(s, F, p, i, h, !0), H;
}
function Hl(s, p, i = {}, h, k, $) {
  let U;
  const T = cr({ actions: {} }, i), H = {
    deep: !0
    // flush: 'post',
  };
  let F, z, V = [], ae = [], j;
  const d = h.state.value[s];
  !$ && !d && Ul.NODE_ENV === "production" && (h.state.value[s] = {}), we({});
  let S;
  function D(ce) {
    let le;
    F = z = !1, typeof ce == "function" ? (ce(h.state.value[s]), le = {
      type: Ri.patchFunction,
      storeId: s,
      events: j
    }) : (gs(h.state.value[s], ce), le = {
      type: Ri.patchObject,
      payload: ce,
      storeId: s,
      events: j
    });
    const ne = S = Symbol();
    ms().then(() => {
      S === ne && (F = !0);
    }), z = !0, Vr(V, le, h.state.value[s]);
  }
  const E = $ ? function() {
    const { state: le } = i, ne = le ? le() : {};
    this.$patch((ye) => {
      cr(ye, ne);
    });
  } : (
    /* istanbul ignore next */
    Wl
  );
  function _() {
    U.stop(), V = [], ae = [], h._s.delete(s);
  }
  function oe(ce, le) {
    return function() {
      Wa(h);
      const ne = Array.from(arguments), ye = [], Ne = [];
      function rt(Ke) {
        ye.push(Ke);
      }
      function ft(Ke) {
        Ne.push(Ke);
      }
      Vr(ae, {
        args: ne,
        name: ce,
        store: te,
        after: rt,
        onError: ft
      });
      let mt;
      try {
        mt = le.apply(this && this.$id === s ? this : te, ne);
      } catch (Ke) {
        throw Vr(Ne, Ke), Ke;
      }
      return mt instanceof Promise ? mt.then((Ke) => (Vr(ye, Ke), Ke)).catch((Ke) => (Vr(Ne, Ke), Promise.reject(Ke))) : (Vr(ye, mt), mt);
    };
  }
  const ee = {
    _p: h,
    // _s: scope,
    $id: s,
    $onAction: Ol.bind(null, ae),
    $patch: D,
    $reset: E,
    $subscribe(ce, le = {}) {
      const ne = Ol(V, ce, le.detached, () => ye()), ye = U.run(() => ei(() => h.state.value[s], (Ne) => {
        (le.flush === "sync" ? z : F) && ce({
          storeId: s,
          type: Ri.direct,
          events: j
        }, Ne);
      }, cr({}, H, le)));
      return ne;
    },
    $dispose: _
  }, te = Nv(ee);
  h._s.set(s, te);
  const De = (h._a && h._a.runWithContext || Gv)(() => h._e.run(() => (U = Il()).run(p)));
  for (const ce in De) {
    const le = De[ce];
    if (Ii(le) && !jv(le) || vs(le))
      $ || (d && Yv(le) && (Ii(le) ? le.value = d[ce] : gs(le, d[ce])), h.state.value[s][ce] = le);
    else if (typeof le == "function") {
      const ne = oe(ce, le);
      De[ce] = ne, T.actions[ce] = le;
    }
  }
  return cr(te, De), cr(Ll(te), De), Object.defineProperty(te, "$state", {
    get: () => h.state.value[s],
    set: (ce) => {
      D((le) => {
        cr(le, ce);
      });
    }
  }), h._p.forEach((ce) => {
    cr(te, U.run(() => ce({
      store: te,
      app: h._a,
      pinia: h,
      options: T
    })));
  }), d && $ && i.hydrate && i.hydrate(te.$state, d), F = !0, z = !0, te;
}
function Vv(s, p, i) {
  let h, k;
  const $ = typeof p == "function";
  typeof s == "string" ? (h = s, k = $ ? i : p) : (k = s, h = s.id);
  function U(T, H) {
    const F = Mv();
    return T = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    T || (F ? Lv(zl, null) : null), T && Wa(T), T = $l, T._s.has(h) || ($ ? Hl(h, p, k, T) : Kv(h, k, T)), T._s.get(h);
  }
  return U.$id = h, U;
}
function ql(s) {
  {
    s = Ll(s);
    const p = {};
    for (const i in s) {
      const h = s[i];
      (Ii(h) || vs(h)) && (p[i] = // ---
      Iv(s, i));
    }
    return p;
  }
}
var Zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gl(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var $a = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
$a.exports;
(function(s, p) {
  (function() {
    var i, h = "4.17.21", k = 200, $ = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", U = "Expected a function", T = "Invalid `variable` option passed into `_.template`", H = "__lodash_hash_undefined__", F = 500, z = "__lodash_placeholder__", V = 1, ae = 2, j = 4, d = 1, S = 2, D = 1, E = 2, _ = 4, oe = 8, ee = 16, te = 32, ge = 64, De = 128, ce = 256, le = 512, ne = 30, ye = "...", Ne = 800, rt = 16, ft = 1, mt = 2, Ke = 3, $e = 1 / 0, xe = 9007199254740991, Cn = 17976931348623157e292, Ln = NaN, gt = 4294967295, Zn = gt - 1, En = gt >>> 1, Nn = [
      ["ary", De],
      ["bind", D],
      ["bindKey", E],
      ["curry", oe],
      ["curryRight", ee],
      ["flip", le],
      ["partial", te],
      ["partialRight", ge],
      ["rearg", ce]
    ], qt = "[object Arguments]", Pn = "[object Array]", Tr = "[object AsyncFunction]", en = "[object Boolean]", tn = "[object Date]", kn = "[object DOMException]", Sn = "[object Error]", On = "[object Function]", xt = "[object GeneratorFunction]", Rt = "[object Map]", Fn = "[object Number]", Rr = "[object Null]", Bt = "[object Object]", pr = "[object Promise]", Ir = "[object Proxy]", Dn = "[object RegExp]", Qe = "[object Set]", J = "[object String]", ve = "[object Symbol]", ze = "[object Undefined]", Ct = "[object WeakMap]", Et = "[object WeakSet]", Gt = "[object ArrayBuffer]", Bn = "[object DataView]", Mr = "[object Float32Array]", Lr = "[object Float64Array]", ii = "[object Int8Array]", ai = "[object Int16Array]", Ee = "[object Int32Array]", Nr = "[object Uint8Array]", gr = "[object Uint8ClampedArray]", vn = "[object Uint16Array]", oi = "[object Uint32Array]", Jn = /\b__p \+= '';/g, kt = /\b(__p \+=) '' \+/g, qa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, si = /&(?:amp|lt|gt|quot|#39);/g, Ze = /[&<>"']/g, Ye = RegExp(si.source), Ga = RegExp(Ze.source), Qn = /<%-([\s\S]+?)%>/g, Xa = /<%([\s\S]+?)%>/g, mn = /<%=([\s\S]+?)%>/g, Ya = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lt = /^\w*$/, nn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, An = /[\\^$.*+?()[\]{}|]/g, ja = RegExp(An.source), vr = /^\s+/, ui = /\s/, mr = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ka = /\{\n\/\* \[wrapped with (.+)\] \*/, Li = /,? & /, Ni = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Xt = /[()=,{}\[\]\/\s]/, Ut = /\\(\\)?/g, er = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, li = /\w*$/, ci = /^[-+]0x[0-9a-f]+$/i, Va = /^0b[01]+$/i, Pi = /^\[object .+?Constructor\]$/, Fi = /^0o[0-7]+$/i, _r = /^(?:0|[1-9]\d*)$/, Za = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Un = /($^)/, Ja = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", Qa = "\\u0300-\\u036f", eo = "\\ufe20-\\ufe2f", Bi = "\\u20d0-\\u20ff", Ui = Qa + eo + Bi, $i = "\\u2700-\\u27bf", zi = "a-z\\xdf-\\xf6\\xf8-\\xff", to = "\\xac\\xb1\\xd7\\xf7", no = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ro = "\\u2000-\\u206f", io = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wi = "A-Z\\xc0-\\xd6\\xd8-\\xde", Hi = "\\ufe0e\\ufe0f", qi = to + no + ro + io, fi = "['’]", ao = "[" + Yt + "]", Gi = "[" + qi + "]", yr = "[" + Ui + "]", g = "\\d+", a = "[" + $i + "]", l = "[" + zi + "]", u = "[^" + Yt + qi + g + $i + zi + Wi + "]", b = "\\ud83c[\\udffb-\\udfff]", m = "(?:" + yr + "|" + b + ")", w = "[^" + Yt + "]", A = "(?:\\ud83c[\\udde6-\\uddff]){2}", G = "[\\ud800-\\udbff][\\udc00-\\udfff]", B = "[" + Wi + "]", R = "\\u200d", I = "(?:" + l + "|" + u + ")", q = "(?:" + B + "|" + u + ")", Ie = "(?:" + fi + "(?:d|ll|m|re|s|t|ve))?", Re = "(?:" + fi + "(?:D|LL|M|RE|S|T|VE))?", Ge = m + "?", Be = "[" + Hi + "]?", it = "(?:" + R + "(?:" + [w, A, G].join("|") + ")" + Be + Ge + ")*", ct = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", et = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rn = Be + Ge + it, It = "(?:" + [a, A, G].join("|") + ")" + rn, K = "(?:" + [w + yr + "?", yr, A, G, ao].join("|") + ")", Ue = RegExp(fi, "g"), at = RegExp(yr, "g"), St = RegExp(b + "(?=" + b + ")|" + K + rn, "g"), _n = RegExp([
      B + "?" + l + "+" + Ie + "(?=" + [Gi, B, "$"].join("|") + ")",
      q + "+" + Re + "(?=" + [Gi, B + I, "$"].join("|") + ")",
      B + "?" + I + "+" + Ie,
      B + "+" + Re,
      et,
      ct,
      g,
      It
    ].join("|"), "g"), $n = RegExp("[" + R + Yt + Ui + Hi + "]"), zn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Tn = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], an = -1, ke = {};
    ke[Mr] = ke[Lr] = ke[ii] = ke[ai] = ke[Ee] = ke[Nr] = ke[gr] = ke[vn] = ke[oi] = !0, ke[qt] = ke[Pn] = ke[Gt] = ke[en] = ke[Bn] = ke[tn] = ke[Sn] = ke[On] = ke[Rt] = ke[Fn] = ke[Bt] = ke[Dn] = ke[Qe] = ke[J] = ke[Ct] = !1;
    var Fe = {};
    Fe[qt] = Fe[Pn] = Fe[Gt] = Fe[Bn] = Fe[en] = Fe[tn] = Fe[Mr] = Fe[Lr] = Fe[ii] = Fe[ai] = Fe[Ee] = Fe[Rt] = Fe[Fn] = Fe[Bt] = Fe[Dn] = Fe[Qe] = Fe[J] = Fe[ve] = Fe[Nr] = Fe[gr] = Fe[vn] = Fe[oi] = !0, Fe[Sn] = Fe[On] = Fe[Ct] = !1;
    var Pr = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, hi = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, di = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Xi = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Yi = parseFloat, ji = parseInt, pi = typeof Zr == "object" && Zr && Zr.Object === Object && Zr, oo = typeof self == "object" && self && self.Object === Object && self, ht = pi || oo || Function("return this")(), so = p && !p.nodeType && p, br = so && !0 && s && !s.nodeType && s, ws = br && br.exports === so, uo = ws && pi.process, on = function() {
      try {
        var x = br && br.require && br.require("util").types;
        return x || uo && uo.binding && uo.binding("util");
      } catch {
      }
    }(), xs = on && on.isArrayBuffer, Cs = on && on.isDate, Es = on && on.isMap, ks = on && on.isRegExp, Ss = on && on.isSet, Os = on && on.isTypedArray;
    function jt(x, M, O) {
      switch (O.length) {
        case 0:
          return x.call(M);
        case 1:
          return x.call(M, O[0]);
        case 2:
          return x.call(M, O[0], O[1]);
        case 3:
          return x.call(M, O[0], O[1], O[2]);
      }
      return x.apply(M, O);
    }
    function Ql(x, M, O, re) {
      for (var me = -1, We = x == null ? 0 : x.length; ++me < We; ) {
        var dt = x[me];
        M(re, dt, O(dt), x);
      }
      return re;
    }
    function sn(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length; ++O < re && M(x[O], O, x) !== !1; )
        ;
      return x;
    }
    function ec(x, M) {
      for (var O = x == null ? 0 : x.length; O-- && M(x[O], O, x) !== !1; )
        ;
      return x;
    }
    function Ds(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length; ++O < re; )
        if (!M(x[O], O, x))
          return !1;
      return !0;
    }
    function tr(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length, me = 0, We = []; ++O < re; ) {
        var dt = x[O];
        M(dt, O, x) && (We[me++] = dt);
      }
      return We;
    }
    function Ki(x, M) {
      var O = x == null ? 0 : x.length;
      return !!O && Fr(x, M, 0) > -1;
    }
    function lo(x, M, O) {
      for (var re = -1, me = x == null ? 0 : x.length; ++re < me; )
        if (O(M, x[re]))
          return !0;
      return !1;
    }
    function Ve(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length, me = Array(re); ++O < re; )
        me[O] = M(x[O], O, x);
      return me;
    }
    function nr(x, M) {
      for (var O = -1, re = M.length, me = x.length; ++O < re; )
        x[me + O] = M[O];
      return x;
    }
    function co(x, M, O, re) {
      var me = -1, We = x == null ? 0 : x.length;
      for (re && We && (O = x[++me]); ++me < We; )
        O = M(O, x[me], me, x);
      return O;
    }
    function tc(x, M, O, re) {
      var me = x == null ? 0 : x.length;
      for (re && me && (O = x[--me]); me--; )
        O = M(O, x[me], me, x);
      return O;
    }
    function fo(x, M) {
      for (var O = -1, re = x == null ? 0 : x.length; ++O < re; )
        if (M(x[O], O, x))
          return !0;
      return !1;
    }
    var nc = ho("length");
    function rc(x) {
      return x.split("");
    }
    function ic(x) {
      return x.match(Ni) || [];
    }
    function As(x, M, O) {
      var re;
      return O(x, function(me, We, dt) {
        if (M(me, We, dt))
          return re = We, !1;
      }), re;
    }
    function Vi(x, M, O, re) {
      for (var me = x.length, We = O + (re ? 1 : -1); re ? We-- : ++We < me; )
        if (M(x[We], We, x))
          return We;
      return -1;
    }
    function Fr(x, M, O) {
      return M === M ? vc(x, M, O) : Vi(x, Ts, O);
    }
    function ac(x, M, O, re) {
      for (var me = O - 1, We = x.length; ++me < We; )
        if (re(x[me], M))
          return me;
      return -1;
    }
    function Ts(x) {
      return x !== x;
    }
    function Rs(x, M) {
      var O = x == null ? 0 : x.length;
      return O ? go(x, M) / O : Ln;
    }
    function ho(x) {
      return function(M) {
        return M == null ? i : M[x];
      };
    }
    function po(x) {
      return function(M) {
        return x == null ? i : x[M];
      };
    }
    function Is(x, M, O, re, me) {
      return me(x, function(We, dt, Xe) {
        O = re ? (re = !1, We) : M(O, We, dt, Xe);
      }), O;
    }
    function oc(x, M) {
      var O = x.length;
      for (x.sort(M); O--; )
        x[O] = x[O].value;
      return x;
    }
    function go(x, M) {
      for (var O, re = -1, me = x.length; ++re < me; ) {
        var We = M(x[re]);
        We !== i && (O = O === i ? We : O + We);
      }
      return O;
    }
    function vo(x, M) {
      for (var O = -1, re = Array(x); ++O < x; )
        re[O] = M(O);
      return re;
    }
    function sc(x, M) {
      return Ve(M, function(O) {
        return [O, x[O]];
      });
    }
    function Ms(x) {
      return x && x.slice(0, Fs(x) + 1).replace(vr, "");
    }
    function Kt(x) {
      return function(M) {
        return x(M);
      };
    }
    function mo(x, M) {
      return Ve(M, function(O) {
        return x[O];
      });
    }
    function gi(x, M) {
      return x.has(M);
    }
    function Ls(x, M) {
      for (var O = -1, re = x.length; ++O < re && Fr(M, x[O], 0) > -1; )
        ;
      return O;
    }
    function Ns(x, M) {
      for (var O = x.length; O-- && Fr(M, x[O], 0) > -1; )
        ;
      return O;
    }
    function uc(x, M) {
      for (var O = x.length, re = 0; O--; )
        x[O] === M && ++re;
      return re;
    }
    var lc = po(Pr), cc = po(hi);
    function fc(x) {
      return "\\" + Xi[x];
    }
    function hc(x, M) {
      return x == null ? i : x[M];
    }
    function Br(x) {
      return $n.test(x);
    }
    function dc(x) {
      return zn.test(x);
    }
    function pc(x) {
      for (var M, O = []; !(M = x.next()).done; )
        O.push(M.value);
      return O;
    }
    function _o(x) {
      var M = -1, O = Array(x.size);
      return x.forEach(function(re, me) {
        O[++M] = [me, re];
      }), O;
    }
    function Ps(x, M) {
      return function(O) {
        return x(M(O));
      };
    }
    function rr(x, M) {
      for (var O = -1, re = x.length, me = 0, We = []; ++O < re; ) {
        var dt = x[O];
        (dt === M || dt === z) && (x[O] = z, We[me++] = O);
      }
      return We;
    }
    function Zi(x) {
      var M = -1, O = Array(x.size);
      return x.forEach(function(re) {
        O[++M] = re;
      }), O;
    }
    function gc(x) {
      var M = -1, O = Array(x.size);
      return x.forEach(function(re) {
        O[++M] = [re, re];
      }), O;
    }
    function vc(x, M, O) {
      for (var re = O - 1, me = x.length; ++re < me; )
        if (x[re] === M)
          return re;
      return -1;
    }
    function mc(x, M, O) {
      for (var re = O + 1; re--; )
        if (x[re] === M)
          return re;
      return re;
    }
    function Ur(x) {
      return Br(x) ? yc(x) : nc(x);
    }
    function yn(x) {
      return Br(x) ? bc(x) : rc(x);
    }
    function Fs(x) {
      for (var M = x.length; M-- && ui.test(x.charAt(M)); )
        ;
      return M;
    }
    var _c = po(di);
    function yc(x) {
      for (var M = St.lastIndex = 0; St.test(x); )
        ++M;
      return M;
    }
    function bc(x) {
      return x.match(St) || [];
    }
    function wc(x) {
      return x.match(_n) || [];
    }
    var xc = function x(M) {
      M = M == null ? ht : $r.defaults(ht.Object(), M, $r.pick(ht, Tn));
      var O = M.Array, re = M.Date, me = M.Error, We = M.Function, dt = M.Math, Xe = M.Object, yo = M.RegExp, Cc = M.String, un = M.TypeError, Ji = O.prototype, Ec = We.prototype, zr = Xe.prototype, Qi = M["__core-js_shared__"], ea = Ec.toString, qe = zr.hasOwnProperty, kc = 0, Bs = function() {
        var e = /[^.]+$/.exec(Qi && Qi.keys && Qi.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), ta = zr.toString, Sc = ea.call(Xe), Oc = ht._, Dc = yo(
        "^" + ea.call(qe).replace(An, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), na = ws ? M.Buffer : i, ir = M.Symbol, ra = M.Uint8Array, Us = na ? na.allocUnsafe : i, ia = Ps(Xe.getPrototypeOf, Xe), $s = Xe.create, zs = zr.propertyIsEnumerable, aa = Ji.splice, Ws = ir ? ir.isConcatSpreadable : i, vi = ir ? ir.iterator : i, wr = ir ? ir.toStringTag : i, oa = function() {
        try {
          var e = Sr(Xe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Ac = M.clearTimeout !== ht.clearTimeout && M.clearTimeout, Tc = re && re.now !== ht.Date.now && re.now, Rc = M.setTimeout !== ht.setTimeout && M.setTimeout, sa = dt.ceil, ua = dt.floor, bo = Xe.getOwnPropertySymbols, Ic = na ? na.isBuffer : i, Hs = M.isFinite, Mc = Ji.join, Lc = Ps(Xe.keys, Xe), pt = dt.max, Ot = dt.min, Nc = re.now, Pc = M.parseInt, qs = dt.random, Fc = Ji.reverse, wo = Sr(M, "DataView"), mi = Sr(M, "Map"), xo = Sr(M, "Promise"), Wr = Sr(M, "Set"), _i = Sr(M, "WeakMap"), yi = Sr(Xe, "create"), la = _i && new _i(), Hr = {}, Bc = Or(wo), Uc = Or(mi), $c = Or(xo), zc = Or(Wr), Wc = Or(_i), ca = ir ? ir.prototype : i, bi = ca ? ca.valueOf : i, Gs = ca ? ca.toString : i;
      function c(e) {
        if (tt(e) && !be(e) && !(e instanceof Le)) {
          if (e instanceof ln)
            return e;
          if (qe.call(e, "__wrapped__"))
            return Xu(e);
        }
        return new ln(e);
      }
      var qr = /* @__PURE__ */ function() {
        function e() {
        }
        return function(t) {
          if (!Je(t))
            return {};
          if ($s)
            return $s(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = i, n;
        };
      }();
      function fa() {
      }
      function ln(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
      }
      c.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Qn,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Xa,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: mn,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: c
        }
      }, c.prototype = fa.prototype, c.prototype.constructor = c, ln.prototype = qr(fa.prototype), ln.prototype.constructor = ln;
      function Le(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = gt, this.__views__ = [];
      }
      function Hc() {
        var e = new Le(this.__wrapped__);
        return e.__actions__ = $t(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = $t(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = $t(this.__views__), e;
      }
      function qc() {
        if (this.__filtered__) {
          var e = new Le(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Gc() {
        var e = this.__wrapped__.value(), t = this.__dir__, n = be(e), r = t < 0, o = n ? e.length : 0, f = ih(0, o, this.__views__), v = f.start, y = f.end, C = y - v, N = r ? y : v - 1, P = this.__iteratees__, W = P.length, Q = 0, se = Ot(C, this.__takeCount__);
        if (!n || !r && o == C && se == C)
          return gu(e, this.__actions__);
        var he = [];
        e:
          for (; C-- && Q < se; ) {
            N += t;
            for (var Se = -1, de = e[N]; ++Se < W; ) {
              var Me = P[Se], Pe = Me.iteratee, Jt = Me.type, Nt = Pe(de);
              if (Jt == mt)
                de = Nt;
              else if (!Nt) {
                if (Jt == ft)
                  continue e;
                break e;
              }
            }
            he[Q++] = de;
          }
        return he;
      }
      Le.prototype = qr(fa.prototype), Le.prototype.constructor = Le;
      function xr(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Xc() {
        this.__data__ = yi ? yi(null) : {}, this.size = 0;
      }
      function Yc(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function jc(e) {
        var t = this.__data__;
        if (yi) {
          var n = t[e];
          return n === H ? i : n;
        }
        return qe.call(t, e) ? t[e] : i;
      }
      function Kc(e) {
        var t = this.__data__;
        return yi ? t[e] !== i : qe.call(t, e);
      }
      function Vc(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = yi && t === i ? H : t, this;
      }
      xr.prototype.clear = Xc, xr.prototype.delete = Yc, xr.prototype.get = jc, xr.prototype.has = Kc, xr.prototype.set = Vc;
      function Wn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function Zc() {
        this.__data__ = [], this.size = 0;
      }
      function Jc(e) {
        var t = this.__data__, n = ha(t, e);
        if (n < 0)
          return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : aa.call(t, n, 1), --this.size, !0;
      }
      function Qc(e) {
        var t = this.__data__, n = ha(t, e);
        return n < 0 ? i : t[n][1];
      }
      function ef(e) {
        return ha(this.__data__, e) > -1;
      }
      function tf(e, t) {
        var n = this.__data__, r = ha(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
      }
      Wn.prototype.clear = Zc, Wn.prototype.delete = Jc, Wn.prototype.get = Qc, Wn.prototype.has = ef, Wn.prototype.set = tf;
      function Hn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function nf() {
        this.size = 0, this.__data__ = {
          hash: new xr(),
          map: new (mi || Wn)(),
          string: new xr()
        };
      }
      function rf(e) {
        var t = Ea(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function af(e) {
        return Ea(this, e).get(e);
      }
      function of(e) {
        return Ea(this, e).has(e);
      }
      function sf(e, t) {
        var n = Ea(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
      }
      Hn.prototype.clear = nf, Hn.prototype.delete = rf, Hn.prototype.get = af, Hn.prototype.has = of, Hn.prototype.set = sf;
      function Cr(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.__data__ = new Hn(); ++t < n; )
          this.add(e[t]);
      }
      function uf(e) {
        return this.__data__.set(e, H), this;
      }
      function lf(e) {
        return this.__data__.has(e);
      }
      Cr.prototype.add = Cr.prototype.push = uf, Cr.prototype.has = lf;
      function bn(e) {
        var t = this.__data__ = new Wn(e);
        this.size = t.size;
      }
      function cf() {
        this.__data__ = new Wn(), this.size = 0;
      }
      function ff(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      function hf(e) {
        return this.__data__.get(e);
      }
      function df(e) {
        return this.__data__.has(e);
      }
      function pf(e, t) {
        var n = this.__data__;
        if (n instanceof Wn) {
          var r = n.__data__;
          if (!mi || r.length < k - 1)
            return r.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new Hn(r);
        }
        return n.set(e, t), this.size = n.size, this;
      }
      bn.prototype.clear = cf, bn.prototype.delete = ff, bn.prototype.get = hf, bn.prototype.has = df, bn.prototype.set = pf;
      function Xs(e, t) {
        var n = be(e), r = !n && Dr(e), o = !n && !r && lr(e), f = !n && !r && !o && jr(e), v = n || r || o || f, y = v ? vo(e.length, Cc) : [], C = y.length;
        for (var N in e)
          (t || qe.call(e, N)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
          (N == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          o && (N == "offset" || N == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          f && (N == "buffer" || N == "byteLength" || N == "byteOffset") || // Skip index properties.
          Yn(N, C))) && y.push(N);
        return y;
      }
      function Ys(e) {
        var t = e.length;
        return t ? e[Mo(0, t - 1)] : i;
      }
      function gf(e, t) {
        return ka($t(e), Er(t, 0, e.length));
      }
      function vf(e) {
        return ka($t(e));
      }
      function Co(e, t, n) {
        (n !== i && !wn(e[t], n) || n === i && !(t in e)) && qn(e, t, n);
      }
      function wi(e, t, n) {
        var r = e[t];
        (!(qe.call(e, t) && wn(r, n)) || n === i && !(t in e)) && qn(e, t, n);
      }
      function ha(e, t) {
        for (var n = e.length; n--; )
          if (wn(e[n][0], t))
            return n;
        return -1;
      }
      function mf(e, t, n, r) {
        return ar(e, function(o, f, v) {
          t(r, o, n(o), v);
        }), r;
      }
      function js(e, t) {
        return e && In(t, vt(t), e);
      }
      function _f(e, t) {
        return e && In(t, Wt(t), e);
      }
      function qn(e, t, n) {
        t == "__proto__" && oa ? oa(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      }
      function Eo(e, t) {
        for (var n = -1, r = t.length, o = O(r), f = e == null; ++n < r; )
          o[n] = f ? i : is(e, t[n]);
        return o;
      }
      function Er(e, t, n) {
        return e === e && (n !== i && (e = e <= n ? e : n), t !== i && (e = e >= t ? e : t)), e;
      }
      function cn(e, t, n, r, o, f) {
        var v, y = t & V, C = t & ae, N = t & j;
        if (n && (v = o ? n(e, r, o, f) : n(e)), v !== i)
          return v;
        if (!Je(e))
          return e;
        var P = be(e);
        if (P) {
          if (v = oh(e), !y)
            return $t(e, v);
        } else {
          var W = Dt(e), Q = W == On || W == xt;
          if (lr(e))
            return _u(e, y);
          if (W == Bt || W == qt || Q && !o) {
            if (v = C || Q ? {} : Fu(e), !y)
              return C ? Kf(e, _f(v, e)) : jf(e, js(v, e));
          } else {
            if (!Fe[W])
              return o ? e : {};
            v = sh(e, W, y);
          }
        }
        f || (f = new bn());
        var se = f.get(e);
        if (se)
          return se;
        f.set(e, v), hl(e) ? e.forEach(function(de) {
          v.add(cn(de, t, n, de, e, f));
        }) : cl(e) && e.forEach(function(de, Me) {
          v.set(Me, cn(de, t, n, Me, e, f));
        });
        var he = N ? C ? qo : Ho : C ? Wt : vt, Se = P ? i : he(e);
        return sn(Se || e, function(de, Me) {
          Se && (Me = de, de = e[Me]), wi(v, Me, cn(de, t, n, Me, e, f));
        }), v;
      }
      function yf(e) {
        var t = vt(e);
        return function(n) {
          return Ks(n, e, t);
        };
      }
      function Ks(e, t, n) {
        var r = n.length;
        if (e == null)
          return !r;
        for (e = Xe(e); r--; ) {
          var o = n[r], f = t[o], v = e[o];
          if (v === i && !(o in e) || !f(v))
            return !1;
        }
        return !0;
      }
      function Vs(e, t, n) {
        if (typeof e != "function")
          throw new un(U);
        return Di(function() {
          e.apply(i, n);
        }, t);
      }
      function xi(e, t, n, r) {
        var o = -1, f = Ki, v = !0, y = e.length, C = [], N = t.length;
        if (!y)
          return C;
        n && (t = Ve(t, Kt(n))), r ? (f = lo, v = !1) : t.length >= k && (f = gi, v = !1, t = new Cr(t));
        e:
          for (; ++o < y; ) {
            var P = e[o], W = n == null ? P : n(P);
            if (P = r || P !== 0 ? P : 0, v && W === W) {
              for (var Q = N; Q--; )
                if (t[Q] === W)
                  continue e;
              C.push(P);
            } else
              f(t, W, r) || C.push(P);
          }
        return C;
      }
      var ar = Cu(Rn), Zs = Cu(So, !0);
      function bf(e, t) {
        var n = !0;
        return ar(e, function(r, o, f) {
          return n = !!t(r, o, f), n;
        }), n;
      }
      function da(e, t, n) {
        for (var r = -1, o = e.length; ++r < o; ) {
          var f = e[r], v = t(f);
          if (v != null && (y === i ? v === v && !Zt(v) : n(v, y)))
            var y = v, C = f;
        }
        return C;
      }
      function wf(e, t, n, r) {
        var o = e.length;
        for (n = Ce(n), n < 0 && (n = -n > o ? 0 : o + n), r = r === i || r > o ? o : Ce(r), r < 0 && (r += o), r = n > r ? 0 : pl(r); n < r; )
          e[n++] = t;
        return e;
      }
      function Js(e, t) {
        var n = [];
        return ar(e, function(r, o, f) {
          t(r, o, f) && n.push(r);
        }), n;
      }
      function _t(e, t, n, r, o) {
        var f = -1, v = e.length;
        for (n || (n = lh), o || (o = []); ++f < v; ) {
          var y = e[f];
          t > 0 && n(y) ? t > 1 ? _t(y, t - 1, n, r, o) : nr(o, y) : r || (o[o.length] = y);
        }
        return o;
      }
      var ko = Eu(), Qs = Eu(!0);
      function Rn(e, t) {
        return e && ko(e, t, vt);
      }
      function So(e, t) {
        return e && Qs(e, t, vt);
      }
      function pa(e, t) {
        return tr(t, function(n) {
          return jn(e[n]);
        });
      }
      function kr(e, t) {
        t = sr(t, e);
        for (var n = 0, r = t.length; e != null && n < r; )
          e = e[Mn(t[n++])];
        return n && n == r ? e : i;
      }
      function eu(e, t, n) {
        var r = t(e);
        return be(e) ? r : nr(r, n(e));
      }
      function Mt(e) {
        return e == null ? e === i ? ze : Rr : wr && wr in Xe(e) ? rh(e) : vh(e);
      }
      function Oo(e, t) {
        return e > t;
      }
      function xf(e, t) {
        return e != null && qe.call(e, t);
      }
      function Cf(e, t) {
        return e != null && t in Xe(e);
      }
      function Ef(e, t, n) {
        return e >= Ot(t, n) && e < pt(t, n);
      }
      function Do(e, t, n) {
        for (var r = n ? lo : Ki, o = e[0].length, f = e.length, v = f, y = O(f), C = 1 / 0, N = []; v--; ) {
          var P = e[v];
          v && t && (P = Ve(P, Kt(t))), C = Ot(P.length, C), y[v] = !n && (t || o >= 120 && P.length >= 120) ? new Cr(v && P) : i;
        }
        P = e[0];
        var W = -1, Q = y[0];
        e:
          for (; ++W < o && N.length < C; ) {
            var se = P[W], he = t ? t(se) : se;
            if (se = n || se !== 0 ? se : 0, !(Q ? gi(Q, he) : r(N, he, n))) {
              for (v = f; --v; ) {
                var Se = y[v];
                if (!(Se ? gi(Se, he) : r(e[v], he, n)))
                  continue e;
              }
              Q && Q.push(he), N.push(se);
            }
          }
        return N;
      }
      function kf(e, t, n, r) {
        return Rn(e, function(o, f, v) {
          t(r, n(o), f, v);
        }), r;
      }
      function Ci(e, t, n) {
        t = sr(t, e), e = zu(e, t);
        var r = e == null ? e : e[Mn(hn(t))];
        return r == null ? i : jt(r, e, n);
      }
      function tu(e) {
        return tt(e) && Mt(e) == qt;
      }
      function Sf(e) {
        return tt(e) && Mt(e) == Gt;
      }
      function Of(e) {
        return tt(e) && Mt(e) == tn;
      }
      function Ei(e, t, n, r, o) {
        return e === t ? !0 : e == null || t == null || !tt(e) && !tt(t) ? e !== e && t !== t : Df(e, t, n, r, Ei, o);
      }
      function Df(e, t, n, r, o, f) {
        var v = be(e), y = be(t), C = v ? Pn : Dt(e), N = y ? Pn : Dt(t);
        C = C == qt ? Bt : C, N = N == qt ? Bt : N;
        var P = C == Bt, W = N == Bt, Q = C == N;
        if (Q && lr(e)) {
          if (!lr(t))
            return !1;
          v = !0, P = !1;
        }
        if (Q && !P)
          return f || (f = new bn()), v || jr(e) ? Lu(e, t, n, r, o, f) : th(e, t, C, n, r, o, f);
        if (!(n & d)) {
          var se = P && qe.call(e, "__wrapped__"), he = W && qe.call(t, "__wrapped__");
          if (se || he) {
            var Se = se ? e.value() : e, de = he ? t.value() : t;
            return f || (f = new bn()), o(Se, de, n, r, f);
          }
        }
        return Q ? (f || (f = new bn()), nh(e, t, n, r, o, f)) : !1;
      }
      function Af(e) {
        return tt(e) && Dt(e) == Rt;
      }
      function Ao(e, t, n, r) {
        var o = n.length, f = o, v = !r;
        if (e == null)
          return !f;
        for (e = Xe(e); o--; ) {
          var y = n[o];
          if (v && y[2] ? y[1] !== e[y[0]] : !(y[0] in e))
            return !1;
        }
        for (; ++o < f; ) {
          y = n[o];
          var C = y[0], N = e[C], P = y[1];
          if (v && y[2]) {
            if (N === i && !(C in e))
              return !1;
          } else {
            var W = new bn();
            if (r)
              var Q = r(N, P, C, e, t, W);
            if (!(Q === i ? Ei(P, N, d | S, r, W) : Q))
              return !1;
          }
        }
        return !0;
      }
      function nu(e) {
        if (!Je(e) || fh(e))
          return !1;
        var t = jn(e) ? Dc : Pi;
        return t.test(Or(e));
      }
      function Tf(e) {
        return tt(e) && Mt(e) == Dn;
      }
      function Rf(e) {
        return tt(e) && Dt(e) == Qe;
      }
      function If(e) {
        return tt(e) && Ra(e.length) && !!ke[Mt(e)];
      }
      function ru(e) {
        return typeof e == "function" ? e : e == null ? Ht : typeof e == "object" ? be(e) ? ou(e[0], e[1]) : au(e) : kl(e);
      }
      function To(e) {
        if (!Oi(e))
          return Lc(e);
        var t = [];
        for (var n in Xe(e))
          qe.call(e, n) && n != "constructor" && t.push(n);
        return t;
      }
      function Mf(e) {
        if (!Je(e))
          return gh(e);
        var t = Oi(e), n = [];
        for (var r in e)
          r == "constructor" && (t || !qe.call(e, r)) || n.push(r);
        return n;
      }
      function Ro(e, t) {
        return e < t;
      }
      function iu(e, t) {
        var n = -1, r = zt(e) ? O(e.length) : [];
        return ar(e, function(o, f, v) {
          r[++n] = t(o, f, v);
        }), r;
      }
      function au(e) {
        var t = Xo(e);
        return t.length == 1 && t[0][2] ? Uu(t[0][0], t[0][1]) : function(n) {
          return n === e || Ao(n, e, t);
        };
      }
      function ou(e, t) {
        return jo(e) && Bu(t) ? Uu(Mn(e), t) : function(n) {
          var r = is(n, e);
          return r === i && r === t ? as(n, e) : Ei(t, r, d | S);
        };
      }
      function ga(e, t, n, r, o) {
        e !== t && ko(t, function(f, v) {
          if (o || (o = new bn()), Je(f))
            Lf(e, t, v, n, ga, r, o);
          else {
            var y = r ? r(Vo(e, v), f, v + "", e, t, o) : i;
            y === i && (y = f), Co(e, v, y);
          }
        }, Wt);
      }
      function Lf(e, t, n, r, o, f, v) {
        var y = Vo(e, n), C = Vo(t, n), N = v.get(C);
        if (N) {
          Co(e, n, N);
          return;
        }
        var P = f ? f(y, C, n + "", e, t, v) : i, W = P === i;
        if (W) {
          var Q = be(C), se = !Q && lr(C), he = !Q && !se && jr(C);
          P = C, Q || se || he ? be(y) ? P = y : ot(y) ? P = $t(y) : se ? (W = !1, P = _u(C, !0)) : he ? (W = !1, P = yu(C, !0)) : P = [] : Ai(C) || Dr(C) ? (P = y, Dr(y) ? P = gl(y) : (!Je(y) || jn(y)) && (P = Fu(C))) : W = !1;
        }
        W && (v.set(C, P), o(P, C, r, f, v), v.delete(C)), Co(e, n, P);
      }
      function su(e, t) {
        var n = e.length;
        if (n)
          return t += t < 0 ? n : 0, Yn(t, n) ? e[t] : i;
      }
      function uu(e, t, n) {
        t.length ? t = Ve(t, function(f) {
          return be(f) ? function(v) {
            return kr(v, f.length === 1 ? f[0] : f);
          } : f;
        }) : t = [Ht];
        var r = -1;
        t = Ve(t, Kt(fe()));
        var o = iu(e, function(f, v, y) {
          var C = Ve(t, function(N) {
            return N(f);
          });
          return { criteria: C, index: ++r, value: f };
        });
        return oc(o, function(f, v) {
          return Yf(f, v, n);
        });
      }
      function Nf(e, t) {
        return lu(e, t, function(n, r) {
          return as(e, r);
        });
      }
      function lu(e, t, n) {
        for (var r = -1, o = t.length, f = {}; ++r < o; ) {
          var v = t[r], y = kr(e, v);
          n(y, v) && ki(f, sr(v, e), y);
        }
        return f;
      }
      function Pf(e) {
        return function(t) {
          return kr(t, e);
        };
      }
      function Io(e, t, n, r) {
        var o = r ? ac : Fr, f = -1, v = t.length, y = e;
        for (e === t && (t = $t(t)), n && (y = Ve(e, Kt(n))); ++f < v; )
          for (var C = 0, N = t[f], P = n ? n(N) : N; (C = o(y, P, C, r)) > -1; )
            y !== e && aa.call(y, C, 1), aa.call(e, C, 1);
        return e;
      }
      function cu(e, t) {
        for (var n = e ? t.length : 0, r = n - 1; n--; ) {
          var o = t[n];
          if (n == r || o !== f) {
            var f = o;
            Yn(o) ? aa.call(e, o, 1) : Po(e, o);
          }
        }
        return e;
      }
      function Mo(e, t) {
        return e + ua(qs() * (t - e + 1));
      }
      function Ff(e, t, n, r) {
        for (var o = -1, f = pt(sa((t - e) / (n || 1)), 0), v = O(f); f--; )
          v[r ? f : ++o] = e, e += n;
        return v;
      }
      function Lo(e, t) {
        var n = "";
        if (!e || t < 1 || t > xe)
          return n;
        do
          t % 2 && (n += e), t = ua(t / 2), t && (e += e);
        while (t);
        return n;
      }
      function Ae(e, t) {
        return Zo($u(e, t, Ht), e + "");
      }
      function Bf(e) {
        return Ys(Kr(e));
      }
      function Uf(e, t) {
        var n = Kr(e);
        return ka(n, Er(t, 0, n.length));
      }
      function ki(e, t, n, r) {
        if (!Je(e))
          return e;
        t = sr(t, e);
        for (var o = -1, f = t.length, v = f - 1, y = e; y != null && ++o < f; ) {
          var C = Mn(t[o]), N = n;
          if (C === "__proto__" || C === "constructor" || C === "prototype")
            return e;
          if (o != v) {
            var P = y[C];
            N = r ? r(P, C, y) : i, N === i && (N = Je(P) ? P : Yn(t[o + 1]) ? [] : {});
          }
          wi(y, C, N), y = y[C];
        }
        return e;
      }
      var fu = la ? function(e, t) {
        return la.set(e, t), e;
      } : Ht, $f = oa ? function(e, t) {
        return oa(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ss(t),
          writable: !0
        });
      } : Ht;
      function zf(e) {
        return ka(Kr(e));
      }
      function fn(e, t, n) {
        var r = -1, o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var f = O(o); ++r < o; )
          f[r] = e[r + t];
        return f;
      }
      function Wf(e, t) {
        var n;
        return ar(e, function(r, o, f) {
          return n = t(r, o, f), !n;
        }), !!n;
      }
      function va(e, t, n) {
        var r = 0, o = e == null ? r : e.length;
        if (typeof t == "number" && t === t && o <= En) {
          for (; r < o; ) {
            var f = r + o >>> 1, v = e[f];
            v !== null && !Zt(v) && (n ? v <= t : v < t) ? r = f + 1 : o = f;
          }
          return o;
        }
        return No(e, t, Ht, n);
      }
      function No(e, t, n, r) {
        var o = 0, f = e == null ? 0 : e.length;
        if (f === 0)
          return 0;
        t = n(t);
        for (var v = t !== t, y = t === null, C = Zt(t), N = t === i; o < f; ) {
          var P = ua((o + f) / 2), W = n(e[P]), Q = W !== i, se = W === null, he = W === W, Se = Zt(W);
          if (v)
            var de = r || he;
          else
            N ? de = he && (r || Q) : y ? de = he && Q && (r || !se) : C ? de = he && Q && !se && (r || !Se) : se || Se ? de = !1 : de = r ? W <= t : W < t;
          de ? o = P + 1 : f = P;
        }
        return Ot(f, Zn);
      }
      function hu(e, t) {
        for (var n = -1, r = e.length, o = 0, f = []; ++n < r; ) {
          var v = e[n], y = t ? t(v) : v;
          if (!n || !wn(y, C)) {
            var C = y;
            f[o++] = v === 0 ? 0 : v;
          }
        }
        return f;
      }
      function du(e) {
        return typeof e == "number" ? e : Zt(e) ? Ln : +e;
      }
      function Vt(e) {
        if (typeof e == "string")
          return e;
        if (be(e))
          return Ve(e, Vt) + "";
        if (Zt(e))
          return Gs ? Gs.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -$e ? "-0" : t;
      }
      function or(e, t, n) {
        var r = -1, o = Ki, f = e.length, v = !0, y = [], C = y;
        if (n)
          v = !1, o = lo;
        else if (f >= k) {
          var N = t ? null : Qf(e);
          if (N)
            return Zi(N);
          v = !1, o = gi, C = new Cr();
        } else
          C = t ? [] : y;
        e:
          for (; ++r < f; ) {
            var P = e[r], W = t ? t(P) : P;
            if (P = n || P !== 0 ? P : 0, v && W === W) {
              for (var Q = C.length; Q--; )
                if (C[Q] === W)
                  continue e;
              t && C.push(W), y.push(P);
            } else
              o(C, W, n) || (C !== y && C.push(W), y.push(P));
          }
        return y;
      }
      function Po(e, t) {
        return t = sr(t, e), e = zu(e, t), e == null || delete e[Mn(hn(t))];
      }
      function pu(e, t, n, r) {
        return ki(e, t, n(kr(e, t)), r);
      }
      function ma(e, t, n, r) {
        for (var o = e.length, f = r ? o : -1; (r ? f-- : ++f < o) && t(e[f], f, e); )
          ;
        return n ? fn(e, r ? 0 : f, r ? f + 1 : o) : fn(e, r ? f + 1 : 0, r ? o : f);
      }
      function gu(e, t) {
        var n = e;
        return n instanceof Le && (n = n.value()), co(t, function(r, o) {
          return o.func.apply(o.thisArg, nr([r], o.args));
        }, n);
      }
      function Fo(e, t, n) {
        var r = e.length;
        if (r < 2)
          return r ? or(e[0]) : [];
        for (var o = -1, f = O(r); ++o < r; )
          for (var v = e[o], y = -1; ++y < r; )
            y != o && (f[o] = xi(f[o] || v, e[y], t, n));
        return or(_t(f, 1), t, n);
      }
      function vu(e, t, n) {
        for (var r = -1, o = e.length, f = t.length, v = {}; ++r < o; ) {
          var y = r < f ? t[r] : i;
          n(v, e[r], y);
        }
        return v;
      }
      function Bo(e) {
        return ot(e) ? e : [];
      }
      function Uo(e) {
        return typeof e == "function" ? e : Ht;
      }
      function sr(e, t) {
        return be(e) ? e : jo(e, t) ? [e] : Gu(He(e));
      }
      var Hf = Ae;
      function ur(e, t, n) {
        var r = e.length;
        return n = n === i ? r : n, !t && n >= r ? e : fn(e, t, n);
      }
      var mu = Ac || function(e) {
        return ht.clearTimeout(e);
      };
      function _u(e, t) {
        if (t)
          return e.slice();
        var n = e.length, r = Us ? Us(n) : new e.constructor(n);
        return e.copy(r), r;
      }
      function $o(e) {
        var t = new e.constructor(e.byteLength);
        return new ra(t).set(new ra(e)), t;
      }
      function qf(e, t) {
        var n = t ? $o(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      function Gf(e) {
        var t = new e.constructor(e.source, li.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Xf(e) {
        return bi ? Xe(bi.call(e)) : {};
      }
      function yu(e, t) {
        var n = t ? $o(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      function bu(e, t) {
        if (e !== t) {
          var n = e !== i, r = e === null, o = e === e, f = Zt(e), v = t !== i, y = t === null, C = t === t, N = Zt(t);
          if (!y && !N && !f && e > t || f && v && C && !y && !N || r && v && C || !n && C || !o)
            return 1;
          if (!r && !f && !N && e < t || N && n && o && !r && !f || y && n && o || !v && o || !C)
            return -1;
        }
        return 0;
      }
      function Yf(e, t, n) {
        for (var r = -1, o = e.criteria, f = t.criteria, v = o.length, y = n.length; ++r < v; ) {
          var C = bu(o[r], f[r]);
          if (C) {
            if (r >= y)
              return C;
            var N = n[r];
            return C * (N == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function wu(e, t, n, r) {
        for (var o = -1, f = e.length, v = n.length, y = -1, C = t.length, N = pt(f - v, 0), P = O(C + N), W = !r; ++y < C; )
          P[y] = t[y];
        for (; ++o < v; )
          (W || o < f) && (P[n[o]] = e[o]);
        for (; N--; )
          P[y++] = e[o++];
        return P;
      }
      function xu(e, t, n, r) {
        for (var o = -1, f = e.length, v = -1, y = n.length, C = -1, N = t.length, P = pt(f - y, 0), W = O(P + N), Q = !r; ++o < P; )
          W[o] = e[o];
        for (var se = o; ++C < N; )
          W[se + C] = t[C];
        for (; ++v < y; )
          (Q || o < f) && (W[se + n[v]] = e[o++]);
        return W;
      }
      function $t(e, t) {
        var n = -1, r = e.length;
        for (t || (t = O(r)); ++n < r; )
          t[n] = e[n];
        return t;
      }
      function In(e, t, n, r) {
        var o = !n;
        n || (n = {});
        for (var f = -1, v = t.length; ++f < v; ) {
          var y = t[f], C = r ? r(n[y], e[y], y, n, e) : i;
          C === i && (C = e[y]), o ? qn(n, y, C) : wi(n, y, C);
        }
        return n;
      }
      function jf(e, t) {
        return In(e, Yo(e), t);
      }
      function Kf(e, t) {
        return In(e, Nu(e), t);
      }
      function _a(e, t) {
        return function(n, r) {
          var o = be(n) ? Ql : mf, f = t ? t() : {};
          return o(n, e, fe(r, 2), f);
        };
      }
      function Gr(e) {
        return Ae(function(t, n) {
          var r = -1, o = n.length, f = o > 1 ? n[o - 1] : i, v = o > 2 ? n[2] : i;
          for (f = e.length > 3 && typeof f == "function" ? (o--, f) : i, v && Lt(n[0], n[1], v) && (f = o < 3 ? i : f, o = 1), t = Xe(t); ++r < o; ) {
            var y = n[r];
            y && e(t, y, r, f);
          }
          return t;
        });
      }
      function Cu(e, t) {
        return function(n, r) {
          if (n == null)
            return n;
          if (!zt(n))
            return e(n, r);
          for (var o = n.length, f = t ? o : -1, v = Xe(n); (t ? f-- : ++f < o) && r(v[f], f, v) !== !1; )
            ;
          return n;
        };
      }
      function Eu(e) {
        return function(t, n, r) {
          for (var o = -1, f = Xe(t), v = r(t), y = v.length; y--; ) {
            var C = v[e ? y : ++o];
            if (n(f[C], C, f) === !1)
              break;
          }
          return t;
        };
      }
      function Vf(e, t, n) {
        var r = t & D, o = Si(e);
        function f() {
          var v = this && this !== ht && this instanceof f ? o : e;
          return v.apply(r ? n : this, arguments);
        }
        return f;
      }
      function ku(e) {
        return function(t) {
          t = He(t);
          var n = Br(t) ? yn(t) : i, r = n ? n[0] : t.charAt(0), o = n ? ur(n, 1).join("") : t.slice(1);
          return r[e]() + o;
        };
      }
      function Xr(e) {
        return function(t) {
          return co(Cl(xl(t).replace(Ue, "")), e, "");
        };
      }
      function Si(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = qr(e.prototype), r = e.apply(n, t);
          return Je(r) ? r : n;
        };
      }
      function Zf(e, t, n) {
        var r = Si(e);
        function o() {
          for (var f = arguments.length, v = O(f), y = f, C = Yr(o); y--; )
            v[y] = arguments[y];
          var N = f < 3 && v[0] !== C && v[f - 1] !== C ? [] : rr(v, C);
          if (f -= N.length, f < n)
            return Tu(
              e,
              t,
              ya,
              o.placeholder,
              i,
              v,
              N,
              i,
              i,
              n - f
            );
          var P = this && this !== ht && this instanceof o ? r : e;
          return jt(P, this, v);
        }
        return o;
      }
      function Su(e) {
        return function(t, n, r) {
          var o = Xe(t);
          if (!zt(t)) {
            var f = fe(n, 3);
            t = vt(t), n = function(y) {
              return f(o[y], y, o);
            };
          }
          var v = e(t, n, r);
          return v > -1 ? o[f ? t[v] : v] : i;
        };
      }
      function Ou(e) {
        return Xn(function(t) {
          var n = t.length, r = n, o = ln.prototype.thru;
          for (e && t.reverse(); r--; ) {
            var f = t[r];
            if (typeof f != "function")
              throw new un(U);
            if (o && !v && Ca(f) == "wrapper")
              var v = new ln([], !0);
          }
          for (r = v ? r : n; ++r < n; ) {
            f = t[r];
            var y = Ca(f), C = y == "wrapper" ? Go(f) : i;
            C && Ko(C[0]) && C[1] == (De | oe | te | ce) && !C[4].length && C[9] == 1 ? v = v[Ca(C[0])].apply(v, C[3]) : v = f.length == 1 && Ko(f) ? v[y]() : v.thru(f);
          }
          return function() {
            var N = arguments, P = N[0];
            if (v && N.length == 1 && be(P))
              return v.plant(P).value();
            for (var W = 0, Q = n ? t[W].apply(this, N) : P; ++W < n; )
              Q = t[W].call(this, Q);
            return Q;
          };
        });
      }
      function ya(e, t, n, r, o, f, v, y, C, N) {
        var P = t & De, W = t & D, Q = t & E, se = t & (oe | ee), he = t & le, Se = Q ? i : Si(e);
        function de() {
          for (var Me = arguments.length, Pe = O(Me), Jt = Me; Jt--; )
            Pe[Jt] = arguments[Jt];
          if (se)
            var Nt = Yr(de), Qt = uc(Pe, Nt);
          if (r && (Pe = wu(Pe, r, o, se)), f && (Pe = xu(Pe, f, v, se)), Me -= Qt, se && Me < N) {
            var st = rr(Pe, Nt);
            return Tu(
              e,
              t,
              ya,
              de.placeholder,
              n,
              Pe,
              st,
              y,
              C,
              N - Me
            );
          }
          var xn = W ? n : this, Vn = Q ? xn[e] : e;
          return Me = Pe.length, y ? Pe = mh(Pe, y) : he && Me > 1 && Pe.reverse(), P && C < Me && (Pe.length = C), this && this !== ht && this instanceof de && (Vn = Se || Si(Vn)), Vn.apply(xn, Pe);
        }
        return de;
      }
      function Du(e, t) {
        return function(n, r) {
          return kf(n, e, t(r), {});
        };
      }
      function ba(e, t) {
        return function(n, r) {
          var o;
          if (n === i && r === i)
            return t;
          if (n !== i && (o = n), r !== i) {
            if (o === i)
              return r;
            typeof n == "string" || typeof r == "string" ? (n = Vt(n), r = Vt(r)) : (n = du(n), r = du(r)), o = e(n, r);
          }
          return o;
        };
      }
      function zo(e) {
        return Xn(function(t) {
          return t = Ve(t, Kt(fe())), Ae(function(n) {
            var r = this;
            return e(t, function(o) {
              return jt(o, r, n);
            });
          });
        });
      }
      function wa(e, t) {
        t = t === i ? " " : Vt(t);
        var n = t.length;
        if (n < 2)
          return n ? Lo(t, e) : t;
        var r = Lo(t, sa(e / Ur(t)));
        return Br(t) ? ur(yn(r), 0, e).join("") : r.slice(0, e);
      }
      function Jf(e, t, n, r) {
        var o = t & D, f = Si(e);
        function v() {
          for (var y = -1, C = arguments.length, N = -1, P = r.length, W = O(P + C), Q = this && this !== ht && this instanceof v ? f : e; ++N < P; )
            W[N] = r[N];
          for (; C--; )
            W[N++] = arguments[++y];
          return jt(Q, o ? n : this, W);
        }
        return v;
      }
      function Au(e) {
        return function(t, n, r) {
          return r && typeof r != "number" && Lt(t, n, r) && (n = r = i), t = Kn(t), n === i ? (n = t, t = 0) : n = Kn(n), r = r === i ? t < n ? 1 : -1 : Kn(r), Ff(t, n, r, e);
        };
      }
      function xa(e) {
        return function(t, n) {
          return typeof t == "string" && typeof n == "string" || (t = dn(t), n = dn(n)), e(t, n);
        };
      }
      function Tu(e, t, n, r, o, f, v, y, C, N) {
        var P = t & oe, W = P ? v : i, Q = P ? i : v, se = P ? f : i, he = P ? i : f;
        t |= P ? te : ge, t &= ~(P ? ge : te), t & _ || (t &= ~(D | E));
        var Se = [
          e,
          t,
          o,
          se,
          W,
          he,
          Q,
          y,
          C,
          N
        ], de = n.apply(i, Se);
        return Ko(e) && Wu(de, Se), de.placeholder = r, Hu(de, e, t);
      }
      function Wo(e) {
        var t = dt[e];
        return function(n, r) {
          if (n = dn(n), r = r == null ? 0 : Ot(Ce(r), 292), r && Hs(n)) {
            var o = (He(n) + "e").split("e"), f = t(o[0] + "e" + (+o[1] + r));
            return o = (He(f) + "e").split("e"), +(o[0] + "e" + (+o[1] - r));
          }
          return t(n);
        };
      }
      var Qf = Wr && 1 / Zi(new Wr([, -0]))[1] == $e ? function(e) {
        return new Wr(e);
      } : cs;
      function Ru(e) {
        return function(t) {
          var n = Dt(t);
          return n == Rt ? _o(t) : n == Qe ? gc(t) : sc(t, e(t));
        };
      }
      function Gn(e, t, n, r, o, f, v, y) {
        var C = t & E;
        if (!C && typeof e != "function")
          throw new un(U);
        var N = r ? r.length : 0;
        if (N || (t &= ~(te | ge), r = o = i), v = v === i ? v : pt(Ce(v), 0), y = y === i ? y : Ce(y), N -= o ? o.length : 0, t & ge) {
          var P = r, W = o;
          r = o = i;
        }
        var Q = C ? i : Go(e), se = [
          e,
          t,
          n,
          r,
          o,
          P,
          W,
          f,
          v,
          y
        ];
        if (Q && ph(se, Q), e = se[0], t = se[1], n = se[2], r = se[3], o = se[4], y = se[9] = se[9] === i ? C ? 0 : e.length : pt(se[9] - N, 0), !y && t & (oe | ee) && (t &= ~(oe | ee)), !t || t == D)
          var he = Vf(e, t, n);
        else
          t == oe || t == ee ? he = Zf(e, t, y) : (t == te || t == (D | te)) && !o.length ? he = Jf(e, t, n, r) : he = ya.apply(i, se);
        var Se = Q ? fu : Wu;
        return Hu(Se(he, se), e, t);
      }
      function Iu(e, t, n, r) {
        return e === i || wn(e, zr[n]) && !qe.call(r, n) ? t : e;
      }
      function Mu(e, t, n, r, o, f) {
        return Je(e) && Je(t) && (f.set(t, e), ga(e, t, i, Mu, f), f.delete(t)), e;
      }
      function eh(e) {
        return Ai(e) ? i : e;
      }
      function Lu(e, t, n, r, o, f) {
        var v = n & d, y = e.length, C = t.length;
        if (y != C && !(v && C > y))
          return !1;
        var N = f.get(e), P = f.get(t);
        if (N && P)
          return N == t && P == e;
        var W = -1, Q = !0, se = n & S ? new Cr() : i;
        for (f.set(e, t), f.set(t, e); ++W < y; ) {
          var he = e[W], Se = t[W];
          if (r)
            var de = v ? r(Se, he, W, t, e, f) : r(he, Se, W, e, t, f);
          if (de !== i) {
            if (de)
              continue;
            Q = !1;
            break;
          }
          if (se) {
            if (!fo(t, function(Me, Pe) {
              if (!gi(se, Pe) && (he === Me || o(he, Me, n, r, f)))
                return se.push(Pe);
            })) {
              Q = !1;
              break;
            }
          } else if (!(he === Se || o(he, Se, n, r, f))) {
            Q = !1;
            break;
          }
        }
        return f.delete(e), f.delete(t), Q;
      }
      function th(e, t, n, r, o, f, v) {
        switch (n) {
          case Bn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Gt:
            return !(e.byteLength != t.byteLength || !f(new ra(e), new ra(t)));
          case en:
          case tn:
          case Fn:
            return wn(+e, +t);
          case Sn:
            return e.name == t.name && e.message == t.message;
          case Dn:
          case J:
            return e == t + "";
          case Rt:
            var y = _o;
          case Qe:
            var C = r & d;
            if (y || (y = Zi), e.size != t.size && !C)
              return !1;
            var N = v.get(e);
            if (N)
              return N == t;
            r |= S, v.set(e, t);
            var P = Lu(y(e), y(t), r, o, f, v);
            return v.delete(e), P;
          case ve:
            if (bi)
              return bi.call(e) == bi.call(t);
        }
        return !1;
      }
      function nh(e, t, n, r, o, f) {
        var v = n & d, y = Ho(e), C = y.length, N = Ho(t), P = N.length;
        if (C != P && !v)
          return !1;
        for (var W = C; W--; ) {
          var Q = y[W];
          if (!(v ? Q in t : qe.call(t, Q)))
            return !1;
        }
        var se = f.get(e), he = f.get(t);
        if (se && he)
          return se == t && he == e;
        var Se = !0;
        f.set(e, t), f.set(t, e);
        for (var de = v; ++W < C; ) {
          Q = y[W];
          var Me = e[Q], Pe = t[Q];
          if (r)
            var Jt = v ? r(Pe, Me, Q, t, e, f) : r(Me, Pe, Q, e, t, f);
          if (!(Jt === i ? Me === Pe || o(Me, Pe, n, r, f) : Jt)) {
            Se = !1;
            break;
          }
          de || (de = Q == "constructor");
        }
        if (Se && !de) {
          var Nt = e.constructor, Qt = t.constructor;
          Nt != Qt && "constructor" in e && "constructor" in t && !(typeof Nt == "function" && Nt instanceof Nt && typeof Qt == "function" && Qt instanceof Qt) && (Se = !1);
        }
        return f.delete(e), f.delete(t), Se;
      }
      function Xn(e) {
        return Zo($u(e, i, Ku), e + "");
      }
      function Ho(e) {
        return eu(e, vt, Yo);
      }
      function qo(e) {
        return eu(e, Wt, Nu);
      }
      var Go = la ? function(e) {
        return la.get(e);
      } : cs;
      function Ca(e) {
        for (var t = e.name + "", n = Hr[t], r = qe.call(Hr, t) ? n.length : 0; r--; ) {
          var o = n[r], f = o.func;
          if (f == null || f == e)
            return o.name;
        }
        return t;
      }
      function Yr(e) {
        var t = qe.call(c, "placeholder") ? c : e;
        return t.placeholder;
      }
      function fe() {
        var e = c.iteratee || us;
        return e = e === us ? ru : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ea(e, t) {
        var n = e.__data__;
        return ch(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
      }
      function Xo(e) {
        for (var t = vt(e), n = t.length; n--; ) {
          var r = t[n], o = e[r];
          t[n] = [r, o, Bu(o)];
        }
        return t;
      }
      function Sr(e, t) {
        var n = hc(e, t);
        return nu(n) ? n : i;
      }
      function rh(e) {
        var t = qe.call(e, wr), n = e[wr];
        try {
          e[wr] = i;
          var r = !0;
        } catch {
        }
        var o = ta.call(e);
        return r && (t ? e[wr] = n : delete e[wr]), o;
      }
      var Yo = bo ? function(e) {
        return e == null ? [] : (e = Xe(e), tr(bo(e), function(t) {
          return zs.call(e, t);
        }));
      } : fs, Nu = bo ? function(e) {
        for (var t = []; e; )
          nr(t, Yo(e)), e = ia(e);
        return t;
      } : fs, Dt = Mt;
      (wo && Dt(new wo(new ArrayBuffer(1))) != Bn || mi && Dt(new mi()) != Rt || xo && Dt(xo.resolve()) != pr || Wr && Dt(new Wr()) != Qe || _i && Dt(new _i()) != Ct) && (Dt = function(e) {
        var t = Mt(e), n = t == Bt ? e.constructor : i, r = n ? Or(n) : "";
        if (r)
          switch (r) {
            case Bc:
              return Bn;
            case Uc:
              return Rt;
            case $c:
              return pr;
            case zc:
              return Qe;
            case Wc:
              return Ct;
          }
        return t;
      });
      function ih(e, t, n) {
        for (var r = -1, o = n.length; ++r < o; ) {
          var f = n[r], v = f.size;
          switch (f.type) {
            case "drop":
              e += v;
              break;
            case "dropRight":
              t -= v;
              break;
            case "take":
              t = Ot(t, e + v);
              break;
            case "takeRight":
              e = pt(e, t - v);
              break;
          }
        }
        return { start: e, end: t };
      }
      function ah(e) {
        var t = e.match(Ka);
        return t ? t[1].split(Li) : [];
      }
      function Pu(e, t, n) {
        t = sr(t, e);
        for (var r = -1, o = t.length, f = !1; ++r < o; ) {
          var v = Mn(t[r]);
          if (!(f = e != null && n(e, v)))
            break;
          e = e[v];
        }
        return f || ++r != o ? f : (o = e == null ? 0 : e.length, !!o && Ra(o) && Yn(v, o) && (be(e) || Dr(e)));
      }
      function oh(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && qe.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      function Fu(e) {
        return typeof e.constructor == "function" && !Oi(e) ? qr(ia(e)) : {};
      }
      function sh(e, t, n) {
        var r = e.constructor;
        switch (t) {
          case Gt:
            return $o(e);
          case en:
          case tn:
            return new r(+e);
          case Bn:
            return qf(e, n);
          case Mr:
          case Lr:
          case ii:
          case ai:
          case Ee:
          case Nr:
          case gr:
          case vn:
          case oi:
            return yu(e, n);
          case Rt:
            return new r();
          case Fn:
          case J:
            return new r(e);
          case Dn:
            return Gf(e);
          case Qe:
            return new r();
          case ve:
            return Xf(e);
        }
      }
      function uh(e, t) {
        var n = t.length;
        if (!n)
          return e;
        var r = n - 1;
        return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(mr, `{
/* [wrapped with ` + t + `] */
`);
      }
      function lh(e) {
        return be(e) || Dr(e) || !!(Ws && e && e[Ws]);
      }
      function Yn(e, t) {
        var n = typeof e;
        return t = t ?? xe, !!t && (n == "number" || n != "symbol" && _r.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Lt(e, t, n) {
        if (!Je(n))
          return !1;
        var r = typeof t;
        return (r == "number" ? zt(n) && Yn(t, n.length) : r == "string" && t in n) ? wn(n[t], e) : !1;
      }
      function jo(e, t) {
        if (be(e))
          return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || Zt(e) ? !0 : lt.test(e) || !Ya.test(e) || t != null && e in Xe(t);
      }
      function ch(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Ko(e) {
        var t = Ca(e), n = c[t];
        if (typeof n != "function" || !(t in Le.prototype))
          return !1;
        if (e === n)
          return !0;
        var r = Go(n);
        return !!r && e === r[0];
      }
      function fh(e) {
        return !!Bs && Bs in e;
      }
      var hh = Qi ? jn : hs;
      function Oi(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || zr;
        return e === n;
      }
      function Bu(e) {
        return e === e && !Je(e);
      }
      function Uu(e, t) {
        return function(n) {
          return n == null ? !1 : n[e] === t && (t !== i || e in Xe(n));
        };
      }
      function dh(e) {
        var t = Aa(e, function(r) {
          return n.size === F && n.clear(), r;
        }), n = t.cache;
        return t;
      }
      function ph(e, t) {
        var n = e[1], r = t[1], o = n | r, f = o < (D | E | De), v = r == De && n == oe || r == De && n == ce && e[7].length <= t[8] || r == (De | ce) && t[7].length <= t[8] && n == oe;
        if (!(f || v))
          return e;
        r & D && (e[2] = t[2], o |= n & D ? 0 : _);
        var y = t[3];
        if (y) {
          var C = e[3];
          e[3] = C ? wu(C, y, t[4]) : y, e[4] = C ? rr(e[3], z) : t[4];
        }
        return y = t[5], y && (C = e[5], e[5] = C ? xu(C, y, t[6]) : y, e[6] = C ? rr(e[5], z) : t[6]), y = t[7], y && (e[7] = y), r & De && (e[8] = e[8] == null ? t[8] : Ot(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = o, e;
      }
      function gh(e) {
        var t = [];
        if (e != null)
          for (var n in Xe(e))
            t.push(n);
        return t;
      }
      function vh(e) {
        return ta.call(e);
      }
      function $u(e, t, n) {
        return t = pt(t === i ? e.length - 1 : t, 0), function() {
          for (var r = arguments, o = -1, f = pt(r.length - t, 0), v = O(f); ++o < f; )
            v[o] = r[t + o];
          o = -1;
          for (var y = O(t + 1); ++o < t; )
            y[o] = r[o];
          return y[t] = n(v), jt(e, this, y);
        };
      }
      function zu(e, t) {
        return t.length < 2 ? e : kr(e, fn(t, 0, -1));
      }
      function mh(e, t) {
        for (var n = e.length, r = Ot(t.length, n), o = $t(e); r--; ) {
          var f = t[r];
          e[r] = Yn(f, n) ? o[f] : i;
        }
        return e;
      }
      function Vo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Wu = qu(fu), Di = Rc || function(e, t) {
        return ht.setTimeout(e, t);
      }, Zo = qu($f);
      function Hu(e, t, n) {
        var r = t + "";
        return Zo(e, uh(r, _h(ah(r), n)));
      }
      function qu(e) {
        var t = 0, n = 0;
        return function() {
          var r = Nc(), o = rt - (r - n);
          if (n = r, o > 0) {
            if (++t >= Ne)
              return arguments[0];
          } else
            t = 0;
          return e.apply(i, arguments);
        };
      }
      function ka(e, t) {
        var n = -1, r = e.length, o = r - 1;
        for (t = t === i ? r : t; ++n < t; ) {
          var f = Mo(n, o), v = e[f];
          e[f] = e[n], e[n] = v;
        }
        return e.length = t, e;
      }
      var Gu = dh(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(nn, function(n, r, o, f) {
          t.push(o ? f.replace(Ut, "$1") : r || n);
        }), t;
      });
      function Mn(e) {
        if (typeof e == "string" || Zt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -$e ? "-0" : t;
      }
      function Or(e) {
        if (e != null) {
          try {
            return ea.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function _h(e, t) {
        return sn(Nn, function(n) {
          var r = "_." + n[0];
          t & n[1] && !Ki(e, r) && e.push(r);
        }), e.sort();
      }
      function Xu(e) {
        if (e instanceof Le)
          return e.clone();
        var t = new ln(e.__wrapped__, e.__chain__);
        return t.__actions__ = $t(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function yh(e, t, n) {
        (n ? Lt(e, t, n) : t === i) ? t = 1 : t = pt(Ce(t), 0);
        var r = e == null ? 0 : e.length;
        if (!r || t < 1)
          return [];
        for (var o = 0, f = 0, v = O(sa(r / t)); o < r; )
          v[f++] = fn(e, o, o += t);
        return v;
      }
      function bh(e) {
        for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
          var f = e[t];
          f && (o[r++] = f);
        }
        return o;
      }
      function wh() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = O(e - 1), n = arguments[0], r = e; r--; )
          t[r - 1] = arguments[r];
        return nr(be(n) ? $t(n) : [n], _t(t, 1));
      }
      var xh = Ae(function(e, t) {
        return ot(e) ? xi(e, _t(t, 1, ot, !0)) : [];
      }), Ch = Ae(function(e, t) {
        var n = hn(t);
        return ot(n) && (n = i), ot(e) ? xi(e, _t(t, 1, ot, !0), fe(n, 2)) : [];
      }), Eh = Ae(function(e, t) {
        var n = hn(t);
        return ot(n) && (n = i), ot(e) ? xi(e, _t(t, 1, ot, !0), i, n) : [];
      });
      function kh(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === i ? 1 : Ce(t), fn(e, t < 0 ? 0 : t, r)) : [];
      }
      function Sh(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === i ? 1 : Ce(t), t = r - t, fn(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Oh(e, t) {
        return e && e.length ? ma(e, fe(t, 3), !0, !0) : [];
      }
      function Dh(e, t) {
        return e && e.length ? ma(e, fe(t, 3), !0) : [];
      }
      function Ah(e, t, n, r) {
        var o = e == null ? 0 : e.length;
        return o ? (n && typeof n != "number" && Lt(e, t, n) && (n = 0, r = o), wf(e, t, n, r)) : [];
      }
      function Yu(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var o = n == null ? 0 : Ce(n);
        return o < 0 && (o = pt(r + o, 0)), Vi(e, fe(t, 3), o);
      }
      function ju(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var o = r - 1;
        return n !== i && (o = Ce(n), o = n < 0 ? pt(r + o, 0) : Ot(o, r - 1)), Vi(e, fe(t, 3), o, !0);
      }
      function Ku(e) {
        var t = e == null ? 0 : e.length;
        return t ? _t(e, 1) : [];
      }
      function Th(e) {
        var t = e == null ? 0 : e.length;
        return t ? _t(e, $e) : [];
      }
      function Rh(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? (t = t === i ? 1 : Ce(t), _t(e, t)) : [];
      }
      function Ih(e) {
        for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
          var o = e[t];
          r[o[0]] = o[1];
        }
        return r;
      }
      function Vu(e) {
        return e && e.length ? e[0] : i;
      }
      function Mh(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var o = n == null ? 0 : Ce(n);
        return o < 0 && (o = pt(r + o, 0)), Fr(e, t, o);
      }
      function Lh(e) {
        var t = e == null ? 0 : e.length;
        return t ? fn(e, 0, -1) : [];
      }
      var Nh = Ae(function(e) {
        var t = Ve(e, Bo);
        return t.length && t[0] === e[0] ? Do(t) : [];
      }), Ph = Ae(function(e) {
        var t = hn(e), n = Ve(e, Bo);
        return t === hn(n) ? t = i : n.pop(), n.length && n[0] === e[0] ? Do(n, fe(t, 2)) : [];
      }), Fh = Ae(function(e) {
        var t = hn(e), n = Ve(e, Bo);
        return t = typeof t == "function" ? t : i, t && n.pop(), n.length && n[0] === e[0] ? Do(n, i, t) : [];
      });
      function Bh(e, t) {
        return e == null ? "" : Mc.call(e, t);
      }
      function hn(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : i;
      }
      function Uh(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var o = r;
        return n !== i && (o = Ce(n), o = o < 0 ? pt(r + o, 0) : Ot(o, r - 1)), t === t ? mc(e, t, o) : Vi(e, Ts, o, !0);
      }
      function $h(e, t) {
        return e && e.length ? su(e, Ce(t)) : i;
      }
      var zh = Ae(Zu);
      function Zu(e, t) {
        return e && e.length && t && t.length ? Io(e, t) : e;
      }
      function Wh(e, t, n) {
        return e && e.length && t && t.length ? Io(e, t, fe(n, 2)) : e;
      }
      function Hh(e, t, n) {
        return e && e.length && t && t.length ? Io(e, t, i, n) : e;
      }
      var qh = Xn(function(e, t) {
        var n = e == null ? 0 : e.length, r = Eo(e, t);
        return cu(e, Ve(t, function(o) {
          return Yn(o, n) ? +o : o;
        }).sort(bu)), r;
      });
      function Gh(e, t) {
        var n = [];
        if (!(e && e.length))
          return n;
        var r = -1, o = [], f = e.length;
        for (t = fe(t, 3); ++r < f; ) {
          var v = e[r];
          t(v, r, e) && (n.push(v), o.push(r));
        }
        return cu(e, o), n;
      }
      function Jo(e) {
        return e == null ? e : Fc.call(e);
      }
      function Xh(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (n && typeof n != "number" && Lt(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : Ce(t), n = n === i ? r : Ce(n)), fn(e, t, n)) : [];
      }
      function Yh(e, t) {
        return va(e, t);
      }
      function jh(e, t, n) {
        return No(e, t, fe(n, 2));
      }
      function Kh(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var r = va(e, t);
          if (r < n && wn(e[r], t))
            return r;
        }
        return -1;
      }
      function Vh(e, t) {
        return va(e, t, !0);
      }
      function Zh(e, t, n) {
        return No(e, t, fe(n, 2), !0);
      }
      function Jh(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
          var r = va(e, t, !0) - 1;
          if (wn(e[r], t))
            return r;
        }
        return -1;
      }
      function Qh(e) {
        return e && e.length ? hu(e) : [];
      }
      function ed(e, t) {
        return e && e.length ? hu(e, fe(t, 2)) : [];
      }
      function td(e) {
        var t = e == null ? 0 : e.length;
        return t ? fn(e, 1, t) : [];
      }
      function nd(e, t, n) {
        return e && e.length ? (t = n || t === i ? 1 : Ce(t), fn(e, 0, t < 0 ? 0 : t)) : [];
      }
      function rd(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === i ? 1 : Ce(t), t = r - t, fn(e, t < 0 ? 0 : t, r)) : [];
      }
      function id(e, t) {
        return e && e.length ? ma(e, fe(t, 3), !1, !0) : [];
      }
      function ad(e, t) {
        return e && e.length ? ma(e, fe(t, 3)) : [];
      }
      var od = Ae(function(e) {
        return or(_t(e, 1, ot, !0));
      }), sd = Ae(function(e) {
        var t = hn(e);
        return ot(t) && (t = i), or(_t(e, 1, ot, !0), fe(t, 2));
      }), ud = Ae(function(e) {
        var t = hn(e);
        return t = typeof t == "function" ? t : i, or(_t(e, 1, ot, !0), i, t);
      });
      function ld(e) {
        return e && e.length ? or(e) : [];
      }
      function cd(e, t) {
        return e && e.length ? or(e, fe(t, 2)) : [];
      }
      function fd(e, t) {
        return t = typeof t == "function" ? t : i, e && e.length ? or(e, i, t) : [];
      }
      function Qo(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = tr(e, function(n) {
          if (ot(n))
            return t = pt(n.length, t), !0;
        }), vo(t, function(n) {
          return Ve(e, ho(n));
        });
      }
      function Ju(e, t) {
        if (!(e && e.length))
          return [];
        var n = Qo(e);
        return t == null ? n : Ve(n, function(r) {
          return jt(t, i, r);
        });
      }
      var hd = Ae(function(e, t) {
        return ot(e) ? xi(e, t) : [];
      }), dd = Ae(function(e) {
        return Fo(tr(e, ot));
      }), pd = Ae(function(e) {
        var t = hn(e);
        return ot(t) && (t = i), Fo(tr(e, ot), fe(t, 2));
      }), gd = Ae(function(e) {
        var t = hn(e);
        return t = typeof t == "function" ? t : i, Fo(tr(e, ot), i, t);
      }), vd = Ae(Qo);
      function md(e, t) {
        return vu(e || [], t || [], wi);
      }
      function _d(e, t) {
        return vu(e || [], t || [], ki);
      }
      var yd = Ae(function(e) {
        var t = e.length, n = t > 1 ? e[t - 1] : i;
        return n = typeof n == "function" ? (e.pop(), n) : i, Ju(e, n);
      });
      function Qu(e) {
        var t = c(e);
        return t.__chain__ = !0, t;
      }
      function bd(e, t) {
        return t(e), e;
      }
      function Sa(e, t) {
        return t(e);
      }
      var wd = Xn(function(e) {
        var t = e.length, n = t ? e[0] : 0, r = this.__wrapped__, o = function(f) {
          return Eo(f, e);
        };
        return t > 1 || this.__actions__.length || !(r instanceof Le) || !Yn(n) ? this.thru(o) : (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
          func: Sa,
          args: [o],
          thisArg: i
        }), new ln(r, this.__chain__).thru(function(f) {
          return t && !f.length && f.push(i), f;
        }));
      });
      function xd() {
        return Qu(this);
      }
      function Cd() {
        return new ln(this.value(), this.__chain__);
      }
      function Ed() {
        this.__values__ === i && (this.__values__ = dl(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function kd() {
        return this;
      }
      function Sd(e) {
        for (var t, n = this; n instanceof fa; ) {
          var r = Xu(n);
          r.__index__ = 0, r.__values__ = i, t ? o.__wrapped__ = r : t = r;
          var o = r;
          n = n.__wrapped__;
        }
        return o.__wrapped__ = e, t;
      }
      function Od() {
        var e = this.__wrapped__;
        if (e instanceof Le) {
          var t = e;
          return this.__actions__.length && (t = new Le(this)), t = t.reverse(), t.__actions__.push({
            func: Sa,
            args: [Jo],
            thisArg: i
          }), new ln(t, this.__chain__);
        }
        return this.thru(Jo);
      }
      function Dd() {
        return gu(this.__wrapped__, this.__actions__);
      }
      var Ad = _a(function(e, t, n) {
        qe.call(e, n) ? ++e[n] : qn(e, n, 1);
      });
      function Td(e, t, n) {
        var r = be(e) ? Ds : bf;
        return n && Lt(e, t, n) && (t = i), r(e, fe(t, 3));
      }
      function Rd(e, t) {
        var n = be(e) ? tr : Js;
        return n(e, fe(t, 3));
      }
      var Id = Su(Yu), Md = Su(ju);
      function Ld(e, t) {
        return _t(Oa(e, t), 1);
      }
      function Nd(e, t) {
        return _t(Oa(e, t), $e);
      }
      function Pd(e, t, n) {
        return n = n === i ? 1 : Ce(n), _t(Oa(e, t), n);
      }
      function el(e, t) {
        var n = be(e) ? sn : ar;
        return n(e, fe(t, 3));
      }
      function tl(e, t) {
        var n = be(e) ? ec : Zs;
        return n(e, fe(t, 3));
      }
      var Fd = _a(function(e, t, n) {
        qe.call(e, n) ? e[n].push(t) : qn(e, n, [t]);
      });
      function Bd(e, t, n, r) {
        e = zt(e) ? e : Kr(e), n = n && !r ? Ce(n) : 0;
        var o = e.length;
        return n < 0 && (n = pt(o + n, 0)), Ia(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && Fr(e, t, n) > -1;
      }
      var Ud = Ae(function(e, t, n) {
        var r = -1, o = typeof t == "function", f = zt(e) ? O(e.length) : [];
        return ar(e, function(v) {
          f[++r] = o ? jt(t, v, n) : Ci(v, t, n);
        }), f;
      }), $d = _a(function(e, t, n) {
        qn(e, n, t);
      });
      function Oa(e, t) {
        var n = be(e) ? Ve : iu;
        return n(e, fe(t, 3));
      }
      function zd(e, t, n, r) {
        return e == null ? [] : (be(t) || (t = t == null ? [] : [t]), n = r ? i : n, be(n) || (n = n == null ? [] : [n]), uu(e, t, n));
      }
      var Wd = _a(function(e, t, n) {
        e[n ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Hd(e, t, n) {
        var r = be(e) ? co : Is, o = arguments.length < 3;
        return r(e, fe(t, 4), n, o, ar);
      }
      function qd(e, t, n) {
        var r = be(e) ? tc : Is, o = arguments.length < 3;
        return r(e, fe(t, 4), n, o, Zs);
      }
      function Gd(e, t) {
        var n = be(e) ? tr : Js;
        return n(e, Ta(fe(t, 3)));
      }
      function Xd(e) {
        var t = be(e) ? Ys : Bf;
        return t(e);
      }
      function Yd(e, t, n) {
        (n ? Lt(e, t, n) : t === i) ? t = 1 : t = Ce(t);
        var r = be(e) ? gf : Uf;
        return r(e, t);
      }
      function jd(e) {
        var t = be(e) ? vf : zf;
        return t(e);
      }
      function Kd(e) {
        if (e == null)
          return 0;
        if (zt(e))
          return Ia(e) ? Ur(e) : e.length;
        var t = Dt(e);
        return t == Rt || t == Qe ? e.size : To(e).length;
      }
      function Vd(e, t, n) {
        var r = be(e) ? fo : Wf;
        return n && Lt(e, t, n) && (t = i), r(e, fe(t, 3));
      }
      var Zd = Ae(function(e, t) {
        if (e == null)
          return [];
        var n = t.length;
        return n > 1 && Lt(e, t[0], t[1]) ? t = [] : n > 2 && Lt(t[0], t[1], t[2]) && (t = [t[0]]), uu(e, _t(t, 1), []);
      }), Da = Tc || function() {
        return ht.Date.now();
      };
      function Jd(e, t) {
        if (typeof t != "function")
          throw new un(U);
        return e = Ce(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function nl(e, t, n) {
        return t = n ? i : t, t = e && t == null ? e.length : t, Gn(e, De, i, i, i, i, t);
      }
      function rl(e, t) {
        var n;
        if (typeof t != "function")
          throw new un(U);
        return e = Ce(e), function() {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = i), n;
        };
      }
      var es = Ae(function(e, t, n) {
        var r = D;
        if (n.length) {
          var o = rr(n, Yr(es));
          r |= te;
        }
        return Gn(e, r, t, n, o);
      }), il = Ae(function(e, t, n) {
        var r = D | E;
        if (n.length) {
          var o = rr(n, Yr(il));
          r |= te;
        }
        return Gn(t, r, e, n, o);
      });
      function al(e, t, n) {
        t = n ? i : t;
        var r = Gn(e, oe, i, i, i, i, i, t);
        return r.placeholder = al.placeholder, r;
      }
      function ol(e, t, n) {
        t = n ? i : t;
        var r = Gn(e, ee, i, i, i, i, i, t);
        return r.placeholder = ol.placeholder, r;
      }
      function sl(e, t, n) {
        var r, o, f, v, y, C, N = 0, P = !1, W = !1, Q = !0;
        if (typeof e != "function")
          throw new un(U);
        t = dn(t) || 0, Je(n) && (P = !!n.leading, W = "maxWait" in n, f = W ? pt(dn(n.maxWait) || 0, t) : f, Q = "trailing" in n ? !!n.trailing : Q);
        function se(st) {
          var xn = r, Vn = o;
          return r = o = i, N = st, v = e.apply(Vn, xn), v;
        }
        function he(st) {
          return N = st, y = Di(Me, t), P ? se(st) : v;
        }
        function Se(st) {
          var xn = st - C, Vn = st - N, Sl = t - xn;
          return W ? Ot(Sl, f - Vn) : Sl;
        }
        function de(st) {
          var xn = st - C, Vn = st - N;
          return C === i || xn >= t || xn < 0 || W && Vn >= f;
        }
        function Me() {
          var st = Da();
          if (de(st))
            return Pe(st);
          y = Di(Me, Se(st));
        }
        function Pe(st) {
          return y = i, Q && r ? se(st) : (r = o = i, v);
        }
        function Jt() {
          y !== i && mu(y), N = 0, r = C = o = y = i;
        }
        function Nt() {
          return y === i ? v : Pe(Da());
        }
        function Qt() {
          var st = Da(), xn = de(st);
          if (r = arguments, o = this, C = st, xn) {
            if (y === i)
              return he(C);
            if (W)
              return mu(y), y = Di(Me, t), se(C);
          }
          return y === i && (y = Di(Me, t)), v;
        }
        return Qt.cancel = Jt, Qt.flush = Nt, Qt;
      }
      var Qd = Ae(function(e, t) {
        return Vs(e, 1, t);
      }), ep = Ae(function(e, t, n) {
        return Vs(e, dn(t) || 0, n);
      });
      function tp(e) {
        return Gn(e, le);
      }
      function Aa(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new un(U);
        var n = function() {
          var r = arguments, o = t ? t.apply(this, r) : r[0], f = n.cache;
          if (f.has(o))
            return f.get(o);
          var v = e.apply(this, r);
          return n.cache = f.set(o, v) || f, v;
        };
        return n.cache = new (Aa.Cache || Hn)(), n;
      }
      Aa.Cache = Hn;
      function Ta(e) {
        if (typeof e != "function")
          throw new un(U);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function np(e) {
        return rl(2, e);
      }
      var rp = Hf(function(e, t) {
        t = t.length == 1 && be(t[0]) ? Ve(t[0], Kt(fe())) : Ve(_t(t, 1), Kt(fe()));
        var n = t.length;
        return Ae(function(r) {
          for (var o = -1, f = Ot(r.length, n); ++o < f; )
            r[o] = t[o].call(this, r[o]);
          return jt(e, this, r);
        });
      }), ts = Ae(function(e, t) {
        var n = rr(t, Yr(ts));
        return Gn(e, te, i, t, n);
      }), ul = Ae(function(e, t) {
        var n = rr(t, Yr(ul));
        return Gn(e, ge, i, t, n);
      }), ip = Xn(function(e, t) {
        return Gn(e, ce, i, i, i, t);
      });
      function ap(e, t) {
        if (typeof e != "function")
          throw new un(U);
        return t = t === i ? t : Ce(t), Ae(e, t);
      }
      function op(e, t) {
        if (typeof e != "function")
          throw new un(U);
        return t = t == null ? 0 : pt(Ce(t), 0), Ae(function(n) {
          var r = n[t], o = ur(n, 0, t);
          return r && nr(o, r), jt(e, this, o);
        });
      }
      function sp(e, t, n) {
        var r = !0, o = !0;
        if (typeof e != "function")
          throw new un(U);
        return Je(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), sl(e, t, {
          leading: r,
          maxWait: t,
          trailing: o
        });
      }
      function up(e) {
        return nl(e, 1);
      }
      function lp(e, t) {
        return ts(Uo(t), e);
      }
      function cp() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return be(e) ? e : [e];
      }
      function fp(e) {
        return cn(e, j);
      }
      function hp(e, t) {
        return t = typeof t == "function" ? t : i, cn(e, j, t);
      }
      function dp(e) {
        return cn(e, V | j);
      }
      function pp(e, t) {
        return t = typeof t == "function" ? t : i, cn(e, V | j, t);
      }
      function gp(e, t) {
        return t == null || Ks(e, t, vt(t));
      }
      function wn(e, t) {
        return e === t || e !== e && t !== t;
      }
      var vp = xa(Oo), mp = xa(function(e, t) {
        return e >= t;
      }), Dr = tu(/* @__PURE__ */ function() {
        return arguments;
      }()) ? tu : function(e) {
        return tt(e) && qe.call(e, "callee") && !zs.call(e, "callee");
      }, be = O.isArray, _p = xs ? Kt(xs) : Sf;
      function zt(e) {
        return e != null && Ra(e.length) && !jn(e);
      }
      function ot(e) {
        return tt(e) && zt(e);
      }
      function yp(e) {
        return e === !0 || e === !1 || tt(e) && Mt(e) == en;
      }
      var lr = Ic || hs, bp = Cs ? Kt(Cs) : Of;
      function wp(e) {
        return tt(e) && e.nodeType === 1 && !Ai(e);
      }
      function xp(e) {
        if (e == null)
          return !0;
        if (zt(e) && (be(e) || typeof e == "string" || typeof e.splice == "function" || lr(e) || jr(e) || Dr(e)))
          return !e.length;
        var t = Dt(e);
        if (t == Rt || t == Qe)
          return !e.size;
        if (Oi(e))
          return !To(e).length;
        for (var n in e)
          if (qe.call(e, n))
            return !1;
        return !0;
      }
      function Cp(e, t) {
        return Ei(e, t);
      }
      function Ep(e, t, n) {
        n = typeof n == "function" ? n : i;
        var r = n ? n(e, t) : i;
        return r === i ? Ei(e, t, i, n) : !!r;
      }
      function ns(e) {
        if (!tt(e))
          return !1;
        var t = Mt(e);
        return t == Sn || t == kn || typeof e.message == "string" && typeof e.name == "string" && !Ai(e);
      }
      function kp(e) {
        return typeof e == "number" && Hs(e);
      }
      function jn(e) {
        if (!Je(e))
          return !1;
        var t = Mt(e);
        return t == On || t == xt || t == Tr || t == Ir;
      }
      function ll(e) {
        return typeof e == "number" && e == Ce(e);
      }
      function Ra(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xe;
      }
      function Je(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function tt(e) {
        return e != null && typeof e == "object";
      }
      var cl = Es ? Kt(Es) : Af;
      function Sp(e, t) {
        return e === t || Ao(e, t, Xo(t));
      }
      function Op(e, t, n) {
        return n = typeof n == "function" ? n : i, Ao(e, t, Xo(t), n);
      }
      function Dp(e) {
        return fl(e) && e != +e;
      }
      function Ap(e) {
        if (hh(e))
          throw new me($);
        return nu(e);
      }
      function Tp(e) {
        return e === null;
      }
      function Rp(e) {
        return e == null;
      }
      function fl(e) {
        return typeof e == "number" || tt(e) && Mt(e) == Fn;
      }
      function Ai(e) {
        if (!tt(e) || Mt(e) != Bt)
          return !1;
        var t = ia(e);
        if (t === null)
          return !0;
        var n = qe.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && ea.call(n) == Sc;
      }
      var rs = ks ? Kt(ks) : Tf;
      function Ip(e) {
        return ll(e) && e >= -xe && e <= xe;
      }
      var hl = Ss ? Kt(Ss) : Rf;
      function Ia(e) {
        return typeof e == "string" || !be(e) && tt(e) && Mt(e) == J;
      }
      function Zt(e) {
        return typeof e == "symbol" || tt(e) && Mt(e) == ve;
      }
      var jr = Os ? Kt(Os) : If;
      function Mp(e) {
        return e === i;
      }
      function Lp(e) {
        return tt(e) && Dt(e) == Ct;
      }
      function Np(e) {
        return tt(e) && Mt(e) == Et;
      }
      var Pp = xa(Ro), Fp = xa(function(e, t) {
        return e <= t;
      });
      function dl(e) {
        if (!e)
          return [];
        if (zt(e))
          return Ia(e) ? yn(e) : $t(e);
        if (vi && e[vi])
          return pc(e[vi]());
        var t = Dt(e), n = t == Rt ? _o : t == Qe ? Zi : Kr;
        return n(e);
      }
      function Kn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = dn(e), e === $e || e === -$e) {
          var t = e < 0 ? -1 : 1;
          return t * Cn;
        }
        return e === e ? e : 0;
      }
      function Ce(e) {
        var t = Kn(e), n = t % 1;
        return t === t ? n ? t - n : t : 0;
      }
      function pl(e) {
        return e ? Er(Ce(e), 0, gt) : 0;
      }
      function dn(e) {
        if (typeof e == "number")
          return e;
        if (Zt(e))
          return Ln;
        if (Je(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Je(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Ms(e);
        var n = Va.test(e);
        return n || Fi.test(e) ? ji(e.slice(2), n ? 2 : 8) : ci.test(e) ? Ln : +e;
      }
      function gl(e) {
        return In(e, Wt(e));
      }
      function Bp(e) {
        return e ? Er(Ce(e), -xe, xe) : e === 0 ? e : 0;
      }
      function He(e) {
        return e == null ? "" : Vt(e);
      }
      var Up = Gr(function(e, t) {
        if (Oi(t) || zt(t)) {
          In(t, vt(t), e);
          return;
        }
        for (var n in t)
          qe.call(t, n) && wi(e, n, t[n]);
      }), vl = Gr(function(e, t) {
        In(t, Wt(t), e);
      }), Ma = Gr(function(e, t, n, r) {
        In(t, Wt(t), e, r);
      }), $p = Gr(function(e, t, n, r) {
        In(t, vt(t), e, r);
      }), zp = Xn(Eo);
      function Wp(e, t) {
        var n = qr(e);
        return t == null ? n : js(n, t);
      }
      var Hp = Ae(function(e, t) {
        e = Xe(e);
        var n = -1, r = t.length, o = r > 2 ? t[2] : i;
        for (o && Lt(t[0], t[1], o) && (r = 1); ++n < r; )
          for (var f = t[n], v = Wt(f), y = -1, C = v.length; ++y < C; ) {
            var N = v[y], P = e[N];
            (P === i || wn(P, zr[N]) && !qe.call(e, N)) && (e[N] = f[N]);
          }
        return e;
      }), qp = Ae(function(e) {
        return e.push(i, Mu), jt(ml, i, e);
      });
      function Gp(e, t) {
        return As(e, fe(t, 3), Rn);
      }
      function Xp(e, t) {
        return As(e, fe(t, 3), So);
      }
      function Yp(e, t) {
        return e == null ? e : ko(e, fe(t, 3), Wt);
      }
      function jp(e, t) {
        return e == null ? e : Qs(e, fe(t, 3), Wt);
      }
      function Kp(e, t) {
        return e && Rn(e, fe(t, 3));
      }
      function Vp(e, t) {
        return e && So(e, fe(t, 3));
      }
      function Zp(e) {
        return e == null ? [] : pa(e, vt(e));
      }
      function Jp(e) {
        return e == null ? [] : pa(e, Wt(e));
      }
      function is(e, t, n) {
        var r = e == null ? i : kr(e, t);
        return r === i ? n : r;
      }
      function Qp(e, t) {
        return e != null && Pu(e, t, xf);
      }
      function as(e, t) {
        return e != null && Pu(e, t, Cf);
      }
      var eg = Du(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = ta.call(t)), e[t] = n;
      }, ss(Ht)), tg = Du(function(e, t, n) {
        t != null && typeof t.toString != "function" && (t = ta.call(t)), qe.call(e, t) ? e[t].push(n) : e[t] = [n];
      }, fe), ng = Ae(Ci);
      function vt(e) {
        return zt(e) ? Xs(e) : To(e);
      }
      function Wt(e) {
        return zt(e) ? Xs(e, !0) : Mf(e);
      }
      function rg(e, t) {
        var n = {};
        return t = fe(t, 3), Rn(e, function(r, o, f) {
          qn(n, t(r, o, f), r);
        }), n;
      }
      function ig(e, t) {
        var n = {};
        return t = fe(t, 3), Rn(e, function(r, o, f) {
          qn(n, o, t(r, o, f));
        }), n;
      }
      var ag = Gr(function(e, t, n) {
        ga(e, t, n);
      }), ml = Gr(function(e, t, n, r) {
        ga(e, t, n, r);
      }), og = Xn(function(e, t) {
        var n = {};
        if (e == null)
          return n;
        var r = !1;
        t = Ve(t, function(f) {
          return f = sr(f, e), r || (r = f.length > 1), f;
        }), In(e, qo(e), n), r && (n = cn(n, V | ae | j, eh));
        for (var o = t.length; o--; )
          Po(n, t[o]);
        return n;
      });
      function sg(e, t) {
        return _l(e, Ta(fe(t)));
      }
      var ug = Xn(function(e, t) {
        return e == null ? {} : Nf(e, t);
      });
      function _l(e, t) {
        if (e == null)
          return {};
        var n = Ve(qo(e), function(r) {
          return [r];
        });
        return t = fe(t), lu(e, n, function(r, o) {
          return t(r, o[0]);
        });
      }
      function lg(e, t, n) {
        t = sr(t, e);
        var r = -1, o = t.length;
        for (o || (o = 1, e = i); ++r < o; ) {
          var f = e == null ? i : e[Mn(t[r])];
          f === i && (r = o, f = n), e = jn(f) ? f.call(e) : f;
        }
        return e;
      }
      function cg(e, t, n) {
        return e == null ? e : ki(e, t, n);
      }
      function fg(e, t, n, r) {
        return r = typeof r == "function" ? r : i, e == null ? e : ki(e, t, n, r);
      }
      var yl = Ru(vt), bl = Ru(Wt);
      function hg(e, t, n) {
        var r = be(e), o = r || lr(e) || jr(e);
        if (t = fe(t, 4), n == null) {
          var f = e && e.constructor;
          o ? n = r ? new f() : [] : Je(e) ? n = jn(f) ? qr(ia(e)) : {} : n = {};
        }
        return (o ? sn : Rn)(e, function(v, y, C) {
          return t(n, v, y, C);
        }), n;
      }
      function dg(e, t) {
        return e == null ? !0 : Po(e, t);
      }
      function pg(e, t, n) {
        return e == null ? e : pu(e, t, Uo(n));
      }
      function gg(e, t, n, r) {
        return r = typeof r == "function" ? r : i, e == null ? e : pu(e, t, Uo(n), r);
      }
      function Kr(e) {
        return e == null ? [] : mo(e, vt(e));
      }
      function vg(e) {
        return e == null ? [] : mo(e, Wt(e));
      }
      function mg(e, t, n) {
        return n === i && (n = t, t = i), n !== i && (n = dn(n), n = n === n ? n : 0), t !== i && (t = dn(t), t = t === t ? t : 0), Er(dn(e), t, n);
      }
      function _g(e, t, n) {
        return t = Kn(t), n === i ? (n = t, t = 0) : n = Kn(n), e = dn(e), Ef(e, t, n);
      }
      function yg(e, t, n) {
        if (n && typeof n != "boolean" && Lt(e, t, n) && (t = n = i), n === i && (typeof t == "boolean" ? (n = t, t = i) : typeof e == "boolean" && (n = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = Kn(e), t === i ? (t = e, e = 0) : t = Kn(t)), e > t) {
          var r = e;
          e = t, t = r;
        }
        if (n || e % 1 || t % 1) {
          var o = qs();
          return Ot(e + o * (t - e + Yi("1e-" + ((o + "").length - 1))), t);
        }
        return Mo(e, t);
      }
      var bg = Xr(function(e, t, n) {
        return t = t.toLowerCase(), e + (n ? wl(t) : t);
      });
      function wl(e) {
        return os(He(e).toLowerCase());
      }
      function xl(e) {
        return e = He(e), e && e.replace(Za, lc).replace(at, "");
      }
      function wg(e, t, n) {
        e = He(e), t = Vt(t);
        var r = e.length;
        n = n === i ? r : Er(Ce(n), 0, r);
        var o = n;
        return n -= t.length, n >= 0 && e.slice(n, o) == t;
      }
      function xg(e) {
        return e = He(e), e && Ga.test(e) ? e.replace(Ze, cc) : e;
      }
      function Cg(e) {
        return e = He(e), e && ja.test(e) ? e.replace(An, "\\$&") : e;
      }
      var Eg = Xr(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase();
      }), kg = Xr(function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase();
      }), Sg = ku("toLowerCase");
      function Og(e, t, n) {
        e = He(e), t = Ce(t);
        var r = t ? Ur(e) : 0;
        if (!t || r >= t)
          return e;
        var o = (t - r) / 2;
        return wa(ua(o), n) + e + wa(sa(o), n);
      }
      function Dg(e, t, n) {
        e = He(e), t = Ce(t);
        var r = t ? Ur(e) : 0;
        return t && r < t ? e + wa(t - r, n) : e;
      }
      function Ag(e, t, n) {
        e = He(e), t = Ce(t);
        var r = t ? Ur(e) : 0;
        return t && r < t ? wa(t - r, n) + e : e;
      }
      function Tg(e, t, n) {
        return n || t == null ? t = 0 : t && (t = +t), Pc(He(e).replace(vr, ""), t || 0);
      }
      function Rg(e, t, n) {
        return (n ? Lt(e, t, n) : t === i) ? t = 1 : t = Ce(t), Lo(He(e), t);
      }
      function Ig() {
        var e = arguments, t = He(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Mg = Xr(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase();
      });
      function Lg(e, t, n) {
        return n && typeof n != "number" && Lt(e, t, n) && (t = n = i), n = n === i ? gt : n >>> 0, n ? (e = He(e), e && (typeof t == "string" || t != null && !rs(t)) && (t = Vt(t), !t && Br(e)) ? ur(yn(e), 0, n) : e.split(t, n)) : [];
      }
      var Ng = Xr(function(e, t, n) {
        return e + (n ? " " : "") + os(t);
      });
      function Pg(e, t, n) {
        return e = He(e), n = n == null ? 0 : Er(Ce(n), 0, e.length), t = Vt(t), e.slice(n, n + t.length) == t;
      }
      function Fg(e, t, n) {
        var r = c.templateSettings;
        n && Lt(e, t, n) && (t = i), e = He(e), t = Ma({}, t, r, Iu);
        var o = Ma({}, t.imports, r.imports, Iu), f = vt(o), v = mo(o, f), y, C, N = 0, P = t.interpolate || Un, W = "__p += '", Q = yo(
          (t.escape || Un).source + "|" + P.source + "|" + (P === mn ? er : Un).source + "|" + (t.evaluate || Un).source + "|$",
          "g"
        ), se = "//# sourceURL=" + (qe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++an + "]") + `
`;
        e.replace(Q, function(de, Me, Pe, Jt, Nt, Qt) {
          return Pe || (Pe = Jt), W += e.slice(N, Qt).replace(Ja, fc), Me && (y = !0, W += `' +
__e(` + Me + `) +
'`), Nt && (C = !0, W += `';
` + Nt + `;
__p += '`), Pe && (W += `' +
((__t = (` + Pe + `)) == null ? '' : __t) +
'`), N = Qt + de.length, de;
        }), W += `';
`;
        var he = qe.call(t, "variable") && t.variable;
        if (!he)
          W = `with (obj) {
` + W + `
}
`;
        else if (Xt.test(he))
          throw new me(T);
        W = (C ? W.replace(Jn, "") : W).replace(kt, "$1").replace(qa, "$1;"), W = "function(" + (he || "obj") + `) {
` + (he ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (y ? ", __e = _.escape" : "") + (C ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + W + `return __p
}`;
        var Se = El(function() {
          return We(f, se + "return " + W).apply(i, v);
        });
        if (Se.source = W, ns(Se))
          throw Se;
        return Se;
      }
      function Bg(e) {
        return He(e).toLowerCase();
      }
      function Ug(e) {
        return He(e).toUpperCase();
      }
      function $g(e, t, n) {
        if (e = He(e), e && (n || t === i))
          return Ms(e);
        if (!e || !(t = Vt(t)))
          return e;
        var r = yn(e), o = yn(t), f = Ls(r, o), v = Ns(r, o) + 1;
        return ur(r, f, v).join("");
      }
      function zg(e, t, n) {
        if (e = He(e), e && (n || t === i))
          return e.slice(0, Fs(e) + 1);
        if (!e || !(t = Vt(t)))
          return e;
        var r = yn(e), o = Ns(r, yn(t)) + 1;
        return ur(r, 0, o).join("");
      }
      function Wg(e, t, n) {
        if (e = He(e), e && (n || t === i))
          return e.replace(vr, "");
        if (!e || !(t = Vt(t)))
          return e;
        var r = yn(e), o = Ls(r, yn(t));
        return ur(r, o).join("");
      }
      function Hg(e, t) {
        var n = ne, r = ye;
        if (Je(t)) {
          var o = "separator" in t ? t.separator : o;
          n = "length" in t ? Ce(t.length) : n, r = "omission" in t ? Vt(t.omission) : r;
        }
        e = He(e);
        var f = e.length;
        if (Br(e)) {
          var v = yn(e);
          f = v.length;
        }
        if (n >= f)
          return e;
        var y = n - Ur(r);
        if (y < 1)
          return r;
        var C = v ? ur(v, 0, y).join("") : e.slice(0, y);
        if (o === i)
          return C + r;
        if (v && (y += C.length - y), rs(o)) {
          if (e.slice(y).search(o)) {
            var N, P = C;
            for (o.global || (o = yo(o.source, He(li.exec(o)) + "g")), o.lastIndex = 0; N = o.exec(P); )
              var W = N.index;
            C = C.slice(0, W === i ? y : W);
          }
        } else if (e.indexOf(Vt(o), y) != y) {
          var Q = C.lastIndexOf(o);
          Q > -1 && (C = C.slice(0, Q));
        }
        return C + r;
      }
      function qg(e) {
        return e = He(e), e && Ye.test(e) ? e.replace(si, _c) : e;
      }
      var Gg = Xr(function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase();
      }), os = ku("toUpperCase");
      function Cl(e, t, n) {
        return e = He(e), t = n ? i : t, t === i ? dc(e) ? wc(e) : ic(e) : e.match(t) || [];
      }
      var El = Ae(function(e, t) {
        try {
          return jt(e, i, t);
        } catch (n) {
          return ns(n) ? n : new me(n);
        }
      }), Xg = Xn(function(e, t) {
        return sn(t, function(n) {
          n = Mn(n), qn(e, n, es(e[n], e));
        }), e;
      });
      function Yg(e) {
        var t = e == null ? 0 : e.length, n = fe();
        return e = t ? Ve(e, function(r) {
          if (typeof r[1] != "function")
            throw new un(U);
          return [n(r[0]), r[1]];
        }) : [], Ae(function(r) {
          for (var o = -1; ++o < t; ) {
            var f = e[o];
            if (jt(f[0], this, r))
              return jt(f[1], this, r);
          }
        });
      }
      function jg(e) {
        return yf(cn(e, V));
      }
      function ss(e) {
        return function() {
          return e;
        };
      }
      function Kg(e, t) {
        return e == null || e !== e ? t : e;
      }
      var Vg = Ou(), Zg = Ou(!0);
      function Ht(e) {
        return e;
      }
      function us(e) {
        return ru(typeof e == "function" ? e : cn(e, V));
      }
      function Jg(e) {
        return au(cn(e, V));
      }
      function Qg(e, t) {
        return ou(e, cn(t, V));
      }
      var ev = Ae(function(e, t) {
        return function(n) {
          return Ci(n, e, t);
        };
      }), tv = Ae(function(e, t) {
        return function(n) {
          return Ci(e, n, t);
        };
      });
      function ls(e, t, n) {
        var r = vt(t), o = pa(t, r);
        n == null && !(Je(t) && (o.length || !r.length)) && (n = t, t = e, e = this, o = pa(t, vt(t)));
        var f = !(Je(n) && "chain" in n) || !!n.chain, v = jn(e);
        return sn(o, function(y) {
          var C = t[y];
          e[y] = C, v && (e.prototype[y] = function() {
            var N = this.__chain__;
            if (f || N) {
              var P = e(this.__wrapped__), W = P.__actions__ = $t(this.__actions__);
              return W.push({ func: C, args: arguments, thisArg: e }), P.__chain__ = N, P;
            }
            return C.apply(e, nr([this.value()], arguments));
          });
        }), e;
      }
      function nv() {
        return ht._ === this && (ht._ = Oc), this;
      }
      function cs() {
      }
      function rv(e) {
        return e = Ce(e), Ae(function(t) {
          return su(t, e);
        });
      }
      var iv = zo(Ve), av = zo(Ds), ov = zo(fo);
      function kl(e) {
        return jo(e) ? ho(Mn(e)) : Pf(e);
      }
      function sv(e) {
        return function(t) {
          return e == null ? i : kr(e, t);
        };
      }
      var uv = Au(), lv = Au(!0);
      function fs() {
        return [];
      }
      function hs() {
        return !1;
      }
      function cv() {
        return {};
      }
      function fv() {
        return "";
      }
      function hv() {
        return !0;
      }
      function dv(e, t) {
        if (e = Ce(e), e < 1 || e > xe)
          return [];
        var n = gt, r = Ot(e, gt);
        t = fe(t), e -= gt;
        for (var o = vo(r, t); ++n < e; )
          t(n);
        return o;
      }
      function pv(e) {
        return be(e) ? Ve(e, Mn) : Zt(e) ? [e] : $t(Gu(He(e)));
      }
      function gv(e) {
        var t = ++kc;
        return He(e) + t;
      }
      var vv = ba(function(e, t) {
        return e + t;
      }, 0), mv = Wo("ceil"), _v = ba(function(e, t) {
        return e / t;
      }, 1), yv = Wo("floor");
      function bv(e) {
        return e && e.length ? da(e, Ht, Oo) : i;
      }
      function wv(e, t) {
        return e && e.length ? da(e, fe(t, 2), Oo) : i;
      }
      function xv(e) {
        return Rs(e, Ht);
      }
      function Cv(e, t) {
        return Rs(e, fe(t, 2));
      }
      function Ev(e) {
        return e && e.length ? da(e, Ht, Ro) : i;
      }
      function kv(e, t) {
        return e && e.length ? da(e, fe(t, 2), Ro) : i;
      }
      var Sv = ba(function(e, t) {
        return e * t;
      }, 1), Ov = Wo("round"), Dv = ba(function(e, t) {
        return e - t;
      }, 0);
      function Av(e) {
        return e && e.length ? go(e, Ht) : 0;
      }
      function Tv(e, t) {
        return e && e.length ? go(e, fe(t, 2)) : 0;
      }
      return c.after = Jd, c.ary = nl, c.assign = Up, c.assignIn = vl, c.assignInWith = Ma, c.assignWith = $p, c.at = zp, c.before = rl, c.bind = es, c.bindAll = Xg, c.bindKey = il, c.castArray = cp, c.chain = Qu, c.chunk = yh, c.compact = bh, c.concat = wh, c.cond = Yg, c.conforms = jg, c.constant = ss, c.countBy = Ad, c.create = Wp, c.curry = al, c.curryRight = ol, c.debounce = sl, c.defaults = Hp, c.defaultsDeep = qp, c.defer = Qd, c.delay = ep, c.difference = xh, c.differenceBy = Ch, c.differenceWith = Eh, c.drop = kh, c.dropRight = Sh, c.dropRightWhile = Oh, c.dropWhile = Dh, c.fill = Ah, c.filter = Rd, c.flatMap = Ld, c.flatMapDeep = Nd, c.flatMapDepth = Pd, c.flatten = Ku, c.flattenDeep = Th, c.flattenDepth = Rh, c.flip = tp, c.flow = Vg, c.flowRight = Zg, c.fromPairs = Ih, c.functions = Zp, c.functionsIn = Jp, c.groupBy = Fd, c.initial = Lh, c.intersection = Nh, c.intersectionBy = Ph, c.intersectionWith = Fh, c.invert = eg, c.invertBy = tg, c.invokeMap = Ud, c.iteratee = us, c.keyBy = $d, c.keys = vt, c.keysIn = Wt, c.map = Oa, c.mapKeys = rg, c.mapValues = ig, c.matches = Jg, c.matchesProperty = Qg, c.memoize = Aa, c.merge = ag, c.mergeWith = ml, c.method = ev, c.methodOf = tv, c.mixin = ls, c.negate = Ta, c.nthArg = rv, c.omit = og, c.omitBy = sg, c.once = np, c.orderBy = zd, c.over = iv, c.overArgs = rp, c.overEvery = av, c.overSome = ov, c.partial = ts, c.partialRight = ul, c.partition = Wd, c.pick = ug, c.pickBy = _l, c.property = kl, c.propertyOf = sv, c.pull = zh, c.pullAll = Zu, c.pullAllBy = Wh, c.pullAllWith = Hh, c.pullAt = qh, c.range = uv, c.rangeRight = lv, c.rearg = ip, c.reject = Gd, c.remove = Gh, c.rest = ap, c.reverse = Jo, c.sampleSize = Yd, c.set = cg, c.setWith = fg, c.shuffle = jd, c.slice = Xh, c.sortBy = Zd, c.sortedUniq = Qh, c.sortedUniqBy = ed, c.split = Lg, c.spread = op, c.tail = td, c.take = nd, c.takeRight = rd, c.takeRightWhile = id, c.takeWhile = ad, c.tap = bd, c.throttle = sp, c.thru = Sa, c.toArray = dl, c.toPairs = yl, c.toPairsIn = bl, c.toPath = pv, c.toPlainObject = gl, c.transform = hg, c.unary = up, c.union = od, c.unionBy = sd, c.unionWith = ud, c.uniq = ld, c.uniqBy = cd, c.uniqWith = fd, c.unset = dg, c.unzip = Qo, c.unzipWith = Ju, c.update = pg, c.updateWith = gg, c.values = Kr, c.valuesIn = vg, c.without = hd, c.words = Cl, c.wrap = lp, c.xor = dd, c.xorBy = pd, c.xorWith = gd, c.zip = vd, c.zipObject = md, c.zipObjectDeep = _d, c.zipWith = yd, c.entries = yl, c.entriesIn = bl, c.extend = vl, c.extendWith = Ma, ls(c, c), c.add = vv, c.attempt = El, c.camelCase = bg, c.capitalize = wl, c.ceil = mv, c.clamp = mg, c.clone = fp, c.cloneDeep = dp, c.cloneDeepWith = pp, c.cloneWith = hp, c.conformsTo = gp, c.deburr = xl, c.defaultTo = Kg, c.divide = _v, c.endsWith = wg, c.eq = wn, c.escape = xg, c.escapeRegExp = Cg, c.every = Td, c.find = Id, c.findIndex = Yu, c.findKey = Gp, c.findLast = Md, c.findLastIndex = ju, c.findLastKey = Xp, c.floor = yv, c.forEach = el, c.forEachRight = tl, c.forIn = Yp, c.forInRight = jp, c.forOwn = Kp, c.forOwnRight = Vp, c.get = is, c.gt = vp, c.gte = mp, c.has = Qp, c.hasIn = as, c.head = Vu, c.identity = Ht, c.includes = Bd, c.indexOf = Mh, c.inRange = _g, c.invoke = ng, c.isArguments = Dr, c.isArray = be, c.isArrayBuffer = _p, c.isArrayLike = zt, c.isArrayLikeObject = ot, c.isBoolean = yp, c.isBuffer = lr, c.isDate = bp, c.isElement = wp, c.isEmpty = xp, c.isEqual = Cp, c.isEqualWith = Ep, c.isError = ns, c.isFinite = kp, c.isFunction = jn, c.isInteger = ll, c.isLength = Ra, c.isMap = cl, c.isMatch = Sp, c.isMatchWith = Op, c.isNaN = Dp, c.isNative = Ap, c.isNil = Rp, c.isNull = Tp, c.isNumber = fl, c.isObject = Je, c.isObjectLike = tt, c.isPlainObject = Ai, c.isRegExp = rs, c.isSafeInteger = Ip, c.isSet = hl, c.isString = Ia, c.isSymbol = Zt, c.isTypedArray = jr, c.isUndefined = Mp, c.isWeakMap = Lp, c.isWeakSet = Np, c.join = Bh, c.kebabCase = Eg, c.last = hn, c.lastIndexOf = Uh, c.lowerCase = kg, c.lowerFirst = Sg, c.lt = Pp, c.lte = Fp, c.max = bv, c.maxBy = wv, c.mean = xv, c.meanBy = Cv, c.min = Ev, c.minBy = kv, c.stubArray = fs, c.stubFalse = hs, c.stubObject = cv, c.stubString = fv, c.stubTrue = hv, c.multiply = Sv, c.nth = $h, c.noConflict = nv, c.noop = cs, c.now = Da, c.pad = Og, c.padEnd = Dg, c.padStart = Ag, c.parseInt = Tg, c.random = yg, c.reduce = Hd, c.reduceRight = qd, c.repeat = Rg, c.replace = Ig, c.result = lg, c.round = Ov, c.runInContext = x, c.sample = Xd, c.size = Kd, c.snakeCase = Mg, c.some = Vd, c.sortedIndex = Yh, c.sortedIndexBy = jh, c.sortedIndexOf = Kh, c.sortedLastIndex = Vh, c.sortedLastIndexBy = Zh, c.sortedLastIndexOf = Jh, c.startCase = Ng, c.startsWith = Pg, c.subtract = Dv, c.sum = Av, c.sumBy = Tv, c.template = Fg, c.times = dv, c.toFinite = Kn, c.toInteger = Ce, c.toLength = pl, c.toLower = Bg, c.toNumber = dn, c.toSafeInteger = Bp, c.toString = He, c.toUpper = Ug, c.trim = $g, c.trimEnd = zg, c.trimStart = Wg, c.truncate = Hg, c.unescape = qg, c.uniqueId = gv, c.upperCase = Gg, c.upperFirst = os, c.each = el, c.eachRight = tl, c.first = Vu, ls(c, function() {
        var e = {};
        return Rn(c, function(t, n) {
          qe.call(c.prototype, n) || (e[n] = t);
        }), e;
      }(), { chain: !1 }), c.VERSION = h, sn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        c[e].placeholder = c;
      }), sn(["drop", "take"], function(e, t) {
        Le.prototype[e] = function(n) {
          n = n === i ? 1 : pt(Ce(n), 0);
          var r = this.__filtered__ && !t ? new Le(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = Ot(n, r.__takeCount__) : r.__views__.push({
            size: Ot(n, gt),
            type: e + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, Le.prototype[e + "Right"] = function(n) {
          return this.reverse()[e](n).reverse();
        };
      }), sn(["filter", "map", "takeWhile"], function(e, t) {
        var n = t + 1, r = n == ft || n == Ke;
        Le.prototype[e] = function(o) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: fe(o, 3),
            type: n
          }), f.__filtered__ = f.__filtered__ || r, f;
        };
      }), sn(["head", "last"], function(e, t) {
        var n = "take" + (t ? "Right" : "");
        Le.prototype[e] = function() {
          return this[n](1).value()[0];
        };
      }), sn(["initial", "tail"], function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        Le.prototype[e] = function() {
          return this.__filtered__ ? new Le(this) : this[n](1);
        };
      }), Le.prototype.compact = function() {
        return this.filter(Ht);
      }, Le.prototype.find = function(e) {
        return this.filter(e).head();
      }, Le.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Le.prototype.invokeMap = Ae(function(e, t) {
        return typeof e == "function" ? new Le(this) : this.map(function(n) {
          return Ci(n, e, t);
        });
      }), Le.prototype.reject = function(e) {
        return this.filter(Ta(fe(e)));
      }, Le.prototype.slice = function(e, t) {
        e = Ce(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0) ? new Le(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== i && (t = Ce(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n);
      }, Le.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Le.prototype.toArray = function() {
        return this.take(gt);
      }, Rn(Le.prototype, function(e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), o = c[r ? "take" + (t == "last" ? "Right" : "") : t], f = r || /^find/.test(t);
        o && (c.prototype[t] = function() {
          var v = this.__wrapped__, y = r ? [1] : arguments, C = v instanceof Le, N = y[0], P = C || be(v), W = function(Me) {
            var Pe = o.apply(c, nr([Me], y));
            return r && Q ? Pe[0] : Pe;
          };
          P && n && typeof N == "function" && N.length != 1 && (C = P = !1);
          var Q = this.__chain__, se = !!this.__actions__.length, he = f && !Q, Se = C && !se;
          if (!f && P) {
            v = Se ? v : new Le(this);
            var de = e.apply(v, y);
            return de.__actions__.push({ func: Sa, args: [W], thisArg: i }), new ln(de, Q);
          }
          return he && Se ? e.apply(this, y) : (de = this.thru(W), he ? r ? de.value()[0] : de.value() : de);
        });
      }), sn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Ji[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
        c.prototype[e] = function() {
          var o = arguments;
          if (r && !this.__chain__) {
            var f = this.value();
            return t.apply(be(f) ? f : [], o);
          }
          return this[n](function(v) {
            return t.apply(be(v) ? v : [], o);
          });
        };
      }), Rn(Le.prototype, function(e, t) {
        var n = c[t];
        if (n) {
          var r = n.name + "";
          qe.call(Hr, r) || (Hr[r] = []), Hr[r].push({ name: t, func: n });
        }
      }), Hr[ya(i, E).name] = [{
        name: "wrapper",
        func: i
      }], Le.prototype.clone = Hc, Le.prototype.reverse = qc, Le.prototype.value = Gc, c.prototype.at = wd, c.prototype.chain = xd, c.prototype.commit = Cd, c.prototype.next = Ed, c.prototype.plant = Sd, c.prototype.reverse = Od, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = Dd, c.prototype.first = c.prototype.head, vi && (c.prototype[vi] = kd), c;
    }, $r = xc();
    br ? ((br.exports = $r)._ = $r, so._ = $r) : ht._ = $r;
  }).call(Zr);
})($a, $a.exports);
var Jr = $a.exports;
const Zv = /* @__PURE__ */ Gl(Jr), Jv = { class: "relative flex" }, Qv = ["value"], em = ["value"], tm = /* @__PURE__ */ X("svg", {
  class: "shrink-0 text-gray-700 pointer-events-none absolute right-[11px] top-[15px]",
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "6",
  viewBox: "0 0 10 6"
}, [
  /* @__PURE__ */ X("path", {
    class: "fill-current shrink-0 text-gray-700 pointer-events-none absolute right-[11px] top-[15px]",
    d: "M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
  })
], -1), La = /* @__PURE__ */ ri({
  __name: "SelectControl",
  props: {
    value: {},
    options: {}
  },
  emits: ["change"],
  setup(s, { emit: p }) {
    const i = p;
    return (h, k) => (L(), Z("div", Jv, [
      X("select", {
        class: "appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 pl-3 pr-6 rounded-lg flex-grow",
        value: h.value,
        onChange: k[0] || (k[0] = ($) => i("change", $.target.value))
      }, [
        (L(!0), Z(je, null, dr(h.options, ($) => (L(), Z("option", {
          key: $.value,
          value: $.value
        }, ie($.label), 9, em))), 128))
      ], 40, Qv),
      tm
    ]));
  }
}), _s = (s, p) => {
  const i = s.__vccOpts || s;
  for (const [h, k] of p)
    i[h] = k;
  return i;
}, nm = {
  components: {
    Icon: Pt
  },
  props: {
    type: {
      type: String,
      required: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    iconName() {
      const s = {
        upload: "arrow-up-tray",
        refresh: "arrow-path",
        filter: "funnel",
        "folder-add": "folder-plus",
        trash: "trash",
        check: "check"
      };
      return this.type ? s[this.type] || this.type : null;
    }
  }
};
function rm(s, p, i, h, k, $) {
  const U = gn("Icon");
  return L(), Z("button", {
    type: "button",
    class: pn(["rounded-lg cursor-pointer border h-9 min-w-9 px-2 flex items-center justify-center focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-900", {
      "border-gray-200 dark:border-gray-700": !i.active,
      "border-primary-500 text-primary-500": i.active
    }])
  }, [
    hr(s.$slots, "default"),
    $.iconName ? (L(), Oe(U, {
      key: 0,
      name: $.iconName,
      type: "outline",
      class: "w-4 h-4"
    }, null, 8, ["name"])) : pe("", !0)
  ], 2);
}
const Ft = /* @__PURE__ */ _s(nm, [["render", rm]]);
let Na;
const im = new Uint8Array(16);
function am() {
  if (!Na && (Na = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Na))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Na(im);
}
const yt = [];
for (let s = 0; s < 256; ++s)
  yt.push((s + 256).toString(16).slice(1));
function om(s, p = 0) {
  return yt[s[p + 0]] + yt[s[p + 1]] + yt[s[p + 2]] + yt[s[p + 3]] + "-" + yt[s[p + 4]] + yt[s[p + 5]] + "-" + yt[s[p + 6]] + yt[s[p + 7]] + "-" + yt[s[p + 8]] + yt[s[p + 9]] + "-" + yt[s[p + 10]] + yt[s[p + 11]] + yt[s[p + 12]] + yt[s[p + 13]] + yt[s[p + 14]] + yt[s[p + 15]];
}
const sm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Dl = {
  randomUUID: sm
};
function um(s, p, i) {
  if (Dl.randomUUID && !p && !s)
    return Dl.randomUUID();
  s = s || {};
  const h = s.random || (s.rng || am)();
  if (h[6] = h[6] & 15 | 64, h[8] = h[8] & 63 | 128, p) {
    i = i || 0;
    for (let k = 0; k < 16; ++k)
      p[i + k] = h[k];
    return p;
  }
  return om(h);
}
var Xl = { exports: {} };
(function(s) {
  (function() {
    var p = function(i) {
      if (!(this instanceof p))
        return new p(i);
      if (this.version = 1, this.support = typeof File < "u" && typeof Blob < "u" && typeof FileList < "u" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || !1), !this.support)
        return !1;
      var h = this;
      h.files = [], h.defaults = {
        chunkSize: 1048576,
        forceChunkSize: !1,
        simultaneousUploads: 3,
        fileParameterName: "file",
        chunkNumberParameterName: "resumableChunkNumber",
        chunkSizeParameterName: "resumableChunkSize",
        currentChunkSizeParameterName: "resumableCurrentChunkSize",
        totalSizeParameterName: "resumableTotalSize",
        typeParameterName: "resumableType",
        identifierParameterName: "resumableIdentifier",
        fileNameParameterName: "resumableFilename",
        relativePathParameterName: "resumableRelativePath",
        totalChunksParameterName: "resumableTotalChunks",
        throttleProgressCallbacks: 0.5,
        query: {},
        headers: {},
        preprocess: null,
        method: "multipart",
        uploadMethod: "POST",
        testMethod: "GET",
        prioritizeFirstAndLastChunk: !1,
        target: "/",
        testTarget: null,
        parameterNamespace: "",
        testChunks: !0,
        generateUniqueIdentifier: null,
        getTarget: null,
        maxChunkRetries: 100,
        chunkRetryInterval: void 0,
        permanentErrors: [400, 404, 415, 500, 501],
        maxFiles: void 0,
        withCredentials: !1,
        xhrTimeout: 0,
        clearInput: !0,
        chunkFormat: "blob",
        setChunkTypeFromFile: !1,
        maxFilesErrorCallback: function(d, S) {
          var D = h.getOpt("maxFiles");
          alert("Please upload no more than " + D + " file" + (D === 1 ? "" : "s") + " at a time.");
        },
        minFileSize: 1,
        minFileSizeErrorCallback: function(d, S) {
          alert(d.fileName || d.name + " is too small, please upload files larger than " + k.formatSize(h.getOpt("minFileSize")) + ".");
        },
        maxFileSize: void 0,
        maxFileSizeErrorCallback: function(d, S) {
          alert(d.fileName || d.name + " is too large, please upload files less than " + k.formatSize(h.getOpt("maxFileSize")) + ".");
        },
        fileType: [],
        fileTypeErrorCallback: function(d, S) {
          alert(d.fileName || d.name + " has type not allowed, please upload files of type " + h.getOpt("fileType") + ".");
        }
      }, h.opts = i || {}, h.getOpt = function(d) {
        var S = this;
        if (d instanceof Array) {
          var D = {};
          return k.each(d, function(E) {
            D[E] = S.getOpt(E);
          }), D;
        }
        if (S instanceof j) {
          if (typeof S.opts[d] < "u")
            return S.opts[d];
          S = S.fileObj;
        }
        if (S instanceof ae) {
          if (typeof S.opts[d] < "u")
            return S.opts[d];
          S = S.resumableObj;
        }
        if (S instanceof p)
          return typeof S.opts[d] < "u" ? S.opts[d] : S.defaults[d];
      }, h.events = [], h.on = function(d, S) {
        h.events.push(d.toLowerCase(), S);
      }, h.fire = function() {
        for (var d = [], S = 0; S < arguments.length; S++)
          d.push(arguments[S]);
        for (var D = d[0].toLowerCase(), S = 0; S <= h.events.length; S += 2)
          h.events[S] == D && h.events[S + 1].apply(h, d.slice(1)), h.events[S] == "catchall" && h.events[S + 1].apply(null, d);
        D == "fileerror" && h.fire("error", d[2], d[1]), D == "fileprogress" && h.fire("progress");
      };
      var k = {
        stopEvent: function(d) {
          d.stopPropagation(), d.preventDefault();
        },
        each: function(d, S) {
          if (typeof d.length < "u") {
            for (var D = 0; D < d.length; D++)
              if (S(d[D]) === !1)
                return;
          } else
            for (D in d)
              if (S(D, d[D]) === !1)
                return;
        },
        generateUniqueIdentifier: function(d, S) {
          var D = h.getOpt("generateUniqueIdentifier");
          if (typeof D == "function")
            return D(d, S);
          var E = d.webkitRelativePath || d.fileName || d.name, _ = d.size;
          return _ + "-" + E.replace(/[^0-9a-zA-Z_-]/img, "");
        },
        contains: function(d, S) {
          var D = !1;
          return k.each(d, function(E) {
            return E == S ? (D = !0, !1) : !0;
          }), D;
        },
        formatSize: function(d) {
          return d < 1024 ? d + " bytes" : d < 1024 * 1024 ? (d / 1024).toFixed(0) + " KB" : d < 1024 * 1024 * 1024 ? (d / 1024 / 1024).toFixed(1) + " MB" : (d / 1024 / 1024 / 1024).toFixed(1) + " GB";
        },
        getTarget: function(d, S) {
          var D = h.getOpt("target");
          if (d === "test" && h.getOpt("testTarget") && (D = h.getOpt("testTarget") === "/" ? h.getOpt("target") : h.getOpt("testTarget")), typeof D == "function")
            return D(S);
          var E = D.indexOf("?") < 0 ? "?" : "&", _ = S.join("&");
          return D + E + _;
        }
      }, $ = function(d) {
        k.stopEvent(d), d.dataTransfer && d.dataTransfer.items ? z(d.dataTransfer.items, d) : d.dataTransfer && d.dataTransfer.files && z(d.dataTransfer.files, d);
      }, U = function(d) {
        d.preventDefault();
      };
      function T(d, S, D, E) {
        var _;
        if (d.isFile)
          return d.file(function(oe) {
            oe.relativePath = S + oe.name, D.push(oe), E();
          });
        if (d.isDirectory ? _ = d : d instanceof File && D.push(d), typeof d.webkitGetAsEntry == "function" && (_ = d.webkitGetAsEntry()), _ && _.isDirectory)
          return F(_, S + _.name + "/", D, E);
        typeof d.getAsFile == "function" && (d = d.getAsFile(), d instanceof File && (d.relativePath = S + d.name, D.push(d))), E();
      }
      function H(d, S) {
        if (!d || d.length === 0)
          return S();
        d[0](function() {
          H(d.slice(1), S);
        });
      }
      function F(d, S, D, E) {
        var _ = d.createReader();
        _.readEntries(function(oe) {
          if (!oe.length)
            return E();
          H(
            oe.map(function(ee) {
              return T.bind(null, ee, S, D);
            }),
            E
          );
        });
      }
      function z(d, S) {
        if (d.length) {
          h.fire("beforeAdd");
          var D = [];
          H(
            Array.prototype.map.call(d, function(E) {
              return T.bind(null, E, "", D);
            }),
            function() {
              D.length && V(D, S);
            }
          );
        }
      }
      var V = function(d, S) {
        var D = 0, E = h.getOpt(["maxFiles", "minFileSize", "maxFileSize", "maxFilesErrorCallback", "minFileSizeErrorCallback", "maxFileSizeErrorCallback", "fileType", "fileTypeErrorCallback"]);
        if (typeof E.maxFiles < "u" && E.maxFiles < d.length + h.files.length)
          if (E.maxFiles === 1 && h.files.length === 1 && d.length === 1)
            h.removeFile(h.files[0]);
          else
            return E.maxFilesErrorCallback(d, D++), !1;
        var _ = [], oe = [], ee = d.length, te = function() {
          if (!--ee) {
            if (!_.length && !oe.length)
              return;
            window.setTimeout(function() {
              h.fire("filesAdded", _, oe);
            }, 0);
          }
        };
        k.each(d, function(ge) {
          var De = ge.name;
          if (E.fileType.length > 0) {
            var ce = !1;
            for (var le in E.fileType) {
              var ne = "." + E.fileType[le];
              if (De.toLowerCase().indexOf(ne.toLowerCase(), De.length - ne.length) !== -1) {
                ce = !0;
                break;
              }
            }
            if (!ce)
              return E.fileTypeErrorCallback(ge, D++), !1;
          }
          if (typeof E.minFileSize < "u" && ge.size < E.minFileSize)
            return E.minFileSizeErrorCallback(ge, D++), !1;
          if (typeof E.maxFileSize < "u" && ge.size > E.maxFileSize)
            return E.maxFileSizeErrorCallback(ge, D++), !1;
          function ye(rt) {
            h.getFromUniqueIdentifier(rt) ? oe.push(ge) : function() {
              ge.uniqueIdentifier = rt;
              var ft = new ae(h, ge, rt);
              h.files.push(ft), _.push(ft), ft.container = typeof S < "u" ? S.srcElement : null, window.setTimeout(function() {
                h.fire("fileAdded", ft, S);
              }, 0);
            }(), te();
          }
          var Ne = k.generateUniqueIdentifier(ge, S);
          Ne && typeof Ne.then == "function" ? Ne.then(
            function(rt) {
              ye(rt);
            },
            function() {
              te();
            }
          ) : ye(Ne);
        });
      };
      function ae(d, S, D) {
        var E = this;
        E.opts = {}, E.getOpt = d.getOpt, E._prevProgress = 0, E.resumableObj = d, E.file = S, E.fileName = S.fileName || S.name, E.size = S.size, E.relativePath = S.relativePath || S.webkitRelativePath || E.fileName, E.uniqueIdentifier = D, E._pause = !1, E.container = "";
        var _ = D !== void 0, oe = function(ee, te) {
          switch (ee) {
            case "progress":
              E.resumableObj.fire("fileProgress", E, te);
              break;
            case "error":
              E.abort(), _ = !0, E.chunks = [], E.resumableObj.fire("fileError", E, te);
              break;
            case "success":
              if (_)
                return;
              E.resumableObj.fire("fileProgress", E), E.isComplete() && E.resumableObj.fire("fileSuccess", E, te);
              break;
            case "retry":
              E.resumableObj.fire("fileRetry", E);
              break;
          }
        };
        return E.chunks = [], E.abort = function() {
          var ee = 0;
          k.each(E.chunks, function(te) {
            te.status() == "uploading" && (te.abort(), ee++);
          }), ee > 0 && E.resumableObj.fire("fileProgress", E);
        }, E.cancel = function() {
          var ee = E.chunks;
          E.chunks = [], k.each(ee, function(te) {
            te.status() == "uploading" && (te.abort(), E.resumableObj.uploadNextChunk());
          }), E.resumableObj.removeFile(E), E.resumableObj.fire("fileProgress", E);
        }, E.retry = function() {
          E.bootstrap();
          var ee = !1;
          E.resumableObj.on("chunkingComplete", function() {
            ee || E.resumableObj.upload(), ee = !0;
          });
        }, E.bootstrap = function() {
          E.abort(), _ = !1, E.chunks = [], E._prevProgress = 0;
          for (var ee = E.getOpt("forceChunkSize") ? Math.ceil : Math.floor, te = Math.max(ee(E.file.size / E.getOpt("chunkSize")), 1), ge = 0; ge < te; ge++)
            (function(De) {
              window.setTimeout(function() {
                E.chunks.push(new j(E.resumableObj, E, De, oe)), E.resumableObj.fire("chunkingProgress", E, De / te);
              }, 0);
            })(ge);
          window.setTimeout(function() {
            E.resumableObj.fire("chunkingComplete", E);
          }, 0);
        }, E.progress = function() {
          if (_)
            return 1;
          var ee = 0, te = !1;
          return k.each(E.chunks, function(ge) {
            ge.status() == "error" && (te = !0), ee += ge.progress(!0);
          }), ee = te || ee > 0.99999 ? 1 : ee, ee = Math.max(E._prevProgress, ee), E._prevProgress = ee, ee;
        }, E.isUploading = function() {
          var ee = !1;
          return k.each(E.chunks, function(te) {
            if (te.status() == "uploading")
              return ee = !0, !1;
          }), ee;
        }, E.isComplete = function() {
          var ee = !1;
          return k.each(E.chunks, function(te) {
            var ge = te.status();
            if (ge == "pending" || ge == "uploading" || te.preprocessState === 1)
              return ee = !0, !1;
          }), !ee;
        }, E.pause = function(ee) {
          typeof ee > "u" ? E._pause = !E._pause : E._pause = ee;
        }, E.isPaused = function() {
          return E._pause;
        }, E.resumableObj.fire("chunkingStart", E), E.bootstrap(), this;
      }
      function j(d, S, D, E) {
        var _ = this;
        _.opts = {}, _.getOpt = d.getOpt, _.resumableObj = d, _.fileObj = S, _.fileObjSize = S.size, _.fileObjType = S.file.type, _.offset = D, _.callback = E, _.lastProgressCallback = /* @__PURE__ */ new Date(), _.tested = !1, _.retries = 0, _.pendingRetry = !1, _.preprocessState = 0;
        var oe = _.getOpt("chunkSize");
        return _.loaded = 0, _.startByte = _.offset * oe, _.endByte = Math.min(_.fileObjSize, (_.offset + 1) * oe), _.fileObjSize - _.endByte < oe && !_.getOpt("forceChunkSize") && (_.endByte = _.fileObjSize), _.xhr = null, _.test = function() {
          _.xhr = new XMLHttpRequest();
          var ee = function(le) {
            _.tested = !0;
            var ne = _.status();
            ne == "success" ? (_.callback(ne, _.message()), _.resumableObj.uploadNextChunk()) : _.send();
          };
          _.xhr.addEventListener("load", ee, !1), _.xhr.addEventListener("error", ee, !1), _.xhr.addEventListener("timeout", ee, !1);
          var te = [], ge = _.getOpt("parameterNamespace"), De = _.getOpt("query");
          typeof De == "function" && (De = De(_.fileObj, _)), k.each(De, function(le, ne) {
            te.push([encodeURIComponent(ge + le), encodeURIComponent(ne)].join("="));
          }), te = te.concat(
            [
              // define key/value pairs for additional parameters
              ["chunkNumberParameterName", _.offset + 1],
              ["chunkSizeParameterName", _.getOpt("chunkSize")],
              ["currentChunkSizeParameterName", _.endByte - _.startByte],
              ["totalSizeParameterName", _.fileObjSize],
              ["typeParameterName", _.fileObjType],
              ["identifierParameterName", _.fileObj.uniqueIdentifier],
              ["fileNameParameterName", _.fileObj.fileName],
              ["relativePathParameterName", _.fileObj.relativePath],
              ["totalChunksParameterName", _.fileObj.chunks.length]
            ].filter(function(le) {
              return _.getOpt(le[0]);
            }).map(function(le) {
              return [
                ge + _.getOpt(le[0]),
                encodeURIComponent(le[1])
              ].join("=");
            })
          ), _.xhr.open(_.getOpt("testMethod"), k.getTarget("test", te)), _.xhr.timeout = _.getOpt("xhrTimeout"), _.xhr.withCredentials = _.getOpt("withCredentials");
          var ce = _.getOpt("headers");
          typeof ce == "function" && (ce = ce(_.fileObj, _)), k.each(ce, function(le, ne) {
            _.xhr.setRequestHeader(le, ne);
          }), _.xhr.send(null);
        }, _.preprocessFinished = function() {
          _.preprocessState = 2, _.send();
        }, _.send = function() {
          var ee = _.getOpt("preprocess");
          if (typeof ee == "function")
            switch (_.preprocessState) {
              case 0:
                _.preprocessState = 1, ee(_);
                return;
              case 1:
                return;
            }
          if (_.getOpt("testChunks") && !_.tested) {
            _.test();
            return;
          }
          _.xhr = new XMLHttpRequest(), _.xhr.upload.addEventListener("progress", function($e) {
            /* @__PURE__ */ new Date() - _.lastProgressCallback > _.getOpt("throttleProgressCallbacks") * 1e3 && (_.callback("progress"), _.lastProgressCallback = /* @__PURE__ */ new Date()), _.loaded = $e.loaded || 0;
          }, !1), _.loaded = 0, _.pendingRetry = !1, _.callback("progress");
          var te = function($e) {
            var xe = _.status();
            if (xe == "success" || xe == "error")
              _.callback(xe, _.message()), _.resumableObj.uploadNextChunk();
            else {
              _.callback("retry", _.message()), _.abort(), _.retries++;
              var Cn = _.getOpt("chunkRetryInterval");
              Cn !== void 0 ? (_.pendingRetry = !0, setTimeout(_.send, Cn)) : _.send();
            }
          };
          _.xhr.addEventListener("load", te, !1), _.xhr.addEventListener("error", te, !1), _.xhr.addEventListener("timeout", te, !1);
          var ge = [
            ["chunkNumberParameterName", _.offset + 1],
            ["chunkSizeParameterName", _.getOpt("chunkSize")],
            ["currentChunkSizeParameterName", _.endByte - _.startByte],
            ["totalSizeParameterName", _.fileObjSize],
            ["typeParameterName", _.fileObjType],
            ["identifierParameterName", _.fileObj.uniqueIdentifier],
            ["fileNameParameterName", _.fileObj.fileName],
            ["relativePathParameterName", _.fileObj.relativePath],
            ["totalChunksParameterName", _.fileObj.chunks.length]
          ].filter(function($e) {
            return _.getOpt($e[0]);
          }).reduce(function($e, xe) {
            return $e[_.getOpt(xe[0])] = xe[1], $e;
          }, {}), De = _.getOpt("query");
          typeof De == "function" && (De = De(_.fileObj, _)), k.each(De, function($e, xe) {
            ge[$e] = xe;
          });
          var ce = _.fileObj.file.slice ? "slice" : _.fileObj.file.mozSlice ? "mozSlice" : _.fileObj.file.webkitSlice ? "webkitSlice" : "slice", le = _.fileObj.file[ce](_.startByte, _.endByte, _.getOpt("setChunkTypeFromFile") ? _.fileObj.file.type : ""), ne = null, ye = [], Ne = _.getOpt("parameterNamespace");
          if (_.getOpt("method") === "octet")
            ne = le, k.each(ge, function($e, xe) {
              ye.push([encodeURIComponent(Ne + $e), encodeURIComponent(xe)].join("="));
            });
          else if (ne = new FormData(), k.each(ge, function($e, xe) {
            ne.append(Ne + $e, xe), ye.push([encodeURIComponent(Ne + $e), encodeURIComponent(xe)].join("="));
          }), _.getOpt("chunkFormat") == "blob")
            ne.append(Ne + _.getOpt("fileParameterName"), le, _.fileObj.fileName);
          else if (_.getOpt("chunkFormat") == "base64") {
            var rt = new FileReader();
            rt.onload = function($e) {
              ne.append(Ne + _.getOpt("fileParameterName"), rt.result), _.xhr.send(ne);
            }, rt.readAsDataURL(le);
          }
          var ft = k.getTarget("upload", ye), mt = _.getOpt("uploadMethod");
          _.xhr.open(mt, ft), _.getOpt("method") === "octet" && _.xhr.setRequestHeader("Content-Type", "application/octet-stream"), _.xhr.timeout = _.getOpt("xhrTimeout"), _.xhr.withCredentials = _.getOpt("withCredentials");
          var Ke = _.getOpt("headers");
          typeof Ke == "function" && (Ke = Ke(_.fileObj, _)), k.each(Ke, function($e, xe) {
            _.xhr.setRequestHeader($e, xe);
          }), _.getOpt("chunkFormat") == "blob" && _.xhr.send(ne);
        }, _.abort = function() {
          _.xhr && _.xhr.abort(), _.xhr = null;
        }, _.status = function() {
          return _.pendingRetry ? "uploading" : _.xhr ? _.xhr.readyState < 4 ? "uploading" : _.xhr.status == 200 || _.xhr.status == 201 ? "success" : k.contains(_.getOpt("permanentErrors"), _.xhr.status) || _.retries >= _.getOpt("maxChunkRetries") ? "error" : (_.abort(), "pending") : "pending";
        }, _.message = function() {
          return _.xhr ? _.xhr.responseText : "";
        }, _.progress = function(ee) {
          typeof ee > "u" && (ee = !1);
          var te = ee ? (_.endByte - _.startByte) / _.fileObjSize : 1;
          if (_.pendingRetry)
            return 0;
          (!_.xhr || !_.xhr.status) && (te *= 0.95);
          var ge = _.status();
          switch (ge) {
            case "success":
            case "error":
              return 1 * te;
            case "pending":
              return 0 * te;
            default:
              return _.loaded / (_.endByte - _.startByte) * te;
          }
        }, this;
      }
      return h.uploadNextChunk = function() {
        var d = !1;
        if (h.getOpt("prioritizeFirstAndLastChunk") && (k.each(h.files, function(D) {
          if (D.chunks.length && D.chunks[0].status() == "pending" && D.chunks[0].preprocessState === 0)
            return D.chunks[0].send(), d = !0, !1;
          if (D.chunks.length > 1 && D.chunks[D.chunks.length - 1].status() == "pending" && D.chunks[D.chunks.length - 1].preprocessState === 0)
            return D.chunks[D.chunks.length - 1].send(), d = !0, !1;
        }), d) || (k.each(h.files, function(D) {
          if (D.isPaused() === !1 && k.each(D.chunks, function(E) {
            if (E.status() == "pending" && E.preprocessState === 0)
              return E.send(), d = !0, !1;
          }), d)
            return !1;
        }), d))
          return !0;
        var S = !1;
        return k.each(h.files, function(D) {
          if (!D.isComplete())
            return S = !0, !1;
        }), S || h.fire("complete"), !1;
      }, h.assignBrowse = function(d, S) {
        typeof d.length > "u" && (d = [d]), k.each(d, function(D) {
          var E;
          D.tagName === "INPUT" && D.type === "file" ? E = D : (E = document.createElement("input"), E.setAttribute("type", "file"), E.style.display = "none", D.addEventListener("click", function() {
            E.style.opacity = 0, E.style.display = "block", E.focus(), E.click(), E.style.display = "none";
          }, !1), D.appendChild(E));
          var _ = h.getOpt("maxFiles");
          typeof _ > "u" || _ != 1 ? E.setAttribute("multiple", "multiple") : E.removeAttribute("multiple"), S ? E.setAttribute("webkitdirectory", "webkitdirectory") : E.removeAttribute("webkitdirectory");
          var oe = h.getOpt("fileType");
          typeof oe < "u" && oe.length >= 1 ? E.setAttribute("accept", oe.map(function(ee) {
            return "." + ee;
          }).join(",")) : E.removeAttribute("accept"), E.addEventListener("change", function(ee) {
            V(ee.target.files, ee);
            var te = h.getOpt("clearInput");
            te && (ee.target.value = "");
          }, !1);
        });
      }, h.assignDrop = function(d) {
        typeof d.length > "u" && (d = [d]), k.each(d, function(S) {
          S.addEventListener("dragover", U, !1), S.addEventListener("dragenter", U, !1), S.addEventListener("drop", $, !1);
        });
      }, h.unAssignDrop = function(d) {
        typeof d.length > "u" && (d = [d]), k.each(d, function(S) {
          S.removeEventListener("dragover", U), S.removeEventListener("dragenter", U), S.removeEventListener("drop", $);
        });
      }, h.isUploading = function() {
        var d = !1;
        return k.each(h.files, function(S) {
          if (S.isUploading())
            return d = !0, !1;
        }), d;
      }, h.upload = function() {
        if (!h.isUploading()) {
          h.fire("uploadStart");
          for (var d = 1; d <= h.getOpt("simultaneousUploads"); d++)
            h.uploadNextChunk();
        }
      }, h.pause = function() {
        k.each(h.files, function(d) {
          d.abort();
        }), h.fire("pause");
      }, h.cancel = function() {
        h.fire("beforeCancel");
        for (var d = h.files.length - 1; d >= 0; d--)
          h.files[d].cancel();
        h.fire("cancel");
      }, h.progress = function() {
        var d = 0, S = 0;
        return k.each(h.files, function(D) {
          d += D.progress() * D.size, S += D.size;
        }), S > 0 ? d / S : 0;
      }, h.addFile = function(d, S) {
        V([d], S);
      }, h.addFiles = function(d, S) {
        V(d, S);
      }, h.removeFile = function(d) {
        for (var S = h.files.length - 1; S >= 0; S--)
          h.files[S] === d && h.files.splice(S, 1);
      }, h.getFromUniqueIdentifier = function(d) {
        var S = !1;
        return k.each(h.files, function(D) {
          D.uniqueIdentifier == d && (S = D);
        }), S;
      }, h.getSize = function() {
        var d = 0;
        return k.each(h.files, function(S) {
          d += S.size;
        }), d;
      }, h.handleDropEvent = function(d) {
        $(d);
      }, h.handleChangeEvent = function(d) {
        V(d.target.files, d), d.target.value = "";
      }, h.updateQuery = function(d) {
        h.opts.query = d;
      }, this;
    };
    s.exports = p;
  })();
})(Xl);
var lm = Xl.exports;
const cm = /* @__PURE__ */ Gl(lm);
function ds() {
  return document.head.querySelector('meta[name="csrf-token"]')?.content ?? "";
}
const nt = {
  DETAIL: "detail",
  SELECTED: "selected",
  QUEUE: "queue",
  CREATE_FOLDER: "create-folder",
  CROP: "crop",
  DELETE: "delete",
  RENAME: "rename"
}, bt = {
  FILES: "files",
  FILE: "file",
  FOLDER: "folder"
};
function fm(s) {
  return Nl() ? (Pl(s), !0) : !1;
}
function Ha(s) {
  return typeof s == "function" ? s() : Y(s);
}
const Yl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const hm = Object.prototype.toString, dm = (s) => hm.call(s) === "[object Object]", Ba = () => {
}, pm = /* @__PURE__ */ gm();
function gm() {
  var s, p;
  return Yl && ((s = window?.navigator) == null ? void 0 : s.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((p = window?.navigator) == null ? void 0 : p.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function vm(s, p) {
  function i(...h) {
    return new Promise((k, $) => {
      Promise.resolve(s(() => p.apply(this, h), { fn: p, thisArg: this, args: h })).then(k).catch($);
    });
  }
  return i;
}
const jl = (s) => s();
function mm(s = jl) {
  const p = we(!0);
  function i() {
    p.value = !1;
  }
  function h() {
    p.value = !0;
  }
  const k = (...$) => {
    p.value && s(...$);
  };
  return { isActive: Fv(p), pause: i, resume: h, eventFilter: k };
}
function _m(s) {
  return s || Bv();
}
function ym(s, p, i = {}) {
  const {
    eventFilter: h = jl,
    ...k
  } = i;
  return ei(
    s,
    vm(
      h,
      p
    ),
    k
  );
}
function bm(s, p, i = {}) {
  const {
    eventFilter: h,
    ...k
  } = i, { eventFilter: $, pause: U, resume: T, isActive: H } = mm(h);
  return { stop: ym(
    s,
    p,
    {
      ...k,
      eventFilter: $
    }
  ), pause: U, resume: T, isActive: H };
}
function wm(s, p = !0, i) {
  _m() ? Fl(s, i) : p ? s() : ms(s);
}
function Ti(s) {
  var p;
  const i = Ha(s);
  return (p = i?.$el) != null ? p : i;
}
const ti = Yl ? window : void 0;
function Qr(...s) {
  let p, i, h, k;
  if (typeof s[0] == "string" || Array.isArray(s[0]) ? ([i, h, k] = s, p = ti) : [p, i, h, k] = s, !p)
    return Ba;
  Array.isArray(i) || (i = [i]), Array.isArray(h) || (h = [h]);
  const $ = [], U = () => {
    $.forEach((z) => z()), $.length = 0;
  }, T = (z, V, ae, j) => (z.addEventListener(V, ae, j), () => z.removeEventListener(V, ae, j)), H = ei(
    () => [Ti(p), Ha(k)],
    ([z, V]) => {
      if (U(), !z)
        return;
      const ae = dm(V) ? { ...V } : V;
      $.push(
        ...i.flatMap((j) => h.map((d) => T(z, j, d, ae)))
      );
    },
    { immediate: !0, flush: "post" }
  ), F = () => {
    H(), U();
  };
  return fm(F), F;
}
let Al = !1;
function xm(s, p, i = {}) {
  const { window: h = ti, ignore: k = [], capture: $ = !0, detectIframe: U = !1 } = i;
  if (!h)
    return Ba;
  pm && !Al && (Al = !0, Array.from(h.document.body.children).forEach((ae) => ae.addEventListener("click", Ba)), h.document.documentElement.addEventListener("click", Ba));
  let T = !0;
  const H = (ae) => k.some((j) => {
    if (typeof j == "string")
      return Array.from(h.document.querySelectorAll(j)).some((d) => d === ae.target || ae.composedPath().includes(d));
    {
      const d = Ti(j);
      return d && (ae.target === d || ae.composedPath().includes(d));
    }
  }), z = [
    Qr(h, "click", (ae) => {
      const j = Ti(s);
      if (!(!j || j === ae.target || ae.composedPath().includes(j))) {
        if (ae.detail === 0 && (T = !H(ae)), !T) {
          T = !0;
          return;
        }
        p(ae);
      }
    }, { passive: !0, capture: $ }),
    Qr(h, "pointerdown", (ae) => {
      const j = Ti(s);
      T = !H(ae) && !!(j && !ae.composedPath().includes(j));
    }, { passive: !0 }),
    U && Qr(h, "blur", (ae) => {
      setTimeout(() => {
        var j;
        const d = Ti(s);
        ((j = h.document.activeElement) == null ? void 0 : j.tagName) === "IFRAME" && !d?.contains(h.document.activeElement) && p(ae);
      }, 0);
    })
  ].filter(Boolean);
  return () => z.forEach((ae) => ae());
}
function Cm(s) {
  return typeof s == "function" ? s : typeof s == "string" ? (p) => p.key === s : Array.isArray(s) ? (p) => s.includes(p.key) : () => !0;
}
function Kl(...s) {
  let p, i, h = {};
  s.length === 3 ? (p = s[0], i = s[1], h = s[2]) : s.length === 2 ? typeof s[1] == "object" ? (p = !0, i = s[0], h = s[1]) : (p = s[0], i = s[1]) : (p = !0, i = s[0]);
  const {
    target: k = ti,
    eventName: $ = "keydown",
    passive: U = !1,
    dedupe: T = !1
  } = h, H = Cm(p);
  return Qr(k, $, (z) => {
    z.repeat && Ha(T) || H(z) && i(z);
  }, U);
}
const Pa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fa = "__vueuse_ssr_handlers__", Em = /* @__PURE__ */ km();
function km() {
  return Fa in Pa || (Pa[Fa] = Pa[Fa] || {}), Pa[Fa];
}
function Sm(s, p) {
  return Em[s] || p;
}
function Om(s) {
  return s == null ? "any" : s instanceof Set ? "set" : s instanceof Map ? "map" : s instanceof Date ? "date" : typeof s == "boolean" ? "boolean" : typeof s == "string" ? "string" : typeof s == "object" ? "object" : Number.isNaN(s) ? "any" : "number";
}
const Dm = {
  boolean: {
    read: (s) => s === "true",
    write: (s) => String(s)
  },
  object: {
    read: (s) => JSON.parse(s),
    write: (s) => JSON.stringify(s)
  },
  number: {
    read: (s) => Number.parseFloat(s),
    write: (s) => String(s)
  },
  any: {
    read: (s) => s,
    write: (s) => String(s)
  },
  string: {
    read: (s) => s,
    write: (s) => String(s)
  },
  map: {
    read: (s) => new Map(JSON.parse(s)),
    write: (s) => JSON.stringify(Array.from(s.entries()))
  },
  set: {
    read: (s) => new Set(JSON.parse(s)),
    write: (s) => JSON.stringify(Array.from(s))
  },
  date: {
    read: (s) => new Date(s),
    write: (s) => s.toISOString()
  }
}, Tl = "vueuse-storage";
function Am(s, p, i, h = {}) {
  var k;
  const {
    flush: $ = "pre",
    deep: U = !0,
    listenToStorageChanges: T = !0,
    writeDefaults: H = !0,
    mergeDefaults: F = !1,
    shallow: z,
    window: V = ti,
    eventFilter: ae,
    onError: j = (ne) => {
      console.error(ne);
    },
    initOnMounted: d
  } = h, S = (z ? Uv : we)(typeof p == "function" ? p() : p);
  if (!i)
    try {
      i = Sm("getDefaultStorage", () => {
        var ne;
        return (ne = ti) == null ? void 0 : ne.localStorage;
      })();
    } catch (ne) {
      j(ne);
    }
  if (!i)
    return S;
  const D = Ha(p), E = Om(D), _ = (k = h.serializer) != null ? k : Dm[E], { pause: oe, resume: ee } = bm(
    S,
    () => ge(S.value),
    { flush: $, deep: U, eventFilter: ae }
  );
  V && T && wm(() => {
    Qr(V, "storage", ce), Qr(V, Tl, le), d && ce();
  }), d || ce();
  function te(ne, ye) {
    V && V.dispatchEvent(new CustomEvent(Tl, {
      detail: {
        key: s,
        oldValue: ne,
        newValue: ye,
        storageArea: i
      }
    }));
  }
  function ge(ne) {
    try {
      const ye = i.getItem(s);
      if (ne == null)
        te(ye, null), i.removeItem(s);
      else {
        const Ne = _.write(ne);
        ye !== Ne && (i.setItem(s, Ne), te(ye, Ne));
      }
    } catch (ye) {
      j(ye);
    }
  }
  function De(ne) {
    const ye = ne ? ne.newValue : i.getItem(s);
    if (ye == null)
      return H && D != null && i.setItem(s, _.write(D)), D;
    if (!ne && F) {
      const Ne = _.read(ye);
      return typeof F == "function" ? F(Ne, D) : E === "object" && !Array.isArray(Ne) ? { ...D, ...Ne } : Ne;
    } else
      return typeof ye != "string" ? ye : _.read(ye);
  }
  function ce(ne) {
    if (!(ne && ne.storageArea !== i)) {
      if (ne && ne.key == null) {
        S.value = D;
        return;
      }
      if (!(ne && ne.key !== s)) {
        oe();
        try {
          ne?.newValue !== _.write(S.value) && (S.value = De(ne));
        } catch (ye) {
          j(ye);
        } finally {
          ne ? ms(ee) : ee();
        }
      }
    }
  }
  function le(ne) {
    ce(ne.detail);
  }
  return S;
}
function Tm(s, p, i = {}) {
  const { window: h = ti } = i;
  return Am(s, p, h?.localStorage, i);
}
const Tt = Vv("nova-filemanager/browser", () => {
  const s = we(!1), p = we(!1), i = we(!1), h = we(!1), k = we(!1), $ = we(!0), U = we(!0), T = we(1), H = we(10), F = we("/"), z = we(""), V = we(""), ae = we(""), j = Tm("pinia/nova-file-manager/browser/disk", ""), d = we([]), S = we([]), D = we([]), E = we(0), _ = we(Jr.range(10, 50, 10)), oe = we([
    { value: "", label: "Sort by" },
    { value: "date", label: "Date Asc" },
    { value: "date-desc", label: "Date Desc" },
    { value: "name", label: "Name Asc" },
    { value: "name-desc", label: "Name Desc" },
    { value: "size", label: "Size Asc" },
    { value: "size-desc", label: "Size Desc" }
  ]), ee = we([]), te = we([]), ge = we({}), De = we(50 * 1024 * 1024);
  async function ce() {
    Jr.isEmpty(ee.value) && await On(), Jr.isEmpty(ge.value) && await xt();
  }
  function le() {
    E.value++;
  }
  function ne(J) {
    T.value = J, xt();
  }
  function ye(J) {
    H.value = J, T.value = 1, xt();
  }
  function Ne(J) {
    F.value = J, T.value = 1, xt();
  }
  function rt(J) {
    z.value = J, T.value = 1, xt();
  }
  function ft(J) {
    V.value = J, xt();
  }
  function mt(J) {
    F.value = "/", T.value = 1, z.value = "", j.value = J, xt();
  }
  function Ke(J) {
    ae.value = J, T.value = 1, xt();
  }
  function $e(J, ve = null) {
    S.value.push({
      id: um(),
      name: J,
      payload: ve
    });
  }
  function xe(J) {
    S.value = S.value.filter((ve) => ve.id !== J);
  }
  function Cn(J) {
    S.value = S.value.filter((ve) => ve.name !== J);
  }
  function Ln() {
    S.value = [];
  }
  function gt(J) {
    if (Jr.isEmpty(d.value)) {
      d.value = [J];
      return;
    }
    d.value.push(J);
  }
  function Zn(J) {
    d.value = d.value?.filter((ve) => ve.id !== J.id);
  }
  function En(J) {
    d.value = J;
  }
  function Nn() {
    En([]);
  }
  function qt(J) {
    return !!d.value?.find((ve) => ve.id === J.id);
  }
  function Pn(J) {
    if (qt(J)) {
      Zn(J);
      return;
    }
    k.value || Nn(), gt(J);
  }
  const Tr = At(() => s.value || p.value || i.value);
  function en({ file: J }) {
    D.value.push({
      id: J.name,
      ratio: 0,
      status: null,
      file: J,
      isImage: J.type.includes("image") ?? !1
    });
  }
  function tn() {
    D.value = [];
  }
  function kn({ id: J, ratio: ve = 100, status: ze = null }) {
    D.value = D.value.map((Et) => Et.id === J ? {
      ...Et,
      status: ze,
      ratio: ve
    } : Et), D.value.reduce((Et, Gt) => Et && Gt.ratio === 100, !0) && D.value.length && setTimeout(async () => {
      Cn(nt.QUEUE), tn(), p.value = !1, await xt();
    }, 1e3);
  }
  function Sn(J) {
    if (p.value)
      return;
    S.value.find((ze) => ze.name === nt.QUEUE) || $e(
      nt.QUEUE
    ), p.value = !0;
    const ve = new cm({
      chunkSize: De.value,
      simultaneousUploads: 1,
      maxChunkRetries: 10,
      testChunks: !1,
      target: "/nova-vendor/nova-file-manager/files/upload",
      query: {
        path: F.value ?? "/",
        disk: j.value
      },
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": ds()
      }
    });
    J.forEach((ze) => {
      ve.addFile(ze), en({ file: ze });
    }), ve.on("fileAdded", () => ve.upload()), ve.on("fileSuccess", (ze) => {
      kn({
        id: ze.fileName,
        status: !0
      });
    }), ve.on("fileProgress", (ze) => {
      kn({
        id: ze.fileName,
        ratio: Math.floor(ze.progress(!1) * 100)
      });
    }), ve.on("error", (ze, Ct) => {
      console.log(ze, Ct);
    }), ve.on("fileError", (ze, Ct) => {
      kn({
        id: ze.fileName,
        status: !1
      }), Nova.error(JSON.parse(Ct).message);
    });
  }
  async function On() {
    i.value = !0;
    const J = await fetch(
      "/nova-vendor/nova-file-manager/disks/available"
    ), ve = await J.clone().json();
    J.ok ? (ee.value = ve, j.value || (j.value = ee.value[0])) : Nova.error(
      `${J.status}: ${ve.message || "Something went wrong"}`
    ), i.value = !1;
  }
  async function xt() {
    s.value = !0;
    const J = {
      page: T.value,
      perPage: H.value,
      path: F.value,
      search: z.value,
      sort: V.value,
      disk: j.value,
      period: ae.value
    };
    return await fetch(
      `/nova-vendor/nova-file-manager?${new URLSearchParams(J).toString()}`,
      {
        method: "GET",
        headers: {
          "X-CSRF-TOKEN": ds(),
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        }
      }
    ).then(async (ve) => {
      const ze = await ve.clone().json();
      ve.ok ? (T.value = ze.pagination.current_page, j.value = ze.disk, ge.value = ze) : Nova.error(
        `${ve.status}: ${ze.message || "Something went wrong"}`
      );
    }).finally((ve) => (s.value = !1, ve));
  }
  async function Rt(J, ve) {
    return await Qe(
      "/nova-vendor/nova-file-manager/files/rename",
      "POST",
      {
        disk: j.value,
        from: J,
        to: ve
      }
    ).then((ze) => {
      ze.ok && (d.value = d.value.filter((Ct) => Ct.path !== J));
    });
  }
  async function Fn(J = []) {
    if (J.length !== 0)
      return await Qe(
        "/nova-vendor/nova-file-manager/files/delete",
        "POST",
        {
          disk: j.value,
          paths: J
        }
      ).then((ve) => {
        ve.ok && (d.value = d.value.filter((ze) => !J.includes(ze.path)));
      });
  }
  async function Rr(J) {
    return await Qe(
      "/nova-vendor/nova-file-manager/files/unzip",
      "POST",
      {
        disk: j.value,
        path: J
      }
    );
  }
  async function Bt(J) {
    return await Qe(
      "/nova-vendor/nova-file-manager/files/duplicate",
      "POST",
      {
        disk: j.value,
        path: J
      }
    );
  }
  async function pr(J) {
    return await Qe(
      "/nova-vendor/nova-file-manager/folders/create",
      "POST",
      {
        disk: j.value,
        path: J
      }
    );
  }
  async function Ir(J, ve) {
    return await Qe(
      "/nova-vendor/nova-file-manager/folders/rename",
      "POST",
      {
        disk: j.value,
        from: J,
        to: ve
      }
    );
  }
  async function Dn(J) {
    return await Qe(
      "/nova-vendor/nova-file-manager/folders/delete",
      "POST",
      {
        disk: j.value,
        path: J
      }
    );
  }
  async function Qe(J, ve = "POST", ze) {
    s.value = !0;
    const Ct = ve === "GET" ? `${J}?${new URLSearchParams(ze).toString()}` : J;
    return await fetch(
      Ct,
      {
        method: ve,
        headers: {
          "X-CSRF-TOKEN": ds(),
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
        },
        body: ve === "GET" ? null : JSON.stringify(ze)
      }
    ).then(async (Et) => {
      const Gt = await Et.clone().json();
      return Et.ok ? (Ln(), xt(), Gt.message && Nova.success(Gt.message)) : Nova.error(
        `${Et.status}: ${Gt.message || "Something went wrong"}`
      ), Et;
    }).finally((Et) => (s.value = !1, Et));
  }
  return {
    init: ce,
    //
    isProcessing: Tr,
    loading: s,
    uploading: p,
    fetchingDisks: i,
    selecting: h,
    multiple: k,
    //
    showFiles: U,
    showFolders: $,
    //
    page: T,
    perPage: H,
    path: F,
    search: z,
    sort: V,
    period: ae,
    disk: j,
    //
    selection: d,
    modals: S,
    queue: D,
    selectionConfirms: E,
    //
    perPageOptions: _,
    sorts: oe,
    disks: ee,
    periods: te,
    //
    data: ge,
    //
    chunkSize: De,
    //
    confirmSelection: le,
    setPage: ne,
    setPerPage: ye,
    setPath: Ne,
    setSearch: rt,
    setSort: ft,
    setDisk: mt,
    setPeriod: Ke,
    //
    openModal: $e,
    closeModal: xe,
    closeModalsByName: Cn,
    closeModals: Ln,
    //
    select: gt,
    unselect: Zn,
    setSelection: En,
    clearSelection: Nn,
    isSelected: qt,
    toggleSelection: Pn,
    //
    queueFile: en,
    clearQueue: tn,
    updateQueue: kn,
    //
    getDisks: On,
    fetchData: xt,
    upload: Sn,
    renameFile: Rt,
    deleteFiles: Fn,
    unarchive: Rr,
    duplicate: Bt,
    createFolder: pr,
    renameFolder: Ir,
    deleteFolder: Dn
  };
}), ys = /* @__PURE__ */ ri({
  __name: "Dropdown",
  setup(s) {
    const p = we(!1), i = we();
    return xm(i, () => p.value ? p.value = !1 : null), (h, k) => (L(), Z("div", {
      class: "relative",
      ref_key: "target",
      ref: i
    }, [
      X("div", {
        onClick: k[0] || (k[0] = Te(() => p.value = !p.value, ["prevent", "stop"]))
      }, [
        hr(h.$slots, "trigger")
      ]),
      X("div", {
        class: pn(["absolute p-1 mt-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-20", {
          hidden: !p.value
        }]),
        style: {
          right: 0,
          top: "100%"
        }
      }, [
        hr(h.$slots, "default")
      ], 2)
    ], 512));
  }
}), Rm = { class: "flex items-center flex-wrap p-3 md:px-6 md:py-4 gap-2 border-b border-gray-200 dark:border-gray-700" }, Im = {
  class: "rounded-lg cursor-pointer h-9 min-w-9 px-2 flex items-center justify-center focus:outline-none bg-primary-500 hover:bg-primary-600 shadow text-white dark:text-gray-900 dark:ring-gray-600",
  for: "fileUpload"
}, Mm = /* @__PURE__ */ X("div", { class: "flex-grow" }, null, -1), Lm = { class: "p-2 space-y-2 w-60" }, Nm = { class: "relative" }, Pm = ["placeholder", "aria-label"], Fm = { class: "text-gray-900 dark:text-gray-200 font-medium" }, Bm = {
  key: 0,
  class: "text-gray-900 dark:text-gray-200 font-medium"
}, Um = { class: "text-gray-900 dark:text-gray-200 font-medium" }, $m = {
  __name: "BrowserToolbar",
  emits: ["changeFile"],
  setup(s, { emit: p }) {
    const i = Tt(), h = we(), k = p, $ = Zv.debounce((T) => i.setSearch(T), 300);
    function U(T) {
      k("changeFile", T);
    }
    return (T, H) => {
      const F = za("tooltip");
      return L(), Z("div", Rm, [
        wt((L(), Z("label", Im, [
          X("input", {
            ref_key: "fileUpload",
            ref: h,
            id: "fileUpload",
            type: "file",
            class: "sr-only",
            multiple: "",
            onChange: U
          }, null, 544),
          ue(Y(Pt), {
            name: "arrow-up-tray",
            type: "outline",
            class: "w-4 h-4"
          })
        ])), [
          [F, T.__("Upload a file")]
        ]),
        wt(ue(Ft, {
          onClick: H[0] || (H[0] = Te((z) => Y(i).openModal(Y(nt).CREATE_FOLDER), ["prevent"])),
          type: "folder-add"
        }, null, 512), [
          [F, T.__("Create folder")]
        ]),
        wt(ue(Ft, {
          onClick: H[1] || (H[1] = Te((z) => Y(i).fetchData(), ["prevent"])),
          type: "refresh"
        }, null, 512), [
          [F, T.__("Refresh")]
        ]),
        ue(La, {
          value: Y(i).disk,
          onChange: H[2] || (H[2] = (z) => Y(i).setDisk(z)),
          options: Y(i).disks.map((z) => ({
            label: z,
            value: z
          }))
        }, null, 8, ["value", "options"]),
        Mm,
        Y(i).selection.length > 0 ? (L(), Z(je, { key: 0 }, [
          wt((L(), Z("span", {
            onClick: H[3] || (H[3] = Te(() => Y(i).openModal(Y(nt).SELECTED), ["prevent"])),
            class: "cursor-pointer hover:text-primary-500 order-10 md:order-5"
          }, [
            ut(" Selected " + ie(Y(i).selection.length) + " files ", 1)
          ])), [
            [F, T.__("Open selected files modal")]
          ]),
          wt(ue(Ft, {
            class: "text-red-500 order-11 md:order-6",
            type: "trash",
            onClick: H[4] || (H[4] = Te(
              () => Y(i).openModal(Y(nt).DELETE, {
                type: Y(bt).FILES,
                [Y(bt).FILES]: Y(i).selection
              }),
              ["prevent"]
            ))
          }, null, 512), [
            [F, T.__("Delete selected files")]
          ]),
          Y(i).selecting ? wt((L(), Oe(Ft, {
            key: 0,
            class: "text-green-500 order-12 md:order-7",
            type: "check",
            onClick: H[5] || (H[5] = Te(() => Y(i).confirmSelection(), ["prevent"]))
          }, null, 512)), [
            [F, T.__("Confirm selection")]
          ]) : pe("", !0)
        ], 64)) : pe("", !0),
        ue(ys, { class: "order-9 md:order-8" }, {
          trigger: _e(() => [
            wt(ue(Ft, {
              type: "filter",
              active: !!(Y(i).search || Y(i).sort || Y(i).period)
            }, null, 8, ["active"]), [
              [F, T.__("Filters")]
            ])
          ]),
          default: _e(() => [
            X("div", Lm, [
              X("div", Nm, [
                X("input", {
                  ref: "input",
                  type: "text",
                  class: "appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg",
                  placeholder: T.__("Search"),
                  "aria-label": T.__("Search"),
                  spellcheck: "false",
                  onInput: H[6] || (H[6] = (z) => Y($)(z.target.value))
                }, null, 40, Pm)
              ]),
              X("p", Fm, ie(T.__("Per page")), 1),
              ue(La, {
                options: Y(i).perPageOptions.map((z) => ({
                  label: z,
                  value: z
                })),
                value: Y(i).perPage,
                onChange: H[7] || (H[7] = (z) => Y(i).setPerPage(z))
              }, null, 8, ["options", "value"]),
              Y(i).periods?.length ? (L(), Z("p", Bm, ie(T.__("Period")), 1)) : pe("", !0),
              Y(i).periods?.length ? (L(), Oe(La, {
                key: 1,
                options: Y(i).periods,
                value: Y(i).period,
                onChange: H[8] || (H[8] = (z) => Y(i).setPeriod(z))
              }, null, 8, ["options", "value"])) : pe("", !0),
              X("p", Um, ie(T.__("Sort by")), 1),
              Y(i).sorts ? (L(), Oe(La, {
                key: 2,
                options: Y(i).sorts,
                value: Y(i).sort,
                onChange: H[9] || (H[9] = (z) => Y(i).setSort(z))
              }, null, 8, ["options", "value"])) : pe("", !0)
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
}, zm = { class: "flex items-center pt-4" }, Wm = { class: "flex text-sm" }, Hm = ["disabled", "dusk", "onClick"], qm = { class: "hidden md:flex items-center justify-center text-xs px-4 ml-auto" }, Gm = {
  __name: "BrowserPagination",
  setup(s) {
    const p = Tt(), i = At(() => p.data?.pagination);
    function h($) {
      p.setPage($);
    }
    const k = At(
      () => i.total > 0 ? `${i.from}-${i.to} of ${i.total}` : ""
    );
    return ($, U) => (L(), Z("nav", zm, [
      X("div", Wm, [
        X("button", {
          class: pn(["hidden md:flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 mr-1", {
            disabled: i.value.current_page <= 1
          }]),
          rel: "prev",
          dusk: "previous",
          onClick: U[0] || (U[0] = Te((T) => h(i.value.current_page - 1), ["prevent"]))
        }, " ‹ ", 2),
        (L(!0), Z(je, null, dr(i.value.links, (T) => (L(), Z(je, {
          key: T.label
        }, [
          !isNaN(T.label) || T.label === "..." ? (L(), Z("button", {
            key: 0,
            class: pn(["rounded-lg mr-1 border border-gray-200 dark:border-gray-700 h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500", {
              "bg-gray-50 dark:bg-gray-700": T.active
            }]),
            disabled: T.label === "..." || T.active,
            dusk: `page:${T.label}`,
            onClick: Te((H) => T.label === "..." || T.active ? null : h(T.label), ["prevent"])
          }, ie(T.label), 11, Hm)) : pe("", !0)
        ], 64))), 128)),
        X("button", {
          class: pn([{
            disabled: i.value.current_page >= i.value.last_page
          }, "hidden md:flex items-center justify-center rounded-lg mr-1 border border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700"]),
          rel: "next",
          dusk: "next",
          onClick: U[1] || (U[1] = Te((T) => h(i.value.current_page + 1), ["prevent"]))
        }, " › ", 2)
      ]),
      X("span", qm, ie(k.value), 1)
    ]));
  }
}, Mi = {
  dir: "folder",
  dirBack: "folder-remove",
  audio: "music-note",
  image: "photograph",
  pdf: "document",
  text: "document-text",
  video: "video-camera",
  archive: "archive"
};
function bs(s, p, i = "...") {
  return s.slice(0, p) + (p < s.length ? i : "");
}
const Xm = {}, Ym = { class: "flex items-center cursor-pointer px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" };
function jm(s, p) {
  return L(), Z("div", Ym, [
    hr(s.$slots, "default")
  ]);
}
const fr = /* @__PURE__ */ _s(Xm, [["render", jm]]), Km = {
  key: 0,
  class: "absolute top-0 right-0 p-2 text-primary-500"
}, Vm = ["src"], Zm = { class: "w-full flex items-center mt-2" }, Jm = { class: "px-1 truncate text-gray-900 dark:text-gray-200 font-medium" }, Qm = { class: "cursor-pointer flex items-center justify-center w-7 h-7 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900" }, e0 = { class: "w-full px-2 text-xs" }, Vl = {
  __name: "BrowserFile",
  props: {
    file: {
      type: Object,
      required: !0
    },
    detailButton: {
      type: Boolean,
      default: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = At(() => p.isSelected(i.file));
    function k() {
      p.openModal(nt.DETAIL, i.file);
    }
    function $() {
      p.openModal(nt.CROP, i.file);
    }
    function U() {
      i.file.type === "archive" && p.unarchive(i.file.path);
    }
    function T() {
      p.duplicate(i.file.path);
    }
    function H() {
      p.openModal(nt.RENAME, i.file);
    }
    function F() {
      p.openModal(nt.DELETE, {
        type: bt.FILE,
        [bt.FILE]: i.file
      });
    }
    function z() {
      p.selecting ? (p.toggleSelection(i.file), !p.multiple && h.value && p.confirmSelection()) : k();
    }
    return (V, ae) => (L(), Z("div", {
      ref: "card",
      class: "w-full h-full relative flex flex-col justify-center cursor-pointer",
      onClick: Te(z, ["prevent", "stop"])
    }, [
      X("div", {
        class: pn(["relative aspect-square flex items-center p-1 md:p-2 justify-center w-full h-full overflow-hidden rounded-lg hover:opacity-75 dark:bg-gray-900 border-2", {
          "border-primary-500": h.value,
          "border-gray-200 dark:border-gray-700": !h.value
        }])
      }, [
        h.value ? (L(), Z("div", Km, [
          ue(Y(Pt), {
            type: "check-circle",
            width: "22",
            height: "22",
            solid: !0
          })
        ])) : pe("", !0),
        s.file.type != "image" ? (L(), Oe(Y(Pt), {
          key: 1,
          class: "text-gray-500",
          type: Y(Mi)[s.file.type] || Y(Mi).text,
          width: "48",
          height: "48",
          solid: !0
        }, null, 8, ["type"])) : pe("", !0),
        s.file.type == "image" ? (L(), Z("img", {
          key: 2,
          src: s.file.url,
          class: "block w-full h-full",
          style: { "object-fit": "contain" }
        }, null, 8, Vm)) : pe("", !0)
      ], 2),
      X("div", Zm, [
        X("p", Jm, ie(Y(bs)(s.file.name, 25)), 1),
        ue(ys, { class: "ml-auto" }, {
          trigger: _e(() => [
            X("div", Qm, [
              ue(Y(Pt), {
                name: "ellipsis-vertical",
                type: "outline",
                class: "w-4 h-4"
              })
            ])
          ]),
          default: _e(() => [
            s.detailButton ? (L(), Oe(fr, {
              key: 0,
              onClick: Te(k, ["prevent", "stop"])
            }, {
              default: _e(() => [
                ue(Y(Pt), {
                  name: "eye",
                  type: "outline",
                  class: "mr-2 w-4 h-4"
                }),
                ut(" " + ie(V.__("Details")), 1)
              ]),
              _: 1
            })) : pe("", !0),
            s.file.type === "image" ? (L(), Oe(fr, {
              key: 1,
              onClick: Te($, ["prevent", "stop"])
            }, {
              default: _e(() => [
                ue(Y(Pt), {
                  name: "camera",
                  type: "outline",
                  class: "mr-2 w-4 h-4"
                }),
                ut(" " + ie(V.__("Crop")), 1)
              ]),
              _: 1
            })) : pe("", !0),
            s.file.type === "archive" ? (L(), Oe(fr, {
              key: 2,
              onClick: Te(U, ["prevent", "stop"])
            }, {
              default: _e(() => [
                ue(Y(Pt), {
                  name: "archive-box",
                  type: "outline",
                  class: "mr-2 w-4 h-4"
                }),
                ut(" " + ie(V.__("Unarchive")), 1)
              ]),
              _: 1
            })) : pe("", !0),
            ue(fr, {
              onClick: Te(T, ["prevent", "stop"])
            }, {
              default: _e(() => [
                ue(Y(Pt), {
                  name: "document-duplicate",
                  type: "outline",
                  class: "mr-2 w-4 h-4"
                }),
                ut(" " + ie(V.__("Duplicate")), 1)
              ]),
              _: 1
            }),
            ue(fr, {
              onClick: Te(H, ["prevent", "stop"])
            }, {
              default: _e(() => [
                ue(Y(Pt), {
                  name: "pencil",
                  type: "outline",
                  class: "mr-2 w-4 h-4"
                }),
                ut(" " + ie(V.__("Rename")), 1)
              ]),
              _: 1
            }),
            ue(fr, {
              class: "text-red-500",
              onClick: Te(F, ["prevent", "stop"])
            }, {
              default: _e(() => [
                ue(Y(Pt), {
                  name: "trash",
                  type: "outline",
                  class: "mr-2 w-4 h-4"
                }),
                ut(" " + ie(V.__("Delete")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      X("div", e0, ie(s.file.sizeReadable), 1)
    ], 512));
  }
}, t0 = { class: "h-8 w-8 mr-1 flex items-center justify-center group-hover:opacity-75" }, n0 = { class: "truncate group-hover:opacity-75" }, r0 = { class: "cursor-pointer flex items-center justify-center w-7 h-7 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800" }, i0 = {
  __name: "BrowserFolder",
  props: {
    folder: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s;
    function h() {
      p.setPath(i.folder.path);
    }
    function k() {
      p.openModal(nt.RENAME, i.folder);
    }
    function $() {
      p.openModal(nt.DELETE, {
        type: bt.FOLDER,
        [bt.FOLDER]: i.folder
      });
    }
    return (U, T) => (L(), Z("div", {
      ref: "card",
      class: "relative flex p-1 items-center bg-gray-100 dark:bg-gray-900 rounded-lg cursor-pointer group",
      onClick: h
    }, [
      X("div", t0, [
        ue(Y(Pt), {
          type: Y(Mi).dir,
          width: "16",
          height: "16"
        }, null, 8, ["type"])
      ]),
      X("p", n0, ie(Y(bs)(s.folder.name, 25)), 1),
      s.folder.id !== "parent" ? (L(), Oe(ys, {
        key: 0,
        class: "ml-auto"
      }, {
        trigger: _e(() => [
          X("div", r0, [
            ue(Y(Pt), {
              name: "ellipsis-vertical",
              type: "outline",
              class: "w-4 h-4"
            })
          ])
        ]),
        default: _e(() => [
          ue(fr, {
            onClick: Te(k, ["prevent", "stop"])
          }, {
            default: _e(() => [
              ue(Y(Pt), {
                name: "pencil",
                type: "outline",
                class: "mr-2 w-4 h-4"
              }),
              ut(" " + ie(U.__("Rename")), 1)
            ]),
            _: 1
          }),
          ue(fr, {
            class: "text-red-500",
            onClick: Te($, ["prevent", "stop"])
          }, {
            default: _e(() => [
              ue(Y(Pt), {
                name: "trash",
                type: "outline",
                class: "mr-2 w-4 h-4"
              }),
              ut(" " + ie(U.__("Delete")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : pe("", !0)
    ], 512));
  }
}, a0 = { class: "text-center py-8" }, o0 = { class: "mt-2 text-sm font-medium text-gray-800 dark:text-gray-200" }, s0 = { class: "mt-1 text-sm text-gray-500" }, u0 = /* @__PURE__ */ ri({
  __name: "Empty",
  props: {
    title: {},
    subtitle: {}
  },
  setup(s) {
    return (p, i) => {
      const h = gn("Icon");
      return L(), Z("div", a0, [
        ue(h, {
          type: "folder",
          class: "h-16 w-16 mx-auto fill-current text-primary-500"
        }),
        X("h3", o0, ie(p.title ?? p.__("No files were found for your request")), 1),
        X("p", s0, ie(p.subtitle ?? p.__("You can upload a new file or create a new folder")), 1)
      ]);
    };
  }
}), l0 = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4"
}, c0 = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4"
}, f0 = {
  __name: "BrowserContent",
  setup(s) {
    const p = Tt(), i = At(() => p.data?.files || []), h = At(() => p.data?.folders || []);
    return (k, $) => {
      const U = gn("Icon"), T = gn("Heading");
      return L(), Z(je, null, [
        h.value.length > 0 ? (L(), Z(je, { key: 0 }, [
          ue(T, {
            level: "5",
            class: "cursor-pointer text-xs hover:opacity-75",
            onClick: $[0] || ($[0] = (H) => Y(p).showFolders = !Y(p).showFolders)
          }, {
            default: _e(() => [
              ut(ie(k.__("Folders")) + " ", 1),
              ue(U, {
                type: Y(p).showFolders ? "chevron-down" : "chevron-up",
                width: "13",
                height: "13"
              }, null, 8, ["type"])
            ]),
            _: 1
          }),
          Y(p).showFolders ? (L(), Z("div", l0, [
            (L(!0), Z(je, null, dr(h.value, (H) => (L(), Oe(i0, {
              key: H.id,
              ref_for: !0,
              ref: "folder_" + H.id,
              folder: H,
              "data-key": H.id
            }, null, 8, ["folder", "data-key"]))), 128))
          ])) : pe("", !0)
        ], 64)) : pe("", !0),
        i.value.length > 0 ? (L(), Z(je, { key: 1 }, [
          ue(T, {
            level: "5",
            class: "cursor-pointer text-xs hover:opacity-75",
            onClick: $[1] || ($[1] = (H) => Y(p).showFiles = !Y(p).showFiles)
          }, {
            default: _e(() => [
              ut(ie(k.__("Files")) + " ", 1),
              ue(U, {
                type: Y(p).showFiles ? "chevron-down" : "chevron-up",
                width: "13",
                height: "13"
              }, null, 8, ["type"])
            ]),
            _: 1
          }),
          Y(p).showFiles ? (L(), Z("div", c0, [
            (L(!0), Z(je, null, dr(i.value, (H) => (L(), Oe(Vl, {
              key: H.id,
              ref_for: !0,
              ref: "file_" + H.id,
              file: H,
              "data-key": H.id
            }, null, 8, ["file", "data-key"]))), 128))
          ])) : pe("", !0)
        ], 64)) : pe("", !0),
        !i.value.length && !h.value.length ? (L(), Oe(u0, { key: 2 })) : pe("", !0)
      ], 64);
    };
  }
}, h0 = {
  key: 0,
  class: "absolute rounded-lg inset-0 bg-white/50 dark:bg-gray-800/50 flex items-center justify-center flex-grow z-50"
}, d0 = { class: "flex items-center p-3 md:px-6 md:py-4 gap-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide" }, p0 = {
  key: 0,
  class: "flex items-center p-3 md:px-6 md:py-4 gap-2 border-t border-gray-200 dark:border-gray-700"
}, Ar = {
  __name: "BaseModal",
  props: {
    full: {
      type: Boolean,
      default: !1
    },
    closeButton: {
      type: Boolean,
      default: !0
    },
    disableClose: {
      type: Boolean,
      default: !1
    },
    modal: {
      type: Object,
      required: !0
    },
    size: {
      type: String,
      default: "2xl"
    }
  },
  emits: ["close"],
  setup(s, { emit: p }) {
    const i = Tt(), h = s, k = $v(), $ = we(null), U = () => i.closeModal(h.modal.id);
    return (T, H) => {
      const F = gn("Loader");
      return L(), Z("div", {
        ref: "wrapper",
        class: pn(["inset-0 flex items-center justify-center p-3", {
          "fixed z-50 bg-gray-800/10 backdrop-blur": !s.full,
          "absolute z-10": s.full
        }])
      }, [
        !s.disableClose && !s.full ? (L(), Z("div", {
          key: 0,
          class: "absolute inset-0",
          onClick: Te(U, ["prevent"])
        })) : pe("", !0),
        X("div", {
          ref_key: "target",
          ref: $,
          class: pn(["relative bg-white w-full max-h-full overflow-y-auto overflow-x-hidden scrollbar-hide dark:bg-gray-800 z-10 rounded-lg shadow-lg base-modal-inner", {
            "w-full max-w-full min-h-full": s.full,
            "max-w-2xl": !s.full
          }])
        }, [
          ue(Ua, null, {
            default: _e(() => [
              Y(i).loading ? (L(), Z("div", h0, [
                ue(F)
              ])) : pe("", !0)
            ]),
            _: 1
          }),
          X("div", d0, [
            s.closeButton && !s.disableClose ? (L(), Oe(Ft, {
              key: 0,
              type: "chevron-left",
              onClick: Te(U, ["prevent", "stop"])
            })) : pe("", !0),
            hr(T.$slots, "header")
          ]),
          hr(T.$slots, "default"),
          Y(k).footer ? (L(), Z("div", p0, [
            hr(T.$slots, "footer")
          ])) : pe("", !0)
        ], 2)
      ], 2);
    };
  }
}, g0 = ["src"], v0 = {
  key: 1,
  ref: "audio",
  controls: ""
}, m0 = ["src", "type"], _0 = {
  key: 2,
  ref: "video",
  controls: "",
  crossorigin: "",
  playsinline: "",
  style: { width: "100%", height: "300px", "object-fit": "contain" }
}, y0 = ["src", "type"], b0 = {
  key: 3,
  class: "w-full p-4"
}, w0 = ["textContent"], x0 = ["data"], C0 = ["src"], E0 = ["innerHTML"], k0 = /* @__PURE__ */ ri({
  __name: "DetailView",
  props: {
    file: {
      type: Object,
      required: !0
    },
    class: {
      type: String,
      default: "",
      required: !1
    }
  },
  setup(s) {
    return (p, i) => {
      const h = gn("Icon");
      return L(), Z("div", {
        class: pn(["flex items-center justify-center h-80", s.class])
      }, [
        s.file.type == "image" ? (L(), Z("img", {
          key: 0,
          class: "h-full w-full",
          src: s.file.url,
          style: { "object-fit": "contain" }
        }, null, 8, g0)) : s.file.type == "audio" ? (L(), Z("audio", v0, [
          X("source", {
            src: s.file.url,
            type: s.file.mime
          }, null, 8, m0)
        ], 512)) : s.file.type == "video" ? (L(), Z("video", _0, [
          X("source", {
            src: s.file.url,
            type: s.file.mime
          }, null, 8, y0)
        ], 512)) : s.file.type == "text" ? (L(), Z("pre", b0, [
          X("code", {
            textContent: ie(s.file.meta.source)
          }, null, 8, w0)
        ])) : s.file.type == "pdf" ? (L(), Z("object", {
          key: 4,
          data: s.file.url,
          type: "application/pdf",
          width: "100%",
          height: "300"
        }, [
          X("iframe", {
            src: s.file.url,
            width: "100%",
            height: "100%",
            style: { border: "none" }
          }, [
            X("object", {
              class: "no-preview",
              innerHTML: s.file.image
            }, null, 8, E0)
          ], 8, C0)
        ], 8, x0)) : (L(), Oe(h, {
          key: 5,
          type: Y(Mi)[s.file.type] || Y(Mi).text,
          width: "64",
          height: "64"
        }, null, 8, ["type"]))
      ], 2);
    };
  }
}), S0 = { class: "hidden md:block" }, O0 = /* @__PURE__ */ X("div", { class: "flex-grow" }, null, -1), D0 = { class: "px-4 font-bold text-sm mt-2" }, A0 = { class: "table table-fixed text-left w-full" }, T0 = { key: 0 }, R0 = {
  class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900",
  style: { width: "115px" }
}, I0 = {
  class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4",
  style: { width: "100%" }
}, M0 = { key: 1 }, L0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, N0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, P0 = { key: 2 }, F0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, B0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, U0 = { key: 0 }, $0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, z0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, W0 = { key: 1 }, H0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, q0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, G0 = { key: 4 }, X0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, Y0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4" }, j0 = {
  class: "break-words",
  style: { "word-break": "break-all" }
}, K0 = { key: 5 }, V0 = /* @__PURE__ */ X("td", { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900" }, null, -1), Z0 = { class: "p-2 text-sm border-t border-gray-100 dark:border-gray-700 cursor-pointer td-fit pl-4 pr-4 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 break-word whitespace-normal line-4" }, J0 = ["href"], Q0 = {
  __name: "BrowserDetailModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = At(() => i.modal.payload), k = At(() => p.isSelected(h.value));
    function $() {
      p.toggleSelection(h.value), !p.multiple && p.selecting && k.value && p.confirmSelection();
    }
    function U() {
      h.value.type === "archive" && p.unarchive(h.value.path);
    }
    function T() {
      p.duplicate(h.value.path);
    }
    function H() {
      p.openModal(nt.CROP, h.value);
    }
    function F() {
      p.openModal(nt.DELETE, {
        type: bt.FILE,
        [bt.FILE]: h.value
      });
    }
    function z() {
      p.openModal(nt.RENAME, h.value);
    }
    function V(j) {
      var d = document.createElement("textarea");
      d.value = j, d.style.top = "0", d.style.left = "0", d.style.position = "fixed", document.body.appendChild(d), d.focus(), d.select();
      let S = null;
      try {
        var D = document.execCommand("copy");
        S = !!D;
        var E = D ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + E);
      } catch (_) {
        S = !1, console.error("Fallback: Oops, unable to copy", _);
      }
      return document.body.removeChild(d), S;
    }
    function ae() {
      if (!navigator.clipboard) {
        if (!V(h.value.url))
          return;
        Nova.success("Text copied to clipboard");
      }
      navigator.clipboard.writeText(h.value.url).then(
        () => Nova.success("Text copied to clipboard"),
        (j) => console.error("Async: Could not copy text: ", j)
      );
    }
    return (j, d) => {
      const S = gn("Icon"), D = za("tooltip");
      return L(), Oe(Ar, { modal: s.modal }, {
        header: _e(() => [
          X("div", S0, ie(j.__("Details")), 1),
          O0,
          Y(p).selecting ? wt((L(), Oe(Ft, {
            key: 0,
            class: "ml-3 text-green-500",
            active: k.value,
            type: "check",
            onClick: Te($, ["prevent"])
          }, null, 8, ["active"])), [
            [D, j.__("Select")]
          ]) : pe("", !0),
          h.value.type === "image" ? wt((L(), Oe(Ft, {
            key: 1,
            type: "camera",
            onClick: Te(H, ["prevent"])
          }, null, 512)), [
            [D, j.__("Crop")]
          ]) : pe("", !0),
          h.value.type === "archive" ? wt((L(), Oe(Ft, {
            key: 2,
            type: "archive",
            onClick: Te(U, ["prevent"])
          }, null, 512)), [
            [D, j.__("Unarchive")]
          ]) : pe("", !0),
          wt(ue(Ft, {
            type: "duplicate",
            onClick: Te(T, ["prevent"])
          }, null, 512), [
            [D, j.__("Duplicate")]
          ]),
          wt(ue(Ft, {
            type: "pencil",
            onClick: Te(z, ["prevent"])
          }, null, 512), [
            [D, j.__("Rename")]
          ]),
          wt(ue(Ft, {
            class: "text-red-500",
            type: "trash",
            onClick: Te(F, ["prevent"])
          }, null, 512), [
            [D, j.__("Delete")]
          ])
        ]),
        default: _e(() => [
          X("div", D0, ie(h.value.name), 1),
          ue(k0, {
            class: "my-4",
            file: h.value
          }, null, 8, ["file"]),
          X("table", A0, [
            h.value.mime ? (L(), Z("tr", T0, [
              X("td", R0, ie(j.__("Mime")) + ": ", 1),
              X("td", I0, ie(h.value.mime), 1)
            ])) : pe("", !0),
            h.value.lastModifiedReadable ? (L(), Z("tr", M0, [
              X("td", L0, ie(j.__("Midified At")) + ": ", 1),
              X("td", N0, ie(h.value.lastModifiedReadable), 1)
            ])) : pe("", !0),
            h.value.sizeReadable ? (L(), Z("tr", P0, [
              X("td", F0, ie(j.__("Size")) + ": ", 1),
              X("td", B0, ie(h.value.sizeReadable), 1)
            ])) : pe("", !0),
            h.value.meta ? (L(), Z(je, { key: 3 }, [
              h.value.meta.width && h.value.meta.height ? (L(), Z("tr", U0, [
                X("td", $0, ie(j.__("Dimensions")) + ": ", 1),
                X("td", z0, ie(h.value.meta.width) + "x" + ie(h.value.meta.height), 1)
              ])) : pe("", !0),
              h.value.meta.aspectRatio ? (L(), Z("tr", W0, [
                X("td", H0, ie(j.__("Aspect Ratio")) + ": ", 1),
                X("td", q0, ie(h.value.meta.aspectRatio), 1)
              ])) : pe("", !0)
            ], 64)) : pe("", !0),
            h.value.url ? (L(), Z("tr", G0, [
              X("td", X0, ie(j.__("Url")) + ": ", 1),
              X("td", Y0, [
                X("div", {
                  class: "inline-flex items-start leading-4 cursor-pointer hover:opacity-50",
                  onClick: ae
                }, [
                  ue(S, {
                    width: "16",
                    height: "16",
                    type: "clipboard",
                    class: "mr-2 flex-shrink-0"
                  }),
                  X("span", j0, ie(h.value.url), 1)
                ])
              ])
            ])) : pe("", !0),
            h.value.url ? (L(), Z("tr", K0, [
              V0,
              X("td", Z0, [
                X("a", {
                  class: "flex justify-start hover:opacity-50",
                  href: h.value.url,
                  download: ""
                }, [
                  ue(S, {
                    width: "16",
                    height: "16",
                    type: "download",
                    class: "mr-2 flex-shrink-0"
                  }),
                  ut(" " + ie(j.__("Download")), 1)
                ], 8, J0)
              ])
            ])) : pe("", !0)
          ])
        ]),
        _: 1
      }, 8, ["modal"]);
    };
  }
}, e_ = {
  key: 0,
  class: "bg-gray-50 dark:bg-gray-700 rounded-lg px-2 flex items-center text-xs h-8 w-full"
}, t_ = { key: 0 }, n_ = /* @__PURE__ */ X("span", { class: "px-2" }, "/", -1), r_ = [
  n_
], i_ = { href: "#" }, a_ = ["onClick"], o_ = /* @__PURE__ */ X("span", { class: "px-2" }, "/", -1), s_ = [
  o_
], u_ = {
  __name: "BrowserBreadcrumbs",
  emits: ["goToPath"],
  setup(s, { emit: p }) {
    const i = Tt();
    function h(k) {
      i.setPath(k);
    }
    return (k, $) => {
      const U = gn("Icon");
      return Y(i).data?.breadcrumbs?.length > 0 ? (L(), Z("nav", e_, [
        X("div", {
          onClick: $[0] || ($[0] = (T) => h("/")),
          class: "h-6 flex items-center cursor-pointer text-gray-400 dark:text-gray-200 hover:text-primary-500"
        }, [
          ue(U, {
            type: "home",
            width: "16",
            height: "16"
          })
        ]),
        Y(i).data.breadcrumbs.length > 0 ? (L(), Z("div", t_, r_)) : pe("", !0),
        (L(!0), Z(je, null, dr(Y(i).data.breadcrumbs, (T) => (L(), Z(je, {
          key: T.id
        }, [
          T.current ? (L(), Z("div", {
            key: T.id,
            class: "text-gray-800 dark:text-gray-200"
          }, [
            X("span", i_, ie(T.name), 1)
          ])) : (L(), Z(je, { key: 1 }, [
            (L(), Z("div", {
              key: T.id
            }, [
              X("span", {
                href: "#",
                class: "cursor-pointer text-gray-400 dark:text-gray-200 hover:text-primary-500",
                onClick: (H) => h(T.path)
              }, ie(T.name), 9, a_)
            ])),
            (L(), Z("div", {
              key: T.id + "_separator"
            }, s_))
          ], 64))
        ], 64))), 128))
      ])) : pe("", !0);
    };
  }
}, l_ = {
  key: 0,
  class: "absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75 rounded-lg"
}, ni = {
  __name: "Button",
  props: {
    theme: String,
    loading: Boolean
  },
  setup(s) {
    return (p, i) => {
      const h = gn("Loader");
      return L(), Z("div", {
        class: pn(["shadow relative h-10 px-4 rounded-lg bg-primary-500 text-white text-white flex items-center text-center cursor-pointer hover:opacity-75 transition", {
          "bg-red-500": s.theme === "danger",
          "bg-yellow-500": s.theme === "warning",
          "bg-blue-500": s.theme === "info",
          "bg-green-500": s.theme === "success",
          "bg-gray-200 !text-gray-900 dark:bg-gray-700 dark:!text-gray-300": s.theme === "gray",
          "pointer-events-none": s.loading
        }])
      }, [
        hr(p.$slots, "default"),
        s.loading ? (L(), Z("div", l_)) : pe("", !0),
        s.loading ? (L(), Oe(h, {
          key: 1,
          class: "absolute inset-0 m-auto text-white",
          width: "32"
        })) : pe("", !0)
      ], 2);
    };
  }
}, c_ = { class: "p-6" }, f_ = ["placeholder"], h_ = {
  key: 0,
  class: "mt-2 text-red-500"
}, d_ = { class: "flex items-center mt-6" }, p_ = {
  __name: "CreateFolderModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = s, i = Tt(), h = we(), k = we(), $ = we(!1);
    function U() {
      if (!h.value)
        return k.value = "The folder name is required", !1;
      $.value = !0;
      const H = (F) => {
        h.value = null, $.value = !1, k.value = !F.errors || F.errors.length <= 0 ? null : F.message;
      };
      return i.createFolder(`${i.path}/${h.value}`).then(
        (F) => H(F.response && F.response.data ? F.response.data : F)
      ).catch(
        (F) => H(F.response && F.response.data ? F.response.data : F)
      );
    }
    function T() {
      i.closeModal(p.modal.id), k.value = null, h.value = null;
    }
    return (H, F) => (L(), Oe(Ar, { modal: s.modal }, {
      header: _e(() => [
        X("div", null, ie(H.__("Create folder")), 1)
      ]),
      default: _e(() => [
        X("div", c_, [
          wt(X("input", {
            type: "text",
            class: "appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg",
            placeholder: H.__("Write a folder name"),
            "onUpdate:modelValue": F[0] || (F[0] = (z) => h.value = z),
            autofocus: "",
            required: "",
            onKeyup: zv(U, ["enter"])
          }, null, 40, f_), [
            [Wv, h.value]
          ]),
          k.value ? (L(), Z("p", h_, ie(k.value), 1)) : pe("", !0),
          X("div", d_, [
            ue(ni, {
              theme: "gray",
              class: "mr-3",
              onClick: Te(T, ["prevent"])
            }, {
              default: _e(() => [
                ut(ie(H.__("Cancel")), 1)
              ]),
              _: 1
            }),
            ue(ni, {
              type: "submit",
              disabled: $.value,
              loading: $.value,
              onClick: Te(U, ["prevent"])
            }, {
              default: _e(() => [
                $.value ? (L(), Z(je, { key: 0 }, [
                  ut(ie(H.__("Creating")), 1)
                ], 64)) : (L(), Z(je, { key: 1 }, [
                  ut(ie(H.__("Create")), 1)
                ], 64))
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["modal"]));
  }
}, g_ = {
  key: 0,
  class: "p-6"
}, v_ = ["placeholder", "value"], m_ = {
  key: 1,
  class: "p-6"
}, __ = { class: "flex w-full relative" }, y_ = ["placeholder", "value"], b_ = { class: "flex items-center leading-normal bg-gray-50 dark:bg-gray-900 ml-3 rounded-lg px-3 whitespace-no-wrap text-grey-dark text-sm" }, w_ = {
  key: 0,
  class: "my-2 text-red-500"
}, x_ = {
  __name: "RenameModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = At(() => i.modal.payload), k = At(() => h.value.type === "folder"), $ = At(() => h.value.name.replace(/^.*[\\/]/, "")), U = At(() => {
      if (!k.value) {
        var d = /(?:\.([^.]+))?$/;
        let S = d.exec($.value);
        if (S)
          return S[0];
      }
      return "";
    }), T = At(
      () => $.value.replace(U.value, "")
    ), H = we(), F = we(), z = we(!1);
    function V() {
      p.closeModal(i.modal.id), H.value = null;
    }
    function ae() {
      const d = F.value.value;
      if (!d)
        return H.value = "The name is required", !1;
      let S = k.value ? d : d + U.value;
      if (!S)
        return H.value = "The name is required", !1;
      const D = (h.value.path.substring(0, h.value.path.lastIndexOf("/")) + "/" + S).replace(/^\/+/, "");
      return (k.value ? p.renameFolder(h.value.path, D) : p.renameFile(h.value.path, D)).then(
        (E) => j(E.response && E.response.data ? E.response.data : E)
      ).catch(
        (E) => j(E.response && E.response.data ? E.response.data : E)
      );
    }
    function j(d) {
      H.value = !d.errors || d.errors.length <= 0 ? null : d.message;
    }
    return (d, S) => (L(), Oe(Ar, { modal: s.modal }, {
      header: _e(() => [
        X("div", null, ie(d.__(k.value ? "Rename folder" : "Rename file")), 1)
      ]),
      footer: _e(() => [
        ue(ni, {
          theme: "gray",
          class: "mr-3",
          onClick: Te(V, ["prevent"])
        }, {
          default: _e(() => [
            ut(ie(d.__("Cancel")), 1)
          ]),
          _: 1
        }),
        ue(ni, {
          type: "submit",
          disabled: z.value,
          loading: z.value,
          onClick: Te(ae, ["prevent"])
        }, {
          default: _e(() => [
            z.value ? (L(), Z(je, { key: 0 }, [
              ut(ie(d.__("Renaming")), 1)
            ], 64)) : (L(), Z(je, { key: 1 }, [
              ut(ie(d.__("Rename")), 1)
            ], 64))
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      default: _e(() => [
        k.value ? (L(), Z("div", g_, [
          X("input", {
            ref_key: "input",
            ref: F,
            type: "text",
            class: "appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg",
            placeholder: $.value,
            value: $.value,
            autofocus: "",
            required: ""
          }, null, 8, v_)
        ])) : (L(), Z("div", m_, [
          X("div", __, [
            X("input", {
              ref_key: "input",
              ref: F,
              type: "text",
              class: "appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-800 h-10 px-3 rounded-lg",
              placeholder: T.value,
              value: T.value,
              autofocus: "",
              required: ""
            }, null, 8, y_),
            X("span", b_, ie(U.value), 1)
          ]),
          H.value ? (L(), Z("p", w_, ie(H.value), 1)) : pe("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["modal"]));
  }
}, C_ = { class: "p-6" }, E_ = { class: "text-sm mt-2" }, k_ = { class: "text-sm mt-2" }, S_ = { class: "text-sm mt-2" }, O_ = {
  __name: "DeleteModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = we(), k = we(!1);
    function $() {
      p.closeModal(i.modal.id), h.value = null;
    }
    async function U() {
      return k.value = !0, T().then(
        (F) => H(F.response && F.response.data ? F.response.data : F)
      ).catch(
        (F) => H(F.response && F.response.data ? F.response.data : F)
      );
    }
    async function T() {
      switch (i.modal.payload.type) {
        case bt.FOLDER:
          return p.deleteFolder(
            i.modal.payload[bt.FOLDER].path
          );
        case bt.FILE:
          return p.deleteFiles(
            [i.modal.payload[bt.FILE].path]
          );
        case bt.FILES:
          return p.deleteFiles(
            i.modal.payload[bt.FILES].map(
              (F) => F.path
            )
          );
      }
    }
    function H(F) {
      k.value = !1, h.value = !F.errors || F.errors.length <= 0 ? null : F.message;
    }
    return (F, z) => (L(), Oe(Ar, { modal: s.modal }, {
      header: _e(() => [
        X("div", null, ie(F.__("Delete")), 1)
      ]),
      footer: _e(() => [
        ue(ni, {
          theme: "gray",
          class: "mr-3",
          onClick: Te($, ["prevent"])
        }, {
          default: _e(() => [
            ut(ie(F.__("Cancel")), 1)
          ]),
          _: 1
        }),
        ue(ni, {
          theme: "danger",
          disabled: k.value,
          loading: k.value,
          onClick: Te(U, ["prevent"])
        }, {
          default: _e(() => [
            k.value ? (L(), Z(je, { key: 0 }, [
              ut(ie(F.__("Deleting")), 1)
            ], 64)) : (L(), Z(je, { key: 1 }, [
              ut(ie(F.__("Delete")), 1)
            ], 64))
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      default: _e(() => [
        X("div", C_, [
          s.modal.payload.type === Y(bt).FOLDER ? (L(), Z(je, { key: 0 }, [
            X("p", null, ie(F.__("Are you sure you want to remove this folder?")), 1),
            X("p", E_, ie(F.__(
              "Remember: The folder and all his contents will be delete from your storage"
            )), 1)
          ], 64)) : s.modal.payload.type === Y(bt).FILE ? (L(), Z(je, { key: 1 }, [
            X("p", null, ie(F.__("Are you sure you want to remove this file?")), 1),
            X("p", k_, ie(F.__(
              "Remember: The file will be delete from your storage"
            )), 1)
          ], 64)) : s.modal.payload.type === Y(bt).FILES ? (L(), Z(je, { key: 2 }, [
            X("p", null, ie(F.__("Are you sure you want to remove this files?")), 1),
            X("p", S_, ie(F.__(
              "Remember: The files will be delete from your storage"
            )), 1)
          ], 64)) : pe("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modal"]));
  }
};
var Zl = {}, Jl = { exports: {} };
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
(function(s, p) {
  (function(i, h) {
    s.exports = h();
  })(Zr, function() {
    function i(g, a) {
      var l = Object.keys(g);
      if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(g);
        a && (u = u.filter(function(b) {
          return Object.getOwnPropertyDescriptor(g, b).enumerable;
        })), l.push.apply(l, u);
      }
      return l;
    }
    function h(g) {
      for (var a = 1; a < arguments.length; a++) {
        var l = arguments[a] != null ? arguments[a] : {};
        a % 2 ? i(Object(l), !0).forEach(function(u) {
          H(g, u, l[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(l)) : i(Object(l)).forEach(function(u) {
          Object.defineProperty(g, u, Object.getOwnPropertyDescriptor(l, u));
        });
      }
      return g;
    }
    function k(g) {
      "@babel/helpers - typeof";
      return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, k(g);
    }
    function $(g, a) {
      if (!(g instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    function U(g, a) {
      for (var l = 0; l < a.length; l++) {
        var u = a[l];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(g, u.key, u);
      }
    }
    function T(g, a, l) {
      return a && U(g.prototype, a), l && U(g, l), Object.defineProperty(g, "prototype", {
        writable: !1
      }), g;
    }
    function H(g, a, l) {
      return a in g ? Object.defineProperty(g, a, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : g[a] = l, g;
    }
    function F(g) {
      return z(g) || V(g) || ae(g) || d();
    }
    function z(g) {
      if (Array.isArray(g))
        return j(g);
    }
    function V(g) {
      if (typeof Symbol < "u" && g[Symbol.iterator] != null || g["@@iterator"] != null)
        return Array.from(g);
    }
    function ae(g, a) {
      if (g) {
        if (typeof g == "string")
          return j(g, a);
        var l = Object.prototype.toString.call(g).slice(8, -1);
        if (l === "Object" && g.constructor && (l = g.constructor.name), l === "Map" || l === "Set")
          return Array.from(g);
        if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
          return j(g, a);
      }
    }
    function j(g, a) {
      (a == null || a > g.length) && (a = g.length);
      for (var l = 0, u = new Array(a); l < a; l++)
        u[l] = g[l];
      return u;
    }
    function d() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var S = typeof window < "u" && typeof window.document < "u", D = S ? window : {}, E = S && D.document.documentElement ? "ontouchstart" in D.document.documentElement : !1, _ = S ? "PointerEvent" in D : !1, oe = "cropper", ee = "all", te = "crop", ge = "move", De = "zoom", ce = "e", le = "w", ne = "s", ye = "n", Ne = "ne", rt = "nw", ft = "se", mt = "sw", Ke = "".concat(oe, "-crop"), $e = "".concat(oe, "-disabled"), xe = "".concat(oe, "-hidden"), Cn = "".concat(oe, "-hide"), Ln = "".concat(oe, "-invisible"), gt = "".concat(oe, "-modal"), Zn = "".concat(oe, "-move"), En = "".concat(oe, "Action"), Nn = "".concat(oe, "Preview"), qt = "crop", Pn = "move", Tr = "none", en = "crop", tn = "cropend", kn = "cropmove", Sn = "cropstart", On = "dblclick", xt = E ? "touchstart" : "mousedown", Rt = E ? "touchmove" : "mousemove", Fn = E ? "touchend touchcancel" : "mouseup", Rr = _ ? "pointerdown" : xt, Bt = _ ? "pointermove" : Rt, pr = _ ? "pointerup pointercancel" : Fn, Ir = "ready", Dn = "resize", Qe = "wheel", J = "zoom", ve = "image/jpeg", ze = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Ct = /^data:/, Et = /^data:image\/jpeg;base64,/, Gt = /^img|canvas$/i, Bn = 200, Mr = 100, Lr = {
      // Define the view mode of the cropper
      viewMode: 0,
      // 0, 1, 2, 3
      // Define the dragging mode of the cropper
      dragMode: qt,
      // 'crop', 'move' or 'none'
      // Define the initial aspect ratio of the crop box
      initialAspectRatio: NaN,
      // Define the aspect ratio of the crop box
      aspectRatio: NaN,
      // An object with the previous cropping result data
      data: null,
      // A selector for adding extra containers to preview
      preview: "",
      // Re-render the cropper when resize the window
      responsive: !0,
      // Restore the cropped area after resize the window
      restore: !0,
      // Check if the current image is a cross-origin image
      checkCrossOrigin: !0,
      // Check the current image's Exif Orientation information
      checkOrientation: !0,
      // Show the black modal
      modal: !0,
      // Show the dashed lines for guiding
      guides: !0,
      // Show the center indicator for guiding
      center: !0,
      // Show the white modal to highlight the crop box
      highlight: !0,
      // Show the grid background
      background: !0,
      // Enable to crop the image automatically when initialize
      autoCrop: !0,
      // Define the percentage of automatic cropping area when initializes
      autoCropArea: 0.8,
      // Enable to move the image
      movable: !0,
      // Enable to rotate the image
      rotatable: !0,
      // Enable to scale the image
      scalable: !0,
      // Enable to zoom the image
      zoomable: !0,
      // Enable to zoom the image by dragging touch
      zoomOnTouch: !0,
      // Enable to zoom the image by wheeling mouse
      zoomOnWheel: !0,
      // Define zoom ratio when zoom the image by wheeling mouse
      wheelZoomRatio: 0.1,
      // Enable to move the crop box
      cropBoxMovable: !0,
      // Enable to resize the crop box
      cropBoxResizable: !0,
      // Toggle drag mode between "crop" and "move" when click twice on the cropper
      toggleDragModeOnDblclick: !0,
      // Size limitation
      minCanvasWidth: 0,
      minCanvasHeight: 0,
      minCropBoxWidth: 0,
      minCropBoxHeight: 0,
      minContainerWidth: Bn,
      minContainerHeight: Mr,
      // Shortcuts of events
      ready: null,
      cropstart: null,
      cropmove: null,
      cropend: null,
      crop: null,
      zoom: null
    }, ii = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', ai = Number.isNaN || D.isNaN;
    function Ee(g) {
      return typeof g == "number" && !ai(g);
    }
    var Nr = function(a) {
      return a > 0 && a < 1 / 0;
    };
    function gr(g) {
      return typeof g > "u";
    }
    function vn(g) {
      return k(g) === "object" && g !== null;
    }
    var oi = Object.prototype.hasOwnProperty;
    function Jn(g) {
      if (!vn(g))
        return !1;
      try {
        var a = g.constructor, l = a.prototype;
        return a && l && oi.call(l, "isPrototypeOf");
      } catch {
        return !1;
      }
    }
    function kt(g) {
      return typeof g == "function";
    }
    var qa = Array.prototype.slice;
    function si(g) {
      return Array.from ? Array.from(g) : qa.call(g);
    }
    function Ze(g, a) {
      return g && kt(a) && (Array.isArray(g) || Ee(g.length) ? si(g).forEach(function(l, u) {
        a.call(g, l, u, g);
      }) : vn(g) && Object.keys(g).forEach(function(l) {
        a.call(g, g[l], l, g);
      })), g;
    }
    var Ye = Object.assign || function(a) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), b = 1; b < l; b++)
        u[b - 1] = arguments[b];
      return vn(a) && u.length > 0 && u.forEach(function(m) {
        vn(m) && Object.keys(m).forEach(function(w) {
          a[w] = m[w];
        });
      }), a;
    }, Ga = /\.\d*(?:0|9){12}\d*$/;
    function Qn(g) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
      return Ga.test(g) ? Math.round(g * a) / a : g;
    }
    var Xa = /^width|height|left|top|marginLeft|marginTop$/;
    function mn(g, a) {
      var l = g.style;
      Ze(a, function(u, b) {
        Xa.test(b) && Ee(u) && (u = "".concat(u, "px")), l[b] = u;
      });
    }
    function Ya(g, a) {
      return g.classList ? g.classList.contains(a) : g.className.indexOf(a) > -1;
    }
    function lt(g, a) {
      if (a) {
        if (Ee(g.length)) {
          Ze(g, function(u) {
            lt(u, a);
          });
          return;
        }
        if (g.classList) {
          g.classList.add(a);
          return;
        }
        var l = g.className.trim();
        l ? l.indexOf(a) < 0 && (g.className = "".concat(l, " ").concat(a)) : g.className = a;
      }
    }
    function nn(g, a) {
      if (a) {
        if (Ee(g.length)) {
          Ze(g, function(l) {
            nn(l, a);
          });
          return;
        }
        if (g.classList) {
          g.classList.remove(a);
          return;
        }
        g.className.indexOf(a) >= 0 && (g.className = g.className.replace(a, ""));
      }
    }
    function An(g, a, l) {
      if (a) {
        if (Ee(g.length)) {
          Ze(g, function(u) {
            An(u, a, l);
          });
          return;
        }
        l ? lt(g, a) : nn(g, a);
      }
    }
    var ja = /([a-z\d])([A-Z])/g;
    function vr(g) {
      return g.replace(ja, "$1-$2").toLowerCase();
    }
    function ui(g, a) {
      return vn(g[a]) ? g[a] : g.dataset ? g.dataset[a] : g.getAttribute("data-".concat(vr(a)));
    }
    function mr(g, a, l) {
      vn(l) ? g[a] = l : g.dataset ? g.dataset[a] = l : g.setAttribute("data-".concat(vr(a)), l);
    }
    function Ka(g, a) {
      if (vn(g[a]))
        try {
          delete g[a];
        } catch {
          g[a] = void 0;
        }
      else if (g.dataset)
        try {
          delete g.dataset[a];
        } catch {
          g.dataset[a] = void 0;
        }
      else
        g.removeAttribute("data-".concat(vr(a)));
    }
    var Li = /\s\s*/, Ni = function() {
      var g = !1;
      if (S) {
        var a = !1, l = function() {
        }, u = Object.defineProperty({}, "once", {
          get: function() {
            return g = !0, a;
          },
          /**
           * This setter can fix a `TypeError` in strict mode
           * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
           * @param {boolean} value - The value to set
           */
          set: function(m) {
            a = m;
          }
        });
        D.addEventListener("test", l, u), D.removeEventListener("test", l, u);
      }
      return g;
    }();
    function Xt(g, a, l) {
      var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, b = l;
      a.trim().split(Li).forEach(function(m) {
        if (!Ni) {
          var w = g.listeners;
          w && w[m] && w[m][l] && (b = w[m][l], delete w[m][l], Object.keys(w[m]).length === 0 && delete w[m], Object.keys(w).length === 0 && delete g.listeners);
        }
        g.removeEventListener(m, b, u);
      });
    }
    function Ut(g, a, l) {
      var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, b = l;
      a.trim().split(Li).forEach(function(m) {
        if (u.once && !Ni) {
          var w = g.listeners, A = w === void 0 ? {} : w;
          b = function() {
            delete A[m][l], g.removeEventListener(m, b, u);
            for (var B = arguments.length, R = new Array(B), I = 0; I < B; I++)
              R[I] = arguments[I];
            l.apply(g, R);
          }, A[m] || (A[m] = {}), A[m][l] && g.removeEventListener(m, A[m][l], u), A[m][l] = b, g.listeners = A;
        }
        g.addEventListener(m, b, u);
      });
    }
    function er(g, a, l) {
      var u;
      return kt(Event) && kt(CustomEvent) ? u = new CustomEvent(a, {
        detail: l,
        bubbles: !0,
        cancelable: !0
      }) : (u = document.createEvent("CustomEvent"), u.initCustomEvent(a, !0, !0, l)), g.dispatchEvent(u);
    }
    function li(g) {
      var a = g.getBoundingClientRect();
      return {
        left: a.left + (window.pageXOffset - document.documentElement.clientLeft),
        top: a.top + (window.pageYOffset - document.documentElement.clientTop)
      };
    }
    var ci = D.location, Va = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
    function Pi(g) {
      var a = g.match(Va);
      return a !== null && (a[1] !== ci.protocol || a[2] !== ci.hostname || a[3] !== ci.port);
    }
    function Fi(g) {
      var a = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
      return g + (g.indexOf("?") === -1 ? "?" : "&") + a;
    }
    function _r(g) {
      var a = g.rotate, l = g.scaleX, u = g.scaleY, b = g.translateX, m = g.translateY, w = [];
      Ee(b) && b !== 0 && w.push("translateX(".concat(b, "px)")), Ee(m) && m !== 0 && w.push("translateY(".concat(m, "px)")), Ee(a) && a !== 0 && w.push("rotate(".concat(a, "deg)")), Ee(l) && l !== 1 && w.push("scaleX(".concat(l, ")")), Ee(u) && u !== 1 && w.push("scaleY(".concat(u, ")"));
      var A = w.length ? w.join(" ") : "none";
      return {
        WebkitTransform: A,
        msTransform: A,
        transform: A
      };
    }
    function Za(g) {
      var a = h({}, g), l = 0;
      return Ze(g, function(u, b) {
        delete a[b], Ze(a, function(m) {
          var w = Math.abs(u.startX - m.startX), A = Math.abs(u.startY - m.startY), G = Math.abs(u.endX - m.endX), B = Math.abs(u.endY - m.endY), R = Math.sqrt(w * w + A * A), I = Math.sqrt(G * G + B * B), q = (I - R) / R;
          Math.abs(q) > Math.abs(l) && (l = q);
        });
      }), l;
    }
    function Un(g, a) {
      var l = g.pageX, u = g.pageY, b = {
        endX: l,
        endY: u
      };
      return a ? b : h({
        startX: l,
        startY: u
      }, b);
    }
    function Ja(g) {
      var a = 0, l = 0, u = 0;
      return Ze(g, function(b) {
        var m = b.startX, w = b.startY;
        a += m, l += w, u += 1;
      }), a /= u, l /= u, {
        pageX: a,
        pageY: l
      };
    }
    function Yt(g) {
      var a = g.aspectRatio, l = g.height, u = g.width, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", m = Nr(u), w = Nr(l);
      if (m && w) {
        var A = l * a;
        b === "contain" && A > u || b === "cover" && A < u ? l = u / a : u = l * a;
      } else
        m ? l = u / a : w && (u = l * a);
      return {
        width: u,
        height: l
      };
    }
    function Qa(g) {
      var a = g.width, l = g.height, u = g.degree;
      if (u = Math.abs(u) % 180, u === 90)
        return {
          width: l,
          height: a
        };
      var b = u % 90 * Math.PI / 180, m = Math.sin(b), w = Math.cos(b), A = a * w + l * m, G = a * m + l * w;
      return u > 90 ? {
        width: G,
        height: A
      } : {
        width: A,
        height: G
      };
    }
    function eo(g, a, l, u) {
      var b = a.aspectRatio, m = a.naturalWidth, w = a.naturalHeight, A = a.rotate, G = A === void 0 ? 0 : A, B = a.scaleX, R = B === void 0 ? 1 : B, I = a.scaleY, q = I === void 0 ? 1 : I, Ie = l.aspectRatio, Re = l.naturalWidth, Ge = l.naturalHeight, Be = u.fillColor, it = Be === void 0 ? "transparent" : Be, ct = u.imageSmoothingEnabled, et = ct === void 0 ? !0 : ct, rn = u.imageSmoothingQuality, It = rn === void 0 ? "low" : rn, K = u.maxWidth, Ue = K === void 0 ? 1 / 0 : K, at = u.maxHeight, St = at === void 0 ? 1 / 0 : at, _n = u.minWidth, $n = _n === void 0 ? 0 : _n, zn = u.minHeight, Tn = zn === void 0 ? 0 : zn, an = document.createElement("canvas"), ke = an.getContext("2d"), Fe = Yt({
        aspectRatio: Ie,
        width: Ue,
        height: St
      }), Pr = Yt({
        aspectRatio: Ie,
        width: $n,
        height: Tn
      }, "cover"), hi = Math.min(Fe.width, Math.max(Pr.width, Re)), di = Math.min(Fe.height, Math.max(Pr.height, Ge)), Xi = Yt({
        aspectRatio: b,
        width: Ue,
        height: St
      }), Yi = Yt({
        aspectRatio: b,
        width: $n,
        height: Tn
      }, "cover"), ji = Math.min(Xi.width, Math.max(Yi.width, m)), pi = Math.min(Xi.height, Math.max(Yi.height, w)), oo = [-ji / 2, -pi / 2, ji, pi];
      return an.width = Qn(hi), an.height = Qn(di), ke.fillStyle = it, ke.fillRect(0, 0, hi, di), ke.save(), ke.translate(hi / 2, di / 2), ke.rotate(G * Math.PI / 180), ke.scale(R, q), ke.imageSmoothingEnabled = et, ke.imageSmoothingQuality = It, ke.drawImage.apply(ke, [g].concat(F(oo.map(function(ht) {
        return Math.floor(Qn(ht));
      })))), ke.restore(), an;
    }
    var Bi = String.fromCharCode;
    function Ui(g, a, l) {
      var u = "";
      l += a;
      for (var b = a; b < l; b += 1)
        u += Bi(g.getUint8(b));
      return u;
    }
    var $i = /^data:.*,/;
    function zi(g) {
      var a = g.replace($i, ""), l = atob(a), u = new ArrayBuffer(l.length), b = new Uint8Array(u);
      return Ze(b, function(m, w) {
        b[w] = l.charCodeAt(w);
      }), u;
    }
    function to(g, a) {
      for (var l = [], u = 8192, b = new Uint8Array(g); b.length > 0; )
        l.push(Bi.apply(null, si(b.subarray(0, u)))), b = b.subarray(u);
      return "data:".concat(a, ";base64,").concat(btoa(l.join("")));
    }
    function no(g) {
      var a = new DataView(g), l;
      try {
        var u, b, m;
        if (a.getUint8(0) === 255 && a.getUint8(1) === 216)
          for (var w = a.byteLength, A = 2; A + 1 < w; ) {
            if (a.getUint8(A) === 255 && a.getUint8(A + 1) === 225) {
              b = A;
              break;
            }
            A += 1;
          }
        if (b) {
          var G = b + 4, B = b + 10;
          if (Ui(a, G, 4) === "Exif") {
            var R = a.getUint16(B);
            if (u = R === 18761, (u || R === 19789) && a.getUint16(B + 2, u) === 42) {
              var I = a.getUint32(B + 4, u);
              I >= 8 && (m = B + I);
            }
          }
        }
        if (m) {
          var q = a.getUint16(m, u), Ie, Re;
          for (Re = 0; Re < q; Re += 1)
            if (Ie = m + Re * 12 + 2, a.getUint16(Ie, u) === 274) {
              Ie += 8, l = a.getUint16(Ie, u), a.setUint16(Ie, 1, u);
              break;
            }
        }
      } catch {
        l = 1;
      }
      return l;
    }
    function ro(g) {
      var a = 0, l = 1, u = 1;
      switch (g) {
        case 2:
          l = -1;
          break;
        case 3:
          a = -180;
          break;
        case 4:
          u = -1;
          break;
        case 5:
          a = 90, u = -1;
          break;
        case 6:
          a = 90;
          break;
        case 7:
          a = 90, l = -1;
          break;
        case 8:
          a = -90;
          break;
      }
      return {
        rotate: a,
        scaleX: l,
        scaleY: u
      };
    }
    var io = {
      render: function() {
        this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
      },
      initContainer: function() {
        var a = this.element, l = this.options, u = this.container, b = this.cropper, m = Number(l.minContainerWidth), w = Number(l.minContainerHeight);
        lt(b, xe), nn(a, xe);
        var A = {
          width: Math.max(u.offsetWidth, m >= 0 ? m : Bn),
          height: Math.max(u.offsetHeight, w >= 0 ? w : Mr)
        };
        this.containerData = A, mn(b, {
          width: A.width,
          height: A.height
        }), lt(a, xe), nn(b, xe);
      },
      // Canvas (image wrapper)
      initCanvas: function() {
        var a = this.containerData, l = this.imageData, u = this.options.viewMode, b = Math.abs(l.rotate) % 180 === 90, m = b ? l.naturalHeight : l.naturalWidth, w = b ? l.naturalWidth : l.naturalHeight, A = m / w, G = a.width, B = a.height;
        a.height * A > a.width ? u === 3 ? G = a.height * A : B = a.width / A : u === 3 ? B = a.width / A : G = a.height * A;
        var R = {
          aspectRatio: A,
          naturalWidth: m,
          naturalHeight: w,
          width: G,
          height: B
        };
        this.canvasData = R, this.limited = u === 1 || u === 2, this.limitCanvas(!0, !0), R.width = Math.min(Math.max(R.width, R.minWidth), R.maxWidth), R.height = Math.min(Math.max(R.height, R.minHeight), R.maxHeight), R.left = (a.width - R.width) / 2, R.top = (a.height - R.height) / 2, R.oldLeft = R.left, R.oldTop = R.top, this.initialCanvasData = Ye({}, R);
      },
      limitCanvas: function(a, l) {
        var u = this.options, b = this.containerData, m = this.canvasData, w = this.cropBoxData, A = u.viewMode, G = m.aspectRatio, B = this.cropped && w;
        if (a) {
          var R = Number(u.minCanvasWidth) || 0, I = Number(u.minCanvasHeight) || 0;
          A > 1 ? (R = Math.max(R, b.width), I = Math.max(I, b.height), A === 3 && (I * G > R ? R = I * G : I = R / G)) : A > 0 && (R ? R = Math.max(R, B ? w.width : 0) : I ? I = Math.max(I, B ? w.height : 0) : B && (R = w.width, I = w.height, I * G > R ? R = I * G : I = R / G));
          var q = Yt({
            aspectRatio: G,
            width: R,
            height: I
          });
          R = q.width, I = q.height, m.minWidth = R, m.minHeight = I, m.maxWidth = 1 / 0, m.maxHeight = 1 / 0;
        }
        if (l)
          if (A > (B ? 0 : 1)) {
            var Ie = b.width - m.width, Re = b.height - m.height;
            m.minLeft = Math.min(0, Ie), m.minTop = Math.min(0, Re), m.maxLeft = Math.max(0, Ie), m.maxTop = Math.max(0, Re), B && this.limited && (m.minLeft = Math.min(w.left, w.left + (w.width - m.width)), m.minTop = Math.min(w.top, w.top + (w.height - m.height)), m.maxLeft = w.left, m.maxTop = w.top, A === 2 && (m.width >= b.width && (m.minLeft = Math.min(0, Ie), m.maxLeft = Math.max(0, Ie)), m.height >= b.height && (m.minTop = Math.min(0, Re), m.maxTop = Math.max(0, Re))));
          } else
            m.minLeft = -m.width, m.minTop = -m.height, m.maxLeft = b.width, m.maxTop = b.height;
      },
      renderCanvas: function(a, l) {
        var u = this.canvasData, b = this.imageData;
        if (l) {
          var m = Qa({
            width: b.naturalWidth * Math.abs(b.scaleX || 1),
            height: b.naturalHeight * Math.abs(b.scaleY || 1),
            degree: b.rotate || 0
          }), w = m.width, A = m.height, G = u.width * (w / u.naturalWidth), B = u.height * (A / u.naturalHeight);
          u.left -= (G - u.width) / 2, u.top -= (B - u.height) / 2, u.width = G, u.height = B, u.aspectRatio = w / A, u.naturalWidth = w, u.naturalHeight = A, this.limitCanvas(!0, !1);
        }
        (u.width > u.maxWidth || u.width < u.minWidth) && (u.left = u.oldLeft), (u.height > u.maxHeight || u.height < u.minHeight) && (u.top = u.oldTop), u.width = Math.min(Math.max(u.width, u.minWidth), u.maxWidth), u.height = Math.min(Math.max(u.height, u.minHeight), u.maxHeight), this.limitCanvas(!1, !0), u.left = Math.min(Math.max(u.left, u.minLeft), u.maxLeft), u.top = Math.min(Math.max(u.top, u.minTop), u.maxTop), u.oldLeft = u.left, u.oldTop = u.top, mn(this.canvas, Ye({
          width: u.width,
          height: u.height
        }, _r({
          translateX: u.left,
          translateY: u.top
        }))), this.renderImage(a), this.cropped && this.limited && this.limitCropBox(!0, !0);
      },
      renderImage: function(a) {
        var l = this.canvasData, u = this.imageData, b = u.naturalWidth * (l.width / l.naturalWidth), m = u.naturalHeight * (l.height / l.naturalHeight);
        Ye(u, {
          width: b,
          height: m,
          left: (l.width - b) / 2,
          top: (l.height - m) / 2
        }), mn(this.image, Ye({
          width: u.width,
          height: u.height
        }, _r(Ye({
          translateX: u.left,
          translateY: u.top
        }, u)))), a && this.output();
      },
      initCropBox: function() {
        var a = this.options, l = this.canvasData, u = a.aspectRatio || a.initialAspectRatio, b = Number(a.autoCropArea) || 0.8, m = {
          width: l.width,
          height: l.height
        };
        u && (l.height * u > l.width ? m.height = m.width / u : m.width = m.height * u), this.cropBoxData = m, this.limitCropBox(!0, !0), m.width = Math.min(Math.max(m.width, m.minWidth), m.maxWidth), m.height = Math.min(Math.max(m.height, m.minHeight), m.maxHeight), m.width = Math.max(m.minWidth, m.width * b), m.height = Math.max(m.minHeight, m.height * b), m.left = l.left + (l.width - m.width) / 2, m.top = l.top + (l.height - m.height) / 2, m.oldLeft = m.left, m.oldTop = m.top, this.initialCropBoxData = Ye({}, m);
      },
      limitCropBox: function(a, l) {
        var u = this.options, b = this.containerData, m = this.canvasData, w = this.cropBoxData, A = this.limited, G = u.aspectRatio;
        if (a) {
          var B = Number(u.minCropBoxWidth) || 0, R = Number(u.minCropBoxHeight) || 0, I = A ? Math.min(b.width, m.width, m.width + m.left, b.width - m.left) : b.width, q = A ? Math.min(b.height, m.height, m.height + m.top, b.height - m.top) : b.height;
          B = Math.min(B, b.width), R = Math.min(R, b.height), G && (B && R ? R * G > B ? R = B / G : B = R * G : B ? R = B / G : R && (B = R * G), q * G > I ? q = I / G : I = q * G), w.minWidth = Math.min(B, I), w.minHeight = Math.min(R, q), w.maxWidth = I, w.maxHeight = q;
        }
        l && (A ? (w.minLeft = Math.max(0, m.left), w.minTop = Math.max(0, m.top), w.maxLeft = Math.min(b.width, m.left + m.width) - w.width, w.maxTop = Math.min(b.height, m.top + m.height) - w.height) : (w.minLeft = 0, w.minTop = 0, w.maxLeft = b.width - w.width, w.maxTop = b.height - w.height));
      },
      renderCropBox: function() {
        var a = this.options, l = this.containerData, u = this.cropBoxData;
        (u.width > u.maxWidth || u.width < u.minWidth) && (u.left = u.oldLeft), (u.height > u.maxHeight || u.height < u.minHeight) && (u.top = u.oldTop), u.width = Math.min(Math.max(u.width, u.minWidth), u.maxWidth), u.height = Math.min(Math.max(u.height, u.minHeight), u.maxHeight), this.limitCropBox(!1, !0), u.left = Math.min(Math.max(u.left, u.minLeft), u.maxLeft), u.top = Math.min(Math.max(u.top, u.minTop), u.maxTop), u.oldLeft = u.left, u.oldTop = u.top, a.movable && a.cropBoxMovable && mr(this.face, En, u.width >= l.width && u.height >= l.height ? ge : ee), mn(this.cropBox, Ye({
          width: u.width,
          height: u.height
        }, _r({
          translateX: u.left,
          translateY: u.top
        }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
      },
      output: function() {
        this.preview(), er(this.element, en, this.getData());
      }
    }, Wi = {
      initPreview: function() {
        var a = this.element, l = this.crossOrigin, u = this.options.preview, b = l ? this.crossOriginUrl : this.url, m = a.alt || "The image to preview", w = document.createElement("img");
        if (l && (w.crossOrigin = l), w.src = b, w.alt = m, this.viewBox.appendChild(w), this.viewBoxImage = w, !!u) {
          var A = u;
          typeof u == "string" ? A = a.ownerDocument.querySelectorAll(u) : u.querySelector && (A = [u]), this.previews = A, Ze(A, function(G) {
            var B = document.createElement("img");
            mr(G, Nn, {
              width: G.offsetWidth,
              height: G.offsetHeight,
              html: G.innerHTML
            }), l && (B.crossOrigin = l), B.src = b, B.alt = m, B.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', G.innerHTML = "", G.appendChild(B);
          });
        }
      },
      resetPreview: function() {
        Ze(this.previews, function(a) {
          var l = ui(a, Nn);
          mn(a, {
            width: l.width,
            height: l.height
          }), a.innerHTML = l.html, Ka(a, Nn);
        });
      },
      preview: function() {
        var a = this.imageData, l = this.canvasData, u = this.cropBoxData, b = u.width, m = u.height, w = a.width, A = a.height, G = u.left - l.left - a.left, B = u.top - l.top - a.top;
        !this.cropped || this.disabled || (mn(this.viewBoxImage, Ye({
          width: w,
          height: A
        }, _r(Ye({
          translateX: -G,
          translateY: -B
        }, a)))), Ze(this.previews, function(R) {
          var I = ui(R, Nn), q = I.width, Ie = I.height, Re = q, Ge = Ie, Be = 1;
          b && (Be = q / b, Ge = m * Be), m && Ge > Ie && (Be = Ie / m, Re = b * Be, Ge = Ie), mn(R, {
            width: Re,
            height: Ge
          }), mn(R.getElementsByTagName("img")[0], Ye({
            width: w * Be,
            height: A * Be
          }, _r(Ye({
            translateX: -G * Be,
            translateY: -B * Be
          }, a))));
        }));
      }
    }, Hi = {
      bind: function() {
        var a = this.element, l = this.options, u = this.cropper;
        kt(l.cropstart) && Ut(a, Sn, l.cropstart), kt(l.cropmove) && Ut(a, kn, l.cropmove), kt(l.cropend) && Ut(a, tn, l.cropend), kt(l.crop) && Ut(a, en, l.crop), kt(l.zoom) && Ut(a, J, l.zoom), Ut(u, Rr, this.onCropStart = this.cropStart.bind(this)), l.zoomable && l.zoomOnWheel && Ut(u, Qe, this.onWheel = this.wheel.bind(this), {
          passive: !1,
          capture: !0
        }), l.toggleDragModeOnDblclick && Ut(u, On, this.onDblclick = this.dblclick.bind(this)), Ut(a.ownerDocument, Bt, this.onCropMove = this.cropMove.bind(this)), Ut(a.ownerDocument, pr, this.onCropEnd = this.cropEnd.bind(this)), l.responsive && Ut(window, Dn, this.onResize = this.resize.bind(this));
      },
      unbind: function() {
        var a = this.element, l = this.options, u = this.cropper;
        kt(l.cropstart) && Xt(a, Sn, l.cropstart), kt(l.cropmove) && Xt(a, kn, l.cropmove), kt(l.cropend) && Xt(a, tn, l.cropend), kt(l.crop) && Xt(a, en, l.crop), kt(l.zoom) && Xt(a, J, l.zoom), Xt(u, Rr, this.onCropStart), l.zoomable && l.zoomOnWheel && Xt(u, Qe, this.onWheel, {
          passive: !1,
          capture: !0
        }), l.toggleDragModeOnDblclick && Xt(u, On, this.onDblclick), Xt(a.ownerDocument, Bt, this.onCropMove), Xt(a.ownerDocument, pr, this.onCropEnd), l.responsive && Xt(window, Dn, this.onResize);
      }
    }, qi = {
      resize: function() {
        if (!this.disabled) {
          var a = this.options, l = this.container, u = this.containerData, b = l.offsetWidth / u.width, m = l.offsetHeight / u.height, w = Math.abs(b - 1) > Math.abs(m - 1) ? b : m;
          if (w !== 1) {
            var A, G;
            a.restore && (A = this.getCanvasData(), G = this.getCropBoxData()), this.render(), a.restore && (this.setCanvasData(Ze(A, function(B, R) {
              A[R] = B * w;
            })), this.setCropBoxData(Ze(G, function(B, R) {
              G[R] = B * w;
            })));
          }
        }
      },
      dblclick: function() {
        this.disabled || this.options.dragMode === Tr || this.setDragMode(Ya(this.dragBox, Ke) ? Pn : qt);
      },
      wheel: function(a) {
        var l = this, u = Number(this.options.wheelZoomRatio) || 0.1, b = 1;
        this.disabled || (a.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
          l.wheeling = !1;
        }, 50), a.deltaY ? b = a.deltaY > 0 ? 1 : -1 : a.wheelDelta ? b = -a.wheelDelta / 120 : a.detail && (b = a.detail > 0 ? 1 : -1), this.zoom(-b * u, a)));
      },
      cropStart: function(a) {
        var l = a.buttons, u = a.button;
        if (!(this.disabled || (a.type === "mousedown" || a.type === "pointerdown" && a.pointerType === "mouse") && // No primary button (Usually the left button)
        (Ee(l) && l !== 1 || Ee(u) && u !== 0 || a.ctrlKey))) {
          var b = this.options, m = this.pointers, w;
          a.changedTouches ? Ze(a.changedTouches, function(A) {
            m[A.identifier] = Un(A);
          }) : m[a.pointerId || 0] = Un(a), Object.keys(m).length > 1 && b.zoomable && b.zoomOnTouch ? w = De : w = ui(a.target, En), ze.test(w) && er(this.element, Sn, {
            originalEvent: a,
            action: w
          }) !== !1 && (a.preventDefault(), this.action = w, this.cropping = !1, w === te && (this.cropping = !0, lt(this.dragBox, gt)));
        }
      },
      cropMove: function(a) {
        var l = this.action;
        if (!(this.disabled || !l)) {
          var u = this.pointers;
          a.preventDefault(), er(this.element, kn, {
            originalEvent: a,
            action: l
          }) !== !1 && (a.changedTouches ? Ze(a.changedTouches, function(b) {
            Ye(u[b.identifier] || {}, Un(b, !0));
          }) : Ye(u[a.pointerId || 0] || {}, Un(a, !0)), this.change(a));
        }
      },
      cropEnd: function(a) {
        if (!this.disabled) {
          var l = this.action, u = this.pointers;
          a.changedTouches ? Ze(a.changedTouches, function(b) {
            delete u[b.identifier];
          }) : delete u[a.pointerId || 0], l && (a.preventDefault(), Object.keys(u).length || (this.action = ""), this.cropping && (this.cropping = !1, An(this.dragBox, gt, this.cropped && this.options.modal)), er(this.element, tn, {
            originalEvent: a,
            action: l
          }));
        }
      }
    }, fi = {
      change: function(a) {
        var l = this.options, u = this.canvasData, b = this.containerData, m = this.cropBoxData, w = this.pointers, A = this.action, G = l.aspectRatio, B = m.left, R = m.top, I = m.width, q = m.height, Ie = B + I, Re = R + q, Ge = 0, Be = 0, it = b.width, ct = b.height, et = !0, rn;
        !G && a.shiftKey && (G = I && q ? I / q : 1), this.limited && (Ge = m.minLeft, Be = m.minTop, it = Ge + Math.min(b.width, u.width, u.left + u.width), ct = Be + Math.min(b.height, u.height, u.top + u.height));
        var It = w[Object.keys(w)[0]], K = {
          x: It.endX - It.startX,
          y: It.endY - It.startY
        }, Ue = function(St) {
          switch (St) {
            case ce:
              Ie + K.x > it && (K.x = it - Ie);
              break;
            case le:
              B + K.x < Ge && (K.x = Ge - B);
              break;
            case ye:
              R + K.y < Be && (K.y = Be - R);
              break;
            case ne:
              Re + K.y > ct && (K.y = ct - Re);
              break;
          }
        };
        switch (A) {
          case ee:
            B += K.x, R += K.y;
            break;
          case ce:
            if (K.x >= 0 && (Ie >= it || G && (R <= Be || Re >= ct))) {
              et = !1;
              break;
            }
            Ue(ce), I += K.x, I < 0 && (A = le, I = -I, B -= I), G && (q = I / G, R += (m.height - q) / 2);
            break;
          case ye:
            if (K.y <= 0 && (R <= Be || G && (B <= Ge || Ie >= it))) {
              et = !1;
              break;
            }
            Ue(ye), q -= K.y, R += K.y, q < 0 && (A = ne, q = -q, R -= q), G && (I = q * G, B += (m.width - I) / 2);
            break;
          case le:
            if (K.x <= 0 && (B <= Ge || G && (R <= Be || Re >= ct))) {
              et = !1;
              break;
            }
            Ue(le), I -= K.x, B += K.x, I < 0 && (A = ce, I = -I, B -= I), G && (q = I / G, R += (m.height - q) / 2);
            break;
          case ne:
            if (K.y >= 0 && (Re >= ct || G && (B <= Ge || Ie >= it))) {
              et = !1;
              break;
            }
            Ue(ne), q += K.y, q < 0 && (A = ye, q = -q, R -= q), G && (I = q * G, B += (m.width - I) / 2);
            break;
          case Ne:
            if (G) {
              if (K.y <= 0 && (R <= Be || Ie >= it)) {
                et = !1;
                break;
              }
              Ue(ye), q -= K.y, R += K.y, I = q * G;
            } else
              Ue(ye), Ue(ce), K.x >= 0 ? Ie < it ? I += K.x : K.y <= 0 && R <= Be && (et = !1) : I += K.x, K.y <= 0 ? R > Be && (q -= K.y, R += K.y) : (q -= K.y, R += K.y);
            I < 0 && q < 0 ? (A = mt, q = -q, I = -I, R -= q, B -= I) : I < 0 ? (A = rt, I = -I, B -= I) : q < 0 && (A = ft, q = -q, R -= q);
            break;
          case rt:
            if (G) {
              if (K.y <= 0 && (R <= Be || B <= Ge)) {
                et = !1;
                break;
              }
              Ue(ye), q -= K.y, R += K.y, I = q * G, B += m.width - I;
            } else
              Ue(ye), Ue(le), K.x <= 0 ? B > Ge ? (I -= K.x, B += K.x) : K.y <= 0 && R <= Be && (et = !1) : (I -= K.x, B += K.x), K.y <= 0 ? R > Be && (q -= K.y, R += K.y) : (q -= K.y, R += K.y);
            I < 0 && q < 0 ? (A = ft, q = -q, I = -I, R -= q, B -= I) : I < 0 ? (A = Ne, I = -I, B -= I) : q < 0 && (A = mt, q = -q, R -= q);
            break;
          case mt:
            if (G) {
              if (K.x <= 0 && (B <= Ge || Re >= ct)) {
                et = !1;
                break;
              }
              Ue(le), I -= K.x, B += K.x, q = I / G;
            } else
              Ue(ne), Ue(le), K.x <= 0 ? B > Ge ? (I -= K.x, B += K.x) : K.y >= 0 && Re >= ct && (et = !1) : (I -= K.x, B += K.x), K.y >= 0 ? Re < ct && (q += K.y) : q += K.y;
            I < 0 && q < 0 ? (A = Ne, q = -q, I = -I, R -= q, B -= I) : I < 0 ? (A = ft, I = -I, B -= I) : q < 0 && (A = rt, q = -q, R -= q);
            break;
          case ft:
            if (G) {
              if (K.x >= 0 && (Ie >= it || Re >= ct)) {
                et = !1;
                break;
              }
              Ue(ce), I += K.x, q = I / G;
            } else
              Ue(ne), Ue(ce), K.x >= 0 ? Ie < it ? I += K.x : K.y >= 0 && Re >= ct && (et = !1) : I += K.x, K.y >= 0 ? Re < ct && (q += K.y) : q += K.y;
            I < 0 && q < 0 ? (A = rt, q = -q, I = -I, R -= q, B -= I) : I < 0 ? (A = mt, I = -I, B -= I) : q < 0 && (A = Ne, q = -q, R -= q);
            break;
          case ge:
            this.move(K.x, K.y), et = !1;
            break;
          case De:
            this.zoom(Za(w), a), et = !1;
            break;
          case te:
            if (!K.x || !K.y) {
              et = !1;
              break;
            }
            rn = li(this.cropper), B = It.startX - rn.left, R = It.startY - rn.top, I = m.minWidth, q = m.minHeight, K.x > 0 ? A = K.y > 0 ? ft : Ne : K.x < 0 && (B -= I, A = K.y > 0 ? mt : rt), K.y < 0 && (R -= q), this.cropped || (nn(this.cropBox, xe), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
            break;
        }
        et && (m.width = I, m.height = q, m.left = B, m.top = R, this.action = A, this.renderCropBox()), Ze(w, function(at) {
          at.startX = at.endX, at.startY = at.endY;
        });
      }
    }, ao = {
      // Show the crop box manually
      crop: function() {
        return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && lt(this.dragBox, gt), nn(this.cropBox, xe), this.setCropBoxData(this.initialCropBoxData)), this;
      },
      // Reset the image and crop box to their initial states
      reset: function() {
        return this.ready && !this.disabled && (this.imageData = Ye({}, this.initialImageData), this.canvasData = Ye({}, this.initialCanvasData), this.cropBoxData = Ye({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
      },
      // Clear the crop box
      clear: function() {
        return this.cropped && !this.disabled && (Ye(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), nn(this.dragBox, gt), lt(this.cropBox, xe)), this;
      },
      /**
       * Replace the image's src and rebuild the cropper
       * @param {string} url - The new URL.
       * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
       * @returns {Cropper} this
       */
      replace: function(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return !this.disabled && a && (this.isImg && (this.element.src = a), l ? (this.url = a, this.image.src = a, this.ready && (this.viewBoxImage.src = a, Ze(this.previews, function(u) {
          u.getElementsByTagName("img")[0].src = a;
        }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(a))), this;
      },
      // Enable (unfreeze) the cropper
      enable: function() {
        return this.ready && this.disabled && (this.disabled = !1, nn(this.cropper, $e)), this;
      },
      // Disable (freeze) the cropper
      disable: function() {
        return this.ready && !this.disabled && (this.disabled = !0, lt(this.cropper, $e)), this;
      },
      /**
       * Destroy the cropper and remove the instance from the image
       * @returns {Cropper} this
       */
      destroy: function() {
        var a = this.element;
        return a[oe] ? (a[oe] = void 0, this.isImg && this.replaced && (a.src = this.originalUrl), this.uncreate(), this) : this;
      },
      /**
       * Move the canvas with relative offsets
       * @param {number} offsetX - The relative offset distance on the x-axis.
       * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
       * @returns {Cropper} this
       */
      move: function(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, u = this.canvasData, b = u.left, m = u.top;
        return this.moveTo(gr(a) ? a : b + Number(a), gr(l) ? l : m + Number(l));
      },
      /**
       * Move the canvas to an absolute point
       * @param {number} x - The x-axis coordinate.
       * @param {number} [y=x] - The y-axis coordinate.
       * @returns {Cropper} this
       */
      moveTo: function(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, u = this.canvasData, b = !1;
        return a = Number(a), l = Number(l), this.ready && !this.disabled && this.options.movable && (Ee(a) && (u.left = a, b = !0), Ee(l) && (u.top = l, b = !0), b && this.renderCanvas(!0)), this;
      },
      /**
       * Zoom the canvas with a relative ratio
       * @param {number} ratio - The target ratio.
       * @param {Event} _originalEvent - The original event if any.
       * @returns {Cropper} this
       */
      zoom: function(a, l) {
        var u = this.canvasData;
        return a = Number(a), a < 0 ? a = 1 / (1 - a) : a = 1 + a, this.zoomTo(u.width * a / u.naturalWidth, null, l);
      },
      /**
       * Zoom the canvas to an absolute ratio
       * @param {number} ratio - The target ratio.
       * @param {Object} pivot - The zoom pivot point coordinate.
       * @param {Event} _originalEvent - The original event if any.
       * @returns {Cropper} this
       */
      zoomTo: function(a, l, u) {
        var b = this.options, m = this.canvasData, w = m.width, A = m.height, G = m.naturalWidth, B = m.naturalHeight;
        if (a = Number(a), a >= 0 && this.ready && !this.disabled && b.zoomable) {
          var R = G * a, I = B * a;
          if (er(this.element, J, {
            ratio: a,
            oldRatio: w / G,
            originalEvent: u
          }) === !1)
            return this;
          if (u) {
            var q = this.pointers, Ie = li(this.cropper), Re = q && Object.keys(q).length ? Ja(q) : {
              pageX: u.pageX,
              pageY: u.pageY
            };
            m.left -= (R - w) * ((Re.pageX - Ie.left - m.left) / w), m.top -= (I - A) * ((Re.pageY - Ie.top - m.top) / A);
          } else
            Jn(l) && Ee(l.x) && Ee(l.y) ? (m.left -= (R - w) * ((l.x - m.left) / w), m.top -= (I - A) * ((l.y - m.top) / A)) : (m.left -= (R - w) / 2, m.top -= (I - A) / 2);
          m.width = R, m.height = I, this.renderCanvas(!0);
        }
        return this;
      },
      /**
       * Rotate the canvas with a relative degree
       * @param {number} degree - The rotate degree.
       * @returns {Cropper} this
       */
      rotate: function(a) {
        return this.rotateTo((this.imageData.rotate || 0) + Number(a));
      },
      /**
       * Rotate the canvas to an absolute degree
       * @param {number} degree - The rotate degree.
       * @returns {Cropper} this
       */
      rotateTo: function(a) {
        return a = Number(a), Ee(a) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = a % 360, this.renderCanvas(!0, !0)), this;
      },
      /**
       * Scale the image on the x-axis.
       * @param {number} scaleX - The scale ratio on the x-axis.
       * @returns {Cropper} this
       */
      scaleX: function(a) {
        var l = this.imageData.scaleY;
        return this.scale(a, Ee(l) ? l : 1);
      },
      /**
       * Scale the image on the y-axis.
       * @param {number} scaleY - The scale ratio on the y-axis.
       * @returns {Cropper} this
       */
      scaleY: function(a) {
        var l = this.imageData.scaleX;
        return this.scale(Ee(l) ? l : 1, a);
      },
      /**
       * Scale the image
       * @param {number} scaleX - The scale ratio on the x-axis.
       * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
       * @returns {Cropper} this
       */
      scale: function(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a, u = this.imageData, b = !1;
        return a = Number(a), l = Number(l), this.ready && !this.disabled && this.options.scalable && (Ee(a) && (u.scaleX = a, b = !0), Ee(l) && (u.scaleY = l, b = !0), b && this.renderCanvas(!0, !0)), this;
      },
      /**
       * Get the cropped area position and size data (base on the original image)
       * @param {boolean} [rounded=false] - Indicate if round the data values or not.
       * @returns {Object} The result cropped data.
       */
      getData: function() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, l = this.options, u = this.imageData, b = this.canvasData, m = this.cropBoxData, w;
        if (this.ready && this.cropped) {
          w = {
            x: m.left - b.left,
            y: m.top - b.top,
            width: m.width,
            height: m.height
          };
          var A = u.width / u.naturalWidth;
          if (Ze(w, function(R, I) {
            w[I] = R / A;
          }), a) {
            var G = Math.round(w.y + w.height), B = Math.round(w.x + w.width);
            w.x = Math.round(w.x), w.y = Math.round(w.y), w.width = B - w.x, w.height = G - w.y;
          }
        } else
          w = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        return l.rotatable && (w.rotate = u.rotate || 0), l.scalable && (w.scaleX = u.scaleX || 1, w.scaleY = u.scaleY || 1), w;
      },
      /**
       * Set the cropped area position and size with new data
       * @param {Object} data - The new data.
       * @returns {Cropper} this
       */
      setData: function(a) {
        var l = this.options, u = this.imageData, b = this.canvasData, m = {};
        if (this.ready && !this.disabled && Jn(a)) {
          var w = !1;
          l.rotatable && Ee(a.rotate) && a.rotate !== u.rotate && (u.rotate = a.rotate, w = !0), l.scalable && (Ee(a.scaleX) && a.scaleX !== u.scaleX && (u.scaleX = a.scaleX, w = !0), Ee(a.scaleY) && a.scaleY !== u.scaleY && (u.scaleY = a.scaleY, w = !0)), w && this.renderCanvas(!0, !0);
          var A = u.width / u.naturalWidth;
          Ee(a.x) && (m.left = a.x * A + b.left), Ee(a.y) && (m.top = a.y * A + b.top), Ee(a.width) && (m.width = a.width * A), Ee(a.height) && (m.height = a.height * A), this.setCropBoxData(m);
        }
        return this;
      },
      /**
       * Get the container size data.
       * @returns {Object} The result container data.
       */
      getContainerData: function() {
        return this.ready ? Ye({}, this.containerData) : {};
      },
      /**
       * Get the image position and size data.
       * @returns {Object} The result image data.
       */
      getImageData: function() {
        return this.sized ? Ye({}, this.imageData) : {};
      },
      /**
       * Get the canvas position and size data.
       * @returns {Object} The result canvas data.
       */
      getCanvasData: function() {
        var a = this.canvasData, l = {};
        return this.ready && Ze(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(u) {
          l[u] = a[u];
        }), l;
      },
      /**
       * Set the canvas position and size with new data.
       * @param {Object} data - The new canvas data.
       * @returns {Cropper} this
       */
      setCanvasData: function(a) {
        var l = this.canvasData, u = l.aspectRatio;
        return this.ready && !this.disabled && Jn(a) && (Ee(a.left) && (l.left = a.left), Ee(a.top) && (l.top = a.top), Ee(a.width) ? (l.width = a.width, l.height = a.width / u) : Ee(a.height) && (l.height = a.height, l.width = a.height * u), this.renderCanvas(!0)), this;
      },
      /**
       * Get the crop box position and size data.
       * @returns {Object} The result crop box data.
       */
      getCropBoxData: function() {
        var a = this.cropBoxData, l;
        return this.ready && this.cropped && (l = {
          left: a.left,
          top: a.top,
          width: a.width,
          height: a.height
        }), l || {};
      },
      /**
       * Set the crop box position and size with new data.
       * @param {Object} data - The new crop box data.
       * @returns {Cropper} this
       */
      setCropBoxData: function(a) {
        var l = this.cropBoxData, u = this.options.aspectRatio, b, m;
        return this.ready && this.cropped && !this.disabled && Jn(a) && (Ee(a.left) && (l.left = a.left), Ee(a.top) && (l.top = a.top), Ee(a.width) && a.width !== l.width && (b = !0, l.width = a.width), Ee(a.height) && a.height !== l.height && (m = !0, l.height = a.height), u && (b ? l.height = l.width / u : m && (l.width = l.height * u)), this.renderCropBox()), this;
      },
      /**
       * Get a canvas drawn the cropped image.
       * @param {Object} [options={}] - The config options.
       * @returns {HTMLCanvasElement} - The result canvas.
       */
      getCroppedCanvas: function() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!this.ready || !window.HTMLCanvasElement)
          return null;
        var l = this.canvasData, u = eo(this.image, this.imageData, l, a);
        if (!this.cropped)
          return u;
        var b = this.getData(), m = b.x, w = b.y, A = b.width, G = b.height, B = u.width / Math.floor(l.naturalWidth);
        B !== 1 && (m *= B, w *= B, A *= B, G *= B);
        var R = A / G, I = Yt({
          aspectRatio: R,
          width: a.maxWidth || 1 / 0,
          height: a.maxHeight || 1 / 0
        }), q = Yt({
          aspectRatio: R,
          width: a.minWidth || 0,
          height: a.minHeight || 0
        }, "cover"), Ie = Yt({
          aspectRatio: R,
          width: a.width || (B !== 1 ? u.width : A),
          height: a.height || (B !== 1 ? u.height : G)
        }), Re = Ie.width, Ge = Ie.height;
        Re = Math.min(I.width, Math.max(q.width, Re)), Ge = Math.min(I.height, Math.max(q.height, Ge));
        var Be = document.createElement("canvas"), it = Be.getContext("2d");
        Be.width = Qn(Re), Be.height = Qn(Ge), it.fillStyle = a.fillColor || "transparent", it.fillRect(0, 0, Re, Ge);
        var ct = a.imageSmoothingEnabled, et = ct === void 0 ? !0 : ct, rn = a.imageSmoothingQuality;
        it.imageSmoothingEnabled = et, rn && (it.imageSmoothingQuality = rn);
        var It = u.width, K = u.height, Ue = m, at = w, St, _n, $n, zn, Tn, an;
        Ue <= -A || Ue > It ? (Ue = 0, St = 0, $n = 0, Tn = 0) : Ue <= 0 ? ($n = -Ue, Ue = 0, St = Math.min(It, A + Ue), Tn = St) : Ue <= It && ($n = 0, St = Math.min(A, It - Ue), Tn = St), St <= 0 || at <= -G || at > K ? (at = 0, _n = 0, zn = 0, an = 0) : at <= 0 ? (zn = -at, at = 0, _n = Math.min(K, G + at), an = _n) : at <= K && (zn = 0, _n = Math.min(G, K - at), an = _n);
        var ke = [Ue, at, St, _n];
        if (Tn > 0 && an > 0) {
          var Fe = Re / A;
          ke.push($n * Fe, zn * Fe, Tn * Fe, an * Fe);
        }
        return it.drawImage.apply(it, [u].concat(F(ke.map(function(Pr) {
          return Math.floor(Qn(Pr));
        })))), Be;
      },
      /**
       * Change the aspect ratio of the crop box.
       * @param {number} aspectRatio - The new aspect ratio.
       * @returns {Cropper} this
       */
      setAspectRatio: function(a) {
        var l = this.options;
        return !this.disabled && !gr(a) && (l.aspectRatio = Math.max(0, a) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
      },
      /**
       * Change the drag mode.
       * @param {string} mode - The new drag mode.
       * @returns {Cropper} this
       */
      setDragMode: function(a) {
        var l = this.options, u = this.dragBox, b = this.face;
        if (this.ready && !this.disabled) {
          var m = a === qt, w = l.movable && a === Pn;
          a = m || w ? a : Tr, l.dragMode = a, mr(u, En, a), An(u, Ke, m), An(u, Zn, w), l.cropBoxMovable || (mr(b, En, a), An(b, Ke, m), An(b, Zn, w));
        }
        return this;
      }
    }, Gi = D.Cropper, yr = /* @__PURE__ */ function() {
      function g(a) {
        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ($(this, g), !a || !Gt.test(a.tagName))
          throw new Error("The first argument is required and must be an <img> or <canvas> element.");
        this.element = a, this.options = Ye({}, Lr, Jn(l) && l), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
      }
      return T(g, [{
        key: "init",
        value: function() {
          var l = this.element, u = l.tagName.toLowerCase(), b;
          if (!l[oe]) {
            if (l[oe] = this, u === "img") {
              if (this.isImg = !0, b = l.getAttribute("src") || "", this.originalUrl = b, !b)
                return;
              b = l.src;
            } else
              u === "canvas" && window.HTMLCanvasElement && (b = l.toDataURL());
            this.load(b);
          }
        }
      }, {
        key: "load",
        value: function(l) {
          var u = this;
          if (l) {
            this.url = l, this.imageData = {};
            var b = this.element, m = this.options;
            if (!m.rotatable && !m.scalable && (m.checkOrientation = !1), !m.checkOrientation || !window.ArrayBuffer) {
              this.clone();
              return;
            }
            if (Ct.test(l)) {
              Et.test(l) ? this.read(zi(l)) : this.clone();
              return;
            }
            var w = new XMLHttpRequest(), A = this.clone.bind(this);
            this.reloading = !0, this.xhr = w, w.onabort = A, w.onerror = A, w.ontimeout = A, w.onprogress = function() {
              w.getResponseHeader("content-type") !== ve && w.abort();
            }, w.onload = function() {
              u.read(w.response);
            }, w.onloadend = function() {
              u.reloading = !1, u.xhr = null;
            }, m.checkCrossOrigin && Pi(l) && b.crossOrigin && (l = Fi(l)), w.open("GET", l, !0), w.responseType = "arraybuffer", w.withCredentials = b.crossOrigin === "use-credentials", w.send();
          }
        }
      }, {
        key: "read",
        value: function(l) {
          var u = this.options, b = this.imageData, m = no(l), w = 0, A = 1, G = 1;
          if (m > 1) {
            this.url = to(l, ve);
            var B = ro(m);
            w = B.rotate, A = B.scaleX, G = B.scaleY;
          }
          u.rotatable && (b.rotate = w), u.scalable && (b.scaleX = A, b.scaleY = G), this.clone();
        }
      }, {
        key: "clone",
        value: function() {
          var l = this.element, u = this.url, b = l.crossOrigin, m = u;
          this.options.checkCrossOrigin && Pi(u) && (b || (b = "anonymous"), m = Fi(u)), this.crossOrigin = b, this.crossOriginUrl = m;
          var w = document.createElement("img");
          b && (w.crossOrigin = b), w.src = m || u, w.alt = l.alt || "The image to crop", this.image = w, w.onload = this.start.bind(this), w.onerror = this.stop.bind(this), lt(w, Cn), l.parentNode.insertBefore(w, l.nextSibling);
        }
      }, {
        key: "start",
        value: function() {
          var l = this, u = this.image;
          u.onload = null, u.onerror = null, this.sizing = !0;
          var b = D.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(D.navigator.userAgent), m = function(B, R) {
            Ye(l.imageData, {
              naturalWidth: B,
              naturalHeight: R,
              aspectRatio: B / R
            }), l.initialImageData = Ye({}, l.imageData), l.sizing = !1, l.sized = !0, l.build();
          };
          if (u.naturalWidth && !b) {
            m(u.naturalWidth, u.naturalHeight);
            return;
          }
          var w = document.createElement("img"), A = document.body || document.documentElement;
          this.sizingImage = w, w.onload = function() {
            m(w.width, w.height), b || A.removeChild(w);
          }, w.src = u.src, b || (w.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", A.appendChild(w));
        }
      }, {
        key: "stop",
        value: function() {
          var l = this.image;
          l.onload = null, l.onerror = null, l.parentNode.removeChild(l), this.image = null;
        }
      }, {
        key: "build",
        value: function() {
          if (!(!this.sized || this.ready)) {
            var l = this.element, u = this.options, b = this.image, m = l.parentNode, w = document.createElement("div");
            w.innerHTML = ii;
            var A = w.querySelector(".".concat(oe, "-container")), G = A.querySelector(".".concat(oe, "-canvas")), B = A.querySelector(".".concat(oe, "-drag-box")), R = A.querySelector(".".concat(oe, "-crop-box")), I = R.querySelector(".".concat(oe, "-face"));
            this.container = m, this.cropper = A, this.canvas = G, this.dragBox = B, this.cropBox = R, this.viewBox = A.querySelector(".".concat(oe, "-view-box")), this.face = I, G.appendChild(b), lt(l, xe), m.insertBefore(A, l.nextSibling), nn(b, Cn), this.initPreview(), this.bind(), u.initialAspectRatio = Math.max(0, u.initialAspectRatio) || NaN, u.aspectRatio = Math.max(0, u.aspectRatio) || NaN, u.viewMode = Math.max(0, Math.min(3, Math.round(u.viewMode))) || 0, lt(R, xe), u.guides || lt(R.getElementsByClassName("".concat(oe, "-dashed")), xe), u.center || lt(R.getElementsByClassName("".concat(oe, "-center")), xe), u.background && lt(A, "".concat(oe, "-bg")), u.highlight || lt(I, Ln), u.cropBoxMovable && (lt(I, Zn), mr(I, En, ee)), u.cropBoxResizable || (lt(R.getElementsByClassName("".concat(oe, "-line")), xe), lt(R.getElementsByClassName("".concat(oe, "-point")), xe)), this.render(), this.ready = !0, this.setDragMode(u.dragMode), u.autoCrop && this.crop(), this.setData(u.data), kt(u.ready) && Ut(l, Ir, u.ready, {
              once: !0
            }), er(l, Ir);
          }
        }
      }, {
        key: "unbuild",
        value: function() {
          if (this.ready) {
            this.ready = !1, this.unbind(), this.resetPreview();
            var l = this.cropper.parentNode;
            l && l.removeChild(this.cropper), nn(this.element, xe);
          }
        }
      }, {
        key: "uncreate",
        value: function() {
          this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
        }
        /**
         * Get the no conflict cropper class.
         * @returns {Cropper} The cropper class.
         */
      }], [{
        key: "noConflict",
        value: function() {
          return window.Cropper = Gi, g;
        }
        /**
         * Change the default options.
         * @param {Object} options - The new default options.
         */
      }, {
        key: "setDefaults",
        value: function(l) {
          Ye(Lr, Jn(l) && l);
        }
      }]), g;
    }();
    return Ye(yr.prototype, io, Wi, Hi, qi, fi, ao), yr;
  });
})(Jl);
var D_ = Jl.exports;
Object.defineProperty(Zl, "__esModule", {
  value: !0
});
var Rl = Rv, A_ = D_, T_ = R_(A_);
function R_(s) {
  return s && s.__esModule ? s : { default: s };
}
function I_(s, p) {
  var i = {};
  for (var h in s)
    p.indexOf(h) >= 0 || Object.prototype.hasOwnProperty.call(s, h) && (i[h] = s[h]);
  return i;
}
var M_ = typeof window > "u" ? [String, Array] : [String, Array, Element, NodeList], L_ = Zl.default = {
  render: function() {
    var p = this.crossorigin || void 0;
    return (0, Rl.h)("div", { style: this.containerStyle }, [(0, Rl.h)("img", {
      ref: "img",
      src: this.src,
      alt: this.alt || "image",
      style: [{ "max-width": "100%" }, this.imgStyle],
      crossorigin: p
    })]);
  },
  props: {
    containerStyle: Object,
    src: {
      type: String,
      default: ""
    },
    alt: String,
    imgStyle: Object,
    viewMode: Number,
    dragMode: String,
    initialAspectRatio: Number,
    aspectRatio: Number,
    data: Object,
    preview: M_,
    responsive: {
      type: Boolean,
      default: !0
    },
    restore: {
      type: Boolean,
      default: !0
    },
    checkCrossOrigin: {
      type: Boolean,
      default: !0
    },
    checkOrientation: {
      type: Boolean,
      default: !0
    },
    crossorigin: {
      type: String
    },
    modal: {
      type: Boolean,
      default: !0
    },
    guides: {
      type: Boolean,
      default: !0
    },
    center: {
      type: Boolean,
      default: !0
    },
    highlight: {
      type: Boolean,
      default: !0
    },
    background: {
      type: Boolean,
      default: !0
    },
    autoCrop: {
      type: Boolean,
      default: !0
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: !0
    },
    rotatable: {
      type: Boolean,
      default: !0
    },
    scalable: {
      type: Boolean,
      default: !0
    },
    zoomable: {
      type: Boolean,
      default: !0
    },
    zoomOnTouch: {
      type: Boolean,
      default: !0
    },
    zoomOnWheel: {
      type: Boolean,
      default: !0
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: !0
    },
    cropBoxResizable: {
      type: Boolean,
      default: !0
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: !0
    },
    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,
    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted: function() {
    var p = this.$options.props;
    p.containerStyle, p.src, p.alt, p.imgStyle;
    var i = I_(p, ["containerStyle", "src", "alt", "imgStyle"]), h = {};
    for (var k in i)
      this[k] !== void 0 && (h[k] = this[k]);
    this.cropper = new T_.default(this.$refs.img, h);
  },
  methods: {
    reset: function() {
      return this.cropper.reset();
    },
    clear: function() {
      return this.cropper.clear();
    },
    initCrop: function() {
      return this.cropper.crop();
    },
    replace: function(p) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return this.cropper.replace(p, i);
    },
    enable: function() {
      return this.cropper.enable();
    },
    disable: function() {
      return this.cropper.disable();
    },
    destroy: function() {
      return this.cropper.destroy();
    },
    move: function(p, i) {
      return this.cropper.move(p, i);
    },
    moveTo: function(p) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p;
      return this.cropper.moveTo(p, i);
    },
    relativeZoom: function(p, i) {
      return this.cropper.zoom(p, i);
    },
    zoomTo: function(p, i) {
      return this.cropper.zoomTo(p, i);
    },
    rotate: function(p) {
      return this.cropper.rotate(p);
    },
    rotateTo: function(p) {
      return this.cropper.rotateTo(p);
    },
    scaleX: function(p) {
      return this.cropper.scaleX(p);
    },
    scaleY: function(p) {
      return this.cropper.scaleY(p);
    },
    scale: function(p) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p;
      return this.cropper.scale(p, i);
    },
    getData: function() {
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return this.cropper.getData(p);
    },
    setData: function(p) {
      return this.cropper.setData(p);
    },
    getContainerData: function() {
      return this.cropper.getContainerData();
    },
    getImageData: function() {
      return this.cropper.getImageData();
    },
    getCanvasData: function() {
      return this.cropper.getCanvasData();
    },
    setCanvasData: function(p) {
      return this.cropper.setCanvasData(p);
    },
    getCropBoxData: function() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData: function(p) {
      return this.cropper.setCropBoxData(p);
    },
    getCroppedCanvas: function() {
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.cropper.getCroppedCanvas(p);
    },
    setAspectRatio: function(p) {
      return this.cropper.setAspectRatio(p);
    },
    setDragMode: function(p) {
      return this.cropper.setDragMode(p);
    }
  }
};
const N_ = /* @__PURE__ */ X("div", { class: "flex-grow" }, null, -1), P_ = {
  __name: "CropModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, h = we(), k = we(), $ = At(() => ({
      height: "100%",
      minHeight: "60vh"
    }));
    function U() {
      h.value?.getCroppedCanvas().toBlob((F) => {
        F && (k.value = new File(
          [F],
          H(i.modal.payload.name, "-" + Date.now()),
          {
            type: i.modal.payload.mime
          }
        ), T(k.value));
      });
    }
    function T(F) {
      p.closeModals(), p.upload([F]);
    }
    function H(F, z) {
      var V = F.lastIndexOf(".");
      return V == -1 ? F + z : F.substring(0, V) + z + F.substring(V);
    }
    return (F, z) => {
      const V = za("tooltip");
      return L(), Oe(Ar, { modal: s.modal }, {
        header: _e(() => [
          X("div", null, ie(F.__("Crop image")), 1),
          N_,
          wt(ue(Ft, {
            class: "text-green-500",
            type: "check",
            onClick: Te(U, ["prevent"])
          }, null, 512), [
            [V, F.__("Confirm crop")]
          ])
        ]),
        default: _e(() => [
          ue(Y(L_), {
            ref_key: "cropper",
            ref: h,
            containerStyle: $.value,
            src: s.modal.payload.url,
            alt: s.modal.payload.name
          }, null, 8, ["containerStyle", "src", "alt"])
        ]),
        _: 1
      }, 8, ["modal"]);
    };
  }
}, F_ = { class: "p-6" }, B_ = /* @__PURE__ */ X("div", { class: "flex-grow" }, null, -1), U_ = {
  __name: "BrowserSelectedModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = s, { selection: h } = ql(p);
    function k() {
      p.closeModal(i.modal.id);
    }
    function $() {
      p.clearSelection(), k();
    }
    function U() {
      p.confirmSelection(), k();
    }
    return ei(
      () => p.selection,
      (T, H) => {
        Jr.isEmpty(T) && k();
      }
    ), (T, H) => {
      const F = za("tooltip");
      return L(), Oe(Ar, {
        full: !0,
        modal: s.modal
      }, {
        header: _e(() => [
          X("div", null, ie(T.__("Selected Files")), 1),
          B_,
          wt(ue(Ft, {
            type: "x",
            onClick: Te($, ["prevent"])
          }, null, 512), [
            [F, T.__("Clear selected files")]
          ]),
          Y(p).selecting ? wt((L(), Oe(Ft, {
            key: 0,
            class: "text-green-500",
            type: "check",
            onClick: Te(U, ["prevent"])
          }, null, 512)), [
            [F, T.__("Confirm selection")]
          ]) : pe("", !0)
        ]),
        default: _e(() => [
          X("div", F_, [
            ue(Bl, {
              name: "list",
              tag: "div",
              class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            }, {
              default: _e(() => [
                (L(!0), Z(je, null, dr(Y(h), (z) => (L(), Oe(Vl, {
                  key: z.id,
                  ref_for: !0,
                  ref: "file_" + z.id,
                  file: z,
                  "data-key": z.id
                }, null, 8, ["file", "data-key"]))), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["modal"]);
    };
  }
}, $_ = {}, z_ = { class: "absolute inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg w-full h-full border-2 border-primary-500" }, W_ = /* @__PURE__ */ X("span", { class: "pointer-events-none" }, " Drop your files here ", -1);
function H_(s, p) {
  const i = gn("Icon");
  return L(), Z("div", z_, [
    ue(i, {
      type: "upload",
      class: "pointer-events-none text-primary-500 animate-bounce mr-4",
      width: "48",
      height: "48"
    }),
    W_
  ]);
}
const q_ = /* @__PURE__ */ _s($_, [["render", H_]]);
async function G_(s) {
  const p = (z) => z.isDirectory, i = (z) => z.isFile, h = (z, V = "") => new Promise((ae, j) => {
    i(z) && z.file(
      (d) => ae(new File([d], V + d.name, { type: d.type })),
      (d) => j(d)
    );
  }), k = (z, V) => new Promise((ae, j) => {
    z.readEntries(
      async (d) => {
        let S = [];
        for (const D of d) {
          const E = await U(D, V);
          E !== void 0 && (S = S.concat(E));
        }
        ae(S);
      },
      (d) => j(d)
    );
  }), $ = async (z, V) => {
    if (!p(z))
      return [];
    const ae = z.createReader(), j = V + z.name + "/";
    let d = [], S = [];
    do
      S = await k(ae, j), d = d.concat(S);
    while (S.length > 0);
    return d;
  }, U = async (z, V = "") => {
    if (z) {
      if (z.isFile)
        return [await h(z, V)];
      if (z.isDirectory)
        return await $(z, V);
    }
  };
  let T = [];
  const H = [], F = s.length;
  for (let z = 0; z < F; z++)
    H.push(s[z].webkitGetAsEntry());
  for (const z of H) {
    const V = await U(z);
    V !== void 0 && (T = T.concat(V));
  }
  return T;
}
function X_(s) {
  return {
    id: s.name,
    name: s.name,
    extension: s.type.split("/")[1],
    mime: s.type,
    path: s.name,
    type: s.type.split("/")[0],
    url: URL.createObjectURL(s),
    size: Number(s.size.toString()),
    lastModified: Number(new Date(s.lastModified).toString())
  };
}
const Y_ = { class: "p-6 grid grid-cols-2 md:grid-cols-4 gap-4" }, j_ = {
  class: "flex-grow flex justify-center items-center flex-col p-4",
  style: { height: "160px" }
}, K_ = { class: "mt-6 bg-gray-100 dark:bg-gray-700 shadow border-2 border-gray-100 dark:border-gray-700 rounded-lg h-6 w-[6rem]" }, V_ = { class: "w-full h-8 flex-shrink-0 text-center text-xs border-t border-gray-200 dark:border-gray-700 flex items-center justify-center" }, Z_ = { class: "px-2 truncate" }, J_ = /* @__PURE__ */ ri({
  __name: "QueueModal",
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const p = Tt(), i = At(
      () => p.queue.map((h) => (h.entity = X_(h.file), h))
    );
    return (h, k) => {
      const $ = gn("Icon");
      return L(), Oe(Ar, {
        full: !0,
        disableClose: !0,
        modal: s.modal
      }, {
        header: _e(() => [
          X("div", null, ie(h.__("Queue")), 1)
        ]),
        default: _e(() => [
          X("div", Y_, [
            (L(!0), Z(je, null, dr(i.value, (U) => (L(), Z("div", {
              key: U.id,
              ref_for: !0,
              ref: "card",
              class: "w-full h-full relative flex flex-col justify-center rounded-lg overflow-hidden cursor-pointer dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700"
            }, [
              X("div", j_, [
                U.status === null ? (L(), Oe($, {
                  key: 0,
                  class: "w-10 h-10 animate-bounce text-primary-500",
                  type: "upload",
                  solid: !0
                })) : U.status === !1 ? (L(), Oe($, {
                  key: 1,
                  class: "w-10 h-10 text-red-500",
                  type: "exclamation-circle",
                  solid: !0
                })) : U.status === !0 ? (L(), Oe($, {
                  key: 2,
                  class: "w-10 h-10 text-green-500",
                  type: "check-circle",
                  solid: !0
                })) : pe("", !0),
                X("div", K_, [
                  X("div", {
                    class: pn(["block w-full h-full rounded-lg", {
                      "bg-primary-500": U.status === null,
                      "bg-red-500": U.status === !1,
                      "bg-green-500": U.status === !0
                    }]),
                    style: Hv({
                      width: `${U.ratio}%`,
                      transition: "all .3s linear"
                    })
                  }, null, 6)
                ])
              ]),
              X("div", V_, [
                X("p", Z_, ie(Y(bs)(U.entity?.name || "", 25)), 1)
              ])
            ], 512))), 128))
          ])
        ]),
        _: 1
      }, 8, ["modal"]);
    };
  }
}), Q_ = {
  key: 0,
  class: "absolute rounded-lg inset-0 bg-white/50 dark:bg-gray-800/50 flex items-center justify-center flex-grow z-50"
}, ey = { class: "flex-grow px-3 my-2 md:py-4 md:px-6 space-y-4" }, ty = /* @__PURE__ */ ri({
  __name: "Browser",
  props: {
    selecting: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !0 }
  },
  emits: ["confirmSelection"],
  setup(s, { emit: p }) {
    const i = Tt(), { selectionConfirms: h } = ql(i), k = s, $ = p;
    Fl(() => {
      i.init(), i.selecting = k.selecting, i.multiple = k.multiple;
    }), Kl("Escape", (V) => {
      i.modals.length > 0 && !i.isProcessing && (V.preventDefault(), V.stopPropagation(), i.modals.pop());
    }), ei(h, () => {
      $("confirmSelection", i.selection), i.clearSelection(), i.closeModals();
    });
    const U = we(!1), T = we(), H = async (V) => {
      try {
        T.value = V.dataTransfer ? await G_(V.dataTransfer?.items) : [];
      } catch {
        U.value = !1;
      }
    }, F = (V) => T.value = V.target.files ?? [], z = () => {
      U.value = !1, T.value?.length && (T.value instanceof FileList && i.upload(Array.from(T.value)), T.value instanceof Array && i.upload(T.value));
    };
    return ei(T, () => z()), (V, ae) => {
      const j = gn("Loader");
      return L(), Z("div", {
        class: pn(["relative h-full nova-file-manager overflow-y-auto scrollbar-hide", {
          "pointer-events-none": Y(i).isProcessing
        }]),
        onDragover: ae[0] || (ae[0] = Te((d) => U.value = !0, ["prevent", "stop"])),
        onDragleave: ae[1] || (ae[1] = Te((d) => U.value = !1, ["prevent", "stop"])),
        onDrop: Te(H, ["prevent", "stop"])
      }, [
        ue(Ua, null, {
          default: _e(() => [
            Y(i).loading && Y(i).modals.length === 0 ? (L(), Z("div", Q_, [
              ue(j)
            ])) : pe("", !0)
          ]),
          _: 1
        }),
        ue(Ua, null, {
          default: _e(() => [
            U.value ? (L(), Oe(q_, { key: 0 })) : pe("", !0)
          ]),
          _: 1
        }),
        ue($m, { onChangeFile: F }),
        X("div", ey, [
          Y(i).data?.breadcrumbs?.length > 0 ? (L(), Oe(u_, { key: 0 })) : pe("", !0),
          ue(f0),
          Y(i).data?.pagination?.last_page > 1 ? (L(), Oe(Gm, { key: 1 })) : pe("", !0)
        ]),
        ue(Bl, { name: "list" }, {
          default: _e(() => [
            (L(!0), Z(je, null, dr(Y(i).modals, (d) => (L(), Z(je, {
              key: d.id
            }, [
              d.name === Y(nt).CREATE_FOLDER ? (L(), Oe(p_, {
                key: 0,
                modal: d
              }, null, 8, ["modal"])) : d.name === Y(nt).DETAIL ? (L(), Oe(Q0, {
                key: 1,
                modal: d
              }, null, 8, ["modal"])) : d.name === Y(nt).RENAME ? (L(), Oe(x_, {
                key: 2,
                modal: d
              }, null, 8, ["modal"])) : d.name === Y(nt).CROP ? (L(), Oe(P_, {
                key: 3,
                modal: d
              }, null, 8, ["modal"])) : d.name === Y(nt).DELETE ? (L(), Oe(O_, {
                key: 4,
                modal: d
              }, null, 8, ["modal"])) : d.name === Y(nt).SELECTED ? (L(), Oe(U_, {
                key: 5,
                modal: d
              }, null, 8, ["modal"])) : d.name === Y(nt).QUEUE ? (L(), Oe(J_, {
                key: 6,
                modal: d
              }, null, 8, ["modal"])) : pe("", !0)
            ], 64))), 128))
          ]),
          _: 1
        })
      ], 34);
    };
  }
}), ny = { class: "nova-file-manager" }, ry = {
  key: 0,
  class: "fixed bg-gray-800/10 backdrop-blur inset-0 z-50 p-2 overflow h-full max-h-full flex justify-center"
}, iy = { class: "relative w-full bg-white dark:bg-gray-800 rounded-lg shadow h-full max-w-5xl max-h-full" }, uy = {
  __name: "BrowserModal",
  props: {
    state: {
      type: Boolean,
      required: !0
    },
    selecting: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:state", "confirmSelection"],
  setup(s, { emit: p }) {
    const i = Tt(), h = p;
    Kl("Escape", (U) => {
      i.modals.length || (U.preventDefault(), U.stopPropagation(), $());
    });
    function k(U) {
      $(), h("confirmSelection", U);
    }
    function $() {
      h("update:state", !1);
    }
    return (U, T) => (L(), Z("div", ny, [
      ue(Ua, null, {
        default: _e(() => [
          s.state ? (L(), Z("div", ry, [
            X("div", {
              class: "absolute inset-0",
              onClick: Te($, ["prevent"])
            }),
            X("div", iy, [
              ue(ty, {
                selecting: s.selecting,
                multiple: s.multiple,
                onConfirmSelection: k
              }, null, 8, ["selecting", "multiple"])
            ])
          ])) : pe("", !0)
        ]),
        _: 1
      })
    ]));
  }
};
export {
  ty as Browser,
  uy as BrowserModal,
  sy as createPinia
};
