/**
 * Created by YiYing on 2017/4/22.
 */
(function (W) {

    function Selection(arr) {
        this.arr = arr;
    }

    /**
     * 选择排序算法实现
     */
    Selection.prototype.sort = function () {
        var len = this.arr.length;
        for(var i=0;i<len;i++){
            var min = i;
            //找出最小元素
            for(var j=i+1;j<len;j++){
                if(this.less(j,min)){
                    min = j;
                }
            }
            //把最小元素放到最前面
            this.exchange(i,min);
        }
    };

    /**
     * 判断m是否小于n
     * @param m
     * @param n
     */
    Selection.prototype.less = function (m,n) {
        //可根据不同的数据类型设置比对规则，比如json。这里适用于数字与字符串。
        return this.arr[m]<this.arr[n];
    };

    /**
     * 交换数组中m与n的位置
     * @param m
     * @param n
     */
    Selection.prototype.exchange = function (m,n) {
        var swap    = this.arr[m];
        this.arr[m] = this.arr[n];
        this.arr[n] = swap;
    };

    /**
     * 打印排序后的数组
     */
    Selection.prototype.show = function () {
        console.log(this.arr);
    };

    /**
     * 判断是否已排序
     * @returns {boolean}
     */
    Selection.prototype.isSorted = function () {
        var len = this.arr.length;
        for(var i=1;i<len;i++){
            if(this.less(i,i-1)){
                return false;
            }
        }
        return true;
    };

    W.Selection = Selection;
})(window);

//测试代码
(function () {
    var arr = [4,5,6,0,3,5,21,7,9,0,1];
    var selection = new Selection(arr);
    console.log("排序前："+selection.isSorted());
    selection.sort();
    console.log("排序后："+selection.isSorted());
    selection.show();
})();