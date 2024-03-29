import { toast } from 'react-toastify';

const checkLocalStorage = () => {
    const checkItem = localStorage.getItem('json-application');
    if(checkItem){
        return JSON.parse(checkItem);
    }
    return[];
}

const saveItemInLocalStorage = (getId) =>{
    const checkItem = checkLocalStorage();
    const exists = checkItem.find(item2 => item2 === getId);
    if(!exists){
        checkItem.push(getId);
        localStorage.setItem('json-application', JSON.stringify(checkItem));
        return toast("Book added in read list");
    }
    else{
        return toast.error("Already added this in read list");
    }
}

export {saveItemInLocalStorage, checkLocalStorage}