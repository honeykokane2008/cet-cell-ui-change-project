import React from 'react'
import Card from '../ul-component/Card'


const Home = () => {
  return (
    <div className='flex justify-between'>
      <section className='cardSection bg-(--background) p-5 flex w-fit m-2 border border-transparent rounded-4xl '>

        <Card
          title="6"
          description="Number Of Departments" />
        <Card
          title="19"
          description="Number Of CETs" />
        <Card
          title="73"
          description="Number Of Courses" />
        <Card
          title="4,000 +"
          description="Number Of Institutes" />
      </section>
      <section className='login-side bg-(--background) m-2 h-fit w-fit border border-transparent rounded-4xl'>
        <ul className='flex flex-col gap-10 p-5'>
          <li className='flex gap-5'>
            <img className='inline-block' width="48" height="48" src="https://img.icons8.com/pulsar-line/48/quiz.png" alt="quiz" />
            <h1 className='inline-block text-(--foreground)'>CET Examnination Portal</h1>
          </li>
          <li className='flex gap-5'>
            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="balck"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" /></svg>

            <h1 className='inline-block  text-(--foreground)'>CET Examnination Portal</h1>
          </li>
          <li className='flex gap-5'>
            <svg className='inline-block' width="48px" height="48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M337.3 51C325.9 48.7 314.2 48.7 302.8 51L115.3 88.5C104.1 90.7 96 100.6 96 112C96 122.3 102.5 131.3 112 134.6L112 208L96.3 286.6C96.1 287.5 96 288.5 96 289.5C96 297.5 102.5 304.1 110.6 304.1L145.5 304.1C153.5 304.1 160.1 297.6 160.1 289.5C160.1 288.5 160 287.6 159.8 286.6L144 208L144 141.3L192 150.9L192 208C192 278.7 249.3 336 320 336C390.7 336 448 278.7 448 208L448 150.9L524.7 135.6C535.9 133.3 544 123.4 544 112C544 100.6 535.9 90.7 524.7 88.5L337.3 51zM320 288C275.8 288 240 252.2 240 208L400 208C400 252.2 364.2 288 320 288zM216.1 384.1C154.7 412.3 112 474.3 112 546.3C112 562.7 125.3 576 141.7 576L296 576L296 430L238.6 387C232.1 382.1 223.4 380.8 216 384.2zM344 576L498.3 576C514.7 576 528 562.7 528 546.3C528 474.3 485.3 412.3 423.9 384.2C416.5 380.8 407.8 382.1 401.3 387L343.9 430L343.9 576z" /></svg>
            <h1 className='inline-block  text-(--foreground)'>CET Examnination Portal</h1>
          </li>
          <li className='flex gap-5'>
            <svg className='inline-block' width="48px" height="48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 128C241 128 175.3 185.3 162.3 260.7C171.6 257.7 181.6 256 192 256L208 256C234.5 256 256 277.5 256 304L256 400C256 426.5 234.5 448 208 448L192 448C139 448 96 405 96 352L96 288C96 164.3 196.3 64 320 64C443.7 64 544 164.3 544 288L544 456.1C544 522.4 490.2 576.1 423.9 576.1L336 576L304 576C277.5 576 256 554.5 256 528C256 501.5 277.5 480 304 480L336 480C362.5 480 384 501.5 384 528L384 528L424 528C463.8 528 496 495.8 496 456L496 435.1C481.9 443.3 465.5 447.9 448 447.9L432 447.9C405.5 447.9 384 426.4 384 399.9L384 303.9C384 277.4 405.5 255.9 432 255.9L448 255.9C458.4 255.9 468.3 257.5 477.7 260.6C464.7 185.3 399.1 127.9 320 127.9z" /></svg>
            <h1 className='inline-block text-(--foreground)'>CET Examnination Portal</h1>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Home
