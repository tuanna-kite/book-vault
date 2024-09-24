import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='pt-[56px] md:pt-[88px] pb-10'>
      <div>
        <Image src='/about-bg.png' width={1440} height={500} alt='bg' />
      </div>
      <div className='max-w-4xl mx-auto space-y-8 mt-16 font-light px-8 lg:px-0'>
        <h2 className='text-3xl font-semibold'>Về chúng tôi</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur. Nunc nullam viverra molestie
          donec. Ornare adipiscing porttitor integer leo. Turpis sit fames orci
          tristique eget sed dolor venenatis. Scelerisque amet eget congue ut
          nulla nullam malesuada ultrices. Arcu pharetra at pretium auctor nunc
          velit. In id vitae urna purus nullam a adipiscing. Aliquet aliquet
          magna scelerisque sagittis platea quisque. Pretium orci montes nunc
          rhoncus massa cursus. Adipiscing mattis sem condimentum consectetur
          aenean. Dictum platea at eget mollis nec. Nibh facilisis morbi
          tristique sit suspendisse enim sed.
        </div>
        <div>
          In quis neque urna egestas eget adipiscing eget. Erat nascetur commodo
          sed turpis eu. Lectus imperdiet blandit eget eu urna. Fringilla
          pulvinar pellentesque netus massa netus feugiat non enim. Donec lacus
          enim massa sed tempus pellentesque vulputate nec egestas. Sed volutpat
          mauris scelerisque diam viverra massa scelerisque nascetur. Arcu
          pretium nullam cras ipsum libero duis faucibus convallis. Vivamus eu
          nec elementum quam felis at massa turpis. Ultricies iaculis molestie
          leo hac ipsum ac scelerisque. Quam ultrices amet tincidunt id
          venenatis. Urna pulvinar urna malesuada hac nulla interdum. Id
          bibendum pulvinar tempor felis. Quis nisi cras dignissim scelerisque
          fermentum vel.
        </div>
        <div>
          Hendrerit ullamcorper viverra sed sed semper sit cras. Lacus viverra
          neque velit in tortor mi aliquam. Euismod justo augue dolor turpis ac
          vulputate elit. Semper integer nullam rhoncus donec donec interdum
          volutpat semper. Mi vitae adipiscing sed scelerisque viverra consequat
          feugiat condimentum.
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
