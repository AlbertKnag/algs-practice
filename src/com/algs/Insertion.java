package com.algs;

public class Insertion {
	
	/**
	 * 插入排序实现逻辑
	 * @param arr
	 */
	public static void sort(int[] arr){
		int len = arr.length;
        for (int i = 1; i < len; i++) {
        	//在已经有序之中，从后往前比对，依次交换，直到插入到正确的位置即可
            for (int j = i; j>0&&less(arr[j], arr[j-1]); j--) {
                exchange(arr, j, j-1);
            }
        }
	}
	
	/**
	 * 比较m是否小于n
	 * @param m
	 * @param n
	 * @return
	 */
	private static boolean less(int m,int n) {
        return m < n;
    }
	
	/**
	 * 交换m与n的位置
	 * @param a
	 * @param m
	 * @param n
	 */
	private static void exchange(int[] a, int m, int n) {
        int swap = a[m];
        a[m] = a[n];
        a[n] = swap;
    }
	 
	public static void show(int[] a){
		for (int i = 0; i < a.length; i++) {
            System.out.print(a[i]+" ");
        }
	}
	
	public static void main(String[] args) {
		int[] arr = {4,5,6,0,3,5,21,7,9,0,1};
		Insertion.sort(arr);
		Insertion.show(arr);
	}
}
