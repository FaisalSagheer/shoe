"use client";
import { Quote } from "lucide-react";
import React from "react";

function Testimonials() {
  const testimonials = [
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
    },
    {
      client: "Ronald Richards",
      occupation: "Medical Assistant",
      para: "Outstanding customer support! They went above and beyond to help me resolve my issue. I felt valued as a customer, and their commitment to ensuring my satisfaction left a lasting impression.",
    },
  ];
  return (
    <div className="min-h-screen bg-secondary py-10 text-primary">
        <h2 className="text-[2.625rem] text-primary text-center">Testimonials</h2>
      <div className="flex px-10 pt-10">
        {testimonials.map((testimonial,index) => (
          <div key={index} className="border-2 border-primary bg-secondary px-10">
            <Quote color="black" />
            <p>
            {testimonial.para}
            </p>
            <span>
                <h4 >{testimonial.client}</h4>
                <h6 className="text-muted-foreground">{testimonial.occupation}</h6>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
