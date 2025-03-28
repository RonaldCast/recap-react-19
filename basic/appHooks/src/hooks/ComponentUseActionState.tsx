import  { useActionState } from 'react';

interface IUser{
    name : string;
    surname: string;
    age: number;

}

async function sendData(previousState:IUser, formData:FormData ): Promise<IUser> {
    
 
    const name = formData.get('name') as string || '';
    const surname = formData.get('surname') as string || '';
    

    const updatedUser: IUser = {
        ...previousState,
        name,
        surname
    };
    
    console.log("formData", updatedUser);
    return updatedUser;
}

export const ComponentUseActionState = () => {
    const [state, formAction] = useActionState(sendData, {name: "", surname: "", age: 0});

    return (
        <>
        <h1>ComponentUseactionState</h1>
        { JSON.stringify(state) }
        <form action={formAction}>
            <input type="text" name="name"  />
            <input type="text" name="surname" />
            <button >Increment</button>
        </form>
        </>
    )
}