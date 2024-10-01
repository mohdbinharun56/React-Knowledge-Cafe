import profile from '../../../public/images/profile.png'

const Header = () => {
    return (
        <header className='md:flex justify-between items-center mx-60 border-b-2 mt-5'>
            <h1 className='text-4xl font-bold'> Knowledge Cafe</h1>
            <img src={profile} alt="Profile" />
        </header>
    );
};

export default Header;