package com.algs.sort;

public class Shell {
	
	/**
	 * 希尔排序实现逻辑
	 * @param arr
	 */
	public static void sort(int[] arr){
		int len = arr.length;
		int h	= 1;
		//自动生成序列。步长序列为1、4、13、40、121、364、1093......
		while(h<len/3){
			h = 3*h+1;
		}
        while(h>=1){
        	for(int i=h;i<len;i++){
        		//当h>1时，实际上是把后面的一次性移动到前面。最后h为1时实际上就是对arr进行插入排序
        		for(int j=i;j>=h && less(arr[j],arr[j-h]);j -= h){
        			exchange(arr,j,j-h);
        		}
        	}
        	//每执行一次，步长依次递减，最终步长递减为1。
        	h = h/3;
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
		Shell.sort(arr);
		Shell.show(arr);
	}
}
