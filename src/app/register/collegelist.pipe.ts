import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CollegelistPipe implements PipeTransform {


  is_subsequence(x, y){
    if(x.length==0){
      return true;
    }else if(y.length<x.length){
      return false;
    }
    else if(y.charAt(0)==x.charAt(0)){
      return this.is_subsequence(x.slice(1),y.slice(1));
    }
    else{
      return this.is_subsequence(x,y.slice(1));
    }
  }

  transform(people: any[], term: any): any {
    // console.log(term);
    //check if search term is undefined
    if(term === undefined) return null;
    if(term === "") return null;
    if(term.length<3) return null;
    
    var result:any[]=[];
    var do_not_push=true;
    // if(String(term).length<3){this.tempres=[];}
    // console.log("ok "+people)
    for (let i of people){
      do_not_push=false;
      var capitals='';
      for(let k of i.split(" ")){
        var ch=k.charAt(0);
        if(ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z"){
        capitals=capitals+ch;
      }
    }
      // console.log(capitals);
        for(let k of String(term).split(" ")){
          // console.log("m for loop me aa gya")
          if(k.length>=3){
            if(i.toLowerCase().search(k.toLowerCase())!=-1){
            }else if(this.is_subsequence(k.toLowerCase(),capitals.toLowerCase())){
            }else{
              do_not_push=true;
              break;
            }
          }else{}
          // console.log(k)
        }
        if(do_not_push){
          
        }else{result.push(i);}
    }
    // console.log(result);
    return result;

  }

}