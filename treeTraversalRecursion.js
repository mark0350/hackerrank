function TreeNode(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

/**
 * establish tree based on tree structure object
 * @param rootGraph:Object object record tree graph
 * @param root:TreeNode root node of the tree
 */
TreeNode.establishTree = function (rootGraph, root) {

  if (rootGraph.left != null) {
    root.left = new TreeNode(rootGraph.left.value);
    TreeNode.establishTree(rootGraph.left, root.left);
  }
  if (rootGraph.right != null) {
    root.right = new TreeNode(rootGraph.right.value);
    TreeNode.establishTree(rootGraph.right, root.right);
  }
  return root;
};

const rootGraph = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 3
    }
  },
  right: {
    value: 1,
    left: {
      value: 7
    },
    right: {
      value: 6
    }
  }
};
let root = new TreeNode(rootGraph.value);
root = TreeNode.establishTree(rootGraph, root);

function preOrderTraversal(root) {
  if (root != null) {
    console.log(root.value);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

function inOrderTraversal(root) {
  if(root != null){
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
  }
}

function postOrderTraversal(root) {
  if(root != null){
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.value);
  }
}

console.log('pre order traversal');
preOrderTraversal(root);
console.log('in order traversal');
inOrderTraversal(root);
console.log('post order traversal');
postOrderTraversal(root);