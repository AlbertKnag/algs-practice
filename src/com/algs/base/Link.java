package com.algs.base;

import java.util.Iterator;
import java.util.NoSuchElementException;

public class Link<Item> implements Iterable<Item> {
	private Node first = null;  // 链表的第一个元素
	private int n = 0;			// 链表的长度
	
	private class Node{
		private Item item;		// 链表节点的值
		private Node next;		// 指向下一节点
		
		public String toString(){
			return (String) this.item;
		}
	}
	
	// 向链表中添加数据
	public void add(Item item){
		Node oldFirst = first;
		first = new Node();
		first.item = item;
		first.next = oldFirst;
		n++;
	}
	
	// 翻转链表
	public void reverse(){
		Node next = first.next;
		first.next = null;				// 避免遍历时死循环
		while(next!=null){
			Node temp = next.next;		
			next.next = first;
			first = next;
			next = temp;
		}
	}
	
	public int size(){
		return n;
	}
	
	@Override
	public Iterator<Item> iterator()  {
        return new ListIterator();  
    }
	//链表遍历实现
    private class ListIterator implements Iterator<Item> {
        private Node current = first;

        public boolean hasNext()  { return current != null;                     }
        public void remove()      { throw new UnsupportedOperationException();  }

        public Item next() {
            if (!hasNext()) throw new NoSuchElementException();
            Item item = current.item;
            current = current.next; 
            return item;
        }
    }
	
	public static void main(String[] args) {
		Link<String> link = new Link<String>();
		link.add("one");
		link.add("two");
		link.add("three");
		for(String node:link){
			//打印结果为three->two->one->
			System.out.print(node+"->");
		}
		//翻转链表
		System.out.println("");
		link.reverse();
		for(String node:link){
			//打印结果为one->two->three->
			System.out.print(node+"->");
		}
	}

}


