/**
 * Created by YiYing on 2017/4/29.
 */

/**
 * 原地归并
 * @param arr
 * @param start
 * @param mid
 * @param end
 */
function merge(arr,start,mid,end) {
    var i=start,j=mid+1;
    var temp = [];
    //数据复制一份将a[start..end]复制到temp[start..end],start不一定为0
    for(var m=start;m<=end;m++){
        temp[m] = arr[m];
    }

    for(var n=start;n<=end;n++){
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

/**
 * 自顶向下的归并
 * @param arr
 * @param start
 * @param end
 */
function sortDown(arr,start,end) {
    //将数组arr[start..end]排序，这里的start并不一定是0
    if(end<=start) return;
    var mid = start + parseInt((end-start)/2);
    sortDown(arr,start,mid);        //- 将左半边排序
    sortDown(arr,mid+1,end);        //- 将右半边排序
    merge(arr,start,mid,end);       //- 归并结果
}

/**
 * 自底向上的归并
 * @param arr
 */
function sortUp(arr) {
    var len = arr.length;
    for(var sz=1;sz<len;sz=2*sz){
        for(var start=0;start<len-sz;start=start+2*sz){
            merge(arr,start,start+sz-1,Math.min(start+2*sz-1,len-1));
        }
    }
}

//测试代码
(function () {
    var arr1 = [4,5,6,0,3,5,21,7,9,0,1];
    console.log(arr1);
    sortDown(arr1,0,arr1.length-1);
    console.log(arr1);
    console.log("----------------");
    var arr2 = [4,5,6,0,3,5,21,7,9,0,1];
    console.log(arr2);
    sortUp(arr2);
    console.log(arr2);
})();