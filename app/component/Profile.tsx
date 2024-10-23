// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Profile(props) {

  return (
      <div>
        <h1>Profile</h1>
          <div className={'flex justify-center items-center'}>
              <img className={'w-10 h-10'} src={props.img} alt={'Profile Image'}/>

          </div>
          <p>{props.name}</p>
          <p>{props.age}</p>
        <p>{props.email}</p>
      </div>
  );
}