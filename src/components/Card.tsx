import React from "react"
import Image from "next/image";
interface propsType {
    title :string;
    desc: string;
    img : string;
    tags :string[];
}


const Card : React.FC<propsType> = ({title, desc, img, tags}) => {
  return (
    <div className="card" data-aos="zoom-in-up">
    <div>
        <image className=" card-image"
         src ={img}
         width={350}
         height={350}
         alt={title}/>

    

    </div>
    <div className="card-content">
        <div className="card-desc">{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((el)=>(<div className="tags" key={el}>{el}
                </div>))}
        </div>

    </div>
    </div>
  );
}

export default Card
