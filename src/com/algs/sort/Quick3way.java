package com.algs.sort;

/**
 * 三向快速排序（适用于重复元素较多的情况）
 * @author YiYing
 * @data 2017年4月30日 下午10:34:09
 */
public class Quick3way {

    private static void sort(Comparable[] a, int lo, int hi) { 
        if (hi <= lo) return;
        int lt = lo, gt = hi;
        Comparable v = a[lo];
        int i = lo;
        while (i <= gt) {
            int cmp = a[i].compareTo(v);
            if      (cmp < 0) exch(a, lt++, i++);
            else if (cmp > 0) exch(a, i, gt--);
            else              i++;
        }

        //此时数组中的情况为：a[lo..lt-1] < v = a[lt..gt] < a[gt+1..hi]. 
        sort(a, lo, lt-1);		//- 对左侧进行排序
        sort(a, gt+1, hi);		//- 对右侧进行排序
    }

        
    //交换 a[i]和a[j]的位置
    private static void exch(Object[] a, int i, int j) {
        Object swap = a[i];
        a[i] = a[j];
        a[j] = swap;
    }
    
    public static void show(Integer[] a){
		for (int i = 0; i < a.length; i++) {
            System.out.print(a[i]+" ");
        }
	}
	public static void main(String[] args) {
		Integer[] arr = {4,5,6,0,3,5,21,7,9,0,1};
		Quick3way.sort(arr,0,arr.length-1);
		Quick3way.show(arr);
	}
}
