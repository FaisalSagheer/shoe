'use client'
import { Bookmark, BookMarked, Star } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

function Shop() {
  const products = [
    {
      src: "./assets/card-img.png",
      Title: "Nike Air Max",
      price: "230",
      priceCrossed: "330"
    },
    {
      src: "./assets/card-img.png",
      Title: "Nike Air Max",
      price: "230",
      priceCrossed: "330"
    },
    {
      src: "./assets/card-img.png",
      Title: "Nike Air Max",
      price: "230",
      priceCrossed: "330"
    },
    {
      src: "./assets/card-img.png",
      Title: "Nike Air Max",
      price: "230",
      priceCrossed: "330"
    },
    {
      src: "./assets/card-img.png",
      Title: "Nike Air Max",
      price: "230",
      priceCrossed: "330"
    },
    {
      src: "./assets/card-img.png",
      Title: "Nike Air Max",
      price: "230",
      priceCrossed: "330"
    },
  ]
  return (
    <div className="bg-background" id='shop'>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-[2.625rem] text-secondary text-center pb-20">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product,index) =>
            <div key={index} className='border-t-4 border-l-2 border-b-2 border-r-4 border-primary'>
              <div className='flex justify-between px-4 pt-6'>
                <img src="./assets/sale.png" alt="/" />
                <Bookmark color='black' />
              </div>
              <div className='flex justify-center'>
                <img src={product.src} className='' alt="/" />
              </div>
              <div className='flex justify-between px-4 py-6'>

                <div>
                  <h4 className='text-2xl'>{product.Title}</h4>
                  <span className='flex items-center pt-3'>
                    <h4 className='text-2xl pr-2'>${product.price}</h4>
                    <h4 className='text-lg line-through text-muted'>${product.priceCrossed}</h4>
                  </span>
                </div>
                <div>
                  <div className='flex justify-end pt-1'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <div className='pt-4'>
                    <Button>
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop
