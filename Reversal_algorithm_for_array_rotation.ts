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