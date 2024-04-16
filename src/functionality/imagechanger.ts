import img1 from '../BuetyImg/beauty1.jpg';
import img2 from '../BuetyImg/beauty2.jpg';
import img3 from '../BuetyImg/beauty3.jpg';
import img4 from '../BuetyImg/beauty4.jpg';
let  img:any;
let i=0;

var image=[img1,img2,img3,img4,img1]
class changeImg{
  constructor(imgele:any)
  {
img=imgele;
  }
  change()
  {

img.setAttribute("src",image[i])
i++;
if(i==4)
{
  i=0
}
 }
  imgload( i:any){
 if(i<2)
 {
 setInterval(this.change,8000);
 }
  

}
}

export default changeImg;



