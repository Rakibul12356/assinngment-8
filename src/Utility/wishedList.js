import { toast } from 'react-toastify';

const whishedStorage = () => {
    const checkItem = localStorage.getItem('whished-list');
    if(checkItem){
        return JSON.parse(checkItem);
    }
    return[];
}

const whishedLocalStorage = (getId) =>{
    const checkItem = whishedStorage();
    const exists = checkItem.find(item2 => item2 === getId);
    if(!exists){
        checkItem.push(getId);
        localStorage.setItem('whished-list', JSON.stringify(checkItem));
        return toast("This Book added in whished list");
    }
    else{
        return toast.error("This book already added in whished list");
    }
}

export {whishedLocalStorage, whishedStorage}