package com.algs.base;

import java.util.Iterator;
import java.util.NoSuchElementException;


public class LinkQueue<Item> implements Iterable<Item> {
	
	private Node first;		// 指向最早添加的节点的链接
	private Node last;		// 指向最近添加的节点的链接
	private int N;			// 队列中的元素总数量
	
	// 队列中的一个元素
	private class Node{
		Item item;
		Node next;
	}
	
	public boolean isEmpty(){return N==0;}
	
	public int size(){return N;}
	
	// 向队列中添加一个元素
	public void enqueue(Item item){
		// 向链表的尾部添加一个元素
		Node oldLast = last;
		last = new Node();
		last.item = item;
		last.next = null;
		//只有一个节点时，首节点和尾节点相等
		if(isEmpty()) 	first = last;
		else			oldLast.next = last;
		N++;
	}
	
	//从队列中删除一个元素(先进先出)
	public Item dequeue(){
		if(first==null){
			System.out.println("队列中没有元素");
			return null;
		}
		// 从表头删除元素
		Item item = first.item;
		first = first.next;
		if(isEmpty())	last = null;
		N--;
		return item;
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
    	LinkQueue<String> queue = new LinkQueue<String>();
    	queue.enqueue("One");
    	queue.enqueue("two");
    	queue.enqueue("three");
		for(String node:queue){
			//打印结果为：One->two->three->
			System.out.print(node+"->");
		}
		//删除一个元素
		System.out.println("");
		//打印结果为：node:One
		System.out.println("node:"+queue.dequeue());
		for(String node1:queue){
			//打印结果为：two->three->
			System.out.print(node1+"->");
		}
	}
}
