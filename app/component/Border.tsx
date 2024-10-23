// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export  default  function Border({children}){
    return (
        <div className={'border-2 border-black py-4 m-8 w-1/3 h-1/3 rounded-2xl text-center'}>
            {children}
        </div>
    );
}