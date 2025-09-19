"use client";
import { Quote } from "lucide-react";
import React from "react";

function Testimonials() {
  const testimonials = [
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
      className: "-rotate-10 left-50"
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
      className: "-rotate-3 left-10"
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
      className: "rotate-6"
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
      className: "rotate-8 -left-20"
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
      className: "rotate-11 -left-40"
    },
  ];
  return (
    <>
      <div className="bg-secondary py-10 text-primary">
        <div className="text-center">
          After Animation
          <h2 className="text-[2.625rem] text-primary">Testimonials</h2>
        </div>
        <div className="flex px-10 pt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`border-4 border-primary bg-secondary relative px-8 pt-4 pb-6 -mx-14 ${testimonial.className}`}>
              <Quote color="black" />
              <p className="pt-4 text-lg">
                {testimonial.para}
              </p>
              <span className="mt-8 flex gap-2">
                <img src="./assets/Ellipse 4.png" alt="" />
                <span>
                  <h4 >{testimonial.client}</h4>
                  <h6 className="text-muted-foreground">{testimonial.occupation}</h6>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
