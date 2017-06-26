package com.algs.sort;

public class Merge {

	private static void merge(int[] arr,int[] temp,int start,int mid,int end){
		int i=start,j=mid+1;
		//避免每次都创建数组对象
		//int[] temp = new int[arr.length];
		//数据复制一份将a[start..end]复制到temp[start..end],start不一定为0
		for(int m=start;m<=end;m++){
			temp[m] = arr[m];
		}
		for(int n=start;n<=end;n++){
	        if(i>mid){
	            //左边用尽（取右半边的元素）
	            arr[n] = temp[j++];
	        }else if(j>end){
	            //右边用尽（取左半边的元素）
	            arr[n] = temp[i++];
	        }else if(temp[j]<temp[i]){
	            //右半边的元素小于左半边的元素（取右半边的元素）
	            arr[n] = temp[j++];
	        }else{
	            //右半边的元素大于左半边的元素（取左半边的元素）
	            arr[n] = temp[i++];
	        }
	    }
	}
	
	private static void sortDown(int[] arr,int[] temp,int start,int end){
		//将数组arr[start..end]排序，这里的start并不一定是0
	    if(end<=start) return;
	    int mid = start + (end-start)/2;
	    sortDown(arr,temp,start,mid);        //- 将左半边排序
	    sortDown(arr,temp,mid+1,end);        //- 将右半边排序
	    merge(arr,temp,start,mid,end);       //- 归并结果
	}
	
	private static void sortUp(int[] arr,int[] temp){
		int len = arr.length;
	    for(int sz=1;sz<len;sz=2*sz){
	        for(int start=0;start<len-sz;start=start+2*sz){
	            merge(arr,temp,start,start+sz-1,Math.min(start+2*sz-1,len-1));
	        }
	    }
	}
	
	public static void main(String[] args) {
		int[] arr1  = {4,5,6,0,3,5,21,7,9,0,1};
		int[] temp1 = new int[arr1.length];
	    sortDown(arr1,temp1,0,arr1.length-1);
	    for(int m:arr1){
	    	System.out.print(m+" ");
	    }
	    
	    System.out.println();
	    System.out.println("----------------");
	    
	    int[] arr2  = {4,5,6,0,3,5,21,7,9,0,1};
	    int[] temp2 = new int[arr2.length];
	    sortUp(arr2,temp2);
	    for(int n:arr2){
	    	System.out.print(n+" ");
	    }
	}

}
