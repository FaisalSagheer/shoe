import React from "react";
import { Button } from "./ui/button";

function Designer() {
  return (
    <div className="bg-secondary text-primary" id="designer">
      <div className="py-20 max-w-7xl mx-auto px-15 lg:px-10">
        <h1 className="text-[2.625rem] text-center">
          Our Designer
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center pt-10">
          <div>
            <img src="./assets/designer.png" alt="/" className="w-[100vw] lg:w-[105vw] h-[55vh] lg:h-[54vh]"/>
            <div className="flex flex-col pt-4">
           <h4>
            Wade Warren
           </h4>
           <h6 className="text-muted-foreground">
            Product Designer
           </h6>
            </div>
          </div>
          <div className="pl-10 pt-3 lg:pt-0">
            <div className="capitalize flex gap-1 pb-5">
              <Button>10+year</Button>
              <Button>Athletic Footwear</Button>
              <Button>Sneaker Design</Button>
            </div>
            <div className="text-sm lg:text-lg text-primary flex flex-col gap-2">
            <p>
              As a Footwear Designer with over a decade of experience, I have
              dedicated my career to shaping the future of what we wear on our
              feet. My journey has been one of deep immersion in the art,
              anatomy, and engineering that define exceptional footwear.
            </p>
            <p>
              I move seamlessly between the drawing board and the factory floor,
              mastering the entire lifecycle of a product—from the initial spark
              of a narrative concept and meticulous hand-sketching to the
              precise creation of tech packs, the iterative magic of
              prototyping, and the final challenges of production. This holistic
              understanding, honed over ten years, allows me to not just
              envision designs but to actualize them with precision and
              commercial viability.
            </p>
            <p>
              My process is driven by a relentless curiosity for materials,
              biomechanics, and cultural shifts. I believe the best designs are
              born at the intersection of these disciplines, transforming
              abstract inspiration into tangible products that truly connect
              with people's lives, empower their movements, and become a part of
              their story. I am not just creating shoes; I am crafting
              experiences, building icons, and solving complex problems with
              every stitch, last, and sole unit.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designer;
