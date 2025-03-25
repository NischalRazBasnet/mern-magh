import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { ImTree } from 'react-icons/im';
import { GrServices } from 'react-icons/gr';
import { FcGoogle, FcReddit } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaHeart } from 'react-icons/fa6';
import Tag from '../../components/Tag';
import Card from '../../components/Card';
import Menu from '../../components/Menu';

export default function Feature() {
  return (
    <div className='bg-gray-200'>
      <div className='grid grid-cols-[2fr_3.5fr] py-15'>
        <div className='space-y-6 px-10 py-20'>
          <div className=' size-[60px] flex justify-center items-center rounded-full overflow-hidden shadow-xl'>
            <ImTree className='size-[25px] text-btnGray' />
          </div>
          <h2 className='text-4xl text-black'>CSS Components</h2>
          <p className='text-btnGray'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            optio quisquam, veritatis nesciunt tenetur, temporibus illo qui
            consequatur autem at voluptates asperiores. Odio, rem minima sequi
            itaque libero non veniam?
          </p>
          <div className='flex flex-wrap gap-3'>
            <Tag tag={'Button'} />
            <Tag tag={'Inputs'} />
            <Tag tag={'Labels'} />
            <Tag tag={'menus'} />
            <Tag tag={'navbars'} />
            <Tag tag={'pagination'} />
            <Tag tag={'progressbars'} />
            <Tag tag={'typography'} />
          </div>
          <a
            href='#'
            className=' flex text-lg cursor-pointer font-semibold items-center hover:pr-2 '
          >
            View All
            <MdOutlineKeyboardDoubleArrowRight className='text-2xl' />
          </a>
        </div>
        <div className='relative flex  gap-5 space-y-6 px-10 py-20'>
          <Card
            layout={'left-80 top-10'}
            body={'bg-body'}
            bgColor={'bg-blue-400'}
            placeholder={<GrServices className='text-primary size-[40px]' />}
            title={'Excellent Services'}
            detail={`Some quick example text to build on the card title and make up the
          bulk of the card's content`}
            btnIco={<FaGithub />}
            button={'github'}
            btnEff={'bg-white shadow-xl -right-5 -bottom-2'}
          />
          <Card
            layout={'left-60 bottom-12'}
            body={'bg-primary'}
            bgColor={'bg-amber-600'}
            placeholder={<FcReddit className='size-[40px]' />}
            textColor={'text-btnGray'}
            title={'Free Revision'}
            detail={`Keep you user engaged by providing meaningful information.`}
          />
          <Card
            layout={'right-85 top-30'}
            body={'bg-primary'}
            textColor={'text-black'}
            img={`w-[100px] h-[100px] rounded-full overflow-hidden`}
            src={
              'https://fastly.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY'
            }
            title={'Romina Hadid'}
            position={'marketing specialtist'}
            facebook={<FaFacebook />}
            google={<FcGoogle />}
            btnIco={<FaHeart />}
            button={'regular'}
            btnEff={'bg-pink-400 text-white shadow-xl -left-15 -bottom-3.5'}
          />
          <Menu />
        </div>
      </div>
    </div>
  );
}
