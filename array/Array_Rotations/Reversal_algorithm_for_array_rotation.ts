/*

 rotate(arr[], d, n)
 reverse(arr[], 1, d) ;
 reverse(arr[], d + 1, n);
 reverse(arr[], l, n);
 Let AB are the two parts of the input array where A = arr[0..d-1] and B = arr[d..n-1]. The idea of the algorithm is:
 Reverse A to get ArB.
Reverse B to get ArBr.
    Reverse all to get (ArBr) r = BA.

    For arr[] = [1, 2, 3, 4, 5, 6, 7], d =2 and n = 7
A = [1, 2] and B = [3, 4, 5, 6, 7]
Reverse A, we get ArB = [2, 1, 3, 4, 5, 6, 7]
Reverse B, we get ArBr = [2, 1, 7, 6, 5, 4, 3]
Reverse all, we get (ArBr)r = [3, 4, 5, 6, 7, 1, 2]


 */

class Program{

    constructor(public input:Array<number>,public d:number){

    }
    rotate(){
        let reverseA=[];
        let reverseB=[];
        for(let i=this.d-1;i>=0;i--){
            reverseA.push(this.input[i]);
        }
        for(let i=this.input.length-1;i>=this.d;i--){
            reverseA.push(this.input[i]);
        }
        let arr=[...reverseA,...reverseB];
        arr=arr.reverse();
        return arr;
    }
}


let p1=new Program([1,2,3,4,5,6,7,8],2);
console.log('answer is ',p1.rotate());