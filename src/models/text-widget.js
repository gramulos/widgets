import assert from 'assert'

const TextWidgetItem = {
  create: function (args) {
    return Object.create(TextWidgetItem).init(args)
  },

  init: function (args) {
    args = args || {}
    assert.ok(args.text, 'Widget must have text')

    this.text = args.text

    return this
  }
}

export default TextWidgetItem
