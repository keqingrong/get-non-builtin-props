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
  const frames = Array.from(window.frames);
  nonBuiltinPropKeys
    .filter(key => /^\d+$/.test(key))
    .forEach(key => {
      if (frames.includes(window[key])) {
        delete nonBuiltinObjects[key];
      }
    });

  if (
    nonBuiltinPropKeys.find(
      key =>
        key === getNonBuiltinProps.name && getNonBuiltinProps === window[key]
    )
  ) {
    delete nonBuiltinObjects[getNonBuiltinProps.name];
  }

  document.body.removeChild(iframe);

  return nonBuiltinObjects;
}

export default getNonBuiltinProps;
