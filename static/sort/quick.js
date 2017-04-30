/**
 * Created by YiYing on 2017/4/30.
 */

(function (W) {
    /**
     * 快速排序
     * @param a     需要排序的数组
     * @param lo    起始位置
     * @param hi    结束位置
     */
    function sort(a,lo,hi) {
        if(hi<=lo)return;
        var j = partition(a,lo,hi); //- 切分数组，让a[j]左边的都小于它，右边的都大于它。
        sort(a,lo,j-1);             //- 将左半部分a[lo..j-1]排序
        sort(a,j+1,hi);             //- 将右半部份a[j+1...hi]排序
    }

    /**
     * 将数组a切分为a[lo...i-1],a[i],a[i+1,hi]
     * @param a     需要切分的数组
     * @param lo    起始位置
     * @param hi    结束位置
     */
    function partition(a,lo,hi) {
        var i = lo,j=hi+1;      //- i,j为左右扫描的指针
        var v = a[lo];          //- 选择第lo元素为切分元素，让lo左边的都小于a[lo],右边的都大于a[lo]
        while(true){
            //不断从前向后移动指针
            while (a[++i] < v){
                if(i==hi){break;}
            }
            //不断的从后往前移动指针
            while (v < a[--j]){
                if(j==lo){break;}
            }
            if(i>=j){break;}
            //较小的往前放，较小的往后放
            exch(a,i,j);
        }
        //把切分的元素放到正确的位置，交换lo与j的位置
        exch(a,lo,j);
        return j;
    }

    /**
     * 交换数组中m与n的位置
     * @param a  数组
     * @param m
     * @param n
     */
    function exch(a,m,n) {
        var swap    = a[m];
        a[m] = a[n];
        a[n] = swap;
    }

    W.QuickSort = function (a) {
        sort(a,0,a.length);
    }
})(window);

//测试代码
(function () {
    //var arr = [4,5,6,0,3,5,21,7,9,0,1];
    //console.log(arr);
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var arr = [];
    for(var i=0;i<1000000;i++){
        var id = Math.ceil(Math.random()*35);
        arr[i] = chars[id];
    }
    console.time("QuickSort");
    QuickSort(arr);      //- chrome下一百万数据平均250ms,如果不计算长度，则小于200ms
    console.timeEnd("QuickSort");
})();