import { FC, useState } from "react";
import React from "react";
import Image from "next/image";

interface BlogPost {
  image: string;
  name:string;
  profession:string;
  description: string;
  stars?:number;
}

interface Data{
    testimonials:BlogPost[]
}

const data= [
    {
      name: "John Doe",
      profession: "CEO, XYZ Inc.",
      image: "https://i.pravatar.cc/150?img=1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in diam diam. Aliquam at nunc ante. Suspendisse potenti. Fusce quis turpis sed leo commodo lacinia. In dapibus urna sit amet semper malesuada. Duis tincidunt lectus vel nibh commodo, eu tincidunt diam finibus.",
      stars:4
    },
    {
      name: "Jane Smith",
      profession: "Marketing Director, ABC Corp.",
      image: "https://i.pravatar.cc/150?img=2",
      description: "Ut fermentum sollicitudin nunc. Sed dictum nibh eget turpis finibus sollicitudin. Nunc euismod mi in bibendum finibus. Aenean congue euismod massa, at fringilla metus feugiat vel. Nam elementum elit et enim tincidunt, sed feugiat odio ultrices. ",
      stars:4
    },
    {
      name: "Bob Johnson",
      profession: "Product Manager, DEF Co.",
      image: "https://i.pravatar.cc/150?img=3",
      description: "Praesent lobortis augue in urna maximus, sed sagittis felis varius. Nullam vel elit elit. Sed lobortis, velit eget interdum ultrices, sapien lorem tristique lectus, vel vehicula enim justo at dolor. Proin viverra commodo euismod. Sed elementum vestibulum purus, eu malesuada tellus sagittis nec.",
      stars:4
    },
    {
        name: "Sarah Lee",
        profession: "Creative Director, GHI Corp.",
        image: "https://i.pravatar.cc/150?img=4",
        description: "Vestibulum finibus, nisi eget tristique iaculis, justo est sodales lorem, in hendrerit neque orci et mi. Fusce faucibus purus eget magna euismod, sit amet hendrerit neque fringilla. Cras convallis mauris sit amet dui semper, vel bibendum lectus convallis. Sed vel ornare lacus. ",
        stars:4
      },
      {
        name: "David Kim",
        profession: "Software Engineer, JKL Tech",
        image: "https://i.pravatar.cc/150?img=5",
        description: "Duis nec sagittis lorem, a ornare lectus. Ut feugiat lacus eget libero iaculis, nec mollis dolor rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut rhoncus enim non tortor finibus ultricies. Duis eget neque vel purus auctor facilisis. ",
        stars:4
      },
      {
        name: "Anna Kim",
        profession: "Project Manager, MNO Inc.",
        image: "https://i.pravatar.cc/150?img=6",
        description: "Etiam scelerisque purus at ipsum vestibulum, nec rutrum sapien fringilla. Nam in diam diam. Aenean vel ligula non purus vestibulum finibus. Morbi vel lacus eu nisl facilisis ultricies. Praesent euismod malesuada lorem, eget lobortis nibh consectetur sit amet. ",
        stars:4
      }
  ];
  
const Testimonials: FC<Data> = ({testimonials=data}) => {
    testimonials=[...testimonials,...testimonials,...testimonials,...testimonials]
    
  return (
    <section className="relative md:py-16 py-8 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 pb-4 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Our Community
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
        </div>
        {/*-end grid-*/}
      </div>
      {/*-end container-*/}

      <div className="container-fluid">
        <div className="grid grid-cols-1 mt-8">
          <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:left-0 before:z-2 after:content-[''] after:absolute after:top-0 after:right-0 after:z-2">
            <div className="slide-track flex items-center">
                {testimonials.map(Testimonial=>(
                    <div key={Testimonial.name} className="slide h-auto md:w-[360px] w-72 m-2">
                    <ul className="space-y-4">
                      <li className="rounded-lg shadow dark:shadow-gray-800 p-6">
                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                          <Image
                          height={34} width={150}
                            src={Testimonial.image}
                            className="h-16 w-16 rounded-full shadow dark:shadow-gray-800"
                            alt=""
                          />
    
                          <div className=" ltr:pl-4 rtl:pr-4">
                            <div
                              
                              className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                            >
                              {Testimonial.name}
                            </div>
                            <p className="text-slate-400">{Testimonial.profession}</p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <p className="text-slate-400">
                            {Testimonial.description}
                          </p>
                          <ul className="list-none mb-0 text-amber-400 mt-2">
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                            <li className="inline">
                              <i className="mdi mdi-star"></i>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                )
                )}
                
            </div>
          </div>
        </div>
        {/*-end grid-*/}
      </div>
      {/*-end container-*/}

    </section>
  );
};

export default Testimonials;

