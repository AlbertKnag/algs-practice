package com.algs.sort;

public class Bubble {
	
	/**
	 * 冒泡排序实现逻辑
	 * @param arr
	 */
	public static void sort(int[] arr){
		int len = arr.length;
		//每遍历一次就把最大的沉到了底部
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len-i-1; j++) {
            	//如果后面一个元素小于前一个则交换位置
                if (less(arr[j+1], arr[j])){
                	exchange(arr, j+1, j);
                };
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
		Bubble.sort(arr);
		Bubble.show(arr);
	}
}
