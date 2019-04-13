/**
 * Get non-builtin properties on the `window` object
 */
function getNonBuiltinProps() {
  var nonBuiltinObjects = {};
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  var builtinPropKeys = Object.keys(iframe.contentWindow);

  Object.keys(window).forEach(function (key) {
    if (!builtinPropKeys.includes(key)) {
      nonBuiltinObjects[key] = window[key];
    }
  });

  document.body.removeChild(iframe);

  return nonBuiltinObjects;
}

export default getNonBuiltinProps;
