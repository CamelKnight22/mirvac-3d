import MyModal from './Modal';


const HomeModal = () => {
    return (
        <div className='fixed right-0 top-0 h-[60vh] flex justify-end items-start m-auto z-10'>
            <div className='flex items-center flex flex-col px-20 py-6  rounded-lg opacity-80 '>
            <MyModal content={
            <div >
            <h1 className="text-3xl font-bold mb-4">welcome to Mirvac-3D! </h1>
            <p  className="text-lg">
                Welcome to our esteemed real estate and construction company's immersive 3D website! Step into a world where our properties come to life in breathtaking three-dimensional detail. As you embark on this virtual journey, prepare to be captivated by the depth and richness of our assets showcased on the 3D plane. Explore every nook and cranny, examine the finest architectural nuances, and envision yourself walking through the halls of your dream home or office space. With our cutting-edge technology, we invite you to experience an unparalleled level of realism, empowering you to make informed decisions as you navigate through our portfolio. So, whether you seek a cozy family abode, a contemporary commercial space, or a luxurious retreat, we are thrilled to guide you on this immersive tour. Welcome to a world where your vision of the perfect property is just a click away!</p>
            </div>
            
            } buttonLabel={''} />
            </div>
     </div>
     
    );
}

export default HomeModal;