const Node = require('./node');

class LinkedList {
	constructor() {
		this._head = null;
		this._tail = null;
		this.length = 0;
	}

	append(data) {
		let node = new Node(data);

		if (!this._head) {
			this._head = node;
			this._tail = node;
		} else {
			node.prev = this._tail;
			this._tail.next = node;
			this._tail = node;
		}

		this.length += 1;

	}


	head() {
		if (this._head === null) {
			return null;
		} else return this._head.data;
	}

	tail() {
		if (this._tail === null) {
			return null;
		} else return this._tail.data;
	}

	at(index) {
		let current = this._head;
		let counter = 0;

		while (counter !== index) {
			current = current.next;
			counter += 1;
		}

		return current.data;
	}

	insertAt(index, data) {
		let current = this._head;
		let counter = 1;

		let node = new Node(data);

		if (index === 0) {
			this._head.prev = node;
			node.next = this._head;
			this._head = node;
		} else {
			while (current) {
				current = current.next;
				if (counter === index) {
					node.prev = current.prev;
					current.prev.next = node;
					node.next = current;
					current.prev = node;
				}
				counter += 1;
			}
		}
	}

	isEmpty() {
		if (this._head === null) {
			return true;
		} else return false;
	}

	clear() {
		this._head = null;
		this._tail = null;
		this.length = 0;
	}

	deleteAt(index) {
		let current = this._head;
		let counter = 1;

		if (index === 0) {
			this._head = this._head.next;
			this._head.prev = null;
		} else {
			while (current) {
				current = current.next;
				if (current === this._tail) {
					this._tail = this._tail.prev;
					this._tail.next = null;
				} else if (counter === index) {
					current.prev.next = current.next;
					current.next.prev = current.prev;
				}
				counter += 1;
			}
		}
	}

	reverse() {
		let current = this._head;
		let previous = null;
		while (current !== this._tail) {
			let next = current.next;
			current.next = previous;
			current.prev = next;
			previous = current;
			current = previous;
		}
		this._tail = this._head;
		this._head = previous;
	}

	indexOf(data) {
		let current = this._head;
		let counter = 0;

		while (current) {
			if (current.data === data) {
				return counter;
			}
			current = current.next;
			counter += 1;
		}

		return -1;
	}
}

module.exports = LinkedList;