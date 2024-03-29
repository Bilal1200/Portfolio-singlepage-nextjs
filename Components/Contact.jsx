import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/Skills/contact.jpg'

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id='contact' className='container w-full mx-auto lg:h-screen lg:max-w-7xl' >
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#fff] font-bold'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid gap-8 lg:grid-cols-5'>
          {/* left */}
          <div className='w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 bg-[#fff] shadow-gray-400 rounded-xl'>
            <div className='h-full lg:p-4 '>
              <div>
                <Image
                  className='duration-300 ease-in rounded-xl hover:scale-105'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Bilal Asghar</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='pt-8 uppercase'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/bilal-asghar-ba4699164/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Bilal1200'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='w-full h-auto col-span-3 shadow-xl bg-[#fff] shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit}
                // action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                // method='POST'
              >
                <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>Name</label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='name'
                      placeholder='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>
                      Phone Number
                    </label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='phone'
                      placeholder='Number'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Email</label>
                  <input
                    className='flex p-3 border-2 border-gray-300 rounded-lg'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Subject</label>
                  <input
                    className='flex p-3 border-2 border-gray-300 rounded-lg'
                    type='text'
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Message</label>
                  <textarea
                    className='p-3 border-2 border-gray-300 rounded-lg'
                    rows='10'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className='w-full p-4 mt-4 text-gray-100'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;