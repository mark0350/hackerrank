let tree = {
  value: 0,
  children: [{
    value: 11,
    children: [{
      value: 21,
      children: [{
        value: 31,
        children: []
      }, {
        value: 32,
        children: []
      }, {
        value: 33,
        children: []
      }]
    }, {
      value: 22,
      children: []
    }]
  }, {
    value: 12,
    children: [{
      value: 23,
      children: []
    }, {
      value: 24,
      children: []
    }]
  }, {
    value: 13,
    children: []
  }]
};

// var recursiveTraverse = function (node, action) {
//   // if (!node || !node.children) {
//   //   console.log('return')
//   //   return;
//   // }
//   action(node.value);
//   node.children.forEach(function (item, index) {
//     recursiveTraverse(item, action);
//   });
// };
// // 递归实现
// recursiveTraverse(tree, console.log);

var nonRecursiveDepthFirstTraversal = function (node, action) {
  if (!node || !node.children) { return; }
  var _stack = []; // 借助一个栈
  _stack.unshift(node);
  while (_stack.length) {
    let _curNode = _stack.shift(); // 推出栈顶元素
    action(_curNode.value);
    // 将子节点依次放入到栈顶
    // _curNode.children.forEach(function (item, index) {
    // 	_stack.unshift(item);
    // })
    if (_curNode.children.length) {
      _stack = _curNode.children.concat(_stack);
    }
  }
}
// 非递归深度优先遍历
nonRecursiveDepthFirstTraversal(tree, console.log);