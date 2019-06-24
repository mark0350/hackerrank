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
      value: 7,
      right: {
        value: 2
      }
    },
    right: {
      value: 6
    }
  }
};

let root = new TreeNode(rootGraph.value);
root = TreeNode.establishTree(rootGraph, root);

// solution starts

function treeHeight(root) {
  'use strict';
  if (root.left == null && root.right == null) {
    return 1;
  } else if (root.left == null) {
    return treeHeight(root.right) + 1;
  } else if (root.right == null) {
    return treeHeight(root.left) + 1;
  } else {
    return treeHeight(root.left) > treeHeight(root.right) ? treeHeight(root.left) + 1 : treeHeight(
      root.right) + 1;
  }
}

console.log(treeHeight(root));