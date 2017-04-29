/**
 * Created by YiYing on 2017/4/22.
 */
(function (W) {

    function Insertion(arr) {
        this.arr = arr;
    }

    /**
     * 插入排序算法实现
     */
    Insertion.prototype.sort = function () {
        var len = this.arr.length;
        for(var i=1;i<len;i++){
            //在已经有序之中，从后往前比对，依次交换，直到插入到正确的位置即可
            for(var j=i;j>0&&this.less(j,j-1);j--){
                this.exchange(j,j-1);
            }
        }
    };

    /**
     * 判断m是否小于n
     * @param m
     * @param n
     */
    Insertion.prototype.less = function (m,n) {
        //可根据不同的数据类型设置比对规则，比如json。这里适用于数字与字符串。
        return this.arr[m]<this.arr[n];
    };

    /**
     * 交换数组中m与n的位置
     * @param m
     * @param n
     */
    Insertion.prototype.exchange = function (m,n) {
        var swap    = this.arr[m];
        this.arr[m] = this.arr[n];
        this.arr[n] = swap;
    };

    /**
     * 打印排序后的数组
     */
    Insertion.prototype.show = function () {
        console.log(this.arr);
    };

    /**
     * 判断是否已排序
     * @returns {boolean}
     */
    Insertion.prototype.isSorted = function () {
        var len = this.arr.length;
        for(var i=1;i<len;i++){
            if(this.less(i,i-1)){
                return false;
            }
        }
        return true;
    };

    W.Insertion = Insertion;
})(window);

//测试代码
(function () {
    var arr = [4,5,6,0,3,5,21,7,9,0,1];
    var insertion = new Insertion(arr);
    console.log("排序前："+insertion.isSorted());
    insertion.sort();
    console.log("排序后："+insertion.isSorted());
    insertion.show();
})();