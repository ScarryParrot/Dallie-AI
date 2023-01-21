import FileSaver  from "file-saver"
import { surpriseMePrompts } from '../constant';

export function getRandomPrompt(){
    const index=Math.floor(Math.random()*surpriseMePrompts.length)
    const randomPrompts= surpriseMePrompts[index]
    return randomPrompts
}

export async function  downloadImage(_id,photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}