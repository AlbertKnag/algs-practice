package com.algs.base;

import java.util.Iterator;
import java.util.NoSuchElementException;


public class LinkStack<Item> implements Iterable<Item> {
	private Node first;		// 栈顶，即最近添加的元素
	private int N;			// 栈中的元素数量
	
	// 栈中每个元素的类型为Node
	private class Node{
		Item item;
		Node next;
	}
	
	public boolean isEmpty(){return N==0;}
	public int size(){return N;}
	
	// 入栈
	public void push(Item item){
		Node oldFirst = first;
		first = new Node();
		first.item = item;
		first.next = oldFirst;
		N++;
	}
	// 出栈
	public Item pop(){
		Item item = first.item;
		first = first.next;
		if(first==null){
			System.out.println("栈为空");
			return null;
		}
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
    	LinkStack<String> stack = new LinkStack<String>();
    	stack.push("one");
    	stack.push("two");
    	stack.push("three");
		for(String node:stack){
			//打印结果为：three->two->one->
			System.out.print(node+"->");
		}
		//删除一个元素
		System.out.println("");
		//打印结果为：node:three
		System.out.println("node:"+stack.pop());
		for(String node1:stack){
			//打印结果为：two->one->
			System.out.print(node1+"->");
		}
	}
}
