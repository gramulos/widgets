import assert from 'assert'

const SquareWidgetItem = {
  create: function (args) {
    return Object.create(SquareWidgetItem).init(args)
  },

  init: function (args) {
    args = args || {}
    assert.ok(args.counter, 'Widget must have counter')
    assert.ok(args.header, 'Widget must have header')

    this.counter = args.counter
    this.header = args.header
    this.iconBefore = args.iconBefore
    this.iconAfter = args.iconAfter
    this.colorClassName = args.colorClassName

    return this
  }
}

export default SquareWidgetItem
