

const Cointainer = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='max-w-300 mx-auto'>
            {children}
        </div>
    );
};

export default Cointainer;