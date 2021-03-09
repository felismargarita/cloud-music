import {useCallback,useState} from 'react'
export default ()=>{
  const [audioDom, setAudioDom] = useState<HTMLAudioElement|null>(null);
  const audioRef = useCallback(node => {
    if (node !== null) {
      setAudioDom(node);
    }
  }, []);
  return {audioDom,audioRef}; 
}