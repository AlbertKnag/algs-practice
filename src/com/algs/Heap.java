package com.algs;

public class Heap {
	/**
	 * 堆排序
	 * @param pq
	 */
	public static void sort(Comparable[] pq) {
        int n = pq.length;
        //构造堆结构
        for (int k = n/2; k >= 1; k--)
            sink(pq, k, n);
        //排序数组
        while (n > 1) {
            exch(pq, 1, n--);
            sink(pq, 1, n);
        }
    }
	
	//下沉元素
	private static void sink(Comparable[] pq, int k, int n) {
        while (2*k <= n) {
            int j = 2*k;
            if (j < n && less(pq, j, j+1)) j++;
            if (!less(pq, k, j)) break;
            exch(pq, k, j);
            k = j;
        }
    }
	
	//注意这里i和j都减去1
    private static boolean less(Comparable[] pq, int i, int j) {
        return pq[i-1].compareTo(pq[j-1]) < 0;
    }
    //注意这里i和j都减去1
    private static void exch(Object[] pq, int i, int j) {
        Object swap = pq[i-1];
        pq[i-1] = pq[j-1];
        pq[j-1] = swap;
    }
    
    private static void show(Comparable[] a) {
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }
    }
    
	public static void main(String[] args) {
		String[] a = {"S","O","R","T","E","X","A","M","P","L","E"};
        Heap.sort(a);
        show(a);
	}
}
