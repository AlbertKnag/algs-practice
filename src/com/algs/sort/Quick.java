package com.algs.sort;

/**
 * 快速排序
 * @author YiYing
 * @data 2017年4月30日 下午10:33:10
 */
public class Quick {

	public static void sort(Comparable[] a) {
        sort(a, 0, a.length - 1);
    }
	 
	//让数组从a[lo] 到 a[hi]有序
    private static void sort(Comparable[] a, int lo, int hi) { 
        if (hi <= lo) return;
        int j = partition(a, lo, hi);
        sort(a, lo, j-1);
        sort(a, j+1, hi);
    }
    
	// 切分数组a[lo..hi] 最终让数组满足如下状态： a[lo..j-1] <= a[j] <= a[j+1..hi]
    // 并返回j
    private static int partition(Comparable[] a, int lo, int hi) {
        int i = lo;
        int j = hi + 1;
        Comparable v = a[lo];
        while (true) { 
            while (less(a[++i], v))
                if (i == hi) break;
            while (less(v, a[--j]))
                if (j == lo) break;     
            if (i >= j) break;
            exch(a, i, j);
        }
        // 把切分的元素放到j的位置上
        exch(a, lo, j);
        return j;
    }

     // 判断v < w ?
     private static boolean less(Comparable v, Comparable w) {
         return v.compareTo(w) < 0;
     }
         
     // 交换 a[i]和 a[j]
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
		Integer[] a = {1,55,32,2,3,4};
		sort(a);
		show(a);
	}

}
