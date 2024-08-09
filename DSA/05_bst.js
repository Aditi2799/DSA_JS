class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert node
    insert(key) {
        const newNode = new BSTNode(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Deletion of node
    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.deleteNode(node.left, key);
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key);
        } else {
            // Node to be deleted found

            // Case 1: Node with no children (leaf node)
            if (node.left === null && node.right === null) {
                return null;
            }
            // Case 2: Node with only one child
            else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            // Case 3: Node with two children
            else {
                let tempNode = this.findMinNode(node.right);
                node.key = tempNode.key;
                node.right = this.deleteNode(node.right, tempNode.key);
            }
        }

        return node;
    }

    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}
