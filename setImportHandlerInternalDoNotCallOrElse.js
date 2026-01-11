/**
 * @param {string} name The module identifier.
 * @return {?} The module exports for an already loaded module or null.
 */
goog.module.getInternal_ = function(name) {
  if (!COMPILED) {
    if (name in goog.loadedModules_) {
      return goog.loadedModules_[name].exports;
    } else if (!goog.implicitNamespaces_[name]) {
      var ns = goog.getObjectByName(name, goog.LEGACY_NAMESPACE_OBJECT_);
      return ns != null ? ns : null;
    }
  }
  return null;
};

// MOE:begin_strip
/**
 * Defines dynamic import execution path for uncompiled mode.
 *
 * @param {string} name The module identifier.
 * @return {?} The module exports for an already loaded module or null.
 *
 * NOTE: In compiled code, JsCompiler will transpile this function call.
 * DO NOT OPENSOURCE
 */
goog.requireDynamic = function(name) {
  if (!COMPILED) {
    if (!goog.importHandler_ || !goog.uncompiledChunkIdHandler_) {
      throw new Error('Need to setup import handler and chunk id handler.');
    }
    return goog.importHandler_(goog.uncompiledChunkIdHandler_(name))
      .then(function() {
        var module = goog.module.getInternal_(name);
        if (module == null) {
          throw new Error('Module ' + name + ' is not loaded.');
        }
        return module;
      });
  }
  return null;
};


/**
 * Handler for dynamic import.
 * DO NOT OPENSOURCE
 */
goog.importHandler_ = null;


/**
 * Chunk ID calculator.
 * @private {?function(string)}
 * DO NOT OPENSOURCE
 */
goog.uncompiledChunkIdHandler_ = null;


/**
 * Sets import handler.
 * @param {function(string)} fn
 * DO NOT OPENSOURCE
 */
goog.setImportHandlerInternalDoNotCallOrElse = function(fn) {
  goog.importHandler_ = fn;
};


/**
 * Sets chunk ID calculator.
 * @param {function(string)} fn
 * NOTE: The chunk ID calculator is only used in uncompiled mode.
 * DO NOT OPENSOURCE
 */
goog.setUncompiledChunkIdHandlerInternalDoNotCallOrElse = function(fn) {
  goog.uncompiledChunkIdHandler_ = fn;
};


/**
 * This exists purely as a hint to JsTrimmer, so that it can convert it to
 * goog.require in certain circumstances.
 *
 * @param {string} namespace
 * DO NOT OPENSOURCE
 */
goog.maybeRequireFrameworkInternalOnlyDoNotCallOrElse = function(namespace) {};
// MOE:end_strip

/**
 * Types of modules the debug loader can load.
 * @enum {string}
 */
goog.ModuleType = {
  ES6: 'es6',
  GOOG: 'goog'
};


/**
 * @private {?{
 *   moduleName: (string|undefined),
 *   declareLegacyNamespace:boolean,
 *   preventModuleExportSealing:boolean,
 *   type: ?goog.ModuleType
 * }}
 */
goog.moduleLoaderState_ = null;


/**
 * @private
 * @return {boolean} Whether a goog.module or an es6 module is currently being
 *     initialized.
 */
goog.isInModuleLoader_ = function() {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};


/**
 * @private
 * @return {boolean} Whether a goog.module is currently being initialized.
 */
goog.isInGoogModuleLoader_ = function() {
  return !!goog.moduleLoaderState_ &&
    goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};


/**
 * @private
 * @return {boolean} Whether an es6 module is currently being initialized.
 */
goog.isInEs6ModuleLoader_ = function() {
  var inLoader = !!goog.moduleLoaderState_ &&
    goog.moduleLoaderState_.type == goog.ModuleType.ES6;

  if (inLoader) {
    return true;
  }

  var jscomp = goog.LEGACY_NAMESPACE_OBJECT_['$jscomp'];

  if (jscomp) {
    // jscomp may not have getCurrentModulePath if this is a compiled bundle
    // that has some of the runtime, but not all of it. This can happen if
    // optimizations are turned on so the unused runtime is removed but renaming
    // and Closure pass are off (so $jscomp is still named $jscomp and the
    // goog.provide/require calls still exist).
    if (typeof jscomp.getCurrentModulePath != 'function') {
      return false;
    }

    // Bundled ES6 module.
    return !!jscomp.getCurrentModulePath();
  }

 
};


/**
 * Provide the module's exports as a globally accessible object under the
 * module's declared name.  This is intended to ease migration to goog.module
 * for files that have existing usages.
 * @suppress {missingProvide}
 */
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw new Error(
      'goog.module.declareLegacyNamespace must be called from ' +
      'within a goog.module');
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw new Error(
      'goog.module must be called prior to ' +
      'goog.module.declareLegacyNamespace.');
  }
  goog.moduleLoaderState_.declareLegacyNamespace = true;
};


/**
 * Ensures that a module's exports object is not sealed after the module is
 * evaluated.
 * @suppress {missingProvide}
 */
goog.module.preventModuleExportSealing = function() {
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw new Error(
      'goog.module.preventModuleExportSealing must be called from ' +
      'within a goog.module');
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw new Error(
      'goog.module must be called prior to ' +
      'goog.module.preventModuleExportSealing.');
  }
  goog.moduleLoaderState_.preventModuleExportSealing = true;
};


/**
 * Associates an ES6 module with a Closure module ID so that is available via
 * goog.require. The associated ID  acts like a goog.module ID - it does not
 * create any global names, it is merely available via goog.require /
 * goog.module.get / goog.forwardDeclare / goog.requireType. goog.require and
 * goog.module.get will return the entire module as if it was import *'d. This
 * allows Closure files to reference ES6 modules for the sake of migration.
 *
 * @param {string} namespace
 * @suppress {missingProvide}
 */
goog.declareModuleId = function(namespace) {
  if (!COMPILED) {
    if (!goog.isInEs6ModuleLoader_()) {
      throw new Error(
        'goog.declareModuleId may only be called from ' +
        'within an ES6 module');
    }
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw new Error(
        'goog.declareModuleId may only be called once per module.');
    }
    if (namespace in goog.loadedModules_) {
      throw new Error(
        'Module with namespace "' + namespace + '" already exists.');
    }
  }
  if (goog.moduleLoaderState_) {
    // Not bundled - debug loading.
    goog.moduleLoaderState_.moduleName = namespace;
  } else {
    // Bundled - not debug loading, no module loader state.
    var jscomp = goog.LEGACY_NAMESPACE_OBJECT_['$jscomp'];
    if (!jscomp || typeof jscomp.getCurrentModulePath != 'function') {
      throw new Error(
        'Module with namespace "' + namespace +
        '" has been loaded incorrectly.');
    }
    var exports = jscomp.require(jscomp.getCurrentModulePath());
    goog.loadedModules_[namespace] = {
      exports: exports,
      type: goog.ModuleType.ES6,
      moduleId: namespace
    };
  }
};


/**
 * Marks that the current file should only be used for testing, and never for
 * live code in production.
 *
 * In the case of unit tests, the message may optionally be an exact namespace
 * for the test (e.g. 'goog.stringTest'). The linter will then ignore the extra
 * provide (if not explicitly defined in the code).
 *
 * @param {string=} opt_message Optional message to add to the error that's
 *     raised when used in production code.
 */
goog.setTestOnly = function(opt_message) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    opt_message = opt_message || '';
    throw new Error(
      'Importing test-only code into non-debug environment' +
      (opt_message ? ': ' + opt_message : '.'));
  }
};


/**
 * Forward declares a symbol. This is an indication to the compiler that the
 * symbol may be used in the source yet is not required and may not be provided
 * in compilation.
 *
 * The most common usage of forward declaration is code that takes a type as a
 * function parameter but does not need to require it. By forward declaring
 * instead of requiring, no hard dependency is made, and (if not required
 * elsewhere) the namespace may never be required and thus, not be pulled
 * into the JavaScript binary. If it is required elsewhere, it will be type
 * checked as normal.
 *
 * Before using goog.forwardDeclare, please read the documentation at
 * https://github.com/google/closure-compiler/wiki/Bad-Type-Annotation to
 * understand the options and tradeoffs when working with forward declarations.
 *
 * @param {string} name The namespace to forward declare in the form of
 *     "goog.package.part".
 * @deprecated See go/noforwarddeclaration, Use `goog.requireType` instead.
 */
goog.forwardDeclare = function(name) {};

if (!COMPILED) {
  /**
   * Check if the given name has been goog.provided. This will return false for
   * names that are available only as implicit namespaces.
   * @param {string} name name of the object to look for.
   * @return {boolean} Whether the name has been provided.
   * @private
   */
  goog.isProvided_ = function(name) {
    return (name in goog.loadedModules_) ||
      (!goog.implicitNamespaces_[name] &&
        goog.getObjectByName(name, goog.LEGACY_NAMESPACE_OBJECT_) != null);
  };

  /**
   * Namespaces implicitly defined by goog.provide. For example,
   * goog.provide('goog.events.Event') implicitly declares that 'goog' and
   * 'goog.events' must be namespaces.
   *
   * @type {!Object<string, (boolean|undefined)>}
   * @private
   */
  goog.implicitNamespaces_ = {
    'goog.module': true
  };

  // NOTE: We add goog.module as an implicit namespace as goog.module is defined
  // here and because the existing module package has not been moved yet out of
  // the goog.module namespace. This satisfies both the debug loader and
  // ahead-of-time dependency management.
}


/**
 * Returns an object based on its fully qualified external name.  The object
 * is not found if null or undefined.  If you are using a compilation pass that
 * renames property names beware that using this function will not find renamed
 * properties.
 *
 * @param {string} name The fully qualified name.
 * @param {Object=} opt_obj The object within which to look; default is
 *     |goog.global|.
 * @return {?} The value (object or primitive) or, if not found, null.
 */
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split('.');
  var cur = opt_obj || goog.global;
  for (var i = 0; i < parts.length; i++) {
    cur = cur[parts[i]];
    if (cur == null) {
      return null;
    }
  }
  return cur;
};


/**
 * Adds a dependency from a file to the files it requires.
 * @param {string} relPath The path to the js file.
 * @param {!Array<string>} provides An array of strings with
 *     the names of the objects this file provides.
 * @param {!Array<string>} requires An array of strings with
 *     the names of the objects this file requires.
 * @param {boolean|!Object<string>=} opt_loadFlags Parameters indicating
 *     how the file must be loaded.  The boolean 'true' is equivalent
 *     to {'module': 'goog'} for backwards-compatibility.  Valid properties
 *     and values include {'module': 'goog'} and {'lang': 'es6'}.
 */
goog.addDependency = function(relPath, provides, requires, opt_loadFlags) {
  if (!COMPILED && goog.DEPENDENCIES_ENABLED) {
    goog.debugLoader_.addDependency(relPath, provides, requires, opt_loadFlags);
  }
};


// NOTE(nnaze): The debug DOM loader was included in base.js as an original way
// to do "debug-mode" development.  The dependency system can sometimes be
// confusing, as can the debug DOM loader's asynchronous nature.
//
// With the DOM loader, a call to goog.require() is not blocking -- the script
// will not load until some point after the current script.  If a namespace is
// needed at runtime, it needs to be defined in a previous script, or loaded via
// require() with its registered dependencies.
//
// User-defined namespaces may need their own deps file. For a reference on
// creating a deps file, see:
// MOE:begin_strip
// Internally: http://go/deps-files and http://go/be#js_deps
// MOE:end_strip
// Externally: https://developers.google.com/closure/library/docs/depswriter
//
// Because of legacy clients, the DOM loader can't be easily removed from
// base.js.  Work was done to make it disableable or replaceable for
// different environments (DOM-less JavaScript interpreters like Rhino or V8,
// for example). See bootstrap/ for more information.


/**
 * @define {boolean} Whether to enable the debug loader.
 *
 * If enabled, a call to goog.require() will attempt to load the namespace by
 * appending a script tag to the DOM (if the namespace has been registered).
 *
 * If disabled, goog.require() will simply assert that the namespace has been
 * provided (and depend on the fact that some outside tool correctly ordered
 * the script).
 */
goog.ENABLE_DEBUG_LOADER = goog.define('goog.ENABLE_DEBUG_LOADER', false);


/**
 * @param {string} msg
 * @private
 */
goog.logToConsole_ = function(msg) {
  if (goog.global.console) {
    goog.global.console['error'](msg);
  }
};


/**
 * Implements a system for the dynamic resolution of dependencies that works in
 * parallel with the BUILD system.
 *
 * Note that all calls to goog.require will be stripped by the compiler.
 *
 * @see goog.provide
 * @param {string} namespace Namespace (as was given in goog.provide,
 *     goog.module, or goog.declareModuleId) in the form
 *     "goog.package.part".
 * @return {?} If called within a goog.module or ES6 module file, the associated
 *     namespace or module otherwise null.
 */
goog.require = function(namespace) {
  if (!COMPILED) {
    // Might need to lazy load on old IE.
    if (goog.ENABLE_DEBUG_LOADER) {
      goog.debugLoader_.requested(namespace);
    }

    // If the object already exists we do not need to do anything.
    if (goog.isProvided_(namespace)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(namespace);
      }
    } else if (goog.ENABLE_DEBUG_LOADER) {
      var moduleLoaderState = goog.moduleLoaderState_;
      goog.moduleLoaderState_ = null;
      try {
        goog.debugLoader_.load_(namespace);
      } finally {
        goog.moduleLoaderState_ = moduleLoaderState;
      }
    }

    return null;
  }
};


/**
 * Requires a symbol for its type information. This is an indication to the
 * compiler that the symbol may appear in type annotations, yet it is not
 * referenced at runtime.
 *
 * When called within a goog.module or ES6 module file, the return value may be
 * assigned to or destructured into a variable, but it may not be otherwise used
 * in code outside of a type annotation.
 *
 * Note that all calls to goog.requireType will be stripped by the compiler.
 *
 * @param {string} namespace Namespace (as was given in goog.provide,
 *     goog.module, or goog.declareModuleId) in the form
 *     "goog.package.part".
 * @return {?}
 */
goog.requireType = function(namespace) {
  // Return an empty object so that single-level destructuring of the return
  // value doesn't crash at runtime when using the debug loader. Multi-level
  // destructuring isn't supported.
  return {}
