/**
 * Get non-builtin properties on the `window` object
 */
function getNonBuiltinProps() {
  const nonBuiltinObjects = {};
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const builtinPropKeys = Object.keys(iframe.contentWindow);

  Object.keys(window).forEach(function (key) {
    if (!builtinPropKeys.includes(key)) {
      nonBuiltinObjects[key] = window[key];
    }
  });

  const nonBuiltinPropKeys = Object.keys(nonBuiltinObjects);
  let tempIframeKey;
  let thisFnKey;
  if (
    (tempIframeKey = nonBuiltinPropKeys.find(
      key => /^\d+$/.test(key) && iframe.contentWindow === window[key]
    ))
  ) {
    delete nonBuiltinObjects[tempIframeKey];
  }

  if (
    (thisFnKey = nonBuiltinPropKeys.find(
      key =>
        key === getNonBuiltinProps.name && window[key] === getNonBuiltinProps
    ))
  ) {
    delete nonBuiltinObjects[thisFnKey];
  }

  document.body.removeChild(iframe);

  return nonBuiltinObjects;
}

export default getNonBuiltinProps;
