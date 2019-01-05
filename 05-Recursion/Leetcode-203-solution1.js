// 没有虚拟头结点
const removeElements = function (head,val) {
	while(head !=null && head == val){
		let delNode = head;
		head = delNode.next;
		delNode.next = null;
	}

	if (head == null) {
		return null
	}

	let prev = head;
	while(prev.next != null){
		if(prev.next.val == val){
			let delNode = prev.next;
			prev.next = delNode.next;
			delNode.next = null;
		}else{
			prev = prev.next;
		}
	}

	return head;

}