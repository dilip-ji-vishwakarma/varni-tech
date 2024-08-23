import { FC } from "react";
import React from "react"
import blogData from "./blogData.json";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
}

const BlogSection: FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="container md:mt-16 mt-16">
          <div className="grid grid-cols-1 pb-4 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Blog Or News
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
            {blogData.map((post: BlogPost, index: number) => (
              <div key={index} className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                {/* Replace `assets/images/blog/01.jpg` with the actual image URL */}
                <Image  height={34} width={150} src="assets/images/blog/01.jpg" alt="" />
                <div className="content p-6">
                  <Link href="blog-detail.html" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">
                    {post.title}
                  </Link>
                  <p className="text-slate-400 mt-3">{post.description}</p>
                  <div className="mt-4">
                    <Link href="blog-detail.html" className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">
                      Read More <i className="uil uil-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
