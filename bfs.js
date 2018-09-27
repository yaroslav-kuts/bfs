var Node = function (links) {
	this.links = links || [];
	this.addLinks = (l) => l.forEach(link => this.links.push(link));
};

var search = function (key, condition) {
	var queue = key.links;
	var viewed = new Set();
	while (queue.length > 0) {
		var node = queue.shift();
		if (!viewed.has(node)) {
			if (condition(node)) return node;
			queue = queue.concat(node.links);
			viewed.add(node);
		}
	}
};

exports.Node = Node;
exports.search = search;
