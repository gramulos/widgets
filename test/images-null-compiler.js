// Prevent Mocha from compiling class
function noop () {
  return null
}

require.extensions['.jpg'] = noop
require.extensions['.png'] = noop
