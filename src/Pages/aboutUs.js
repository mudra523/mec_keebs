import React from 'react'

function about() {
  return (
    <div className='w-full d-flex justify-center'>
      <p className="flex w-full justify-center text-5xl font-semibold lg:pt-28 lg:px-10 pt-14 px-6">About Us</p>
      <p className="flex max-w-4xl mx-auto text-lg text-justify font-normal lg:pt-16 pt-8 px-6 sm:px-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quasi, temporibus deleniti voluptate quaerat architecto repellat facere ipsum dicta dolor ex illo eveniet optio suscipit doloremque est. Eius, vel numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iure temporibus eius fugit explicabo deserunt, illum et perferendis suscipit perspiciatis quae sit deleniti dolor obcaecati nulla laboriosam sequi iste velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus recusandae voluptatibus explicabo, reprehenderit eaque illo? Voluptatum delectus tenetur quibusdam sint obcaecati sed tempora fuga blanditiis? Corrupti aliquid dolor quidem!</p>
      <div className="flex w-full justify-center pt-10">
        <div className="grid grid-cols-1 gap-x-3 gap-y-2 md:grid-cols-2 text-grey-500">
          <div>
            <p className="text-base font-medium">mudrakoradia1999@gmail.com</p>
          </div>
          <div>
            <p className="text-base font-medium">+91 9638743119</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
